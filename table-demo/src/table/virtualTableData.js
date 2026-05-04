import React from 'react'

const regions = ['华东', '华北', '华南', '西南', '海外']
const statuses = ['待处理', '进行中', '已完成', '已暂停']
const owners = ['张敏', '王涛', '李青', '赵蕾', '陈晨', '周洋']
const priorities = ['P0', 'P1', 'P2', 'P3']

const pad = (value) => String(value).padStart(2, '0')
const singleLineCellStyle = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
}

const formatDate = (offset) => {
    const month = (offset % 12) + 1
    const day = (offset % 28) + 1
    return `2026-${pad(month)}-${pad(day)}`
}

export const createVirtualTableData = (count = 2000) => {
    const rows = []

    for (let index = 0; index < count; index += 1) {
        rows.push({
            key: `row-${index + 1}`,
            seq: index + 1,
            orderNo: `ORD-${String(100000 + index)}`,
            projectName: `华南仓配一体化改造项目 ${index + 1}`,
            owner: owners[index % owners.length],
            region: regions[index % regions.length],
            priority: priorities[index % priorities.length],
            status: statuses[index % statuses.length],
            amount: Number((1200 + index * 13.75).toFixed(2)),
            updatedAt: formatDate(index),
            remark:
                index % 3 === 0
                    ? '需要关注跨部门协同和上线窗口。'
                    : '按标准流程推进。'
        })
    }

    return rows
}

export const virtualTableColumns = [
    {
        title: '序号',
        dataIndex: 'seq',
        key: 'seq',
        width: 90,
        align: 'right'
    },
    {
        title: '订单号',
        dataIndex: 'orderNo',
        key: 'orderNo',
        width: 140
    },
    {
        title: '项目名称',
        dataIndex: 'projectName',
        key: 'projectName',
        width: 260,
        render: (text, record, index) =>
            React.createElement(
                'div',
                { style: singleLineCellStyle },
                `${index + 1}. ${text}`
            )
    },
    {
        title: '负责人',
        dataIndex: 'owner',
        key: 'owner',
        width: 120
    },
    {
        title: '区域',
        dataIndex: 'region',
        key: 'region',
        width: 120
    },
    {
        title: '优先级',
        dataIndex: 'priority',
        key: 'priority',
        width: 100
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        width: 120
    },
    {
        title: '预算',
        dataIndex: 'amount',
        key: 'amount',
        width: 140,
        align: 'right',
        render: (value) => `¥ ${value.toLocaleString()}`
    },
    {
        title: '最近更新时间',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
        width: 140
    },
    {
        title: '备注',
        dataIndex: 'remark',
        key: 'remark',
        width: 260,
        render: (text) =>
            React.createElement(
                'div',
                { style: singleLineCellStyle },
                text
            )
    }
]
