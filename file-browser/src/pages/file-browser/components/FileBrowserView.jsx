import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Spin } from 'antd';
import DirectoryTreePanel from './DirectoryTreePanel';
import FileBrowserSearch from './FileBrowserSearch';
import FileTable from './FileTable';
import PathBreadcrumb from './PathBreadcrumb';
import './file-browser.css';

const FileBrowserView = (props) => {
  const {
    batchDownloadDisabled,
    breadcrumbs,
    currentPath,
    doubleClickFileToDownload,
    items,
    loadTree,
    loading,
    onBatchDownload,
    onDownload,
    onNavigate,
    onOpen,
    onSearchChange,
    onSearchSubmit,
    onSelectionChange,
    roots,
    rootsLoading,
    rootId,
    searchValue,
    selectedRowKeys,
    total
  } = props;

  return (
    <div className="file-browser-page">
      <div className="file-browser-shell">
        <aside className="file-browser-sidebar">
          <DirectoryTreePanel
            currentPath={currentPath}
            loadTree={loadTree}
            loading={rootsLoading}
            onSelectPath={onNavigate}
            roots={roots}
            rootId={rootId}
          />
        </aside>
        <section className="file-browser-main">
          <main className="file-browser-content">
            <div className="file-browser-path-row">
              <PathBreadcrumb
                breadcrumbs={breadcrumbs}
                onNavigate={onNavigate}
              />
              <div className="file-browser-toolbar">
                <Button
                  className="file-browser-batch-download"
                  disabled={batchDownloadDisabled}
                  onClick={onBatchDownload}
                  size="default"
                >
                  <Icon type="download" />
                  批量下载
                </Button>
                <FileBrowserSearch
                  onChange={onSearchChange}
                  onSearch={onSearchSubmit}
                  value={searchValue}
                />
              </div>
            </div>
            <Spin spinning={loading}>
              <FileTable
                doubleClickFileToDownload={doubleClickFileToDownload}
                items={items}
                loading={loading}
                onDownload={onDownload}
                onOpen={onOpen}
                onSelectionChange={onSelectionChange}
                selectedRowKeys={selectedRowKeys}
              />
            </Spin>
            <div className="file-browser-table-footer">
              <span>{total} items</span>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
};

FileBrowserView.propTypes = {
  batchDownloadDisabled: PropTypes.bool.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired,
  currentPath: PropTypes.string.isRequired,
  doubleClickFileToDownload: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadTree: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  onBatchDownload: PropTypes.func.isRequired,
  onDownload: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
  roots: PropTypes.arrayOf(PropTypes.object).isRequired,
  rootsLoading: PropTypes.bool,
  rootId: PropTypes.string,
  searchValue: PropTypes.string.isRequired,
  selectedRowKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  total: PropTypes.number.isRequired
};

FileBrowserView.defaultProps = {
  doubleClickFileToDownload: false,
  rootsLoading: false,
  rootId: ''
};

export default FileBrowserView;
