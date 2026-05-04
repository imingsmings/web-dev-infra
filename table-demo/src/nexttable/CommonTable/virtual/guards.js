export const DEFAULT_VIRTUAL_THRESHOLD = 80
export const DEFAULT_CHILDREN_COLUMN = 'children'

const warnedMessages = {}

export function warnVirtualFallback(message) {
    if (!message || warnedMessages[message]) {
        return
    }

    warnedMessages[message] = true

    if (typeof console !== 'undefined' && console.warn) {
        console.warn(message)
    }
}

export function hasNestedColumns(columns = []) {
    return columns.some(
        (column) =>
            Array.isArray(column.children) &&
            column.children.length > 0
    )
}

export function hasLocalProcessingColumn(columns = []) {
    return columns.some((column) => {
        if (column.sorter || column.filters || column.onFilter) {
            return true
        }

        if (Array.isArray(column.children) && column.children.length) {
            return hasLocalProcessingColumn(column.children)
        }

        return false
    })
}

export function hasFixedColumnWithoutWidth(columns = []) {
    return columns.some((column) => {
        const fixed =
            column.fixed === true ||
            column.fixed === 'left' ||
            column.fixed === 'right'
        const width =
            typeof column.width === 'string' &&
            column.width.includes('px')
                ? Number(column.width.replace('px', ''))
                : Number(column.width)

        if (fixed && !(Number.isFinite(width) && width > 0)) {
            return true
        }

        if (Array.isArray(column.children) && column.children.length) {
            return hasFixedColumnWithoutWidth(column.children)
        }

        return false
    })
}

export function hasTreeData(
    dataSource = [],
    childrenColumnName = DEFAULT_CHILDREN_COLUMN
) {
    return dataSource.some((record) => {
        const children = record && record[childrenColumnName]
        return Array.isArray(children) && children.length > 0
    })
}

export function getVirtualUnsupportedReason({
    columns = [],
    dataSource = [],
    expandedRowRender,
    pagination,
    childrenColumnName = DEFAULT_CHILDREN_COLUMN
}) {
    if (hasNestedColumns(columns)) {
        return 'CommonTable virtual fallback: grouped headers are not supported in the first virtual renderer.'
    }

    if (hasFixedColumnWithoutWidth(columns)) {
        return 'CommonTable virtual fallback: fixed columns require explicit width in virtual mode.'
    }

    if (expandedRowRender) {
        return 'CommonTable virtual fallback: expanded rows are not supported in the first virtual renderer.'
    }

    if (pagination !== false && pagination !== undefined) {
        return 'CommonTable virtual fallback: built-in pagination is not supported. Use pagination={false} with virtual mode.'
    }

    if (hasLocalProcessingColumn(columns)) {
        return 'CommonTable virtual fallback: local sorter/filter columns are not supported in the first virtual renderer.'
    }

    if (hasTreeData(dataSource, childrenColumnName)) {
        return 'CommonTable virtual fallback: tree data is not supported in the first virtual renderer.'
    }

    return ''
}

export function shouldUseVirtualRenderer({
    virtual,
    scroll,
    dataSource,
    virtualThreshold = DEFAULT_VIRTUAL_THRESHOLD,
    unsupportedReason
}) {
    if (!virtual) {
        return false
    }

    if (!scroll || !scroll.y) {
        return false
    }

    if (!Array.isArray(dataSource)) {
        return false
    }

    if (dataSource.length <= virtualThreshold) {
        return false
    }

    if (unsupportedReason) {
        return false
    }

    return true
}
