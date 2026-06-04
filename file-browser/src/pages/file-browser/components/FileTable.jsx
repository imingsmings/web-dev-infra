import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Pagination, Table, Tag } from 'antd';
import './file-browser.css';

const DEFAULT_PAGE_SIZE = 50;
const PAGE_SIZE_OPTIONS = ['20', '50', '100', '200'];

const formatSize = (size) => {
  if (!size) {
    return '—';
  }

  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }

  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
};

const formatDate = (value) => {
  return new Date(value).toLocaleString();
};

const renderNameCell = (text, record) => {
  const iconType = record.isDirectory ? 'folder' : 'file';
  const iconTheme = record.isDirectory ? 'filled' : 'outlined';

  return (
    <div className="file-browser-name-cell">
      <Icon theme={iconTheme} type={iconType} />
      <span>{text}</span>
    </div>
  );
};

const FileTable = (props) => {
  const { doubleClickFileToDownload, items, loading, onDownload, onOpen, onSelectionChange, selectedRowKeys } = props;
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: DEFAULT_PAGE_SIZE
  });

  useEffect(() => {
    setPagination((prevPagination) => {
      return {
        ...prevPagination,
        current: 1
      };
    });
  }, [items]);

  const pagedItems = useMemo(
    () => {
      const start = (pagination.current - 1) * pagination.pageSize;
      return items.slice(start, start + pagination.pageSize);
    },
    [items, pagination.current, pagination.pageSize]
  );

  const handlePageChange = (current, pageSize) => {
    setPagination({
      current,
      pageSize
    });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: renderNameCell
    },
    {
      title: 'Modified',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: 220,
      render: formatDate
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
      width: 120,
      render: formatSize
    },
    {
      title: 'Type',
      dataIndex: 'typeLabel',
      key: 'type',
      width: 140,
      render: (typeLabel, record) => {
        return record.isDirectory ? <Tag>Folder</Tag> : <Tag>{typeLabel}</Tag>;
      }
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 160,
      render: (_, record) => {
        return (
          <div className="file-browser-table-actions">
            <Button
              icon="download"
              onClick={() => {
                onDownload(record);
              }}
              size="small"
            />
          </div>
        );
      }
    }
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={pagedItems}
        loading={loading}
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              if (record.isDirectory || doubleClickFileToDownload) {
                onOpen(record);
              }
            }
          };
        }}
        pagination={false}
        rowKey="key"
        rowSelection={{
          onChange: onSelectionChange,
          selectedRowKeys
        }}
        size="middle"
      />
      <div className="file-browser-pagination">
        <Pagination
          current={pagination.current}
          onChange={handlePageChange}
          onShowSizeChange={handlePageChange}
          pageSize={pagination.pageSize}
          pageSizeOptions={PAGE_SIZE_OPTIONS}
          showSizeChanger
          showTotal={(total) => `共 ${total} 条`}
          total={items.length}
        />
      </div>
    </>
  );
};

FileTable.propTypes = {
  doubleClickFileToDownload: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      isDirectory: PropTypes.bool.isRequired,
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      size: PropTypes.number,
      typeLabel: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  onDownload: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
  selectedRowKeys: PropTypes.arrayOf(PropTypes.string).isRequired
};

FileTable.defaultProps = {
  doubleClickFileToDownload: false
};

export default FileTable;
