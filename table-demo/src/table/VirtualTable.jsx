import React from 'react'
import { Table, Checkbox, Dropdown, Menu, Spin } from 'antd'

const DEFAULT_ROW_HEIGHT = 54
const DEFAULT_OVERSCAN = 8
const DEFAULT_THRESHOLD = 80
const DEFAULT_CHILDREN_COLUMN = 'children'
const SELECTION_COLUMN_WIDTH = 60

const warnedMessages = {}

const warnOnce = (message) => {
    if (warnedMessages[message]) {
        return
    }

    warnedMessages[message] = true

    if (typeof console !== 'undefined' && console.warn) {
        console.warn(message)
    }
}

const hasNestedColumns = (columns = []) =>
    columns.some(
        (column) =>
            Array.isArray(column.children) &&
            column.children.length > 0
    )

const hasLocalProcessingColumn = (columns = []) =>
    columns.some((column) => {
        if (column.sorter || column.filters || column.onFilter) {
            return true
        }

        if (Array.isArray(column.children) && column.children.length) {
            return hasLocalProcessingColumn(column.children)
        }

        return false
    })

const hasTreeData = (dataSource = [], childrenColumnName) =>
    dataSource.some((record) => {
        const children = record && record[childrenColumnName]
        return Array.isArray(children) && children.length > 0
    })

const getVisibleRange = ({
    scrollTop,
    rowHeight,
    containerHeight,
    overscan,
    total
}) => {
    const safeRowHeight = Math.max(1, rowHeight)
    const safeContainerHeight = Math.max(safeRowHeight, containerHeight)
    const visibleCount = Math.ceil(safeContainerHeight / safeRowHeight)
    const visibleStart = Math.max(
        0,
        Math.floor(scrollTop / safeRowHeight)
    )
    const visibleEnd = Math.min(total, visibleStart + visibleCount)
    const start = Math.max(0, visibleStart - overscan)
    const end = Math.min(total, visibleEnd + overscan)

    return {
        start,
        end,
        visibleStart,
        visibleEnd,
        visibleCount
    }
}

const getColumnKey = (column, index) =>
    column.key || column.dataIndex || `column-${index}`

const normalizeFixedValue = (fixed) => {
    if (fixed === 'left' || fixed === true) {
        return 'left'
    }

    if (fixed === 'right') {
        return 'right'
    }

    return null
}

const normalizeColumnWidth = (column) => {
    if (typeof column.width === 'number') {
        return column.width
    }

    const parsedWidth = Number(column.width)

    if (Number.isFinite(parsedWidth) && parsedWidth > 0) {
        return parsedWidth
    }

    return 160
}

const hasExplicitColumnWidth = (column) => {
    if (typeof column.width === 'number') {
        return column.width > 0
    }

    const parsedWidth = Number(column.width)

    return Number.isFinite(parsedWidth) && parsedWidth > 0
}

const hasFixedColumnWithoutWidth = (columns = []) =>
    columns.some((column) => {
        if (
            normalizeFixedValue(column.fixed) &&
            !hasExplicitColumnWidth(column)
        ) {
            return true
        }

        if (Array.isArray(column.children) && column.children.length) {
            return hasFixedColumnWithoutWidth(column.children)
        }

        return false
    })

const getColumnGeometrySignature = (column, index) =>
    [
        getColumnKey(column, index),
        normalizeFixedValue(
            column.__virtualFixed || column.fixed
        ) || 'none',
        column.width || column.__virtualWidth || 0
    ].join(':')

const decorateFixedColumns = (columns = []) => {
    let leftOffset = 0
    let lastLeftIndex = -1

    const nextColumns = columns.map((column) => {
        const fixed = normalizeFixedValue(
            column.__virtualFixed || column.fixed
        )
        const width = column.width || column.__virtualWidth || 0
        const nextColumn = {
            ...column,
            __virtualFixed: fixed,
            __virtualFixedOffset: null,
            __virtualFixedBoundary: null,
            __virtualAdjacentBoundary: null
        }

        if (fixed === 'left') {
            nextColumn.__virtualFixedOffset = leftOffset
            leftOffset += width
            lastLeftIndex += 1
        }

        return nextColumn
    })

    let rightOffset = 0
    let firstRightIndex = -1

    for (let index = nextColumns.length - 1; index >= 0; index -= 1) {
        const column = nextColumns[index]
        const width = column.width || column.__virtualWidth || 0

        if (column.__virtualFixed === 'right') {
            column.__virtualFixedOffset = rightOffset
            rightOffset += width
            firstRightIndex = index
        }
    }

    if (lastLeftIndex >= 0 && nextColumns[lastLeftIndex]) {
        nextColumns[lastLeftIndex].__virtualFixedBoundary = 'left'
    }

    if (firstRightIndex >= 0 && nextColumns[firstRightIndex]) {
        nextColumns[firstRightIndex].__virtualFixedBoundary = 'right'
    }

    if (firstRightIndex > 0 && nextColumns[firstRightIndex - 1]) {
        nextColumns[firstRightIndex - 1].__virtualAdjacentBoundary = 'before-right'
    }

    return nextColumns
}

const getFixedCellClassName = (column, baseClassName = '') => {
    const classNames = []

    if (baseClassName) {
        classNames.push(baseClassName)
    }

    if (column.__virtualFixed === 'left') {
        classNames.push('wx__virtual__fixed-left')
    }

    if (column.__virtualFixed === 'right') {
        classNames.push('wx__virtual__fixed-right')
    }

    if (column.__virtualFixedBoundary === 'left') {
        classNames.push('wx__virtual__fixed-left-last')
    }

    if (column.__virtualFixedBoundary === 'right') {
        classNames.push('wx__virtual__fixed-right-first')
    }

    if (column.__virtualAdjacentBoundary === 'before-right') {
        classNames.push('wx__virtual__before-fixed-right')
    }

    return classNames.join(' ').trim()
}

const joinCellClassName = (...classNames) =>
    classNames.filter(Boolean).join(' ').trim()

const getAlignmentClassName = (align) => {
    if (align === 'center') {
        return 'wx__virtual__align-center'
    }

    if (align === 'right') {
        return 'wx__virtual__align-right'
    }

    return 'wx__virtual__align-left'
}

const getColumnCellStyle = (column) => {
    const width = column.width || column.__virtualWidth

    if (!(Number.isFinite(width) && width > 0)) {
        return {
            textAlign: column.align || 'left'
        }
    }

    return {
        width,
        minWidth: width,
        maxWidth: width,
        textAlign: column.align || 'left'
    }
}

const getFixedCellStyle = (column) => {
    if (!column.__virtualFixed) {
        return null
    }

    if (column.__virtualFixed === 'left') {
        return {
            position: 'sticky',
            left: column.__virtualFixedOffset || 0
        }
    }

    if (column.__virtualFixed === 'right') {
        return {
            position: 'sticky',
            right: column.__virtualFixedOffset || 0
        }
    }

    return null
}

const getTableSizeStyle = (tableSize) => ({
    width: tableSize.width,
    minWidth: tableSize.minWidth
})

const getBodyViewportStyle = (scrollY) => ({
    maxHeight: scrollY
})

const getBodyCanvasStyle = (totalHeight, tableSize) => ({
    height: totalHeight,
    minWidth: tableSize.minWidth
})

const getPositionedTableStyle = (
    rangeStart,
    rowHeight,
    tableSize
) => ({
    position: 'absolute',
    top: rangeStart * rowHeight,
    left: 0,
    tableLayout: 'fixed',
    ...getTableSizeStyle(tableSize)
})

class VirtualHeader extends React.PureComponent {
    render() {
        const {
            columns,
            renderHeaderCell,
            tableSize,
            className,
            headerRef,
            containerStyle
        } = this.props

        return (
            <div
                ref={headerRef}
                className={className}
                style={{
                    overflow: 'hidden',
                    ...(containerStyle || {})
                }}
            >
                <table
                    style={{
                        ...getTableSizeStyle(tableSize),
                        tableLayout: 'fixed'
                    }}
                >
                    <colgroup>
                        {columns.map((column) => (
                            <col
                                key={column.__virtualKey || column.key}
                                style={{
                                    width:
                                        column.width ||
                                        column.__virtualWidth
                                }}
                            />
                        ))}
                    </colgroup>
                    <thead className='ant-table-thead'>
                        <tr>{columns.map(renderHeaderCell)}</tr>
                    </thead>
                </table>
            </div>
        )
    }
}

class VirtualBody extends React.PureComponent {
    render() {
        const {
            bodyRef,
            className,
            columns,
            components,
            dataSource,
            handleBodyScroll,
            onRow,
            rangeEnd,
            rangeStart,
            renderBodyCell,
            rowClassName,
            rowHeight,
            rowKeyGetter,
            rows,
            scrollY,
            tableSize,
            totalHeight,
            bodyStyle
        } = this.props
        const bodyComponents = components && components.body
        const BodyRow =
            bodyComponents && bodyComponents.row
                ? bodyComponents.row
                : 'tr'

        return (
            <div
                ref={bodyRef}
                className={className}
                style={{
                    maxHeight: scrollY,
                    overflowX: 'auto',
                    overflowY: 'auto',
                    ...(bodyStyle || {})
                }}
                onScroll={handleBodyScroll || undefined}
            >
                <div
                    style={{
                        position: 'relative',
                        ...getBodyCanvasStyle(totalHeight, tableSize)
                    }}
                >
                    <table
                        style={getPositionedTableStyle(
                            rangeStart,
                            rowHeight,
                            tableSize
                        )}
                    >
                        <colgroup>
                            {columns.map((column) => (
                                <col
                                    key={column.__virtualKey || column.key}
                                    style={{
                                        width:
                                            column.width ||
                                            column.__virtualWidth
                                    }}
                                />
                            ))}
                        </colgroup>
                        <tbody className='ant-table-tbody'>
                            {rows.map((record, visibleIndex) => {
                                const dataIndex =
                                    rangeStart + visibleIndex
                                const rowProps = onRow
                                    ? onRow(record, dataIndex) || {}
                                    : {}

                                return (
                                    <BodyRow
                                        key={rowKeyGetter(
                                            record,
                                            dataIndex
                                        )}
                                        {...rowProps}
                                        className={`ant-table-row ant-table-row-level-0 ${
                                            rowClassName
                                                ? rowClassName(
                                                      record,
                                                      dataIndex
                                                  )
                                                : ''
                                        } ${rowProps.className || ''}`.trim()}
                                        style={{
                                            ...(rowProps.style || {})
                                        }}
                                    >
                                        {columns.map((column) =>
                                            renderBodyCell(
                                                column,
                                                record,
                                                dataIndex
                                                )
                                        )}
                                    </BodyRow>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

class VirtualTable extends React.PureComponent {
    constructor(props) {
        super(props)

        this.bodyRef = React.createRef()
        this.headerRef = React.createRef()
        this.rootTableRef = React.createRef()
        this.scrollFrame = null
        this.latestScrollTop = 0
        this.flattenedColumnsCache = null
        this.lastVisibleRange = null
        this.selectedKeyMapCache = null
        this.tableSizeCache = null
        this.visibleRowsCache = null
        this.stretchContainerWidth = 0
        this.bodyScrollbarWidth = 0

        this.state = this.createRangeState(props, 0)
    }

    componentDidMount() {
        this.syncStretchContainerWidth()
        const scrollbarWidthChanged =
            this.syncBodyScrollbarWidth()
        this.syncHeaderScrollLeft()
        this.updateScrollPositionClasses()
        this.notifyVisibleRangeChange(this.state, true)

        if (
            this.props.stretchToContainer ||
            scrollbarWidthChanged
        ) {
            this.forceUpdate()
        }
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.dataSource !== this.props.dataSource ||
            prevProps.dataChangeBehavior !==
                this.props.dataChangeBehavior ||
            prevProps.dataChangeKey !== this.props.dataChangeKey ||
            prevProps.scroll !== this.props.scroll ||
            prevProps.rowHeight !== this.props.rowHeight ||
            prevProps.overscan !== this.props.overscan ||
            prevProps.dynamicOverscan !==
                this.props.dynamicOverscan ||
            prevProps.virtual !== this.props.virtual ||
            prevProps.virtualThreshold !==
                this.props.virtualThreshold
        ) {
            const bodyNode = this.bodyRef.current
            const nextScrollTop = this.getNextScrollTopAfterPropsChange(
                prevProps,
                bodyNode
            )

            if (
                bodyNode &&
                bodyNode.scrollTop !== nextScrollTop
            ) {
                bodyNode.scrollTop = nextScrollTop
            }

            this.latestScrollTop = nextScrollTop
            this.syncRangeState()
        }

        this.syncHeaderScrollLeft()
        this.updateScrollPositionClasses()

        if (
            this.props.stretchToContainer &&
            this.syncStretchContainerWidth()
        ) {
            this.forceUpdate()
            return
        }

        if (this.syncBodyScrollbarWidth()) {
            this.forceUpdate()
        }
    }

    componentWillUnmount() {
        if (
            this.scrollFrame !== null &&
            typeof window !== 'undefined' &&
            window.cancelAnimationFrame
        ) {
            window.cancelAnimationFrame(this.scrollFrame)
        }
    }

    getChildrenColumnName = () =>
        this.props.childrenColumnName || DEFAULT_CHILDREN_COLUMN

    getUnsupportedReason = () => {
        const {
            columns = [],
            dataSource = [],
            expandedRowRender,
            pagination
        } = this.props

        if (hasNestedColumns(columns)) {
            return 'VirtualTable fallback: grouped headers are not supported in this first custom virtual table implementation.'
        }

        if (hasFixedColumnWithoutWidth(columns)) {
            return 'VirtualTable fallback: fixed columns require explicit width in virtual mode.'
        }

        if (expandedRowRender) {
            return 'VirtualTable fallback: expanded rows are not supported in this first custom virtual table implementation.'
        }

        if (pagination !== false && pagination !== undefined) {
            return 'VirtualTable fallback: built-in pagination is not supported. Use pagination={false} with virtual scrolling.'
        }

        if (hasLocalProcessingColumn(columns)) {
            return 'VirtualTable fallback: local sorter/filter columns are not supported in this first custom virtual table implementation.'
        }

        if (
            hasTreeData(dataSource, this.getChildrenColumnName())
        ) {
            return 'VirtualTable fallback: tree data is not supported in this first custom virtual table implementation.'
        }

        return ''
    }

    isVirtualEnabled = () => {
        const {
            virtual = true,
            scroll = {},
            dataSource = [],
            virtualThreshold = 80
        } = this.props

        if (!virtual || !scroll || !scroll.y) {
            return false
        }

        if (!Array.isArray(dataSource)) {
            return false
        }

        if (dataSource.length <= virtualThreshold) {
            return false
        }

        if (this.getUnsupportedReason()) {
            return false
        }

        return true
    }

    getRowHeight = () =>
        Math.max(1, Number(this.props.rowHeight) || DEFAULT_ROW_HEIGHT)

    getOverscan = () =>
        Math.max(0, Number(this.props.overscan) || DEFAULT_OVERSCAN)

    isDynamicOverscanEnabled = () =>
        this.props.dynamicOverscan !== false

    getDataChangeBehavior = () => {
        const { dataChangeBehavior } = this.props

        if (
            dataChangeBehavior === 'reset' ||
            dataChangeBehavior === 'preserve' ||
            dataChangeBehavior === 'auto'
        ) {
            return dataChangeBehavior
        }

        return 'auto'
    }

    getUpdateThreshold = () =>
        Math.max(1, this.getOverscan() - 1)

    getScrollY = () => {
        const { scroll = {} } = this.props
        const height = Number(scroll.y)

        if (Number.isFinite(height) && height > 0) {
            return height
        }

        return 0
    }

    syncStretchContainerWidth = () => {
        const containerNode =
            this.bodyRef.current || this.rootTableRef.current

        if (!containerNode) {
            return false
        }

        const nextWidth = Math.max(
            0,
            containerNode.clientWidth || 0
        )

        if (
            Math.abs(nextWidth - this.stretchContainerWidth) <= 1
        ) {
            return false
        }

        this.stretchContainerWidth = nextWidth
        return true
    }

    syncBodyScrollbarWidth = () => {
        const bodyNode = this.bodyRef.current

        if (!bodyNode) {
            return false
        }

        const nextWidth = Math.max(
            0,
            (bodyNode.offsetWidth || 0) -
                (bodyNode.clientWidth || 0)
        )

        if (
            Math.abs(nextWidth - this.bodyScrollbarWidth) <= 1
        ) {
            return false
        }

        this.bodyScrollbarWidth = nextWidth
        return true
    }

    syncHeaderScrollLeft = () => {
        const bodyNode = this.bodyRef.current
        const headerNode = this.headerRef.current

        if (!bodyNode || !headerNode) {
            return
        }

        const nextScrollLeft = bodyNode.scrollLeft || 0

        if (Math.abs((headerNode.scrollLeft || 0) - nextScrollLeft) <= 1) {
            return
        }

        headerNode.scrollLeft = nextScrollLeft
    }

    getLocale = () => this.props.locale || {}

    getEmptyText = () => {
        const { emptyText } = this.getLocale()

        if (typeof emptyText === 'function') {
            return emptyText()
        }

        if (emptyText !== undefined && emptyText !== null) {
            return emptyText
        }

        return 'No Data'
    }

    getColumnsSignature = (columns = this.props.columns || []) =>
        columns
            .map((column, index) =>
                getColumnGeometrySignature(column, index)
            )
            .join('|')

    getBaseColumns = () => {
        const columns = this.props.columns || []

        return columns.map((column, index) => ({
            ...column,
            __virtualKey: getColumnKey(column, index),
            __virtualWidth: normalizeColumnWidth(column)
        }))
    }

    getSelectionColumn = () => {
        const { rowSelection } = this.props

        if (!rowSelection) {
            return null
        }

        const selectionColumnWidth =
            Number(rowSelection.columnWidth) > 0
                ? Number(rowSelection.columnWidth)
                : SELECTION_COLUMN_WIDTH

        return {
            key: '__selection__',
            title: rowSelection.columnTitle,
            width: selectionColumnWidth,
            align: 'center',
            __virtualFixed: normalizeFixedValue(
                rowSelection.fixed
            )
        }
    }

    getFlattenedColumns = () => {
        const { columns = [], rowSelection } = this.props
        const columnsSignature = this.getColumnsSignature(columns)
        const selectionColumnWidth = rowSelection
            ? Number(rowSelection.columnWidth) || SELECTION_COLUMN_WIDTH
            : null
        const selectionFixed = rowSelection
            ? normalizeFixedValue(rowSelection.fixed)
            : null

        if (
            this.flattenedColumnsCache &&
            this.flattenedColumnsCache.columnsSignature ===
                columnsSignature &&
            this.flattenedColumnsCache.selectionColumnWidth ===
                selectionColumnWidth &&
            this.flattenedColumnsCache.selectionFixed ===
                selectionFixed &&
            this.flattenedColumnsCache.hasSelection ===
                Boolean(rowSelection)
        ) {
            return this.flattenedColumnsCache.value
        }

        const selectionColumn = this.getSelectionColumn()
        const baseColumns = this.getBaseColumns()
        const flattenedColumns = decorateFixedColumns(
            selectionColumn
                ? [selectionColumn].concat(baseColumns)
                : baseColumns
        )

        this.flattenedColumnsCache = {
            columnsSignature,
            selectionColumnWidth,
            selectionFixed,
            hasSelection: Boolean(rowSelection),
            value: flattenedColumns
        }

        return flattenedColumns
    }

    getTableWidth = (columns) => {
        const widthFromColumns = columns.reduce(
            (sum, column) => sum + (column.width || column.__virtualWidth || 0),
            0
        )
        const configuredX = Number(
            this.props.scroll && this.props.scroll.x
        )

        if (Number.isFinite(configuredX) && configuredX > widthFromColumns) {
            return configuredX
        }

        return widthFromColumns
    }

    getTableSize = (columns) => {
        const configuredX = Number(
            this.props.scroll && this.props.scroll.x
        )
        const stretchToContainer = Boolean(
            this.props.stretchToContainer
        )
        const stretchContainerWidth = stretchToContainer
            ? this.stretchContainerWidth
            : 0
        const columnsSignature = columns
            .map((column, index) =>
                getColumnGeometrySignature(column, index)
            )
            .join('|')

        if (
            this.tableSizeCache &&
            this.tableSizeCache.columnsSignature ===
                columnsSignature &&
            this.tableSizeCache.configuredX === configuredX &&
            this.tableSizeCache.stretchContainerWidth ===
                stretchContainerWidth &&
            this.tableSizeCache.stretchToContainer ===
                stretchToContainer
        ) {
            return this.tableSizeCache.value
        }

        const widthFromColumns = columns.reduce(
            (sum, column) => sum + (column.width || column.__virtualWidth || 0),
            0
        )
        let value = null

        if (Number.isFinite(configuredX) && configuredX > widthFromColumns) {
            value = {
                width: configuredX,
                minWidth: configuredX
            }
        } else if (stretchToContainer) {
            const resolvedWidth =
                stretchContainerWidth > widthFromColumns
                    ? stretchContainerWidth
                    : widthFromColumns
            value = {
                width: resolvedWidth,
                minWidth: resolvedWidth
            }
        } else {
            value = {
                width: widthFromColumns,
                minWidth: widthFromColumns
            }
        }

        this.tableSizeCache = {
            columnsSignature,
            configuredX,
            stretchContainerWidth,
            stretchToContainer,
            value
        }

        return value
    }

    getFixedRegionMetrics = (columns) => {
        const columnsSignature = columns
            .map((column, index) =>
                getColumnGeometrySignature(column, index)
            )
            .join('|')

        if (
            this.fixedRegionMetricsCache &&
            this.fixedRegionMetricsCache.columnsSignature ===
                columnsSignature
        ) {
            return this.fixedRegionMetricsCache.value
        }

        const value = columns.reduce(
            (result, column) => {
                const width =
                    column.width || column.__virtualWidth || 0

                if (column.__virtualFixed === 'left') {
                    result.leftWidth += width
                }

                if (column.__virtualFixed === 'right') {
                    result.rightWidth += width
                }

                return result
            },
            {
                leftWidth: 0,
                rightWidth: 0
            }
        )

        this.fixedRegionMetricsCache = {
            columnsSignature,
            value
        }

        return value
    }

    createRangeState = (props = this.props, scrollTop = 0) => {
        const dataSource = props.dataSource || []
        const total = dataSource.length
        const rowHeight =
            Math.max(1, Number(props.rowHeight) || DEFAULT_ROW_HEIGHT)
        const overscan = this.getEffectiveOverscan(
            scrollTop,
            props
        )
        const scroll = props.scroll || {}
        const containerHeight = Number(scroll.y)
        const range = getVisibleRange({
            scrollTop,
            rowHeight,
            containerHeight: Number.isFinite(containerHeight) && containerHeight > 0
                ? containerHeight
                : rowHeight,
            overscan,
            total
        })

        return {
            rangeEnd: range.end,
            rangeStart: range.start,
            total,
            visibleEnd: range.visibleEnd,
            visibleStart: range.visibleStart,
            overscan
        }
    }

    getEffectiveOverscan = (
        scrollTop,
        props = this.props
    ) => {
        const baseOverscan = Math.max(
            0,
            Number(props.overscan) || DEFAULT_OVERSCAN
        )

        if (!this.isDynamicOverscanEnabled()) {
            return baseOverscan
        }

        const rowHeight = Math.max(
            1,
            Number(props.rowHeight) || DEFAULT_ROW_HEIGHT
        )
        const lastMeasuredScrollTop = Number.isFinite(
            this.lastMeasuredScrollTop
        )
            ? this.lastMeasuredScrollTop
            : scrollTop
        const delta = Math.abs(scrollTop - lastMeasuredScrollTop)
        const deltaRows = Math.ceil(delta / rowHeight)
        const extraOverscan = Math.min(
            baseOverscan * 2,
            Math.ceil(deltaRows / 4)
        )

        this.lastMeasuredScrollTop = scrollTop

        return baseOverscan + extraOverscan
    }

    getNextScrollTopAfterPropsChange = (prevProps, bodyNode) => {
        const currentScrollTop = bodyNode
            ? bodyNode.scrollTop || 0
            : this.latestScrollTop || 0

        if (
            prevProps.dataSource === this.props.dataSource &&
            prevProps.dataChangeBehavior ===
                this.props.dataChangeBehavior &&
            prevProps.dataChangeKey === this.props.dataChangeKey
        ) {
            return currentScrollTop
        }

        const behavior = this.getDataChangeBehavior()

        if (behavior === 'preserve') {
            return currentScrollTop
        }

        if (behavior === 'reset') {
            return 0
        }

        return prevProps.dataChangeKey !== this.props.dataChangeKey
            ? 0
            : currentScrollTop
    }

    shouldUpdateRangeState = (nextRangeState) => {
        const {
            rangeStart,
            rangeEnd,
            total
        } = this.state

        if (nextRangeState.total !== total) {
            return true
        }

        if (rangeEnd <= rangeStart) {
            return true
        }

        if (
            nextRangeState.rangeStart === rangeStart &&
            nextRangeState.rangeEnd === rangeEnd
        ) {
            return false
        }

        const threshold = this.getUpdateThreshold()
        const safeStart = rangeStart + threshold
        const safeEnd = rangeEnd - threshold

        if (
            nextRangeState.visibleStart < safeStart ||
            nextRangeState.visibleEnd > safeEnd
        ) {
            return true
        }
        
        return false
    }

    notifyVisibleRangeChange = (rangeState, force = false) => {
        const { onVisibleRangeChange } = this.props

        if (!onVisibleRangeChange) {
            return
        }

        const nextVisibleRange = {
            start: rangeState.visibleStart,
            end:
                rangeState.visibleEnd > rangeState.visibleStart
                    ? rangeState.visibleEnd - 1
                    : -1
        }

        if (
            !force &&
            this.lastVisibleRange &&
            this.lastVisibleRange.start === nextVisibleRange.start &&
            this.lastVisibleRange.end === nextVisibleRange.end
        ) {
            return
        }

        this.lastVisibleRange = nextVisibleRange
        onVisibleRangeChange(
            nextVisibleRange.start,
            nextVisibleRange.end,
            {
                overscanEnd:
                    rangeState.rangeEnd > rangeState.rangeStart
                        ? rangeState.rangeEnd - 1
                        : -1,
                overscanStart: rangeState.rangeStart,
                rowHeight: this.getRowHeight(),
                scrollTop: this.latestScrollTop,
                total: rangeState.total
            }
        )
    }

    getScrollToOptions = (options) => {
        if (typeof options === 'string') {
            return {
                align: options
            }
        }

        if (options && typeof options === 'object') {
            return options
        }

        return {}
    }

    getScrollAlign = (options) => {
        const align = this.getScrollToOptions(options).align

        if (
            align === 'center' ||
            align === 'end' ||
            align === 'nearest' ||
            align === 'start'
        ) {
            return align
        }

        return 'start'
    }

    getTargetScrollTopForRow = (index, options) => {
        const rowHeight = this.getRowHeight()
        const scrollY = this.getScrollY()
        const rowTop = index * rowHeight
        const rowBottom = rowTop + rowHeight
        const currentScrollTop = this.bodyRef.current
            ? this.bodyRef.current.scrollTop || 0
            : this.latestScrollTop || 0
        const visibleTop = currentScrollTop
        const visibleBottom = currentScrollTop + scrollY
        const align = this.getScrollAlign(options)

        if (align === 'center') {
            return rowTop - (scrollY - rowHeight) / 2
        }

        if (align === 'end') {
            return rowBottom - scrollY
        }

        if (align === 'nearest') {
            if (
                rowTop >= visibleTop &&
                rowBottom <= visibleBottom
            ) {
                return currentScrollTop
            }

            if (rowTop < visibleTop) {
                return rowTop
            }

            return rowBottom - scrollY
        }

        return rowTop
    }

    syncRangeState = () => {
        const nextRangeState = this.createRangeState(
            this.props,
            this.latestScrollTop
        )

        this.notifyVisibleRangeChange(nextRangeState)

        if (!this.shouldUpdateRangeState(nextRangeState)) {
            return
        }

        this.setState(nextRangeState)
    }

    scrollToOffset = (nextScrollTop) => {
        const bodyNode = this.bodyRef.current
        const total = (this.props.dataSource || []).length

        if (!bodyNode || total <= 0) {
            return false
        }

        const rowHeight = this.getRowHeight()
        const scrollY = this.getScrollY()
        const maxScrollTop = Math.max(
            0,
            total * rowHeight - scrollY
        )
        const safeScrollTop = Math.max(
            0,
            Math.min(maxScrollTop, nextScrollTop)
        )

        bodyNode.scrollTop = safeScrollTop
        this.latestScrollTop = safeScrollTop
        this.syncRangeState()

        return true
    }

    scrollToRow = (index, options) => {
        const total = (this.props.dataSource || []).length

        if (!Number.isFinite(index) || total <= 0) {
            return false
        }

        const safeIndex = Math.max(
            0,
            Math.min(total - 1, Math.floor(index))
        )

        return this.scrollToOffset(
            this.getTargetScrollTopForRow(
                safeIndex,
                options
            )
        )
    }

    scrollToKey = (targetKey, options) => {
        const dataSource = this.props.dataSource || []
        const index = dataSource.findIndex((record, recordIndex) =>
            this.getRowKeyValue(record, recordIndex) === targetKey
        )

        if (index < 0) {
            return false
        }

        return this.scrollToRow(index, options)
    }

    getVisibleRows = () => {
        const dataSource = this.props.dataSource || []
        const { rangeStart, rangeEnd } = this.state

        if (
            this.visibleRowsCache &&
            this.visibleRowsCache.dataSource === dataSource &&
            this.visibleRowsCache.rangeStart === rangeStart &&
            this.visibleRowsCache.rangeEnd === rangeEnd
        ) {
            return this.visibleRowsCache.value
        }

        const visibleRows = {
            start: rangeStart,
            end: rangeEnd,
            rows: dataSource.slice(rangeStart, rangeEnd)
        }

        this.visibleRowsCache = {
            dataSource,
            rangeEnd,
            rangeStart,
            value: visibleRows
        }

        return visibleRows
    }

    getRowKeyValue = (record, index) => {
        const { rowKey = 'key' } = this.props

        if (typeof rowKey === 'function') {
            return rowKey(record, index)
        }

        return record[rowKey]
    }

    getSelectedRowKeys = () => {
        const { rowSelection } = this.props

        if (!rowSelection || !Array.isArray(rowSelection.selectedRowKeys)) {
            return []
        }

        return rowSelection.selectedRowKeys
    }

    getSelectedRows = () => {
        return this.getSelectedRowsByKeys(this.getSelectedRowKeys())
    }

    getSelectedRowsByKeys = (selectedRowKeys) => {
        const selectedKeyMap = {}
        selectedRowKeys.forEach((key) => {
            selectedKeyMap[key] = true
        })

        return (this.props.dataSource || []).filter((record, index) =>
            selectedKeyMap[this.getRowKeyValue(record, index)]
        )
    }

    getSelectionMenuItems = () => {
        const { rowSelection } = this.props
        const selections = rowSelection && rowSelection.selections
        const hideDefaultSelections =
            rowSelection && rowSelection.hideDefaultSelections

        if (!selections) {
            return []
        }

        const defaultItems = hideDefaultSelections
            ? []
            : [
                {
                    key: '__select_all__',
                    text: '全选',
                    type: 'default'
                },
                {
                    key: '__invert_selection__',
                    text: '反选',
                    type: 'default'
                },
                {
                    key: '__clear_selection__',
                    text: '清空',
                    type: 'default'
                }
            ]
        const customItems = Array.isArray(selections)
            ? selections.map((selection, index) => ({
                ...selection,
                key:
                    selection.key ||
                    `__custom_selection__${index}`,
                type: 'custom'
            }))
            : []

        if (selections === true) {
            return defaultItems
        }

        return defaultItems.concat(customItems)
    }

    getSelectedKeyMap = () => {
        const selectedRowKeys = this.getSelectedRowKeys()

        if (
            this.selectedKeyMapCache &&
            this.selectedKeyMapCache.selectedRowKeys === selectedRowKeys
        ) {
            return this.selectedKeyMapCache.value
        }

        const selectedKeyMap = {}
        selectedRowKeys.forEach((key) => {
            selectedKeyMap[key] = true
        })

        this.selectedKeyMapCache = {
            selectedRowKeys,
            value: selectedKeyMap
        }

        return selectedKeyMap
    }

    isRowSelected = (record, index) => {
        const rowKeyValue = this.getRowKeyValue(record, index)

        return Boolean(this.getSelectedKeyMap()[rowKeyValue])
    }

    getRowSelectionCheckboxProps = (record, index) => {
        const { rowSelection } = this.props

        if (
            !rowSelection ||
            typeof rowSelection.getCheckboxProps !== 'function'
        ) {
            return {}
        }

        return rowSelection.getCheckboxProps(record) || {}
    }

    isRowSelectable = (record, index) =>
        !this.getRowSelectionCheckboxProps(record, index).disabled

    getSelectableRows = () =>
        (this.props.dataSource || []).reduce((rows, record, index) => {
            if (this.isRowSelectable(record, index)) {
                rows.push({
                    index,
                    key: this.getRowKeyValue(record, index),
                    record
                })
            }

            return rows
        }, [])

    emitSelectionChange = (selectedRowKeys) => {
        const { rowSelection } = this.props

        if (!rowSelection || !rowSelection.onChange) {
            return
        }

        const selectedKeyMap = {}
        selectedRowKeys.forEach((key) => {
            selectedKeyMap[key] = true
        })

        const selectedRows = (this.props.dataSource || []).filter(
            (record, index) =>
                selectedKeyMap[this.getRowKeyValue(record, index)]
        )

        rowSelection.onChange(selectedRowKeys, selectedRows)
    }

    handleToggleAll = (event) => {
        const { rowSelection } = this.props
        const checked = event.target.checked
        const currentKeys = this.getSelectedRowKeys()
        const selectableRows = this.getSelectableRows()
        const selectableKeys = selectableRows.map((item) => item.key)
        const preservedKeys = currentKeys.filter((key) =>
            selectableKeys.indexOf(key) < 0
        )
        const nextKeys = checked
            ? preservedKeys.concat(selectableKeys)
            : preservedKeys
        const changedRows = selectableRows.map((item) => item.record)

        this.emitSelectionChange(nextKeys)

        if (rowSelection && rowSelection.onSelectAll) {
            rowSelection.onSelectAll(
                checked,
                this.getSelectedRowsByKeys(nextKeys),
                changedRows
            )
        }
    }

    handleClearSelection = () => {
        const { rowSelection } = this.props

        this.emitSelectionChange([])

        if (rowSelection && rowSelection.onSelectNone) {
            rowSelection.onSelectNone()
        }
    }

    handleSelectInvert = () => {
        const { rowSelection } = this.props
        const currentKeys = this.getSelectedRowKeys()
        const selectableRows = this.getSelectableRows()
        const selectableKeys = selectableRows.map((item) => item.key)
        const preservedKeys = currentKeys.filter((key) =>
            selectableKeys.indexOf(key) < 0
        )
        const nextKeys = selectableKeys.reduce(
            (keys, key) => {
                if (currentKeys.indexOf(key) < 0) {
                    keys.push(key)
                }

                return keys
            },
            [...preservedKeys]
        )

        this.emitSelectionChange(nextKeys)

        if (rowSelection && rowSelection.onSelectInvert) {
            rowSelection.onSelectInvert(nextKeys)
        }
    }

    handleSelectionMenuClick = ({ key }) => {
        const { rowSelection } = this.props
        const selectableKeys = this.getSelectableRows().map(
            (item) => item.key
        )

        if (key === '__select_all__') {
            this.handleToggleAll({
                target: {
                    checked: true
                }
            })
            return
        }

        if (key === '__invert_selection__') {
            this.handleSelectInvert()
            return
        }

        if (key === '__clear_selection__') {
            this.handleClearSelection()
            return
        }

        if (!rowSelection || !Array.isArray(rowSelection.selections)) {
            return
        }

        const selection = rowSelection.selections.find(
            (item, index) =>
                (item.key || `__custom_selection__${index}`) === key
        )

        if (
            selection &&
            typeof selection.onSelect === 'function'
        ) {
            selection.onSelect(selectableKeys)
        }
    }

    handleToggleRow = (record, index, checked, nativeEvent) => {
        const { rowSelection } = this.props

        if (!this.isRowSelectable(record, index)) {
            return
        }

        const rowKeyValue = this.getRowKeyValue(record, index)
        const currentKeys = this.getSelectedRowKeys()
        const nextKeys = checked
            ? currentKeys.indexOf(rowKeyValue) >= 0
                ? currentKeys
                : currentKeys.concat(rowKeyValue)
            : currentKeys.filter((key) => key !== rowKeyValue)

        this.emitSelectionChange(nextKeys)

        if (rowSelection && rowSelection.onSelect) {
            rowSelection.onSelect(
                record,
                checked,
                this.getSelectedRowsByKeys(nextKeys),
                nativeEvent
            )
        }
    }

    handleBodyScroll = (event) => {
        const currentTarget = event.currentTarget
        const nextScrollTop = currentTarget.scrollTop || 0
        const nextScrollLeft = currentTarget.scrollLeft || 0

        this.latestScrollTop = nextScrollTop

        if (this.headerRef.current) {
            this.headerRef.current.scrollLeft = nextScrollLeft
        }

        this.updateScrollPositionClasses()

        if (
            this.scrollFrame === null &&
            typeof window !== 'undefined' &&
            window.requestAnimationFrame
        ) {
            this.scrollFrame = window.requestAnimationFrame(() => {
                this.scrollFrame = null
                this.syncRangeState()
            })
        } else if (this.scrollFrame === null) {
            this.syncRangeState()
        }

        if (this.props.onVirtualScroll) {
            this.props.onVirtualScroll(nextScrollTop)
        }
    }

    updateScrollPositionClasses = () => {
        const rootTableNode = this.rootTableRef.current

        if (!rootTableNode) {
            return
        }

        const bodyNode = this.bodyRef.current

        if (!bodyNode) {
            rootTableNode.classList.add(
                'ant-table-scroll-position-left'
            )
            rootTableNode.classList.add(
                'ant-table-scroll-position-right'
            )
            return
        }

        const maxScrollLeft = Math.max(
            0,
            bodyNode.scrollWidth - bodyNode.clientWidth
        )
        const scrollLeft = bodyNode.scrollLeft || 0
        const atLeft = scrollLeft <= 1
        const atRight = maxScrollLeft <= 1 || scrollLeft >= maxScrollLeft - 1

        rootTableNode.classList.toggle(
            'ant-table-scroll-position-left',
            atLeft
        )
        rootTableNode.classList.toggle(
            'ant-table-scroll-position-right',
            atRight
        )
    }

    renderSelectionMenuTrigger = (hasSelectionMenu) => {
        if (!hasSelectionMenu) {
            return null
        }

        return (
            <Dropdown
                overlay={(
                    <Menu
                        onClick={
                            this.handleSelectionMenuClick
                        }
                    >
                        {this.getSelectionMenuItems().map(
                            (item) => (
                                <Menu.Item key={item.key}>
                                    {item.text}
                                </Menu.Item>
                            )
                        )}
                    </Menu>
                )}
                trigger={['click']}
            >
                <span
                    className='wx__virtual__selection-menu-trigger'
                    style={{
                        cursor: 'pointer',
                        color: '#999',
                        fontSize: 12
                    }}
                >
                    v
                </span>
            </Dropdown>
        )
    }

    renderHeaderCell = (column, index) => {
        const headerComponents =
            this.props.components &&
            this.props.components.header
        const HeaderCell =
            headerComponents && headerComponents.cell
                ? headerComponents.cell
                : 'th'

        if (column.key === '__selection__') {
            const selectableRows = this.getSelectableRows()
            const selectedKeyMap = this.getSelectedKeyMap()
            const selectedCount = selectableRows.filter(
                (item) => selectedKeyMap[item.key]
            ).length
            const allChecked =
                selectableRows.length > 0 &&
                selectedCount === selectableRows.length
            const indeterminate =
                selectedCount > 0 &&
                selectedCount < selectableRows.length
            const selectionMenuItems = this.getSelectionMenuItems()
            const hasSelectionMenu =
                selectionMenuItems.length > 0
            const selectionMenuTrigger =
                this.renderSelectionMenuTrigger(
                    hasSelectionMenu
                )
            const titleContent =
                column.title !== undefined &&
                column.title !== null
                    ? (
                        <span
                            className='wx__virtual__selection-title'
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6
                            }}
                        >
                            <span>{column.title}</span>
                            {selectionMenuTrigger}
                        </span>
                    )
                    : (
                        <span
                            className='wx__virtual__selection-title'
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6
                            }}
                        >
                            <Checkbox
                                indeterminate={indeterminate}
                                checked={allChecked}
                                onChange={this.handleToggleAll}
                            />
                            {selectionMenuTrigger}
                        </span>
                    )

            return (
                <HeaderCell
                    key={column.key}
                        className={getFixedCellClassName(
                            column,
                        joinCellClassName(
                            'wx__virtual__header-cell',
                            'wx__virtual__align-center',
                            'ant-table-selection-column',
                            column.className
                        )
                    )}
                    style={{
                        ...(getColumnCellStyle(column) || {}),
                        ...(getFixedCellStyle(column) || {})
                    }}
                >
                    {titleContent}
                </HeaderCell>
            )
        }

        const headerCellProps = column.onHeaderCell
            ? column.onHeaderCell(column)
            : {}

        return (
            <HeaderCell
                key={column.__virtualKey || column.key || index}
                {...headerCellProps}
                className={getFixedCellClassName(
                    column,
                    joinCellClassName(
                        'wx__virtual__header-cell',
                        getAlignmentClassName(column.align),
                        column.className,
                        headerCellProps.className
                    )
                )}
                style={{
                    ...(getColumnCellStyle(column) || {}),
                    ...(getFixedCellStyle(column) || {}),
                    ...(headerCellProps.style || {})
                }}
            >
                {typeof column.title === 'function'
                    ? column.title()
                    : column.title}
            </HeaderCell>
        )
    }

    renderBodyCell = (column, record, index) => {
        const bodyComponents =
            this.props.components && this.props.components.body
        const BodyCell =
            bodyComponents && bodyComponents.cell
                ? bodyComponents.cell
                : 'td'

        if (column.key === '__selection__') {
            const checkboxProps = this.getRowSelectionCheckboxProps(
                record,
                index
            )

            return (
                <BodyCell
                    key='__selection__'
                    className={getFixedCellClassName(
                        column,
                        joinCellClassName(
                            'wx__virtual__body-cell',
                            'wx__virtual__align-center',
                            'ant-table-selection-column',
                            column.className
                        )
                    )}
                    style={{
                        ...(getColumnCellStyle(column) || {}),
                        ...(getFixedCellStyle(column) || {})
                    }}
                >
                    <Checkbox
                        {...checkboxProps}
                        checked={this.isRowSelected(record, index)}
                        onChange={(event) =>
                            this.handleToggleRow(
                                record,
                                index,
                                event.target.checked,
                                event
                            )
                        }
                    />
                </BodyCell>
            )
        }

        const value = column.dataIndex
            ? record[column.dataIndex]
            : undefined
        const content = column.render
            ? column.render(value, record, index)
            : value

        return (
            <BodyCell
                key={column.__virtualKey}
                className={getFixedCellClassName(
                    column,
                    joinCellClassName(
                        'wx__virtual__body-cell',
                        getAlignmentClassName(column.align),
                        column.className
                    )
                )}
                style={{
                    ...(getColumnCellStyle(column) || {}),
                    ...(getFixedCellStyle(column) || {})
                }}
            >
                {content}
            </BodyCell>
        )
    }

    renderVirtualTable = () => {
        const {
            className,
            bordered,
            style,
            loading,
            onRow,
            rowClassName
        } = this.props
        const columns = this.getFlattenedColumns()
        const tableSize = this.getTableSize(columns)
        const fixedRegionMetrics = this.getFixedRegionMetrics(
            columns
        )
        const scrollY = this.getScrollY()
        const rowHeight = this.getRowHeight()
        const totalRows = (this.props.dataSource || []).length
        const totalHeight = totalRows * rowHeight
        const { start, end, rows } = this.getVisibleRows()
        const selectableRows = this.getSelectableRows()
        const selectedKeyMap = this.getSelectedKeyMap()
        const selectedCount = selectableRows.filter(
            (item) => selectedKeyMap[item.key]
        ).length
        const allChecked =
            selectableRows.length > 0 &&
            selectedCount === selectableRows.length
        const indeterminate =
            selectedCount > 0 &&
            selectedCount < selectableRows.length
        const isEmpty = totalRows === 0
        const emptyText = this.getEmptyText()
        const headerViewportStyle =
            this.bodyScrollbarWidth > 0
                ? {
                    marginRight: this.bodyScrollbarWidth
                }
                : null

        return (
            <div
                className={`ant-table-wrapper ${className || ''}`}
                style={{
                    ...style,
                    '--wx-virtual-fixed-left-width': `${fixedRegionMetrics.leftWidth}px`,
                    '--wx-virtual-fixed-right-width': `${fixedRegionMetrics.rightWidth}px`
                }}
            >
                <div
                    className={`ant-table ant-table-default ${
                        bordered ? 'ant-table-bordered' : ''
                    } ${
                        fixedRegionMetrics.leftWidth > 0
                            ? 'wx__virtual__has-fixed-left'
                            : ''
                    } ${
                        fixedRegionMetrics.rightWidth > 0
                            ? 'wx__virtual__has-fixed-right'
                            : ''
                    }`.trim()}
                    ref={this.rootTableRef}
                >
                    <Spin spinning={Boolean(loading)}>
                        <div className='ant-table-content'>
                            <VirtualHeader
                                columns={columns}
                                containerStyle={
                                    headerViewportStyle
                                }
                                renderHeaderCell={this.renderHeaderCell}
                                tableSize={tableSize}
                                className='ant-table-header'
                                headerRef={this.headerRef}
                            />
                            {isEmpty ? (
                                <div
                                    className='ant-table-body'
                                    style={{
                                        maxHeight: scrollY,
                                        overflowX: 'auto',
                                        overflowY: 'auto'
                                    }}
                                >
                                    <table
                                        style={{
                                            ...getTableSizeStyle(tableSize),
                                            tableLayout: 'fixed'
                                        }}
                                    >
                                        <colgroup>
                                            {columns.map((column) => (
                                                <col
                                                    key={
                                                        column.__virtualKey ||
                                                        column.key
                                                    }
                                                    style={{
                                                        width:
                                                            column.width ||
                                                            column.__virtualWidth
                                                    }}
                                                />
                                            ))}
                                        </colgroup>
                                        <tbody className='ant-table-tbody'>
                                            <tr className='ant-table-placeholder'>
                                                <td colSpan={columns.length}>
                                                    {emptyText}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <VirtualBody
                                    bodyRef={this.bodyRef}
                                    className='ant-table-body'
                                    columns={columns}
                                    components={this.props.components}
                                    dataSource={this.props.dataSource}
                                    handleBodyScroll={this.handleBodyScroll}
                                    onRow={onRow}
                                    rangeEnd={end}
                                    rangeStart={start}
                                    renderBodyCell={this.renderBodyCell}
                                    rowClassName={rowClassName}
                                    rowHeight={rowHeight}
                                    rowKeyGetter={this.getRowKeyValue}
                                    rows={rows}
                                    scrollY={scrollY}
                                    tableSize={tableSize}
                                    totalHeight={totalHeight}
                                />
                            )}
                        </div>
                    </Spin>
                </div>
            </div>
        )
    }

    render() {
        const {
            virtual,
            rowHeight,
            overscan,
            virtualThreshold,
            onVirtualScroll,
            ...restProps
        } = this.props

        const unsupportedReason = this.getUnsupportedReason()
        const virtualEnabled = this.isVirtualEnabled()

        if (unsupportedReason) {
            warnOnce(unsupportedReason)
        }

        if (!virtualEnabled) {
            return <Table {...restProps} />
        }

        return this.renderVirtualTable()
    }
}

export default VirtualTable
