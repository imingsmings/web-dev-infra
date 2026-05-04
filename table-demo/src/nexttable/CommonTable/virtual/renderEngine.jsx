import React from 'react'

import VirtualTable from './VirtualTable'
import {
    getVirtualUnsupportedReason,
    shouldUseVirtualRenderer,
    warnVirtualFallback
} from './guards'
import {
    getVirtualThreshold,
    normalizeVirtualRendererProps
} from './normalize'

export function renderVirtualTableEngine({
    commonTableProps,
    tableProps,
    columns,
    renderLegacyTable,
    virtualTableRef
}) {
    const unsupportedReason = getVirtualUnsupportedReason({
        columns,
        dataSource: tableProps.dataSource,
        expandedRowRender: commonTableProps.expandedRowRender,
        pagination: tableProps.pagination,
        loading: tableProps.loading
    })

    const enabled = shouldUseVirtualRenderer({
        virtual: commonTableProps.virtual,
        scroll: tableProps.scroll,
        dataSource: tableProps.dataSource,
        virtualThreshold: getVirtualThreshold(commonTableProps),
        unsupportedReason
    })

    if (!commonTableProps.virtual) {
        return renderLegacyTable()
    }

    if (!enabled) {
        warnVirtualFallback(unsupportedReason)
        return renderLegacyTable()
    }

    const virtualProps = normalizeVirtualRendererProps({
        commonTableProps,
        tableProps,
        columns
    })

    return (
        <VirtualTable
            {...virtualProps}
            ref={virtualTableRef}
        />
    )
}
