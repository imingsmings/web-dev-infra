import React, { useEffect, useMemo, useRef, useState } from 'react';
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
  const [manualExpandedKeys, setManualExpandedKeys] = useState([]);
  const [collapsedSyncedKeys, setCollapsedSyncedKeys] = useState([]);
  const [syncedExpandedKeys, setSyncedExpandedKeys] = useState([]);
  const [treeLoading, setTreeLoading] = useState(false);
  const treeDataRef = useRef(treeData);

  useEffect(() => {
    treeDataRef.current = treeData;
  }, [treeData]);

  const expandedKeys = useMemo(() => {
    return Array.from(
      new Set(
        syncedExpandedKeys
          .filter((key) => {
            return collapsedSyncedKeys.indexOf(key) === -1;
          })
          .concat(manualExpandedKeys)
      )
    );
  }, [collapsedSyncedKeys, manualExpandedKeys, syncedExpandedKeys]);

  useEffect(
    () => {
      const nextTreeData = roots.map((root) => {
        return createRootNode(root.id);
      });

      treeDataRef.current = nextTreeData;
      setTreeData(nextTreeData);
      setCollapsedSyncedKeys([]);
      setManualExpandedKeys([]);
      setSyncedExpandedKeys([]);
    },
    [roots]
  );

  useEffect(
    () => {
      let active = true;

      const ensureAncestorsLoaded = async () => {
        if (!rootId || normalizePath(currentPath) === ROOT_PATH) {
          setTreeLoading(false);
          return;
        }

        setTreeLoading(true);
        const pathsToLoad = getAncestorPaths(currentPath).slice(0, -1);
        const nextSyncedKeys = pathsToLoad.map((path) => {
          return buildNodeKey(rootId, path);
        });

        setSyncedExpandedKeys((prevSyncedExpandedKeys) => {
          const mergedSyncedKeys = prevSyncedExpandedKeys.slice();

          nextSyncedKeys.forEach((key) => {
            if (mergedSyncedKeys.indexOf(key) === -1) {
              mergedSyncedKeys.push(key);
            }
          });

          return mergedSyncedKeys;
        });

        let workingTreeData = treeDataRef.current;

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
          treeDataRef.current = workingTreeData;
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
    [currentPath, loadTree, rootId]
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
        const nextTreeData = injectChildren(
          prevTreeData,
          propsData.key,
          decorateChildNodes(propsData.rootId, children)
        );
        treeDataRef.current = nextTreeData;
        return nextTreeData;
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
              const collapsedKeys = expandedKeys.filter((key) => {
                return keys.indexOf(key) === -1;
              });

              setCollapsedSyncedKeys((prevCollapsedSyncedKeys) => {
                const mergedCollapsedKeys = prevCollapsedSyncedKeys
                  .filter((key) => {
                    return syncedExpandedKeys.indexOf(key) > -1 && keys.indexOf(key) === -1;
                  })
                  .concat(
                    collapsedKeys.filter((key) => {
                      return syncedExpandedKeys.indexOf(key) > -1 && prevCollapsedSyncedKeys.indexOf(key) === -1;
                    })
                  );

                return mergedCollapsedKeys;
              });
              setManualExpandedKeys(
                keys.filter((key) => {
                  return syncedExpandedKeys.indexOf(key) === -1;
                })
              );
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
