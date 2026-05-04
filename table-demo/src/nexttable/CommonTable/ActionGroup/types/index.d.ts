import React from 'react'
import { PopoverProps } from 'antd/lib/popover'
import { DropDownProps } from 'antd/lib/dropdown'

/**
 * 表格操作按钮的显示模式
 * - inline: 内联显示，直接在表格行内显示操作按钮
 * - menu: 菜单显示，通过下拉菜单展示操作按钮
 */
export type TableActionMode = 'inline' | 'menu'

/**
 * 表格操作按钮的放置位置
 * - inline: 内联显示
 * - menu: 菜单显示
 * - auto: 自动选择合适的显示位置
 */
export type TableActionPlacement = TableActionMode | 'auto'

/**
 * 表格操作按钮组的属性配置
 */
export type TableActionGroupProps = {
    /** 最大内联显示数量，超出部分会显示更多按钮 */
    maxInline?: number

    /** 当前行数据记录 */
    record?: any

    /** 操作按钮配置数组 */
    actions: TableAction[]

    /** 更多按钮的文本内容，可以是字符串或返回字符串的函数 */
    moreText?: string | React.ReactNode | (() => React.ReactNode)

    /** 更多按钮的图标，可以是React节点或返回React节点的函数 */
    moreIcon?: string | React.ReactNode | (() => React.ReactNode)

    /** 自定义类名，可以是字符串或返回字符串的函数 */
    className?: string | (() => string)

    /** 下拉菜单的额外属性配置 */
    dropdownProps?: DropDownProps
}

/**
 * 表格操作按钮的类型定义，可以是内联按钮或菜单项
 */
export type TableAction = TableActionInlineItem | Omit<TableActionMenuItem, 'icon'>

/**
 * 内联显示的表格操作按钮，支持弹出菜单和悬浮提示
 */
export type TableActionInlineItem = TableActionBase & {
    /** 内联模式下显示的下拉菜单项 */
    dropdownMenus?: TableActionBase[]

    /** 悬浮提示的属性配置 */
    popoverProps?: PopoverProps
}

/**
 * 菜单显示的表格操作按钮，与基础按钮类型相同
 */
export type TableActionMenuItem = TableActionBase

/**
 * 表格操作按钮的基础属性配置
 */
export type TableActionBase = {
    // 基本渲染
    /** 按钮的唯一标识 */
    key: string | number

    /** 按钮图标，支持字符串、React节点或返回React节点的函数 */
    icon: string | React.ReactNode | (() => React.ReactNode)

    /** 按钮文本内容，支持字符串、React节点或返回React节点的函数 */
    text: string | React.ReactNode | (() => React.ReactNode)

    /** 点击事件处理函数 */
    onClick: (e: React.SyntheticEvent) => void

    // 显示相关
    /** 是否显示，可以是布尔值或返回布尔值的函数 */
    visible?: boolean | (() => boolean)

    /** 是否禁用，可以是布尔值或返回布尔值的函数 */
    disabled?: boolean | (() => boolean)

    /** 是否加载中，可以是布尔值或返回布尔值的函数 */
    loading?: boolean | (() => boolean)

    // 类名
    /** 自定义类名，可以是字符串或返回字符串的函数 */
    className?: string | (() => string)

    // 二次确认
    /** 点击按钮时的二次确认配置 */
    confirm?: TableActionConfirm
}

/**
 * 表格操作按钮的二次确认配置
 */
export type TableActionConfirm = {
    /** 确认对话框的标题 */
    title?: string | React.ReactNode | (() => React.ReactNode)

    /** 确认对话框的内容 */
    content: string | React.ReactNode | (() => React.ReactNode)

    /** 确定按钮的文本 */
    okText?: string | React.ReactNode | (() => React.ReactNode)

    /** 取消按钮的文本 */
    cancelText?: string | React.ReactNode | (() => React.ReactNode)

    /** 点击确定按钮时的回调函数 */
    onConfirm: (e: React.SyntheticEvent) => void

    /** 点击取消按钮时的回调函数 */
    onCancel?: (e: React.SyntheticEvent) => void

    /** 点击确定按钮时的回调函数（与onConfirm功能一致） */
    onOk: (e: React.SyntheticEvent) => void
}

/**
 * 表格操作按钮的渲染上下文信息
 */
export type TableActionRenderContext = {
    /** 按钮的唯一标识 */
    key: string | number

    /** 当前显示模式 */
    mode: TableActionMode

    /** 当前操作按钮的配置 */
    action: TableAction

    /** 当前按钮的索引 */
    index: number

    /** 当前行数据记录 */
    record: any

    /** 是否禁用 */
    disabled: boolean

    /** 是否加载中 */
    loading: boolean

    /** 是否是最后一个按钮 */
    last: boolean | null

    /** 触发按钮点击的函数 */
    trigger: (e: React.SyntheticEvent) => void
}
