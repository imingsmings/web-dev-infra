import React from 'react'
import { Alert, Card, Table, Tag } from 'antd'
import { Resizable } from 'react-resizable'

import VirtualTable from './VirtualTable'
import {
    createVirtualTableData,
    virtualTableColumns
} from './virtualTableData'

import 'react-resizable/css/styles.css'

const MAX_WIDTH = 420
const MIN_WIDTH = 90

const ResizableTitle = (props) => {
    const { onResize, width, resizable, ...restProps } = props

    if (!resizable || !width) {
        return <th {...restProps} />
    }

    return (
        <Resizable
            width={width}
            height={0}
            handle={
                <span
                    className='react-resizable-handle'
                    style={{
                        right: 10,
                        cursor: 'col-resize'
                    }}
                    onClick={(event) => event.stopPropagation()}
                />
            }
            onResize={onResize}
            draggableOpts={{ enableUserSelectHack: false }}
        >
            <th {...restProps} />
        </Resizable>
    )
}

class VirtualTableDemo extends React.Component {
    constructor(props) {
        super(props)

        this.rawData = createVirtualTableData(2500)

        this.state = {
            selectedRowKeys: [],
            columns: virtualTableColumns.map((column) => ({
                ...column,
                resizable: true
            }))
        }
    }

    handleResize = (index) => (event, { size }) => {
        this.setState((prevState) => {
            const nextColumns = prevState.columns.slice()
            const width = Math.max(
                MIN_WIDTH,
                Math.min(MAX_WIDTH, size.width)
            )

            nextColumns[index] = {
                ...nextColumns[index],
                width
            }

            return { columns: nextColumns }
        })
    }

    getColumns = () =>
        this.state.columns.map((column, index) => ({
            ...column,
            render:
                column.key === 'status'
                    ? (value) => {
                          const colorMap = {
                              待处理: 'orange',
                              进行中: 'blue',
                              已完成: 'green',
                              已暂停: 'red'
                          }

                          return <Tag color={colorMap[value]}>{value}</Tag>
                      }
                    : column.render,
            onHeaderCell: (currentColumn) => ({
                width: currentColumn.width,
                resizable: currentColumn.resizable,
                onResize: this.handleResize(index)
            })
        }))

    render() {
        const selectedCount = this.state.selectedRowKeys.length
        const columns = this.getColumns()

        return (
            <Card
                title='VirtualTable Demo'
                style={{ marginBottom: 24 }}
                bodyStyle={{ paddingBottom: 16 }}
            >
                <Alert
                    type='info'
                    showIcon
                    style={{ marginBottom: 16 }}
                    message='当前示例是 antd 3.x 的最小可用虚拟滚动封装。'
                    description='已支持纵向虚拟滚动、行选择、横向滚动、列宽拖拽和全局行索引；固定列、展开行、本地排序/筛选会自动回退到普通 Table。'
                />

                <div style={{ marginBottom: 12, color: '#666' }}>
                    当前数据量 {this.rawData.length} 行，已选中 {selectedCount}{' '}
                    行。滚动容器高度 420px，单行高度按 54px 计算。
                </div>

                <VirtualTable
                    bordered
                    virtual
                    rowHeight={54}
                    overscan={8}
                    virtualThreshold={100}
                    columns={columns}
                    components={{
                        header: {
                            cell: ResizableTitle
                        }
                    }}
                    dataSource={this.rawData}
                    pagination={false}
                    rowSelection={{
                        selectedRowKeys: this.state.selectedRowKeys,
                        onChange: (selectedRowKeys) =>
                            this.setState({ selectedRowKeys })
                    }}
                    rowClassName={(record, index) =>
                        index % 2 === 0
                            ? 'virtual-table-row-even'
                            : 'virtual-table-row-odd'
                    }
                    scroll={{
                        x: 1600,
                        y: 420
                    }}
                />

                <div style={{ marginTop: 16 }}>
                    <Table
                        size='small'
                        pagination={false}
                        dataSource={[
                            {
                                key: '1',
                                capability: '支持能力',
                                value: '纵向虚拟滚动、行索引、行选择、横向滚动、列宽拖拽'
                            },
                            {
                                key: '2',
                                capability: '自动回退',
                                value: '固定列、展开行、树形数据、本地排序/筛选、内部分页'
                            }
                        ]}
                        columns={[
                            {
                                title: '项',
                                dataIndex: 'capability',
                                key: 'capability',
                                width: 160
                            },
                            {
                                title: '说明',
                                dataIndex: 'value',
                                key: 'value'
                            }
                        ]}
                    />
                </div>
            </Card>
        )
    }
}

export default VirtualTableDemo
