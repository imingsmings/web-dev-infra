import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Table, Tag } from 'antd';
import './file-browser.css';

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
    <Table
      columns={columns}
      dataSource={items}
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
