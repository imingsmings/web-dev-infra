import React from 'react'

const DEFAULT_EXTRA_HEIGHT = 120
const MIN_SHOW_COLUMN_COUNT = 2
const STRING_NUMBER_REGEX = /^[-+]?(\d+|\d*\.\d+)([eE][-+]?\d+)?$/

export const TABLE_PREFIX = 'wx__common__table__'
export const BASE_ROW_SELECTION = {
    columnWidth: 30
}

export const CLASSNAME = {
    CONTAINER: `${TABLE_PREFIX}container`,
    WRAPPER: `${TABLE_PREFIX}wrapper`,
    ROW: `${TABLE_PREFIX}row`,
    COLUMN: `${TABLE_PREFIX}column`,
    OPERATION_COLUMN: `${TABLE_PREFIX}operation_column`,
    CELL: `${TABLE_PREFIX}cell__wrapper`,
    FOOTER_EXTEA: `${TABLE_PREFIX}footer_extra`,
    EMPTY: `${TABLE_PREFIX}empty`,
    SEARCH_WRAPPER: `${TABLE_PREFIX}search__wrapper`,
    SEARCH: `${TABLE_PREFIX}search__input`,
    FILTERED: `${TABLE_PREFIX}filtered`,
    HOVER: `${TABLE_PREFIX}row__hover`,
    SWAP: `${TABLE_PREFIX}swap flex-fc pointer`,
    SWAPWRAPPER: `${TABLE_PREFIX}swap__wrapper`,
    DRAGGABLE: `${TABLE_PREFIX}draggable`,
    TEXTOVER: 'text-over',
    PAGINATION: (pagination) => {
        const base = `${TABLE_PREFIX}pagination`

        if (pagination.onlyShowTotal) {
            return `${base} only-show-total`
        }

        return base
    },
    FOOTER: (pagination) => {
        const base = `${TABLE_PREFIX}footer flex-fc`

        if (!pagination) {
            return `${base} w-100`
        }

        return `${base} pt-abs`
    },
    ROWCLASSNAME: (rowClassName, ...args) => {
        const base = CLASSNAME.ROW
        if (isFunction(rowClassName)) {
            return `${base} ${rowClassName(...args)}`
        }
        return base
    },
    SWAPID: (tableId) => {
        return `${tableId}__swap`
    }
}

export function handleSwapCheck(type, arg, columns, cb) {
    let returnColumns = columns
    let returnChecked = true

    switch (type) {
        case 1: {
            const checked = arg.target.checked
            const newColumns = columns.map((item) => {
                return {
                    ...item,
                    show: item.isOperateColumn ? true : checked
                }
            })

            const count = newColumns.filter((item) => item.show).length

            if (count < MIN_SHOW_COLUMN_COUNT) {
                cb && cb()
                return null
            }

            returnColumns = newColumns
            returnChecked = checked
            break
        }
        case 2: {
            if (arg.length < MIN_SHOW_COLUMN_COUNT) {
                cb && cb()
                return null
            }

            const newColumns = columns.map((item) => {
                item.show = arg.includes(getColumnRealKey(item))
                return item
            })

            returnColumns = newColumns
            returnChecked = arg.length === columns.length
            break
        }
        default:
            break
    }

    return {
        column: returnColumns,
        swapCheckedAll: returnChecked
    }
}

export function getServerSideSorterType(sorter) {
    if (sorter && sorter.order) {
        return sorter.order.replace('end', '')
    }
    return ''
}

export function makeColumnsWidthMap(column) {
    const deviceWidth = window.innerWidth
    return column.reduce((prev, item) => {
        if (item.resizable && Number.isFinite(item.width)) {
            prev.set(getColumnRealKey(item), {
                default: item.width,
                min: item.minWidth || item.width - 50,
                max: item.maxWidth || Math.max(item.width * 2, deviceWidth),
                current: item.width
            })
        }
        return prev
    }, new Map())
}

export function computeResizableColumnWidth(col, currentWidth, widthInfo) {
    const minWidth = widthInfo.min
    const maxWidth = widthInfo.max

    let nextWidth = currentWidth
    if (nextWidth < minWidth) {
        nextWidth = minWidth
    }
    if (nextWidth > maxWidth) {
        nextWidth = maxWidth
    }

    return nextWidth
}

export function renderColumn(column, tableId) {
    const render = ((_render) => {
        return (text, record, index) => {
            const view = isFunction(_render) ? _render(text, record, index) : text

            if (!isReactElement(view)) {
                return view
            }

            return (
                <div
                    key={`${tableId}__${getColumnRealKey(column)}`}
                    style={{
                        width: getColumnWidth(column)
                    }}
                    className={getCellClassName(column)}>
                    {view}
                </div>
            )
        }
    })(column._render)
    return render
}

export function renderTitle(column, self) {
    if (self.props.drag !== true || !columnCanDrag(column)) {
        return column.titleText
    }

    return <span
        className={CLASSNAME.DRAGGABLE}
        draggable={true}
    >{column.titleText}</span>
}

export function getNewColumns(self, columns, onResize) {
    const showColumns = columns.filter((item) => item.show)
    const nextShowColumns = shouldApplyAutoFillColumn(self, showColumns, columns)
        ? createAutoFillColumns(showColumns, self)
        : showColumns

    return nextShowColumns.map((col) => {
        return {
            ...col,
            title: renderTitle(col, self),
            onHeaderCell: getColumnOnHeaderCell.bind(self, col, onResize)
        }
    })
}

function getColumnOnHeaderCell(column, onResize, ...args) {
    const onHeaderCell = column.onHeaderCell
    const columnKey = getColumnRealKey(column)

    let baseHeaderCell = {
        width: column.width,
        resizable: column.resizable || false,
        onResize: onResize.bind(null, columnKey),
        className: CLASSNAME.TEXTOVER,
        ...getDraggableHandlers(this, columnKey, column),
    }

    if (isFunction(onHeaderCell)) {
        const { className, ...rest } = onHeaderCell(...args)

        if (className) {
            baseHeaderCell.className = `${baseHeaderCell.className} ${className}`
        }

        baseHeaderCell = {
            ...rest,
            ...baseHeaderCell
        }
    }

    return baseHeaderCell
}

function shouldApplyAutoFillColumn(self, showColumns, allColumns) {
    const scroll = self.props.scroll || {}

    if (showColumns.length === 0) {
        return false
    }

    if (showColumns.some((column) => !hasExplicitColumnWidth(column))) {
        return false
    }

    const hasHiddenAutoColumn = allColumns.some(
        (column) => !column.show && !hasExplicitColumnWidth(column)
    )

    if (!hasHiddenAutoColumn) {
        return false
    }

    if (!isDefined(scroll.x)) {
        return true
    }

    return getColumnsExplicitWidth(showColumns) < Number(scroll.x)
}

function createAutoFillColumns(showColumns, self) {
    const nextShowColumns = [...showColumns]
    const targetIndex = findAutoFillColumnIndex(nextShowColumns)

    if (targetIndex < 0) {
        return nextShowColumns
    }

    const targetColumn = { ...nextShowColumns[targetIndex] }
    delete targetColumn.width
    targetColumn.render = renderColumn(targetColumn, self.tableId)
    nextShowColumns[targetIndex] = targetColumn

    return nextShowColumns
}

function findAutoFillColumnIndex(columns) {
    for (let index = columns.length - 1; index >= 0; index -= 1) {
        const column = columns[index]

        if (!column.isOperateColumn && !column.fixed) {
            return index
        }
    }

    return -1
}

function hasExplicitColumnWidth(column) {
    return isDefined(getNumericColumnWidth(column))
}

function getColumnsExplicitWidth(columns) {
    return columns.reduce(
        (sum, column) => sum + (getNumericColumnWidth(column) || 0),
        0
    )
}

function getNumericColumnWidth(column) {
    const { width } = column

    if (isNumber(width)) {
        return width
    }

    if (isString(width) && width.includes('px')) {
        return Number(width.replace('px', ''))
    }

    if (isString(width) && isStringNumber(width)) {
        return Number(width)
    }

    return null
}

export function handleNextColumns(columns, key, size, tableId, widthMap) {
    const nextColumns = [...columns]
    const currentColumn = nextColumns.find((item) => getColumnRealKey(item) === key)
    const widthInfo = widthMap.get(getColumnRealKey(currentColumn))

    const nextWidth = computeResizableColumnWidth(currentColumn, size.width, widthInfo)
    currentColumn.width = nextWidth
    currentColumn.render = renderColumn(currentColumn, tableId)
    widthInfo.current = nextWidth

    return nextColumns
}

export function resetColumns(columns, widthMap) {
    const nextColumns = [...columns]
    return nextColumns.map((col) => {
        const widthInfo = widthMap.get(getColumnRealKey(col))
        if (widthInfo) {
            col.width = widthInfo.default
            widthInfo.current = widthInfo.default
        }
        return col
    })
}

export function getDraggableHandlers(self, columnKey, column) {
    if (self.props.drag !== true) return {}
    return {
        onDragStart: handleDragStart.bind(self, columnKey),
        onDrop: handleDrop.bind(self, columnKey),
        onDragOver: handleDragOver.bind(self, columnKey, column),
        onDragEnd: handleDragEnd.bind(self, columnKey),
    }
}

function handleDragStart(columnKey, _e) {
    this.dragging = columnKey
}

function handleDrop(columnKey, _e) {
    if (columnKey === this.dragging) return

    this.setState({
        column: getNextDraggableColumns(this.state.column, columnKey, this.dragging)
    })
}

function handleDragOver(_columnKey, column, e) {
    columnCanDrag(column) && e.preventDefault()
}

function handleDragEnd(_columnKey, _e) {
    this.dragging = null
}

function getNextDraggableColumns(stateColumns, columnKey, dragging) {
    const {
        srcColumn,
        destColumnKey,
    } = stateColumns.reduce((prev, item) => {
        const key = getColumnRealKey(item)
        if (key === dragging) {
            prev.srcColumn = item
        }
        if (key === columnKey) {
            prev.destColumnKey = key
        }
        return prev
    }, {
        destColumnKey: null,
        srcColumn: null
    })

    const columns = stateColumns.filter((col) => col !== srcColumn)
    const destColumnIndex = findColumnIndexFromColumns(stateColumns, destColumnKey)
    const srcColumnIdnex = findColumnIndexFromColumns(stateColumns, dragging)
    const nextDestColumnIndex = findColumnIndexFromColumns(columns, destColumnKey)
    const fromIndex = srcColumnIdnex < destColumnIndex ? nextDestColumnIndex + 1 : nextDestColumnIndex
    columns.splice(fromIndex, 0, srcColumn)

    return columns
}

function findColumnIndexFromColumns(columns, columnKey) {
    return columns.findIndex((col) => getColumnRealKey(col) === columnKey)
}
export function getColumnRealKey(column) {
    return `${column.dataIndex}` || `${column.key}`
}

export function getCellClassName(column) {
    const _internal = CLASSNAME.CELL
    const _custom = column.cellWrapperClassName || ''
    const _ellipsis = needSorterAndEllipsis(column) ? CLASSNAME.TEXTOVER : ''

    return `${_internal} ${_custom} ${_ellipsis}`
}

export function getExtraRenderConidtions(props) {
    const { dataSource, pagination, rowSelection } = props

    const obj = {
        showIcon: true,
        showPage: true,
        showSelect: true,
    }

    if (!pagination || !dataSource || dataSource.length === 0) {
        obj.showIcon = false
        obj.showPage = false
    }

    if (
        !rowSelection ||
        !rowSelection.selectedRowKeys ||
        rowSelection.selectedRowKeys.length === 0
    ) {
        obj.showSelect = false
    }

    return [!obj.showIcon && !obj.showPage && !obj.showSelect, obj]
}

export function computeFixedWidth(column) {
    const l = column.reduce((prev, col) => {
        if (col.children && col.children.length) {
            prev += col.children.length
        }
        return prev
    }, column.length)

    if (l <= 3) {
        return 900
    } else if (l > 3 && l <= 8) {
        return 1300
    } else if (l > 8 && l <= 12) {
        return 1500
    } else if (l > 12 && l <= 16) {
        return 1700
    } else if (l > 16 && l <= 20) {
        return 1900
    } else {
        return 2100
    }
}

export function getIsOperationColumn(column) {
    return column.titleText === '操作' || isOperateRightFixed(column)
}

export function getIsResizable(allResizable, column) {
    if (allResizable || column.resizable) {
        return true
    }

    if (column.isOperateColumn) {
        return false
    }

    return Number.isFinite(column.width)
}

export function getColumnClassName(column) {
    const className = column.className
    const optCls = column.isOperateColumn ? CLASSNAME.OPERATION_COLUMN : ''
    let cls = `${CLASSNAME.COLUMN}`

    if (optCls) {
        cls = `${CLASSNAME.COLUMN} ${optCls}`
    }

    if (className) {
        cls = `${cls} ${className}`
    }

    return cls
}

export function isOperateRightFixed(column) {
    return column.fixed === 'right'
}

export function columnCanDrag(column) {
    return !column.isOperateColumn && !column.fixed
}

export function isTextColumn(column) {
    if (!isDefined(column.isText)) return true
    return column.isText
}

export function hasTableSorter(sorter) {
    if (!isDefined(sorter)) return true
    return sorter
}

export function needSorterAndEllipsis(column) {
    if (isOperateRightFixed(column)) return false
    return isTextColumn(column)
}

export function sorterFn(column) {
    if (column.sorter === true) {
        return true
    }
    return false

    // if (isBoolean(column.sorter) || isFunction(column.sorter)) return column.sorter
    // const _sorter = (prev, next) => {
    //     const prevValue = prev[column.dataIndex]
    //     const nextValue = next[column.dataIndex]

    //     if (prevValue == null || nextValue == null) return 0

    //     if (Number.isNaN(prevValue) || Number.isNaN(nextValue)) return 0

    //     if (isNumber(prevValue) && isNumber(nextValue)) return prevValue - nextValue

    //     // if (isStringNumber(prevValue) && isStringNumber(nextValue)) return Number(prevValue) - Number(nextValue)

    //     return String(prevValue).localeCompare(String(nextValue))
    // }

    // return _sorter
}

export function hasSearchTool(column) {
    return (
        (isDefined(column.filterDropdown) && isDefined(column.onFilter)) ||
        isDefined(column.filters)
    )
}

export function columnShallowEqual(newColumn, oldColumn) {
    if (newColumn.length !== oldColumn.length) return false

    const newColumnTitleText = newColumn.map((c) => `${c.title}${c.deviceWidth || c.width}`).join('__')
    const oldColumnTitleText = oldColumn.map((c) => `${c.title}${c.deviceWidth || c.width}`).join('__')

    if (newColumnTitleText === oldColumnTitleText) return true

    return false
}

export function getColumnWidth(item) {
    if (item.fixed === 'right') {
        return ''
    }

    const numericWidth = getNumericColumnWidth(item)

    if (numericWidth !== null) {
        return `${numericWidth - 20}px`
    }

    return ''
}

export function getElementDistsanceToTop(targetNode) {
    return targetNode ? targetNode.getBoundingClientRect().top : 0
}

export function getShouldScrollY(targetNode, extraHeight) {
    const innerHeight = window.innerHeight
    const top = getElementDistsanceToTop(targetNode)
    return {
        h: innerHeight - (top + DEFAULT_EXTRA_HEIGHT + extraHeight),
        top
    }
}

export function ResizeEevent(handler) {
    const add = () => {
        window.addEventListener('resize', handler, false)
    }

    const remove = () => {
        window.removeEventListener('resize', handler, false)
    }

    return {
        add,
        remove
    }
}

export function ObserveResizeElement(ele, callback) {
    const observer = new ResizeObserver((entries) => {
        isFunction(callback) && callback(entries)
    })

    observer.observe(ele)

    return observer
}

export function handleMouseMoveToSetTitle() {
    let _target = null

    return function (e) {
        let node = e.target

        if (node === _target) return

        while (node !== null) {
            if (
                node.classList.contains(`${CLASSNAME.CELL}`) ||
                node.classList.contains(`${CLASSNAME.COLUMN}`)
            ) {
                break
            }

            node = node.parentElement
        }

        if (!node) return

        if (node === _target) return

        if (node.classList.contains(CLASSNAME.OPERATION_COLUMN) || node.parentElement.classList.contains(CLASSNAME.OPERATION_COLUMN)) {
            return
        }

        node.setAttribute('title', node.textContent)

        _target = node
    }
}

export function handleBlurDelegation(callback) {
    return function (e) {
        const { target } = e
        if (target.parentElement.classList.contains('ant-pagination-options-quick-jumper')) {
            if (!target.value) return
            const num = Number(target.value)
            if (Number.isNaN(num)) return
            callback(num)
        }
    }
}

export function functionReturnNull() {
    return null
}

export function isDefined(value) {
    return value !== null && value !== undefined
}

export function isBoolean(value) {
    return typeof value === 'boolean'
}

export function isString(value) {
    return typeof value === 'string'
}

export function isNumber(value) {
    return typeof value === 'number'
}

export function isStringNumber(value) {
    return STRING_NUMBER_REGEX.test(value)
}

export function isPrimaryValue(value) {
    return !isPlainObject(value) && !isFunction(value)
}

export function isFunction(value) {
    return typeof value === 'function'
}

export function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}

function isPlainObject(obj) {
    if (typeof obj !== 'object' || obj === null) return false

    let proto = obj

    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto)
    }

    return Object.getPrototypeOf(obj) === proto
}

export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0
}

export function isEqual(value1, value2) {
    return value1 === value2
}

export function isReactElement(view) {
    return (typeof view === 'object' && React.isValidElement(view)) || isPrimaryValue(view)
}
