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

const FileBrowser = (props) => {
  const { adapter, doubleClickFileToDownload, logFilterConfig, onChange, value } = props;
  const [searchInput, setSearchInput] = useState(value.q || '');
  const { listData, loading, roots, rootsLoading } = useFileBrowserData({
    adapter,
    onInvalidRoot: () => {
      onChange({
        root: '',
        path: '/',
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
      if (!logFilterConfig || !logFilterConfig.classify) {
        return listData.items;
      }

      return listData.items.filter((item) => {
        if (item.isDirectory) {
          return true;
        }

        const classification = logFilterConfig.classify(item.name);
        return matchesLogType(value.logType, classification.logType);
      }).map((item) => {
        if (item.isDirectory) {
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
    [listData.items, logFilterConfig, value.logType]
  );

  const selectedItems = useMemo(
    () => {
      return filteredItems.filter((item) => {
        return (value.selectedRowKeys || []).indexOf(item.key) > -1;
      });
    },
    [filteredItems, value.selectedRowKeys]
  );

  const handleOpen = (record) => {
    if (record.isDirectory) {
      onChange({
        path: record.path,
        logType: 'all',
        selectedRowKeys: []
      });
      return;
    }

    handleDownload(record);
  };

  const handleDownload = (record) => {
    const request = record.isDirectory
      ? adapter.downloadBatch({
        rootId: value.root,
        paths: [getDownloadPath(record)]
      })
      : adapter.downloadFile({
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

  return (
    <FileBrowserView
      batchDownloadDisabled={!selectedItems.length}
      breadcrumbs={listData.breadcrumbs}
      currentPath={value.path}
      doubleClickFileToDownload={doubleClickFileToDownload}
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
      onNavigate={(path, nextRootId) => {
        onChange({
          logType: 'all',
          path,
          root: nextRootId || value.root,
          selectedRowKeys: []
        });
      }}
      onOpen={handleOpen}
      onSearchChange={(event) => {
        const nextValue = event.target.value;
        setSearchInput(nextValue);

        if (nextValue === '') {
          onChange({
            q: '',
            selectedRowKeys: []
          });
        }
      }}
      onSearchSubmit={() => {
        onChange({
          q: searchInput,
          selectedRowKeys: []
        });
      }}
      onSelectionChange={(nextKeys) => {
        onChange({
          selectedRowKeys: nextKeys
        });
      }}
      roots={roots}
      rootsLoading={rootsLoading}
      rootId={value.root}
      searchValue={searchInput}
      selectedRowKeys={value.selectedRowKeys || []}
      selectedLogType={value.logType || 'all'}
      showLogFilter={!!logFilterConfig}
      logTypeOptions={logFilterConfig ? logFilterConfig.options : []}
      total={filteredItems.length}
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
    root: PropTypes.string,
    selectedRowKeys: PropTypes.arrayOf(PropTypes.string),
    sort: PropTypes.string,
    type: PropTypes.string
  }).isRequired
};

FileBrowser.defaultProps = {
  doubleClickFileToDownload: false,
  logFilterConfig: null
};

export default FileBrowser;
