import React, { useMemo, useState } from 'react';
import { Tabs } from 'antd';
import FileBrowser from './pages/file-browser';
import classifyNorthboundLog from './services/fileBrowser/classifiers/northboundLog';
import classifySouthboundLog from './services/fileBrowser/classifiers/southboundLog';
import {
  LOG_TYPE_GROUP_LABELS,
  NORTHBOUND_LOG_TYPE_LABELS,
  NORTHBOUND_LOG_TYPE_OPTIONS,
  SOUTHBOUND_LOG_TYPE_LABELS,
  SOUTHBOUND_LOG_TYPE_OPTIONS
} from './services/fileBrowser/logTypes';
import { ftpAdapter, s3Adapter } from './services/fileBrowser/service';

const { TabPane } = Tabs;

const DEFAULT_BROWSER_STATE = {
  logType: 'all',
  root: '',
  path: '/',
  q: '',
  timeRange: 'all',
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

  const tabLogFilterConfigs = useMemo(
    () => {
      return {
        [TAB_KEYS.ne]: {
          classify: classifySouthboundLog,
          getTypeLabel: (classification) => {
            return SOUTHBOUND_LOG_TYPE_LABELS[classification.logType];
          },
          labels: SOUTHBOUND_LOG_TYPE_LABELS,
          options: SOUTHBOUND_LOG_TYPE_OPTIONS
        },
        [TAB_KEYS.north]: {
          classify: classifyNorthboundLog,
          getTypeLabel: (classification) => {
            return LOG_TYPE_GROUP_LABELS[classification.logTypeGroup] || NORTHBOUND_LOG_TYPE_LABELS[classification.logType];
          },
          labels: NORTHBOUND_LOG_TYPE_LABELS,
          options: NORTHBOUND_LOG_TYPE_OPTIONS
        }
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
          logFilterConfig={tabLogFilterConfigs[TAB_KEYS.ne]}
          onChange={(nextPatch) => {
            handleTabStateChange(TAB_KEYS.ne, nextPatch);
          }}
          value={tabStates[TAB_KEYS.ne]}
        />
      </TabPane>
      <TabPane key={TAB_KEYS.north} tab="北向日志">
        <FileBrowser
          adapter={tabAdapters[TAB_KEYS.north]}
          logFilterConfig={tabLogFilterConfigs[TAB_KEYS.north]}
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
