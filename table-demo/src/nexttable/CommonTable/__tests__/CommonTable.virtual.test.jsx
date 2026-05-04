import React from 'react'
import {
    fireEvent,
    render,
    screen,
    waitFor
} from '@testing-library/react'

import CommonTable from '../CommonTable'
import { getNewColumns } from '../utils'

const createRows = (count = 6) =>
    Array.from({ length: count }).map((_, index) => ({
        id: `row-${index + 1}`,
        name: `名称 ${index + 1}`,
        owner: `负责人 ${index + 1}`,
        remark: `备注 ${index + 1}`
    }))

const baseColumns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: 180,
        fixed: 'left'
    },
    {
        title: '负责人',
        dataIndex: 'owner',
        key: 'owner',
        width: 160
    },
    {
        title: '备注',
        dataIndex: 'remark',
        key: 'remark',
        width: 220
    }
]

const DemoBodyRow = ({
    className = '',
    style,
    children,
    ...rest
}) => (
    <tr
        {...rest}
        data-testid='demo-body-row'
        className={className}
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
        data-testid='demo-body-cell'
        className={className}
        style={style}
    >
        {children}
    </td>
)

const renderCommonTable = (props = {}) =>
    render(
        <CommonTable
            column={baseColumns}
            data={createRows(8)}
            pagination={false}
            rowKey='id'
            scroll={{
                y: 240
            }}
            virtual
            virtualThreshold={1}
            {...props}
        />
    )

const openSelectionMenu = async (container) => {
    await waitFor(() => {
        expect(
            container.querySelector(
                '.ant-table-selection-column .ant-table-selection-down, .ant-table-selection-column .ant-dropdown-trigger'
            )
        ).toBeTruthy()
    })

    const trigger = container.querySelector(
        '.ant-table-selection-column .ant-table-selection-down, .ant-table-selection-column .ant-dropdown-trigger'
    )

    fireEvent.click(trigger)
}

const closeSelectionMenu = () => {
    fireEvent.click(document.body)
}

describe('CommonTable virtual support', () => {
    test('applies style to both legacy and virtual table wrappers', async () => {
        const style = {
            borderRadius: '8px',
            border: '1px solid rgb(145, 213, 255)'
        }

        const { container, unmount } = renderCommonTable({
            style
        })

        await waitFor(() => {
            expect(
                container.querySelector('.ant-table-wrapper')
            ).toHaveStyle(style)
        })

        unmount()

        const legacyRender = render(
            <CommonTable
                column={baseColumns}
                data={createRows(4)}
                pagination={false}
                rowKey='id'
                scroll={{
                    y: 240
                }}
                style={style}
            />
        )

        await waitFor(() => {
            expect(
                legacyRender.container.querySelector(
                    '.ant-table-wrapper'
                )
            ).toHaveStyle(style)
        })
    })

    test('keeps selection menu available when columnTitle is provided', async () => {
        const { container } = renderCommonTable({
            rowSelection: {
                columnTitle: '选择项',
                selections: true,
                selectedRowKeys: [],
                onChange() {}
            }
        })

        expect(screen.getAllByText('选择项').length).toBeGreaterThan(0)

        await openSelectionMenu(container)

        await waitFor(() => {
            expect(screen.getByText('全选')).toBeInTheDocument()
            expect(screen.getByText('反选')).toBeInTheDocument()
            expect(screen.getByText('清空')).toBeInTheDocument()
        })

        closeSelectionMenu()
    })

    test('onSelectInvert only works on selectable rows and syncs with onChange', async () => {
        const onChange = vi.fn()
        const onSelectInvert = vi.fn()
        const { container } = renderCommonTable({
            rowSelection: {
                selections: true,
                selectedRowKeys: ['row-1'],
                getCheckboxProps: (record) => ({
                    disabled: record.id === 'row-2'
                }),
                onChange,
                onSelectInvert
            }
        })

        await openSelectionMenu(container)

        await waitFor(() => {
            expect(screen.getByText('反选')).toBeInTheDocument()
        })

        fireEvent.click(screen.getByText('反选'))

        await waitFor(() => {
            expect(onSelectInvert).toHaveBeenCalledWith([
                'row-3',
                'row-4',
                'row-5',
                'row-6',
                'row-7',
                'row-8'
            ])
        })

        expect(onChange).toHaveBeenCalledWith(
            ['row-3', 'row-4', 'row-5', 'row-6', 'row-7', 'row-8'],
            expect.arrayContaining([
                expect.objectContaining({ id: 'row-3' }),
                expect.objectContaining({ id: 'row-8' })
            ])
        )

        closeSelectionMenu()
    })

    test('supports custom selections and hideDefaultSelections with selectable keys only', async () => {
        const customSelect = vi.fn()
        const { container } = renderCommonTable({
            rowSelection: {
                hideDefaultSelections: true,
                selections: [
                    {
                        key: 'pick-enabled',
                        text: '仅选择可选项',
                        onSelect: customSelect
                    }
                ],
                getCheckboxProps: (record) => ({
                    disabled: ['row-2', 'row-5'].includes(record.id)
                }),
                selectedRowKeys: [],
                onChange() {}
            }
        })

        await openSelectionMenu(container)

        await waitFor(() => {
            expect(
                screen.getByText('仅选择可选项')
            ).toBeInTheDocument()
        })

        expect(screen.queryByText('全选')).not.toBeInTheDocument()
        expect(screen.queryByText('反选')).not.toBeInTheDocument()
        expect(screen.queryByText('清空')).not.toBeInTheDocument()

        fireEvent.click(screen.getByText('仅选择可选项'))

        expect(customSelect).toHaveBeenCalledWith([
            'row-1',
            'row-3',
            'row-4',
            'row-6',
            'row-7',
            'row-8'
        ])

        closeSelectionMenu()
    })

    test('supports components.body.row and components.body.cell in virtual mode with fixed cells', async () => {
        const { container } = renderCommonTable({
            components: {
                body: {
                    row: DemoBodyRow,
                    cell: DemoBodyCell
                }
            }
        })

        await waitFor(() => {
            expect(
                screen.getAllByTestId('demo-body-row').length
            ).toBeGreaterThan(0)
            expect(
                screen.getAllByTestId('demo-body-cell').length
            ).toBeGreaterThan(0)
        })

        const bodyCells = screen.getAllByTestId('demo-body-cell')

        expect(
            bodyCells.some((cell) =>
                cell.className.includes('wx__virtual__fixed-left')
            )
        ).toBe(true)
    })

    test('does not remove width from fixed columns when auto-fill cannot find a non-fixed target', () => {
        const nextColumns = getNewColumns(
            {
                props: {
                    scroll: {}
                },
                tableId: 'test-table'
            },
            [
                {
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name',
                    width: 220,
                    fixed: 'left',
                    show: true,
                    isOperateColumn: false,
                    render: () => null,
                    _render: null
                },
                {
                    title: '负责人',
                    dataIndex: 'owner',
                    key: 'owner',
                    width: 120,
                    fixed: 'left',
                    show: true,
                    isOperateColumn: false,
                    render: () => null,
                    _render: null
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                    key: 'operation',
                    width: 180,
                    fixed: 'right',
                    show: true,
                    isOperateColumn: true,
                    render: () => null,
                    _render: null
                },
                {
                    title: '更新时间',
                    dataIndex: 'updatedAt',
                    key: 'updatedAt',
                    show: false,
                    isOperateColumn: false,
                    render: () => null,
                    _render: null
                }
            ],
            () => {}
        )

        expect(nextColumns[0].width).toBe(220)
        expect(nextColumns[1].width).toBe(120)
        expect(nextColumns[2].width).toBe(180)
    })
})
