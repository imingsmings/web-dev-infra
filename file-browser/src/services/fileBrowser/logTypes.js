export const LOG_TYPE_GROUPS = Object.freeze({
  ALARM: 'alarm',
  CDL: 'cdl',
  CELL: 'cell',
  CODE23: 'code23',
  CODE68: 'code68',
  CODE69: 'code69',
  EVENT: 'event',
  GNB: 'gnb',
  MTS: 'mts',
  OMKEY: 'omkey',
  OPERATE: 'operate',
  P4: 'p4',
  SECURITY: 'security',
  UNKNOWN: 'unknown'
});

export const NORTHBOUND_LOG_TYPES = Object.freeze({
  CELL: 'cell',
  CELL_NORMAL: 'cell_normal',
  CELL_TEST_SECOND: 'cell_test_second',
  CELL_TTI: 'cell_tti',
  GNB: 'gnb',
  GNB_NORMAL: 'gnb_normal',
  GNB_TEST_SECOND: 'gnb_test_second',
  GNB_TTI: 'gnb_tti',
  SECURITY: 'security',
  SECURITY_NORMAL: 'security_normal',
  SECURITY_TEST_SECOND: 'security_test_second',
  SECURITY_TTI: 'security_tti',
  UNKNOWN: 'unknown'
});

export const SOUTHBOUND_LOG_TYPES = Object.freeze({
  ALARM: 'alarm',
  CDL: 'cdl',
  CODE23: 'code23',
  CODE68: 'code68',
  CODE69: 'code69',
  EVENT: 'event',
  MTS_STATISTIC: 'mts_statistic',
  MTS_TTI: 'mts_tti',
  OMKEY: 'omkey',
  OPERATE: 'operate',
  P4: 'p4',
  UNKNOWN: 'unknown'
});

export const NORTHBOUND_LOG_TYPE_GROUP_MAP = Object.freeze({
  [NORTHBOUND_LOG_TYPES.CELL]: LOG_TYPE_GROUPS.CELL,
  [NORTHBOUND_LOG_TYPES.CELL_NORMAL]: LOG_TYPE_GROUPS.CELL,
  [NORTHBOUND_LOG_TYPES.CELL_TEST_SECOND]: LOG_TYPE_GROUPS.CELL,
  [NORTHBOUND_LOG_TYPES.CELL_TTI]: LOG_TYPE_GROUPS.CELL,
  [NORTHBOUND_LOG_TYPES.GNB]: LOG_TYPE_GROUPS.GNB,
  [NORTHBOUND_LOG_TYPES.GNB_NORMAL]: LOG_TYPE_GROUPS.GNB,
  [NORTHBOUND_LOG_TYPES.GNB_TEST_SECOND]: LOG_TYPE_GROUPS.GNB,
  [NORTHBOUND_LOG_TYPES.GNB_TTI]: LOG_TYPE_GROUPS.GNB,
  [NORTHBOUND_LOG_TYPES.SECURITY]: LOG_TYPE_GROUPS.SECURITY,
  [NORTHBOUND_LOG_TYPES.SECURITY_NORMAL]: LOG_TYPE_GROUPS.SECURITY,
  [NORTHBOUND_LOG_TYPES.SECURITY_TEST_SECOND]: LOG_TYPE_GROUPS.SECURITY,
  [NORTHBOUND_LOG_TYPES.SECURITY_TTI]: LOG_TYPE_GROUPS.SECURITY,
  [NORTHBOUND_LOG_TYPES.UNKNOWN]: LOG_TYPE_GROUPS.UNKNOWN
});

export const SOUTHBOUND_LOG_TYPE_GROUP_MAP = Object.freeze({
  [SOUTHBOUND_LOG_TYPES.ALARM]: LOG_TYPE_GROUPS.ALARM,
  [SOUTHBOUND_LOG_TYPES.CDL]: LOG_TYPE_GROUPS.CDL,
  [SOUTHBOUND_LOG_TYPES.CODE23]: LOG_TYPE_GROUPS.CODE23,
  [SOUTHBOUND_LOG_TYPES.CODE68]: LOG_TYPE_GROUPS.CODE68,
  [SOUTHBOUND_LOG_TYPES.CODE69]: LOG_TYPE_GROUPS.CODE69,
  [SOUTHBOUND_LOG_TYPES.EVENT]: LOG_TYPE_GROUPS.EVENT,
  [SOUTHBOUND_LOG_TYPES.MTS_STATISTIC]: LOG_TYPE_GROUPS.MTS,
  [SOUTHBOUND_LOG_TYPES.MTS_TTI]: LOG_TYPE_GROUPS.MTS,
  [SOUTHBOUND_LOG_TYPES.OMKEY]: LOG_TYPE_GROUPS.OMKEY,
  [SOUTHBOUND_LOG_TYPES.OPERATE]: LOG_TYPE_GROUPS.OPERATE,
  [SOUTHBOUND_LOG_TYPES.P4]: LOG_TYPE_GROUPS.P4,
  [SOUTHBOUND_LOG_TYPES.UNKNOWN]: LOG_TYPE_GROUPS.UNKNOWN
});

export const LOG_TYPE_GROUP_LABELS = Object.freeze({
  [LOG_TYPE_GROUPS.ALARM]: '告警类',
  [LOG_TYPE_GROUPS.CDL]: 'CDL类',
  [LOG_TYPE_GROUPS.CELL]: '波束级',
  [LOG_TYPE_GROUPS.CODE23]: '23号日志',
  [LOG_TYPE_GROUPS.CODE68]: '68号日志',
  [LOG_TYPE_GROUPS.CODE69]: '69号日志',
  [LOG_TYPE_GROUPS.EVENT]: '事件类',
  [LOG_TYPE_GROUPS.GNB]: '基站级',
  [LOG_TYPE_GROUPS.MTS]: 'MTS类',
  [LOG_TYPE_GROUPS.OMKEY]: 'OmKey类',
  [LOG_TYPE_GROUPS.OPERATE]: '操作类',
  [LOG_TYPE_GROUPS.P4]: 'P4类',
  [LOG_TYPE_GROUPS.SECURITY]: '安全类级',
  [LOG_TYPE_GROUPS.UNKNOWN]: '未识别'
});

export const NORTHBOUND_LOG_TYPE_LABELS = Object.freeze({
  [NORTHBOUND_LOG_TYPES.CELL]: '波束级',
  [NORTHBOUND_LOG_TYPES.CELL_NORMAL]: '波束级 Normal',
  [NORTHBOUND_LOG_TYPES.CELL_TEST_SECOND]: '波束级 TestSecond',
  [NORTHBOUND_LOG_TYPES.CELL_TTI]: '波束级 Tti',
  [NORTHBOUND_LOG_TYPES.GNB]: '基站级',
  [NORTHBOUND_LOG_TYPES.GNB_NORMAL]: '基站级 Normal',
  [NORTHBOUND_LOG_TYPES.GNB_TEST_SECOND]: '基站级 TestSecond',
  [NORTHBOUND_LOG_TYPES.GNB_TTI]: '基站级 Tti',
  [NORTHBOUND_LOG_TYPES.SECURITY]: '安全类级',
  [NORTHBOUND_LOG_TYPES.SECURITY_NORMAL]: '安全类级 Normal',
  [NORTHBOUND_LOG_TYPES.SECURITY_TEST_SECOND]: '安全类级 TestSecond',
  [NORTHBOUND_LOG_TYPES.SECURITY_TTI]: '安全类级 Tti',
  [NORTHBOUND_LOG_TYPES.UNKNOWN]: '未识别'
});

export const SOUTHBOUND_LOG_TYPE_LABELS = Object.freeze({
  [SOUTHBOUND_LOG_TYPES.ALARM]: '告警日志',
  [SOUTHBOUND_LOG_TYPES.CDL]: 'CDL日志',
  [SOUTHBOUND_LOG_TYPES.CODE23]: '23号日志',
  [SOUTHBOUND_LOG_TYPES.CODE68]: '68号日志',
  [SOUTHBOUND_LOG_TYPES.CODE69]: '69号日志',
  [SOUTHBOUND_LOG_TYPES.EVENT]: 'Event日志',
  [SOUTHBOUND_LOG_TYPES.MTS_STATISTIC]: 'MTS秒级 Statistic',
  [SOUTHBOUND_LOG_TYPES.MTS_TTI]: 'MTS秒级 TTI',
  [SOUTHBOUND_LOG_TYPES.OMKEY]: 'OmKey日志',
  [SOUTHBOUND_LOG_TYPES.OPERATE]: '操作日志',
  [SOUTHBOUND_LOG_TYPES.P4]: 'P4日志',
  [SOUTHBOUND_LOG_TYPES.UNKNOWN]: '未识别'
});

export const NORTHBOUND_LOG_TYPE_OPTIONS = Object.freeze([
  {
    group: 'all',
    label: '全部类型',
    value: 'all'
  },
  {
    group: LOG_TYPE_GROUPS.GNB,
    label: '基站级',
    value: NORTHBOUND_LOG_TYPES.GNB
  },
  // {
  //   group: LOG_TYPE_GROUPS.GNB,
  //   label: '基站级 Normal',
  //   value: NORTHBOUND_LOG_TYPES.GNB_NORMAL
  // },
  // {
  //   group: LOG_TYPE_GROUPS.GNB,
  //   label: '基站级 TestSecond',
  //   value: NORTHBOUND_LOG_TYPES.GNB_TEST_SECOND
  // },
  // {
  //   group: LOG_TYPE_GROUPS.GNB,
  //   label: '基站级 Tti',
  //   value: NORTHBOUND_LOG_TYPES.GNB_TTI
  // },
  {
    group: LOG_TYPE_GROUPS.CELL,
    label: '波束级',
    value: NORTHBOUND_LOG_TYPES.CELL
  },
  // {
  //   group: LOG_TYPE_GROUPS.CELL,
  //   label: '波束级 Normal',
  //   value: NORTHBOUND_LOG_TYPES.CELL_NORMAL
  // },
  // {
  //   group: LOG_TYPE_GROUPS.CELL,
  //   label: '波束级 TestSecond',
  //   value: NORTHBOUND_LOG_TYPES.CELL_TEST_SECOND
  // },
  // {
  //   group: LOG_TYPE_GROUPS.CELL,
  //   label: '波束级 Tti',
  //   value: NORTHBOUND_LOG_TYPES.CELL_TTI
  // },
  {
    group: LOG_TYPE_GROUPS.SECURITY,
    label: '安全类级',
    value: NORTHBOUND_LOG_TYPES.SECURITY
  },
  // {
  //   group: LOG_TYPE_GROUPS.SECURITY,
  //   label: '安全类级 Normal',
  //   value: NORTHBOUND_LOG_TYPES.SECURITY_NORMAL
  // },
  // {
  //   group: LOG_TYPE_GROUPS.SECURITY,
  //   label: '安全类级 TestSecond',
  //   value: NORTHBOUND_LOG_TYPES.SECURITY_TEST_SECOND
  // },
  // {
  //   group: LOG_TYPE_GROUPS.SECURITY,
  //   label: '安全类级 Tti',
  //   value: NORTHBOUND_LOG_TYPES.SECURITY_TTI
  // }
]);

export const SOUTHBOUND_LOG_TYPE_OPTIONS = Object.freeze([
  {
    group: 'all',
    label: '全部类型',
    value: 'all'
  },
  {
    group: LOG_TYPE_GROUPS.MTS,
    label: 'MTS秒级 TTI',
    value: SOUTHBOUND_LOG_TYPES.MTS_TTI
  },
  {
    group: LOG_TYPE_GROUPS.MTS,
    label: 'MTS秒级 Statistic',
    value: SOUTHBOUND_LOG_TYPES.MTS_STATISTIC
  },
  {
    group: LOG_TYPE_GROUPS.CODE23,
    label: '23号日志',
    value: SOUTHBOUND_LOG_TYPES.CODE23
  },
  {
    group: LOG_TYPE_GROUPS.CODE69,
    label: '69号日志',
    value: SOUTHBOUND_LOG_TYPES.CODE69
  },
  {
    group: LOG_TYPE_GROUPS.CODE68,
    label: '68号日志',
    value: SOUTHBOUND_LOG_TYPES.CODE68
  },
  {
    group: LOG_TYPE_GROUPS.CDL,
    label: 'CDL日志',
    value: SOUTHBOUND_LOG_TYPES.CDL
  },
  {
    group: LOG_TYPE_GROUPS.P4,
    label: 'P4日志',
    value: SOUTHBOUND_LOG_TYPES.P4
  },
  {
    group: LOG_TYPE_GROUPS.OPERATE,
    label: '操作日志',
    value: SOUTHBOUND_LOG_TYPES.OPERATE
  },
  {
    group: LOG_TYPE_GROUPS.ALARM,
    label: '告警日志',
    value: SOUTHBOUND_LOG_TYPES.ALARM
  },
  {
    group: LOG_TYPE_GROUPS.EVENT,
    label: 'Event日志',
    value: SOUTHBOUND_LOG_TYPES.EVENT
  },
  {
    group: LOG_TYPE_GROUPS.OMKEY,
    label: 'OmKey日志',
    value: SOUTHBOUND_LOG_TYPES.OMKEY
  }
]);
