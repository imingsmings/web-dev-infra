import React from 'react'
import { Alert, Button, Card, message } from 'antd'

import CommonTable from './CommonTable'

const createRows = (
    count = 12,
    start = 0,
    prefix = '表格案例'
) =>
    Array.from({ length: count }).map((_, index) => ({
        id: `next-row-${start + index + 1}`,
        name: `${prefix} ${start + index + 1}`,
        owner: ['张敏', '王涛', '李青'][(start + index) % 3],
        department: ['供应链', '平台研发', '业务运营', '财务共享'][(start + index) % 4],
        priority: ['P0', 'P1', 'P2', 'P3'][(start + index) % 4],
        region: ['华东', '华南', '华北', '西南'][(start + index) % 4],
        status: ['待处理', '进行中', '已完成'][(start + index) % 3],
        updatedAt: `2026-04-${String(((start + index) % 28) + 1).padStart(
            2,
            '0'
        )}`,
        remark:
            (start + index) % 2 === 0
                ? '这是从 low-code shell 层迁移过来的 CommonTable 案例。'
                : '后续在这个目录继续做虚拟滚动改造。'
    }))

const DemoBodyRow = ({
    className = '',
    style,
    children,
    ...rest
}) => (
    <tr
        {...rest}
        data-demo-body-row='true'
        className={`${className} nexttable-demo-body-row`.trim()}
        style={style}
    >
        {children}
    </tr>
)

const DemoBodyCell = ({
    className = '',
    style,
    children,
    ...rest
}) => (
    <td
        {...rest}
        data-demo-body-cell='true'
        className={`${className} nexttable-demo-body-cell`.trim()}
        style={style}
    >
        {children}
    </td>
)

class NextTableDemo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedRowKeys: [],
            virtualSelectedRowKeys: [],
            visibleRangeText: '0 - 0 / overscan 0 - 0',
            selectionEventText: '暂无选择事件',
            virtualContextKey: 'nexttable-virtual-demo',
            virtualData: createRows(1000),
            virtualLoading: false,
            virtualUseEmpty: false,
            virtualHideDefaultSelections: false
        }

        this.virtualTableRef = React.createRef()

        this.columns = [
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                width: 220,
                fixed: 'left'
            },
            {
                title: '负责人',
                dataIndex: 'owner',
                key: 'owner',
                width: 120,
                fixed: 'left'
            },
            {
                title: '部门',
                dataIndex: 'department',
                key: 'department',
                width: 140
            },
            {
                title: '优先级',
                dataIndex: 'priority',
                key: 'priority',
                width: 110
            },
            {
                title: '区域',
                dataIndex: 'region',
                key: 'region',
                width: 120
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                width: 120
            },
            {
                title: '更新时间',
                dataIndex: 'updatedAt',
                key: 'updatedAt',
                width: 140
            },
            {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark',
                // width: 360
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                width: 220,
                // fixed: 'right',
                render: (_, record) => (
                    <CommonTable.Actions
                        record={record}
                        actions={[
                            {
                                key: 'detail',
                                text: '详情',
                                icon: 'eye',
                                onClick: () =>
                                    message.info(
                                        `查看 ${record.name}`
                                    )
                            },
                            {
                                key: 'edit',
                                text: '编辑',
                                icon: 'edit',
                                onClick: () =>
                                    message.success(
                                        `编辑 ${record.name}`
                                    )
                            },
                            {
                                key: 'delete',
                                text: '删除',
                                icon: 'delete',
                                confirm: {
                                    title: `确定删除 ${record.name} 吗？`
                                },
                                onClick: () =>
                                    message.warning(
                                        `删除 ${record.name}`
                                    )
                            }
                        ]}
                    />
                )
            }
        ]

        this.virtualColumns = [
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                width: 220,
                fixed: 'left'
            },
            {
                title: '负责人',
                dataIndex: 'owner',
                key: 'owner',
                width: 120
            },
            {
                title: '部门',
                dataIndex: 'department',
                key: 'department',
                width: 140
            },
            {
                title: '优先级',
                dataIndex: 'priority',
                key: 'priority',
                width: 110
            },
            {
                title: '区域',
                dataIndex: 'region',
                key: 'region',
                width: 120
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                width: 120
            },
            {
                title: '更新时间',
                dataIndex: 'updatedAt',
                key: 'updatedAt',
                // width: 140
            },
            {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark',
                // width: 360
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                width: 180,
                fixed: 'right',
                render: (_, record) => (
                    <CommonTable.Actions
                        record={record}
                        actions={[
                            {
                                key: 'detail',
                                text: '详情',
                                icon: 'eye',
                                onClick: () =>
                                    message.info(
                                        `查看 ${record.name}`
                                    )
                            },
                            {
                                key: 'edit',
                                text: '编辑',
                                icon: 'edit',
                                onClick: () =>
                                    message.success(
                                        `编辑 ${record.name}`
                                    )
                            },
                            {
                                key: 'delete',
                                text: '删除',
                                icon: 'delete',
                                mode: 'menu',
                                confirm: {
                                    title: `确定删除 ${record.name} 吗？`
                                },
                                onClick: () =>
                                    message.warning(
                                        `删除 ${record.name}`
                                    )
                            }
                        ]}
                    />
                )
            }
        ]

        this.data = createRows(24)
    }

    setSelectionEventText = (selectionEventText) => {
        this.setState({
            selectionEventText
        })
    }

    refreshSameContext = () => {
        this.setState({
            virtualData: createRows(
                1000,
                1000,
                '同上下文刷新案例'
            )
        })
    }

    refreshNewContext = () => {
        this.setState((prevState) => ({
            virtualContextKey: `nexttable-virtual-demo-${Date.now()}`,
            virtualData: createRows(
                1000,
                2000,
                '新上下文案例'
            ),
            visibleRangeText: prevState.visibleRangeText
        }))
    }

    simulateScrollToFirstRowOnChange = () => {
        this.setState({
            virtualData: createRows(
                1000,
                3000,
                '排序后案例'
            )
        }, () => {
            requestAnimationFrame(() => {
                if (this.virtualTableRef.current) {
                    this.virtualTableRef.current.scrollToRow(0)
                }
            })
        })
    }

    render() {
        const virtualData = this.state.virtualUseEmpty
            ? []
            : this.state.virtualData

        return (
            <>
                {/* <Card
                    title='NextTable CommonTable Demo'
                    style={{ marginBottom: 24 }}
                >
                    <Alert
                        type='success'
                        showIcon
                        style={{ marginBottom: 16 }}
                        message='这个案例用于验证 low-code shell 层 CommonTable 已经可以在当前项目里直接渲染。'
                    />

                    <CommonTable
                        column={this.columns}
                        data={this.data}
                        pagination={false}
                        resizable
                        rowKey='id'
                        rowSelection={{
                            selectedRowKeys:
                                this.state.selectedRowKeys,
                            onChange: (selectedRowKeys) =>
                                this.setState({
                                    selectedRowKeys
                                })
                        }}
                        scroll={{
                            x: 1220,
                            y: 320
                        }}
                    />
                </Card> */}

                <Card
                    title='NextTable Virtual Demo'
                    style={{ marginBottom: 24 }}
                >
                    <Alert
                        type='info'
                        showIcon
                        style={{ marginBottom: 16 }}
                        message='这里走 CommonTable 的 virtual 渲染入口。当前示例显式覆盖 style、选择列菜单、自定义 selections、hideDefaultSelections，以及 components.body.row / cell。'
                    />

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            marginBottom: 16,
                            flexWrap: 'wrap'
                        }}
                    >
                        <Button
                            onClick={() =>
                                this.virtualTableRef.current &&
                                this.virtualTableRef.current.scrollToRow(
                                    399,
                                    { align: 'center' }
                                )
                            }
                        >
                            第 400 行居中
                        </Button>
                        <Button
                            onClick={() =>
                                this.virtualTableRef.current &&
                                this.virtualTableRef.current.scrollToKey(
                                    'next-row-800',
                                    { align: 'nearest' }
                                )
                            }
                        >
                            key 800 就近定位
                        </Button>
                        <Button
                            onClick={() =>
                                this.setState((prevState) => ({
                                    virtualLoading:
                                        !prevState.virtualLoading
                                }))
                            }
                        >
                            {this.state.virtualLoading
                                ? '关闭 loading'
                                : '打开 loading'}
                        </Button>
                        <Button
                            onClick={() =>
                                this.setState((prevState) => ({
                                    virtualUseEmpty:
                                        !prevState.virtualUseEmpty
                                }))
                            }
                        >
                            {this.state.virtualUseEmpty
                                ? '恢复数据'
                                : '切空数据'}
                        </Button>
                        <Button onClick={this.refreshSameContext}>
                            同上下文刷新
                        </Button>
                        <Button onClick={this.refreshNewContext}>
                            新上下文刷新
                        </Button>
                        <Button
                            onClick={
                                this.simulateScrollToFirstRowOnChange
                            }
                        >
                            模拟 onChange 回顶
                        </Button>
                        <Button
                            onClick={() =>
                                this.setState((prevState) => ({
                                    virtualHideDefaultSelections:
                                        !prevState.virtualHideDefaultSelections
                                }))
                            }
                        >
                            {this.state.virtualHideDefaultSelections
                                ? '显示默认选择菜单'
                                : '隐藏默认选择菜单'}
                        </Button>
                        <span>
                            当前可视区: {this.state.visibleRangeText}
                        </span>
                        <span>
                            选择事件: {this.state.selectionEventText}
                        </span>
                        <span>
                            body.row/cell:
                            {' '}
                            已注入
                            {' '}
                            data-demo-body-row / cell
                        </span>
                    </div>

                    <CommonTable
                        ref={this.virtualTableRef}
                        column={this.virtualColumns}
                        components={{
                            body: {
                                row: DemoBodyRow,
                                cell: DemoBodyCell
                            }
                        }}
                        data={virtualData}
                        loading={this.state.virtualLoading}
                        locale={{
                            emptyText: '当前没有可展示的数据'
                        }}
                        // style={{
                        //     border: '1px solid #91d5ff',
                        //     borderRadius: 8,
                        //     boxShadow:
                        //         '0 8px 24px rgba(9, 109, 217, 0.08)'
                        // }}
                        onVisibleRangeChange={(
                            start,
                            end,
                            detail
                        ) =>
                            this.setState({
                                visibleRangeText: `${start} - ${end} / overscan ${detail.overscanStart} - ${detail.overscanEnd}`
                            })
                        }
                        dataChangeBehavior='auto'
                        dataChangeKey={
                            this.state.virtualContextKey
                        }
                        pagination={false}
                        resizable
                        swap={true}
                        drag={true}
                        rowKey='id'
                        rowSelection={{
                            fixed: true,
                            hideDefaultSelections:
                                this.state.virtualHideDefaultSelections,
                            onSelectInvert: (nextKeys) => {
                                this.setState({
                                    virtualSelectedRowKeys: nextKeys
                                })
                                this.setSelectionEventText(
                                    `反选后共选中 ${nextKeys.length} 行`
                                )
                            },
                            // selections: [
                            //     {
                            //         key: 'select-first-10',
                            //         text: '选择前 10 条可选数据',
                            //         onSelect: (changeableRowKeys) => {
                            //             const nextKeys =
                            //                 changeableRowKeys.slice(
                            //                     0,
                            //                     10
                            //                 )
                            //             this.setState({
                            //                 virtualSelectedRowKeys:
                            //                     nextKeys
                            //             })
                            //             this.setSelectionEventText(
                            //                 `自定义 selections: 选中前 ${nextKeys.length} 条可选数据`
                            //             )
                            //         }
                            //     },
                            //     {
                            //         key: 'select-even',
                            //         text: '选择偶数序号可选数据',
                            //         onSelect: (changeableRowKeys) => {
                            //             const nextKeys =
                            //                 changeableRowKeys.filter(
                            //                     (_, index) =>
                            //                         index % 2 === 1
                            //                 )
                            //             this.setState({
                            //                 virtualSelectedRowKeys:
                            //                     nextKeys
                            //             })
                            //             this.setSelectionEventText(
                            //                 `自定义 selections: 选中 ${nextKeys.length} 条偶数序号可选数据`
                            //             )
                            //         }
                            //     }
                            // ],
                            getCheckboxProps: (record) => ({
                                disabled:
                                    Number(
                                        record.id.replace(
                                            'next-row-',
                                            ''
                                        )
                                    ) %
                                        7 ===
                                    0
                            }),
                            onSelect: (record, selected) =>
                                this.setSelectionEventText(
                                    `${record.name} ${
                                        selected
                                            ? '已选中'
                                            : '已取消'
                                    }`
                                ),
                            onSelectAll: (
                                selected,
                                selectedRows,
                                changeRows
                            ) =>
                                this.setSelectionEventText(
                                    `全选事件: ${selected ? '选中' : '取消'} ${changeRows.length} 行，可见已选 ${selectedRows.length} 行`
                                ),
                            onSelectNone: () =>
                                this.setSelectionEventText(
                                    '已清空选择'
                                ),
                            selectedRowKeys:
                                this.state.virtualSelectedRowKeys,
                            onChange: (virtualSelectedRowKeys) =>
                                this.setState({
                                    virtualSelectedRowKeys
                                }),
                        }}
                        scroll={{
                            x: 1200
                        }}
                        onRow={(record) => {
                            return {
                                onClick: () => {
                                    console.log(record);
                                }
                            }
                        }}
                        dynamicOverscan
                        scrollToFirstRowOnChange
                        virtual
                        virtualThreshold={80}
                    />
                </Card>
            </>
        )
    }
}

export default NextTableDemo
