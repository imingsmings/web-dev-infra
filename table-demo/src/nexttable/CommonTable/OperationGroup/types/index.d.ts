import React from 'react'
import { PopoverProps } from 'antd/lib/popover'

type ReactNode = React.ReactNode | (() => React.ReactNode)

export type TableOperationGroupProps = {
    title?: string | ReactNode

    operations?: TableOperationGroupItem[]

    className?: string | (() => string | [])
}

export type TableOperationGroupVariant = 'solid' | 'outlined' | 'text'

export type TableOperationGroupItem = {
    variant: TableOperationGroupVariant

    key: string | number
    text: string | ReactNode
    icon?: string | ReactNode
    onClick?: (e: React.SyntheticEvent) => void

    visible?: boolean | (() => boolean)
    loading?: boolean | (() => boolean)
    disabled?: boolean | (() => boolean)

    dropdownMenus?: Omit<Omit<TableOperationGroupItem, 'variant'>, 'icon'>[]
    popoverProps?: PopoverProps

    confirm?: TableOperationGroupConfirm | (() => TableOperationGroupConfirm)
}

export type TableOperationGroupConfirm = {
    title?: string | ReactNode
    content: string | ReactNode
    onConfirm: () => void
    onCancel?: () => void
}
