import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';

const PathBreadcrumb = (props) => {
  const { breadcrumbs, onNavigate } = props;

  return (
    <div className="file-browser-breadcrumb">
      <Breadcrumb>
        {breadcrumbs.map((item) => {
          return (
            <Breadcrumb.Item key={item.path}>
              <a
                href="#navigate"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(item.path);
                }}
              >
                {item.name}
              </a>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

PathBreadcrumb.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default PathBreadcrumb;
