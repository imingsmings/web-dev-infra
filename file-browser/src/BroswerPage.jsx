import React, { useMemo, useState } from 'react';
import { Tabs } from 'antd';
import FileBrowser from './pages/file-browser';
import { ftpAdapter, s3Adapter } from './services/fileBrowser/service';

const { TabPane } = Tabs;

const DEFAULT_BROWSER_STATE = {
  root: '',
  path: '/',
  q: '',
  type: 'all',
  sort: 'name.asc',
  selectedRowKeys: []
};

const TAB_KEYS = {
  ne: 'ne',
  north: 'north'
};

const BroswerPage = () => {
  const [activeTab, setActiveTab] = useState(TAB_KEYS.ne);
  const [tabStates, setTabStates] = useState(() => {
    return {
      [TAB_KEYS.ne]: { ...DEFAULT_BROWSER_STATE },
      [TAB_KEYS.north]: { ...DEFAULT_BROWSER_STATE }
    };
  });

  const tabAdapters = useMemo(
    () => {
      return {
        [TAB_KEYS.ne]: ftpAdapter,
        [TAB_KEYS.north]: s3Adapter
      };
    },
    []
  );

  const handleTabStateChange = (tabKey, nextPatch) => {
    setTabStates((prevTabStates) => {
      return {
        ...prevTabStates,
        [tabKey]: {
          ...prevTabStates[tabKey],
          ...nextPatch
        }
      };
    });
  };

  return (
    <Tabs
      activeKey={activeTab}
      onChange={setActiveTab}
    >
      <TabPane key={TAB_KEYS.ne} tab="网元日志">
        <FileBrowser
          adapter={tabAdapters[TAB_KEYS.ne]}
          onChange={(nextPatch) => {
            handleTabStateChange(TAB_KEYS.ne, nextPatch);
          }}
          value={tabStates[TAB_KEYS.ne]}
        />
      </TabPane>
      <TabPane key={TAB_KEYS.north} tab="北向日志">
        <FileBrowser
          adapter={tabAdapters[TAB_KEYS.north]}
          onChange={(nextPatch) => {
            handleTabStateChange(TAB_KEYS.north, nextPatch);
          }}
          value={tabStates[TAB_KEYS.north]}
        />
      </TabPane>
    </Tabs>
  );
};

export default BroswerPage;
