import { LOG_TYPE_GROUPS, SOUTHBOUND_LOG_TYPES } from '../logTypes';

const SOUTHBOUND_RULES = [
  {
    group: LOG_TYPE_GROUPS.MTS,
    pattern: /tti\.log(?:\.gz)?$/i,
    type: SOUTHBOUND_LOG_TYPES.MTS_TTI
  },
  {
    group: LOG_TYPE_GROUPS.MTS,
    pattern: /statistic\.log(?:\.gz)?$/i,
    type: SOUTHBOUND_LOG_TYPES.MTS_STATISTIC
  },
  {
    group: LOG_TYPE_GROUPS.CODE23,
    pattern: /(?:^|[_-])23(?:[_-])\d+\.lgz$/i,
    type: SOUTHBOUND_LOG_TYPES.CODE23
  },
  {
    group: LOG_TYPE_GROUPS.CODE69,
    pattern: /(?:^|[_-])69(?:[_-])\d+\.lgz$/i,
    type: SOUTHBOUND_LOG_TYPES.CODE69
  },
  {
    group: LOG_TYPE_GROUPS.CODE68,
    pattern: /(?:^|[_-])68(?:[_-])\d+\.lgz$/i,
    type: SOUTHBOUND_LOG_TYPES.CODE68
  },
  {
    group: LOG_TYPE_GROUPS.CDL,
    pattern: /_manual_cdl\.lgz$/i,
    type: SOUTHBOUND_LOG_TYPES.CDL
  },
  {
    group: LOG_TYPE_GROUPS.CDL,
    pattern: /_auto_cdl\.lgz$/i,
    type: SOUTHBOUND_LOG_TYPES.CDL
  },
  {
    group: LOG_TYPE_GROUPS.CDL,
    pattern: /_cdl\.lgz$/i,
    type: SOUTHBOUND_LOG_TYPES.CDL
  },
  {
    group: LOG_TYPE_GROUPS.P4,
    pattern: /_P4\.lgz$/i,
    type: SOUTHBOUND_LOG_TYPES.P4
  },
  {
    group: LOG_TYPE_GROUPS.OPERATE,
    pattern: /_operatelog\.lgz$/i,
    type: SOUTHBOUND_LOG_TYPES.OPERATE
  },
  {
    group: LOG_TYPE_GROUPS.ALARM,
    pattern: /_alarmlog\.lgz$/i,
    type: SOUTHBOUND_LOG_TYPES.ALARM
  },
  {
    group: LOG_TYPE_GROUPS.EVENT,
    pattern: /_eventlog\.lgz$/i,
    type: SOUTHBOUND_LOG_TYPES.EVENT
  },
  {
    group: LOG_TYPE_GROUPS.OMKEY,
    pattern: /_omkeylog\.lgz$/i,
    type: SOUTHBOUND_LOG_TYPES.OMKEY
  }
];

export const classifySouthboundLog = (name) => {
  const normalizedName = name || '';
  const matchedRule = SOUTHBOUND_RULES.find((rule) => {
    return rule.pattern.test(normalizedName);
  });

  if (!matchedRule) {
    return {
      logTypeGroup: LOG_TYPE_GROUPS.UNKNOWN,
      logType: SOUTHBOUND_LOG_TYPES.UNKNOWN
    };
  }

  return {
    logTypeGroup: matchedRule.group,
    logType: matchedRule.type
  };
};

export default classifySouthboundLog;
