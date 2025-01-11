import React from 'react'
import { Table, Input, Button, Icon } from 'antd'

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        sex: 1,
        address: 'New York No. 1 Lake Park'
    },
    {
        key: '2',
        name: 'Joe Black',
        age: 42,
        sex: 2,
        address: 'London No. 1 Lake Park'
    },
    {
        key: '3',
        name: 'Jim Green',
        age: 32,
        sex: 1,
        address: 'Sidney No. 1 Lake Park'
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        sex: 2,
        address: 'London No. 2 Lake Park'
    }
]

class App extends React.Component {
    state = {
        searchText: '',
        searchedColumn: ''
    }

    getColumnSearchProps = (dataIndex) => {
        return {
            filterDropdown: ({
                setSelectedKeys,
                selectedKeys,
                confirm,
                clearFilters
            }) => (
                <div style={{ padding: 8 }}>
                    <Input
                        ref={(node) => {
                            this.searchInput = node
                        }}
                        placeholder={`Search ${dataIndex}`}
                        value={selectedKeys[0]}
                        onChange={(e) =>
                            setSelectedKeys(
                                e.target.value
                                    ? [e.target.value]
                                    : []
                            )
                        }
                        onPressEnter={() =>
                            this.handleSearch(
                                selectedKeys,
                                confirm,
                                dataIndex
                            )
                        }
                        style={{
                            width: 188,
                            marginBottom: 8,
                            display: 'block'
                        }}
                    />
                    <Button
                        type='primary'
                        onClick={() =>
                            this.handleSearch(
                                selectedKeys,
                                confirm,
                                dataIndex
                            )
                        }
                        icon='search'
                        size='small'
                        style={{
                            width: 90,
                            marginRight: 8
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            this.handleReset(clearFilters)
                        }
                        size='small'
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                </div>
            ),
            filterIcon: (filtered) => (
                <Icon
                    type='search'
                    style={{
                        color: filtered
                            ? '#1890ff'
                            : undefined
                    }}
                />
            ),
            onFilter: (value, record) => {
                return record[`__${dataIndex}__search__`]
                    .toString()
                    .toLowerCase()
                    .includes(value.toLowerCase())
            },
            onFilterDropdownVisibleChange: (visible) => {
                if (visible) {
                    setTimeout(() =>
                        this.searchInput.select()
                    )
                }
            }
        }
    }

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm()
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex
        })
    }

    handleReset = (clearFilters) => {
        clearFilters()
        this.setState({ searchText: '' })
    }

    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                width: '30%',
                render: (text, record, index) => {
                    record.__index = index
                    return (
                        <div className='__name__'>
                            {text}
                        </div>
                    )
                },
                ...this.getColumnSearchProps('name')
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                width: '20%',
                render: (text, record, index) => {
                    record.__index = index
                    return (
                        <div className='__age__'>
                            {text}
                        </div>
                    )
                },
                ...this.getColumnSearchProps('age')
            },
            {
                title: 'Sex',
                dataIndex: 'sex',
                key: 'sex',
                width: '20%',
                render: (text, record, index) => {
                    let res = null
                    if (text == 1) {
                        res = '男'
                    } else if (text == 2) {
                        res = '女'
                    }

                    record.__sex__search__ = res

                    return res
                },
                ...this.getColumnSearchProps('sex')
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                render: (text, record, index) => {
                    record.__index = index
                    return (
                        <div className='__address__'>
                            {text}
                        </div>
                    )
                },
                ...this.getColumnSearchProps('address')
            }
        ]
        return (
            <Table
                columns={columns}
                dataSource={data}
            />
        )
    }
}

export default App
