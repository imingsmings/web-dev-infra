import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Spin, Tree, message } from 'antd';
import { getAncestorPaths, normalizePath } from '../utils/path';
import './file-browser.css';

const TreeNode = Tree.TreeNode;
const ROOT_PATH = '/';
const TREE_REFRESH_FALLBACK_DELAY = 800;

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

const createPathNode = (rootId, nodePath, title) => {
  return {
    key: buildNodeKey(rootId, nodePath),
    title,
    path: nodePath,
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

const toDirectoryTreeNodes = (rootId, items, existingChildren) => {
  const existingChildrenByKey = new Map(
    (existingChildren || []).map((child) => {
      return [child.key, child];
    })
  );

  return items.filter((item) => {
    return item.isDirectory;
  }).map((item) => {
    const normalizedPath = normalizePath(item.path);
    const key = buildNodeKey(rootId, normalizedPath);
    const existingNode = existingChildrenByKey.get(key);

    return {
      ...(existingNode || {}),
      key,
      title: item.name,
      path: normalizedPath,
      rootId,
      isLeaf: item.hasChildren === false,
      loaded: existingNode ? existingNode.loaded : false,
      children: existingNode && existingNode.children ? existingNode.children : []
    };
  });
};

const syncNodeChildrenFromItems = (nodes, rootId, nodePath, items) => {
  const targetKey = buildNodeKey(rootId, normalizePath(nodePath));

  return nodes.map((node) => {
    if (node.key === targetKey) {
      const children = toDirectoryTreeNodes(rootId, items, node.children);

      return {
        ...node,
        children,
        isLeaf: children.length === 0,
        loaded: true
      };
    }

    if (node.children && node.children.length) {
      return {
        ...node,
        children: syncNodeChildrenFromItems(node.children, rootId, nodePath, items)
      };
    }

    return node;
  });
};

const ensureDescendantPath = (children, rootId, segments, parentPath) => {
  if (!segments.length) {
    return children || [];
  }

  const nextSegment = segments[0];
  const nextPath = parentPath === ROOT_PATH ? `/${nextSegment}` : `${parentPath}/${nextSegment}`;
  const nextKey = buildNodeKey(rootId, nextPath);
  let foundNode = false;
  const nextChildren = (children || []).map((child) => {
    if (child.key !== nextKey) {
      return child;
    }

    foundNode = true;
    return {
      ...child,
      isLeaf: false,
      children: ensureDescendantPath(child.children || [], rootId, segments.slice(1), nextPath)
    };
  });

  if (!foundNode) {
    nextChildren.push({
      ...createPathNode(rootId, nextPath, nextSegment),
      children: ensureDescendantPath([], rootId, segments.slice(1), nextPath)
    });
  }

  return nextChildren;
};

const ensurePathNode = (nodes, rootId, nodePath) => {
  const normalizedPath = normalizePath(nodePath);
  const segments = normalizedPath.split('/').filter(Boolean);
  const rootKey = buildNodeKey(rootId, ROOT_PATH);
  let foundRoot = false;
  const nextNodes = nodes.map((node) => {
    if (node.key !== rootKey) {
      return node;
    }

    foundRoot = true;
    return {
      ...node,
      isLeaf: false,
      children: ensureDescendantPath(node.children || [], rootId, segments, ROOT_PATH)
    };
  });

  if (!foundRoot) {
    nextNodes.push({
      ...createRootNode(rootId),
      children: ensureDescendantPath([], rootId, segments, ROOT_PATH)
    });
  }

  return nextNodes;
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

const mergeExpandedKeys = (prevExpandedKeys, nextExpandedKeys) => {
  const mergedExpandedKeys = prevExpandedKeys.slice();

  nextExpandedKeys.forEach((key) => {
    if (mergedExpandedKeys.indexOf(key) === -1) {
      mergedExpandedKeys.push(key);
    }
  });

  return mergedExpandedKeys;
};

const waitForFallbackRefresh = () => {
  return new Promise((resolve) => {
    window.setTimeout(resolve, TREE_REFRESH_FALLBACK_DELAY);
  });
};

const DirectoryTreePanel = (props) => {
  const { currentDirectoryItems, currentPath, loading, onSelectPath, refreshKey, rootId, roots, loadTree } = props;
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
  const treeRefreshKeyRef = useRef(null);

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
        if (!rootId || !roots.length) {
          setTreeLoading(false);
          return;
        }

        const normalizedCurrentPath = normalizePath(currentPath);
        const normalizedRefreshKey = refreshKey || 0;
        const shouldRefreshCurrentTree = normalizedRefreshKey > 0
          && normalizedRefreshKey !== treeRefreshKeyRef.current
          && !Array.isArray(currentDirectoryItems);
        let workingTreeData = treeDataRef.current;

        if (normalizedCurrentPath === ROOT_PATH) {
          const currentKey = buildNodeKey(rootId, normalizedCurrentPath);
          if (Array.isArray(currentDirectoryItems) || shouldRefreshCurrentTree) {
            let nextTreeData = ensurePathNode(workingTreeData, rootId, normalizedCurrentPath);

            if (Array.isArray(currentDirectoryItems)) {
              nextTreeData = syncNodeChildrenFromItems(
                nextTreeData,
                rootId,
                normalizedCurrentPath,
                currentDirectoryItems
              );
            } else {
              await waitForFallbackRefresh();
              if (!active) {
                return;
              }

              const children = await loadTree({
                rootId,
                path: normalizedCurrentPath,
                forceRefresh: true
              });

              nextTreeData = injectChildren(
                nextTreeData,
                currentKey,
                decorateChildNodes(rootId, children)
              );
            }

            if (active) {
              if (shouldRefreshCurrentTree) {
                treeRefreshKeyRef.current = normalizedRefreshKey;
              }
              setSyncedExpandedKeys((prevSyncedExpandedKeys) => {
                return mergeExpandedKeys(prevSyncedExpandedKeys, [currentKey]);
              });
              setCollapsedSyncedKeys((prevCollapsedSyncedKeys) => {
                return prevCollapsedSyncedKeys.filter((key) => {
                  return key !== currentKey;
                });
              });
              treeDataRef.current = nextTreeData;
              setTreeData(nextTreeData);
            }
          }

          setTreeLoading(false);
          return;
        }

        setTreeLoading(true);
        const pathsToLoad = getAncestorPaths(normalizedCurrentPath).slice(0, -1);
        const nextSyncedPaths = pathsToLoad.concat(normalizedCurrentPath);
        const nextSyncedKeys = nextSyncedPaths.map((path) => {
          return buildNodeKey(rootId, path);
        });
        let refreshedCurrentTree = false;

        setSyncedExpandedKeys((prevSyncedExpandedKeys) => {
          return mergeExpandedKeys(prevSyncedExpandedKeys, nextSyncedKeys);
        });

        if (Array.isArray(currentDirectoryItems) || shouldRefreshCurrentTree) {
          setCollapsedSyncedKeys((prevCollapsedSyncedKeys) => {
            return prevCollapsedSyncedKeys.filter((key) => {
              return nextSyncedKeys.indexOf(key) === -1;
            });
          });
        }

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

        if (Array.isArray(currentDirectoryItems)) {
          workingTreeData = ensurePathNode(workingTreeData, rootId, normalizedCurrentPath);
          workingTreeData = syncNodeChildrenFromItems(
            workingTreeData,
            rootId,
            normalizedCurrentPath,
            currentDirectoryItems
          );
        } else if (shouldRefreshCurrentTree) {
          await waitForFallbackRefresh();
          if (!active) {
            return;
          }

          workingTreeData = ensurePathNode(workingTreeData, rootId, normalizedCurrentPath);
          const children = await loadTree({
            rootId,
            path: normalizedCurrentPath,
            forceRefresh: true
          });

          workingTreeData = injectChildren(
            workingTreeData,
            buildNodeKey(rootId, normalizedCurrentPath),
            decorateChildNodes(rootId, children)
          );
          refreshedCurrentTree = true;
        }

        if (active) {
          if (refreshedCurrentTree) {
            treeRefreshKeyRef.current = normalizedRefreshKey;
          }
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
    [currentDirectoryItems, currentPath, loadTree, refreshKey, rootId, roots]
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
  currentDirectoryItems: PropTypes.arrayOf(PropTypes.object),
  currentPath: PropTypes.string.isRequired,
  loadTree: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  onSelectPath: PropTypes.func.isRequired,
  refreshKey: PropTypes.number,
  roots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  rootId: PropTypes.string
};

DirectoryTreePanel.defaultProps = {
  currentDirectoryItems: null,
  loading: false,
  refreshKey: 0,
  rootId: ''
};

export default DirectoryTreePanel;
