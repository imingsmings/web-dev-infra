import { useEffect, useState } from 'react';
import { message } from 'antd';

const useFileBrowserData = (options) => {
  const { adapter, value, onInvalidRoot } = options;
  const [roots, setRoots] = useState([]);
  const [rootsLoading, setRootsLoading] = useState(false);
  const [listData, setListData] = useState({
    breadcrumbs: [],
    items: [],
    total: 0
  });
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      let active = true;

      setRootsLoading(true);
      setRoots([]);
      setListData({
        breadcrumbs: [],
        items: [],
        total: 0
      });
      setLoading(false);

      adapter.fetchRoots().then((data) => {
        if (!active) {
          return;
        }

        setRoots(data);
        setRootsLoading(false);
      }).catch((error) => {
        if (!active) {
          return;
        }

        setRootsLoading(false);
        message.error(error && error.message ? `Failed to load root mounts: ${error.message}` : 'Failed to load root mounts.');
      });

      return () => {
        active = false;
      };
    },
    [adapter]
  );

  useEffect(
    () => {
      if (!roots.length || !value.root) {
        return;
      }

      const currentRootExists = roots.some((root) => {
        return root.id === value.root;
      });

      if (!currentRootExists) {
        onInvalidRoot();
      }
    },
    [onInvalidRoot, roots, value.root]
  );

  useEffect(
    () => {
      if (!value.root) {
        setListData({
          breadcrumbs: [],
          items: [],
          total: 0
        });
        setLoading(false);
        return undefined;
      }

      let active = true;
      setLoading(true);

      adapter.fetchList({
        rootId: value.root,
        path: value.path,
        q: value.q,
        sort: value.sort,
        type: value.type
      }).then((data) => {
        if (!active) {
          return;
        }

        setListData(data);
        setLoading(false);
      }).catch(() => {
        if (!active) {
          return;
        }

        setLoading(false);
        message.error('Failed to load directory items.');
      });

      return () => {
        active = false;
      };
    },
    [adapter, value.path, value.q, value.root, value.sort, value.type]
  );

  return {
    listData,
    loading,
    roots,
    rootsLoading
  };
};

export default useFileBrowserData;
