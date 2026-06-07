import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import FileBrowserView from './components/FileBrowserView';
import useFileBrowserData from './hooks/useFileBrowserData';

const getDownloadPath = (item) => {
  if (!item) {
    return '';
  }

  return item.downloadPath || item.path;
};

const matchesLogType = (selectedLogType, actualLogType) => {
  if (!selectedLogType || selectedLogType === 'all') {
    return true;
  }

  if (!actualLogType) {
    return false;
  }

  return actualLogType === selectedLogType || actualLogType.indexOf(`${selectedLogType}_`) === 0;
};

const matchesTimeRange = (selectedTimeRange, updatedAt) => {
  if (!selectedTimeRange || selectedTimeRange === 'all') {
    return true;
  }

  const hours = Number(selectedTimeRange);
  const updatedTime = new Date(updatedAt).getTime();

  if (!Number.isFinite(hours) || Number.isNaN(updatedTime)) {
    return false;
  }

  return Date.now() - updatedTime <= hours * 60 * 60 * 1000;
};

const FileBrowser = (props) => {
  const { adapter, doubleClickFileToDownload, logFilterConfig, onChange, value } = props;
  const [searchInput, setSearchInput] = useState(value.q || '');
  const { listData, loading, roots, rootsLoading } = useFileBrowserData({
    adapter,
    onInvalidRoot: () => {
      onChange({
        root: '',
        path: '/',
        timeRange: 'all',
        selectedRowKeys: []
      });
    },
    value
  });

  useEffect(() => {
    setSearchInput(value.q || '');
  }, [value.q]);

  const filteredItems = useMemo(
    () => {
      return listData.items.filter((item) => {
        if (item.isDirectory) {
          return true;
        }

        const classification = logFilterConfig && logFilterConfig.classify
          ? logFilterConfig.classify(item.name)
          : null;
        const matchesCurrentLogType = classification
          ? matchesLogType(value.logType, classification.logType)
          : true;

        return matchesCurrentLogType && matchesTimeRange(value.timeRange, item.updatedAt);
      }).map((item) => {
        if (item.isDirectory || !logFilterConfig || !logFilterConfig.classify) {
          return item;
        }

        const classification = logFilterConfig.classify(item.name);
        const typeLabel = logFilterConfig.getTypeLabel
          ? logFilterConfig.getTypeLabel(classification)
          : logFilterConfig.labels && logFilterConfig.labels[classification.logType]
            ? logFilterConfig.labels[classification.logType]
            : item.typeLabel;

        return {
          ...item,
          logType: classification.logType,
          logTypeGroup: classification.logTypeGroup,
          typeLabel
        };
      });
    },
    [listData.items, logFilterConfig, value.logType, value.timeRange]
  );

  const currentDirectoryItems = useMemo(
    () => {
      if (
        listData.rootId !== value.root
        || listData.path !== value.path
        || listData.refreshKey !== (value.refreshKey || 0)
      ) {
        return null;
      }

      return listData.items;
    },
    [listData.items, listData.path, listData.refreshKey, listData.rootId, value.path, value.refreshKey, value.root]
  );

  const canDownloadInCurrentDir = useMemo(
    () => {
      return listData.items.length > 0 && listData.items.every((item) => {
        return !item.isDirectory;
      });
    },
    [listData.items]
  );

  const selectedItems = useMemo(
    () => {
      return filteredItems.filter((item) => {
        return !item.isDirectory && (value.selectedRowKeys || []).indexOf(item.key) > -1;
      });
    },
    [filteredItems, value.selectedRowKeys]
  );

  const handleOpen = (record) => {
    if (record.isDirectory) {
      onChange({
        path: record.path,
        logType: 'all',
        timeRange: 'all',
        selectedRowKeys: []
      });
      return;
    }

    handleDownload(record);
  };

  const handleDownload = (record) => {
    if (!canDownloadInCurrentDir || record.isDirectory) {
      message.warning('Only files in the last-level directory can be downloaded.');
      return;
    }

    const request = adapter.downloadFile({
      rootId: value.root,
      path: record.path
    });

    request.then(() => {
      message.success(`Download queued for ${record.name}`);
    }).catch((error) => {
      message.error(error && error.message ? error.message : 'Download failed.');
    });
  };

  const handleBatchDownload = () => {
    if (!canDownloadInCurrentDir || !selectedItems.length) {
      message.warning('Only files in the last-level directory can be downloaded.');
      return;
    }

    adapter.downloadBatch({
      rootId: value.root,
      paths: selectedItems.map((item) => {
        return getDownloadPath(item);
      })
    }).then(() => {
      message.success(`Download queued for ${selectedItems.length} item(s)`);
    }).catch((error) => {
      message.error(error && error.message ? error.message : 'Batch download failed.');
    });
  };

  const handleRefresh = () => {
    onChange({
      refreshKey: (value.refreshKey || 0) + 1,
      selectedRowKeys: []
    });
  };

  return (
    <FileBrowserView
      batchDownloadDisabled={!canDownloadInCurrentDir || !selectedItems.length}
      breadcrumbs={listData.breadcrumbs}
      currentDirectoryItems={currentDirectoryItems}
      currentPath={value.path}
      doubleClickFileToDownload={doubleClickFileToDownload}
      downloadEnabled={canDownloadInCurrentDir}
      items={filteredItems}
      loadTree={adapter.fetchTree}
      loading={loading}
      onBatchDownload={handleBatchDownload}
      onDownload={handleDownload}
      onLogTypeChange={(nextLogType) => {
        onChange({
          logType: nextLogType,
          selectedRowKeys: []
        });
      }}
      onTimeRangeChange={(nextTimeRange) => {
        onChange({
          timeRange: nextTimeRange,
          selectedRowKeys: []
        });
      }}
      onNavigate={(path, nextRootId) => {
        onChange({
          logType: 'all',
          path,
          root: nextRootId || value.root,
          timeRange: 'all',
          selectedRowKeys: []
        });
      }}
      onOpen={handleOpen}
      onRefresh={handleRefresh}
      onSearchChange={(event) => {
        const nextValue = event.target.value;
        setSearchInput(nextValue);

        if (nextValue === '') {
          onChange({
            q: '',
            timeRange: 'all',
            selectedRowKeys: []
          });
        }
      }}
      onSearchSubmit={() => {
        onChange({
          q: searchInput,
          timeRange: 'all',
          selectedRowKeys: []
        });
      }}
      onSelectionChange={(nextKeys) => {
        onChange({
          selectedRowKeys: nextKeys
        });
      }}
      refreshKey={value.refreshKey || 0}
      roots={roots}
      rootsLoading={rootsLoading}
      rootId={value.root}
      searchValue={searchInput}
      selectedRowKeys={value.selectedRowKeys || []}
      selectedLogType={value.logType || 'all'}
      selectedTimeRange={value.timeRange || 'all'}
      showLogFilter={!!logFilterConfig}
      logTypeOptions={logFilterConfig ? logFilterConfig.options : []}
    />
  );
};

FileBrowser.propTypes = {
  adapter: PropTypes.shape({
    downloadBatch: PropTypes.func.isRequired,
    downloadFile: PropTypes.func.isRequired,
    fetchList: PropTypes.func.isRequired,
    fetchRoots: PropTypes.func.isRequired,
    fetchTree: PropTypes.func.isRequired
  }).isRequired,
  doubleClickFileToDownload: PropTypes.bool,
  logFilterConfig: PropTypes.shape({
    classify: PropTypes.func.isRequired,
    getTypeLabel: PropTypes.func,
    labels: PropTypes.object,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired
  }),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    logType: PropTypes.string,
    path: PropTypes.string,
    q: PropTypes.string,
    refreshKey: PropTypes.number,
    root: PropTypes.string,
    selectedRowKeys: PropTypes.arrayOf(PropTypes.string),
    sort: PropTypes.string,
    timeRange: PropTypes.string,
    type: PropTypes.string
  }).isRequired
};

FileBrowser.defaultProps = {
  doubleClickFileToDownload: false,
  logFilterConfig: null
};

export default FileBrowser;
