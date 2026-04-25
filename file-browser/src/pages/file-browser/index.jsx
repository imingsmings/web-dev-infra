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

const FileBrowser = (props) => {
  const { adapter, doubleClickFileToDownload, onChange, value } = props;
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

  const selectedItems = useMemo(
    () => {
      return listData.items.filter((item) => {
        return (value.selectedRowKeys || []).indexOf(item.key) > -1;
      });
    },
    [listData.items, value.selectedRowKeys]
  );

  const handleOpen = (record) => {
    if (record.isDirectory) {
      onChange({
        path: record.path,
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
      items={listData.items}
      loadTree={adapter.fetchTree}
      loading={loading}
      onBatchDownload={handleBatchDownload}
      onDownload={handleDownload}
      onNavigate={(path, nextRootId) => {
        onChange({
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
      total={listData.total}
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    path: PropTypes.string,
    q: PropTypes.string,
    root: PropTypes.string,
    selectedRowKeys: PropTypes.arrayOf(PropTypes.string),
    sort: PropTypes.string,
    type: PropTypes.string
  }).isRequired
};

FileBrowser.defaultProps = {
  doubleClickFileToDownload: false
};

export default FileBrowser;
