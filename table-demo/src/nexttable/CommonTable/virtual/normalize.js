import {
    DEFAULT_VIRTUAL_OVERSCAN,
    DEFAULT_VIRTUAL_ROW_HEIGHT
} from './utils'
import {
    DEFAULT_VIRTUAL_THRESHOLD
} from './guards'

export function normalizeVirtualScroll(commonTableProps, tableProps) {
    const userScroll = commonTableProps.scroll || {}

    if (userScroll.x !== null && userScroll.x !== undefined) {
        return tableProps.scroll
    }

    return {
        ...tableProps.scroll,
        x: undefined
    }
}

export function normalizeVirtualRendererProps({
    commonTableProps,
    tableProps,
    columns
}) {
    return {
        bordered: tableProps.bordered,
        columns,
        components: tableProps.components,
        dataChangeBehavior:
            commonTableProps.dataChangeBehavior,
        dataChangeKey: commonTableProps.dataChangeKey,
        dataSource: tableProps.dataSource,
        dynamicOverscan:
            commonTableProps.dynamicOverscan,
        loading: tableProps.loading,
        locale: commonTableProps.locale,
        scrollToFirstRowOnChange:
            commonTableProps.scrollToFirstRowOnChange,
        virtualThreshold:
            commonTableProps.virtualThreshold ||
            DEFAULT_VIRTUAL_THRESHOLD,
        onRow: commonTableProps.onRow,
        overscan:
            commonTableProps.virtualOverscan ||
            DEFAULT_VIRTUAL_OVERSCAN,
        onVisibleRangeChange:
            commonTableProps.onVisibleRangeChange,
        onVirtualScroll: commonTableProps.onVirtualScroll,
        rowClassName: tableProps.rowClassName,
        rowHeight:
            commonTableProps.virtualRowHeight ||
            DEFAULT_VIRTUAL_ROW_HEIGHT,
        rowKey: tableProps.rowKey,
        rowSelection: tableProps.rowSelection,
        scroll: normalizeVirtualScroll(commonTableProps, tableProps),
        style: commonTableProps.style
    }
}

export function getVirtualThreshold(commonTableProps) {
    return (
        commonTableProps.virtualThreshold ||
        DEFAULT_VIRTUAL_THRESHOLD
    )
}
