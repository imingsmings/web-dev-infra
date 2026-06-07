import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Select, Spin } from 'antd';
import DirectoryTreePanel from './DirectoryTreePanel';
import FileBrowserSearch from './FileBrowserSearch';
import FileTable from './FileTable';
import PathBreadcrumb from './PathBreadcrumb';
import './file-browser.css';

const TIME_RANGE_OPTIONS = [
  {
    label: '全部时间',
    value: 'all'
  },
  {
    label: '1小时内',
    value: '1'
  },
  {
    label: '2小时内',
    value: '2'
  },
  {
    label: '6小时内',
    value: '6'
  },
  {
    label: '24小时内',
    value: '24'
  }
];

const FileBrowserView = (props) => {
  const {
    batchDownloadDisabled,
    breadcrumbs,
    currentDirectoryItems,
    currentPath,
    doubleClickFileToDownload,
    downloadEnabled,
    items,
    loadTree,
    loading,
    logTypeOptions,
    onBatchDownload,
    onDownload,
    onLogTypeChange,
    onNavigate,
    onOpen,
    onRefresh,
    onSearchChange,
    onSearchSubmit,
    onSelectionChange,
    onTimeRangeChange,
    refreshKey,
    roots,
    rootsLoading,
    rootId,
    searchValue,
    selectedLogType,
    selectedRowKeys,
    selectedTimeRange,
    showLogFilter
  } = props;

  return (
    <div className="file-browser-page">
      <div className="file-browser-shell">
        <aside className="file-browser-sidebar">
          <DirectoryTreePanel
            currentDirectoryItems={currentDirectoryItems}
            currentPath={currentPath}
            loadTree={loadTree}
            loading={rootsLoading}
            onSelectPath={onNavigate}
            refreshKey={refreshKey}
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
                {showLogFilter ? (
                  <Select
                    className="file-browser-log-type-filter"
                    onChange={onLogTypeChange}
                    value={selectedLogType}
                  >
                    {logTypeOptions.map((option) => {
                      return (
                        <Select.Option key={option.value} value={option.value}>
                          {option.label}
                        </Select.Option>
                      );
                    })}
                  </Select>
                ) : null}
                {/*
                <Select
                  className="file-browser-time-filter"
                  onChange={onTimeRangeChange}
                  value={selectedTimeRange}
                >
                  {TIME_RANGE_OPTIONS.map((option) => {
                    return (
                      <Select.Option key={option.value} value={option.value}>
                        {option.label}
                      </Select.Option>
                    );
                  })}
                </Select>
                */}
                <FileBrowserSearch
                  onChange={onSearchChange}
                  onSearch={onSearchSubmit}
                  value={searchValue}
                />
                <Button
                  className="file-browser-refresh-button"
                  disabled={!rootId || loading}
                  onClick={onRefresh}
                  title="刷新"
                >
                  <Icon type="reload" />
                </Button>
              </div>
            </div>
            <Spin spinning={loading}>
              <FileTable
                doubleClickFileToDownload={doubleClickFileToDownload}
                downloadEnabled={downloadEnabled}
                items={items}
                loading={loading}
                onDownload={onDownload}
                onOpen={onOpen}
                onSelectionChange={onSelectionChange}
                selectedRowKeys={selectedRowKeys}
              />
            </Spin>
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
  currentDirectoryItems: PropTypes.arrayOf(PropTypes.object),
  currentPath: PropTypes.string.isRequired,
  doubleClickFileToDownload: PropTypes.bool,
  downloadEnabled: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadTree: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  logTypeOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  onBatchDownload: PropTypes.func.isRequired,
  onDownload: PropTypes.func.isRequired,
  onLogTypeChange: PropTypes.func,
  onNavigate: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
  onTimeRangeChange: PropTypes.func.isRequired,
  refreshKey: PropTypes.number,
  roots: PropTypes.arrayOf(PropTypes.object).isRequired,
  rootsLoading: PropTypes.bool,
  rootId: PropTypes.string,
  searchValue: PropTypes.string.isRequired,
  selectedLogType: PropTypes.string,
  selectedRowKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTimeRange: PropTypes.string,
  showLogFilter: PropTypes.bool
};

FileBrowserView.defaultProps = {
  currentDirectoryItems: null,
  doubleClickFileToDownload: false,
  downloadEnabled: false,
  logTypeOptions: [],
  onLogTypeChange: null,
  refreshKey: 0,
  rootsLoading: false,
  rootId: '',
  selectedLogType: 'all',
  selectedTimeRange: 'all',
  showLogFilter: false
};

export default FileBrowserView;
