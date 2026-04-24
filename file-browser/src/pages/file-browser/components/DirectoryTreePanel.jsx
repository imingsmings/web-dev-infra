import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Spin, Tree, message } from 'antd';
import { getAncestorPaths, normalizePath } from '../utils/path';
import './file-browser.css';

const TreeNode = Tree.TreeNode;
const ROOT_PATH = '/';

const buildNodeKey = (rootId, nodePath) => {
  return `${rootId}:${nodePath}`;
};

const createRootNode = (rootId) => {
  return {
    key: buildNodeKey(rootId, ROOT_PATH),
    title: rootId,
    path: ROOT_PATH,
    rootId,
    isLeaf: false,
    loaded: false,
    children: []
  };
};

const decorateChildNodes = (rootId, nodes) => {
  return nodes.map((node) => {
    return {
      ...node,
      key: buildNodeKey(rootId, normalizePath(node.path)),
      rootId,
      children: node.children && node.children.length
        ? decorateChildNodes(rootId, node.children)
        : node.children
    };
  });
};

const injectChildren = (nodes, targetKey, children) => {
  return nodes.map((node) => {
    if (node.key === targetKey) {
      return {
        ...node,
        children,
        loaded: true
      };
    }

    if (node.children && node.children.length) {
      return {
        ...node,
        children: injectChildren(node.children, targetKey, children)
      };
    }

    return node;
  });
};

const findNode = (nodes, targetKey) => {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];

    if (node.key === targetKey) {
      return node;
    }

    if (node.children && node.children.length) {
      const childMatch = findNode(node.children, targetKey);

      if (childMatch) {
        return childMatch;
      }
    }
  }

  return null;
};

const DirectoryTreePanel = (props) => {
  const { currentPath, loading, onSelectPath, rootId, roots, loadTree } = props;
  const [treeData, setTreeData] = useState(() => {
    return roots.map((root) => {
      return createRootNode(root.id);
    });
  });
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [treeLoading, setTreeLoading] = useState(false);

  useEffect(
    () => {
      const nextTreeData = roots.map((root) => {
        return createRootNode(root.id);
      });

      setTreeData(nextTreeData);
      setExpandedKeys([]);
    },
    [roots]
  );

  useEffect(
    () => {
      let active = true;

      const ensureAncestorsLoaded = async () => {
        if (normalizePath(currentPath) === ROOT_PATH) {
          return;
        }

        setTreeLoading(true);
        const ancestors = getAncestorPaths(currentPath);
        setExpandedKeys((prevExpandedKeys) => {
          const merged = prevExpandedKeys.slice();

          ancestors.forEach((path) => {
            const nextKey = buildNodeKey(rootId, path);

            if (merged.indexOf(nextKey) === -1) {
              merged.push(nextKey);
            }
          });

          return merged;
        });

        let workingTreeData = treeData;
        const pathsToLoad = ancestors.slice(0, -1);

        for (let i = 0; i < pathsToLoad.length; i += 1) {
          const ancestorPath = pathsToLoad[i];
          const existingNode = findNode(workingTreeData, buildNodeKey(rootId, ancestorPath));

          if (!existingNode || existingNode.loaded || existingNode.isLeaf) {
            continue;
          }

          const children = await loadTree({
            rootId,
            path: ancestorPath
          });

          workingTreeData = injectChildren(
            workingTreeData,
            buildNodeKey(rootId, ancestorPath),
            decorateChildNodes(rootId, children)
          );
        }

        if (active) {
          setTreeData(workingTreeData);
          setTreeLoading(false);
        }
      };

      ensureAncestorsLoaded().catch(() => {
        if (!active) {
          return;
        }

        setTreeLoading(false);
        message.error('Failed to sync directory tree.');
      });

      return () => {
        active = false;
      };
    },
    [currentPath, loadTree, rootId, treeData]
  );

  const handleLoadData = (treeNode) => {
    const propsData = treeNode.props.dataRef;

    if (propsData.loaded || propsData.isLeaf) {
      return Promise.resolve();
    }

    setTreeLoading(true);
    return loadTree({
      rootId: propsData.rootId,
      path: propsData.path
    }).then((children) => {
      setTreeData((prevTreeData) => {
        return injectChildren(
          prevTreeData,
          propsData.key,
          decorateChildNodes(propsData.rootId, children)
        );
      });
      setTreeLoading(false);
    }).catch(() => {
      setTreeLoading(false);
      message.error('Failed to expand directory tree.');
    });
  };

  const renderNodes = (nodes) => {
    return nodes.map((node) => {
      return (
        <TreeNode
          dataRef={node}
          icon={<Icon type="folder" theme="filled" />}
          isLeaf={node.isLeaf}
          key={node.key}
          title={node.title}
        >
          {node.children && node.children.length ? renderNodes(node.children) : null}
        </TreeNode>
      );
    });
  };

  return (
    <div className="file-browser-tree-panel">
      <div className="file-browser-tree-header">
        <span>Directories</span>
      </div>
      <div className="file-browser-tree-body">
        <Spin spinning={loading || treeLoading}>
          <Tree
            blockNode
            expandedKeys={expandedKeys}
            loadData={handleLoadData}
            onExpand={(keys) => {
              setExpandedKeys(keys);
            }}
            onSelect={(keys) => {
              if (!keys.length) {
                return;
              }

              const selectedNode = findNode(treeData, keys[0]);

              if (!selectedNode) {
                return;
              }

              onSelectPath(normalizePath(selectedNode.path), selectedNode.rootId);
            }}
            selectedKeys={rootId ? [buildNodeKey(rootId, normalizePath(currentPath))] : []}
            showIcon
          >
            {renderNodes(treeData)}
          </Tree>
        </Spin>
      </div>
    </div>
  );
};

DirectoryTreePanel.propTypes = {
  currentPath: PropTypes.string.isRequired,
  loadTree: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  onSelectPath: PropTypes.func.isRequired,
  roots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  rootId: PropTypes.string
};

DirectoryTreePanel.defaultProps = {
  loading: false,
  rootId: ''
};

export default DirectoryTreePanel;
