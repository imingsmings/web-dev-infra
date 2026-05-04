import React from 'react'
import { Table } from 'antd'
import injectIntl from '../shared/injectIntl'
import nanoid from '../shared/nanoid'
import {
    TABLE_PREFIX,
    CLASSNAME,
    BASE_ROW_SELECTION,
    computeFixedWidth,
    needSorterAndEllipsis,
    hasTableSorter,
    sorterFn,
    getShouldScrollY,
    getElementDistsanceToTop,
    getExtraRenderConidtions,
    ResizeEevent,
    ObserveResizeElement,
    handleMouseMoveToSetTitle,
    handleBlurDelegation,
    columnShallowEqual,
    isFunction,
    isBoolean,
    isDefined,
    isEqual,
    isString,
    makeColumnsWidthMap,
    getNewColumns,
    getColumnRealKey,
    handleNextColumns,
    resetColumns,
    renderColumn,
    getServerSideSorterType,
    handleSwapCheck,
    getIsResizable,
    getIsOperationColumn,
    functionReturnNull,
    getColumnClassName
} from './utils'
import Icon from '../shared/icons'
import Swap from './swap'
import ResizableTitle from './resizable'
import { renderVirtualTableEngine } from './virtual'

class CommonTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollY: 0,
            column: [],
            searchText: '',
            searchedColumn: '',
            resized: false,
            swapCheckedAll: true
        }
        this.tableId = `${TABLE_PREFIX}${nanoid({ letter: true })}`
        this.tableRef = React.createRef()
        this.virtualTableRef = React.createRef()
        this.top = 0
        this.resizeEvent = ResizeEevent(this.setScrollY)
        this.observer = null
        this.onMouseMove = handleMouseMoveToSetTitle()
        this.onBlur = handleBlurDelegation(this.onJumpPage)
        this.isLocaled = this.props.isLocaled || false
        this.widthMap = null
        this.dragging = null
    }

    componentDidMount() {
        this.init()
    }

    componentWillUnmount() {
        this.resizeEvent.remove()
        this.observer && this.observer.disconnect()
        this.widthMap = null
    }

    componentDidUpdate() {
        const top = getElementDistsanceToTop(this.tableRef.current)
        if (top === this.top) return
        this.setScrollY()
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (!columnShallowEqual(nextProps.column || [], this.props.column || [])) {
            this.transformColumn(nextProps.column, true)
        }
    }

    init = () => {
        this.setScrollY()
        this.transformColumn(this.props.column || [], false)
        this.resizeEvent.add()
        this.observe()
    }

    setScrollY = () => {
        const { h, top } = getShouldScrollY(this.tableRef.current, this.props.extraHeight || 0)

        this.setState({
            scrollY: h
        })

        this.top = top
    }

    transformColumn = (column, isUpdate) => {
        const newColumns = this._transform(column)

        this.widthMap = makeColumnsWidthMap(column)

        this.setState({
            column: newColumns,
            swapCheckedAll: newColumns.filter((col) => col.show).length === newColumns.length
        })
    }

    _transform = (columns) => {
        const tableSorter = hasTableSorter(this.props.sorter)
        const newColumns = columns.map((column) => {
            const isSorterAndSearch = tableSorter && needSorterAndEllipsis(column)
            isSorterAndSearch && (column.sorter = sorterFn(column))
            column.isOperateColumn = getIsOperationColumn(column)
            column._render = column.render || null
            column.render = renderColumn(column, this.tableId)
            column.defaultWidth = column.width || null
            column.titleText = this.getColumnTitleProps(column.title, this.isLocaled)
            column.resizable = getIsResizable(this.props.resizable, column)
            column.show = isDefined(column.show) ? column.show : true
            column.className = getColumnClassName(column)

            const columnKey = getColumnRealKey(column)
            if (this.widthMap && this.widthMap.has(columnKey)) {
                const existignColumn = this.widthMap.get(columnKey)
                column.width = existignColumn.current
                column.defaultWidth = existignColumn.default
            }

            if (Array.isArray(column.children)) {
                column.children = this._transform(column.children)
            }

            return column
        })

        return newColumns
    }

    observe = () => {
        this.observer = ObserveResizeElement(this.tableRef.current, this.setScrollY)
    }

    renderFooterExtra = (props) => {
        const { footerExtra, footerExtraStyle } = this.props
        const [notShowAll, condition] = getExtraRenderConidtions(props)

        return (
            <div
                className={this.getFooterClassName(props)}
                style={footerExtraStyle || {}}>
                {notShowAll ? null : (
                    <div className='mr-10 flex-fc'>
                        {this.renderExtraIcon(condition.showIcon)}
                        {this.renderExtraPagniation(condition.showPage, props)}
                        {this.renderExtraSelection(condition.showSelect, props)}
                    </div>
                )}
                <div className={CLASSNAME.FOOTER_EXTEA}>{footerExtra || null}</div>
            </div>
        )
    }

    getFooterClassName = (props) => {
        const { pagination } = props
        return CLASSNAME.FOOTER(pagination)
    }

    renderExtraIcon = (show) => {
        if (!show) {
            return null
        }

        return <Icon status='info' />
    }

    renderExtraPagniation = (show, props) => {
        if (!show) {
            return null
        }

        return (
            <span>
                {`共计 `}
                <span className='primary-text footer-num'>
                    {props.pagination.total || props.dataSource.length}
                </span>
                {` 条`}
            </span>
        )
    }

    renderExtraSelection = (show, props) => {
        if (!show) {
            return null
        }

        return (
            <>
                <span className='ml-8 mr-8'>
                    {`已选择 `}
                    <span className='primary-text footer-num'>
                        {props.rowSelection.selectedRowKeys.length}
                    </span>
                    {` 条`}
                </span>
                <span
                    className='primary-text pointer'
                    onClick={this.clearSelection}>
                    清空选项
                </span>
            </>
        )
    }

    clearSelection = () => {
        const { rowSelection } = this.props
        if (!rowSelection || !rowSelection.onChange) return
        rowSelection.onChange([], [])
        if (rowSelection.onSelectNone) {
            rowSelection.onSelectNone()
        }
    }

    getTableDataProps = () => {
        return this.props.data || []
    }

    getPaginationProps = () => {
        const { pagination } = this.props

        if (!isDefined(pagination)) return false

        if (isBoolean(pagination)) return pagination

        return {
            ...pagination,
            showTotal: functionReturnNull,
            className: CLASSNAME.PAGINATION(pagination),
            showQuickJumper: true,
            size: 'small',
            pageSize: pagination.onlyShowTotal ? Infinity : pagination.pageSize
        }
    }

    getTableClassNameProps = (tableData) => {
        const _internal = CLASSNAME.WRAPPER
        const _empty = tableData.length === 0 ? `${CLASSNAME.EMPTY}` : ''
        const _custom = this.props.className || ''

        return `${_internal} ${_empty} ${_custom}`
    }

    getRowKeyProps = () => {
        const { rowKey } = this.props

        if (isDefined(rowKey)) return rowKey

        return (_, index) => index
    }

    getScrollProps = () => {
        const srcoll = this.props.scroll || {}
        const scrollX = computeFixedWidth(this.state.column || [])
        const { x, y } = srcoll

        return {
            x: isDefined(x) ? x : scrollX,
            y: isDefined(y) ? y : this.state.scrollY
        }
    }

    getColumnTitleProps = (title, isLocaled) => {
        if (isString(title) && !isLocaled) {
            return this.props.intl.formatMessage({ id: title })
        }

        return title
    }

    getRowSelectionProps = () => {
        const { rowSelection } = this.props

        if (!isDefined(rowSelection)) {
            return null
        }

        if (isDefined(rowSelection.columnWidth)) {
            return rowSelection
        }

        return {
            ...rowSelection,
            ...BASE_ROW_SELECTION
        }
    }

    getComponents = () => {
        const customComponents = this.props.components || {}
        const customHeader = customComponents.header || {}

        return {
            ...customComponents,
            header: {
                ...customHeader,
                cell: ResizableTitle
            }
        }
    }

    onJumpPage = (pageNum) => {
        const { pagination } = this.props
        const maxPageNum = Math.ceil(pagination.total / pagination.pageSize)

        if (pageNum > maxPageNum) {
            pageNum = maxPageNum
        }

        if (pageNum <= 0) {
            pageNum = 1
        }

        this.onPageChange({
            ...this.props.pagination,
            current: pageNum
        })
    }

    onPageChange = (page, filters, sorter, extra) => {
        const { onChange, pagination } = this.props

        if (!isFunction(onChange)) return

        const { virtual, scrollToFirstRowOnChange } = this.props

        if (
            virtual &&
            scrollToFirstRowOnChange !== false &&
            this.virtualTableRef.current &&
            this.virtualTableRef.current.scrollToRow
        ) {
            this.virtualTableRef.current.scrollToRow(0)
        }

        const order = getServerSideSorterType(sorter)

        if (!isEqual(pagination.pageSize, page.pageSize)) {
            onChange(
                {
                    ...page,
                    current: 1
                },
                filters,
                { ...sorter, order },
                extra
            )
        } else if (!isEqual(pagination.current, page.current)) {
            onChange(page, filters, { ...sorter, order }, extra)
        } else if (sorter && sorter.field) {
            const column = this.state.column.find((item) => getColumnRealKey(item) == sorter.field)
            if (column && column.sorter === true) {
                onChange(page, filters, { ...sorter, order }, extra)
            }
        }
    }

    getTableProps = () => {
        const dataSource = this.getTableDataProps()
        const pagination = this.getPaginationProps()
        const rowKey = this.getRowKeyProps()
        const scroll = this.getScrollProps()
        const rowClassName = CLASSNAME.ROWCLASSNAME.bind(null, this.props.rowClassName)
        const rowSelection = this.getRowSelectionProps()
        const className = this.getTableClassNameProps(dataSource)
        const components = this.getComponents()

        return {
            bordered: true,
            size: 'small',
            dataSource,
            pagination,
            rowKey,
            scroll,
            rowSelection,
            className,
            rowClassName,
            onChange: this.onPageChange,
            onShowSizeChange: this.onPageChange,
            loading: this.props.loading || false,
            components
        }
    }

    getTableWrapperProps = () => {
        return {
            className: `${CLASSNAME.CONTAINER} ${this.props.wrapperClassName || ''} pt-re`,
            id: this.tableId,
            onMouseMove: this.onMouseMove,
            onBlur: this.onBlur
        }
    }

    resetWidth = () => {
        const nextColumns = resetColumns(this.state.column, this.widthMap)

        this.setState({
            column: nextColumns,
            resized: false
        })
    }

    onResize = (key, _e, { size }) => {
        this.setState((prev) => {
            const nextColumns = handleNextColumns(
                prev.column,
                key,
                size,
                this.tableId,
                this.widthMap
            )

            return {
                column: nextColumns,
                resized: true
            }
        })
    }

    onSwapCheck = (type, arg, cb) => {
        const partialState = handleSwapCheck(type, arg, this.state.column, cb)

        if (!partialState) return

        this.setState(partialState)
    }

    getRenderColumns = () => {
        return getNewColumns(this, this.state.column, this.onResize)
    }

    getRenderProps = () => {
        const props = this.getTableProps()
        const wrapperProps = this.getTableWrapperProps()
        const renderColumns = this.getRenderColumns()

        return {
            props,
            wrapperProps,
            renderColumns
        }
    }

    scrollToRow = (index, options) => {
        if (
            this.virtualTableRef.current &&
            this.virtualTableRef.current.scrollToRow
        ) {
            return this.virtualTableRef.current.scrollToRow(index, options)
        }

        return false
    }

    scrollToKey = (rowKey, options) => {
        if (
            this.virtualTableRef.current &&
            this.virtualTableRef.current.scrollToKey
        ) {
            return this.virtualTableRef.current.scrollToKey(rowKey, options)
        }

        return false
    }

    renderLegacyTable = (props, renderColumns) => {
        return (
            <Table
                {...this.props}
                {...props}>
                {renderColumns.map((columnProps) => {
                    return <Table.Column {...columnProps} />
                })}
            </Table>
        )
    }

    renderTableContent = (props, renderColumns) => {
        return renderVirtualTableEngine({
            commonTableProps: this.props,
            tableProps: props,
            columns: renderColumns,
            virtualTableRef: this.virtualTableRef,
            renderLegacyTable: () =>
                this.renderLegacyTable(props, renderColumns)
        })
    }

    render() {
        const { props, wrapperProps, renderColumns } = this.getRenderProps()
        return (
            <div
                {...wrapperProps}
                ref={this.tableRef}>
                {this.renderTableContent(props, renderColumns)}
                {this.renderFooterExtra(props)}
                <Swap
                    swap={this.props.swap}
                    onCheck={this.onSwapCheck}
                    column={this.state.column}
                    tableId={this.tableId}
                    swapCheckedAll={this.state.swapCheckedAll}
                />
            </div>
        )
    }
}

export default injectIntl(CommonTable)
