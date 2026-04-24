import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const FileBrowserSearch = (props) => {
  const { onChange, onSearch, value } = props;

  return (
    <div className="file-browser-path-search">
      <Input.Search
        allowClear
        className="file-browser-path-search-input"
        onChange={onChange}
        onSearch={onSearch}
        placeholder="Search files and folders"
        value={value}
        enterButton
      />
    </div>
  );
};

FileBrowserSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default FileBrowserSearch;
