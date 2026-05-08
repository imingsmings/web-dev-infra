import { LOG_TYPE_GROUPS, NORTHBOUND_LOG_TYPES } from '../logTypes';

const resolveGroup = (name) => {
  if (/_gnb_/i.test(name)) {
    return {
      group: LOG_TYPE_GROUPS.GNB,
      type: NORTHBOUND_LOG_TYPES.GNB
    };
  }

  if (/_cell_/i.test(name)) {
    return {
      group: LOG_TYPE_GROUPS.CELL,
      type: NORTHBOUND_LOG_TYPES.CELL
    };
  }

  if (/_security_/i.test(name)) {
    return {
      group: LOG_TYPE_GROUPS.SECURITY,
      type: NORTHBOUND_LOG_TYPES.SECURITY
    };
  }

  return {
    group: LOG_TYPE_GROUPS.UNKNOWN,
    type: NORTHBOUND_LOG_TYPES.UNKNOWN
  };
};

const resolveSubType = (type, name) => {
  if (type === NORTHBOUND_LOG_TYPES.UNKNOWN) {
    return NORTHBOUND_LOG_TYPES.UNKNOWN;
  }

  if (/_Normal_/i.test(name)) {
    return `${type}_normal`;
  }

  if (/_TestSecond_/i.test(name)) {
    return `${type}_test_second`;
  }

  if (/_Tti_/i.test(name)) {
    return `${type}_tti`;
  }

  return type;
};

export const classifyNorthboundLog = (name) => {
  const normalizedName = name || '';
  const groupInfo = resolveGroup(normalizedName);

  return {
    logTypeGroup: groupInfo.group,
    logType: resolveSubType(groupInfo.type, normalizedName)
  };
};

export default classifyNorthboundLog;
