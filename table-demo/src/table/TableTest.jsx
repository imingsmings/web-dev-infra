import React from 'react'
import { Table } from 'antd'

const rawData = [
    { key: 1, name: 'John', age: 28 },
    { key: 2, name: 'Joe', age: 32 }
]

const transformData = (data) => {
    // 提取字段名（表头）
    const fieldNames = Object.keys(data[0]).filter((key) => key !== 'key')

    // 构造新的数据源
    const transformed = fieldNames.map((field) => {
        const row = { field } // 第一列为字段名
        data.forEach((item, index) => {
            row[`data${index + 1}`] = item[field] // 动态生成数据列
        })
        return row
    })

    return transformed
}

const App = () => {
    const transformedData = transformData(rawData)

    // 构造动态列
    const columns = [
        {
            title: '',
            dataIndex: 'field',
            key: 'field',
            fixed: 'left',
            width: 180
        },
        ...rawData.map((_, index) => ({
            title: `Column ${index + 1}`, // 动态生成列标题
            dataIndex: `data${index + 1}`,
            key: `data${index + 1}`
        }))
    ]

    return (
        <Table
            bordered
            columns={columns}
            dataSource={transformedData}
            pagination={false}
            showHeader={false} // 隐藏表头
            rowKey='field'
            scroll={{
                x: 100,
                y: 300
            }}
        />
    )
}

export default App
