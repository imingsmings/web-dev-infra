import React from 'react'
import { Dropdown, Menu, Modal, Popover } from 'antd'
import Icon from '../../shared/icons'

const MODE = {
    inline: 'inline',
    menu: 'menu'
}

const CLASSNAME = {
    actionWrapper: `table-action-wrapper flex-fc`,
    inline: (className, ctx) => {
        const cls = joinClassNames(
            `table-action-inline table__icon primary`,
            defaultValue(resolveValue(className), ''),
            ctx.disabled ? 'disabled' : ''
        )

        if (ctx.last) {
            return cls
        }

        return `${cls} mr-20`
    },
    menu: () => {
        return 'table-action-menu'
    },
    icon: 'table-action-icon mr-5',
    text: 'table-action-text text-over',
    more: 'table-action-more table__icon primary ml-20',
    moreOverlayClassName: 'table-action-more-wrapper'
}

const LoadingIcon = 'loading'

class TableActionGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownVisible: false,
            maxInline: props.maxInline || 2,
            moreText: resolveValue(props.moreText || ''),
            moreIcon: resolveValue(props.moreIcon || 'omit'),
            className: resolveValue(props.className)
        }
    }

    stopPropagation = (e) => {
        if (!e) return

        if (e.prventDefault) {
            e.prventDefault()
        }
        if (e.stopPropagation) {
            e.stopPropagation()
        }
    }

    runConfirm = (confirm, onOk) => {
        const { title, content, icon, ...restProps } = confirm

        Modal.confirm({
            icon: false,
            title: (
                <Icon
                    status='warning'
                    title={title || '确定以下操作?'}
                />
            ),
            content: content || '',
            cancelText: '取消',
            okText: '确定',
            ...restProps,
            onOk,
            onCancel: (...args) => {
                isFn(confirm.onCancel) && confirm.onCancel(...args)
            }
        })
    }

    trigger = (e, { action, confirm }) => {
        this.stopPropagation(e)

        if (action.disabled || action.loading) return

        const hasConfirm = !!defaultValue(resolveValue(confirm), null)

        if (!hasConfirm) {
            isFn(action.onClick) && action.onClick(e)
            return
        }

        this.runConfirm(confirm, (...args) => {
            if (isFn(confirm.onOk)) {
                confirm.onOk(...args)
                return
            }
            isFn(action.onClick) && action.onClick(e)
        })
    }

    triggerAction = (ctx) => {
        return (e) => {
            this.trigger(e, {
                action: {
                    disabled: ctx.disabled,
                    loading: ctx.loading,
                    onClick: ctx.action.onClick
                },
                confirm: ctx.action.confirm
            })
        }
    }

    triggerDropdownMenu = (menu) => {
        return (e) => {
            this.trigger(e, {
                action: menu,
                confirm: menu.confirm
            })
        }
    }

    createBaseContext = (action, index, mode, last = false) => {
        const baseCtx = {
            key: action.key,
            mode,
            action,
            index,
            record: this.props.record,
            disabled: false,
            loading: false,
            trigger: null,
            last
        }

        const disabled = !!resolveValue(defaultValue(action.disabled, false), baseCtx)
        const loading = !!resolveValue(defaultValue(action.loading, false), baseCtx)

        const ctx = {
            ...baseCtx,
            disabled,
            loading
        }

        ctx.trigger = this.triggerAction(ctx)

        return ctx
    }

    rendertText = (text, ctx) => {
        if (isPlainString(text)) {
            return <span className={CLASSNAME.text}>{text}</span>
        }

        if (isFn(text)) {
            return resolveValue(text, ctx)
        }

        return text
    }

    renderIcon = (icon, ctx) => {
        if (isPlainString(icon)) {
            const { mode, loading } = ctx

            if (mode === MODE.menu && !loading) {
                return null
            }

            const type = loading ? LoadingIcon : icon
            return (
                <Icon
                    type={type}
                    className={CLASSNAME.icon}
                />
            )
        }

        if (isFn(icon)) {
            return resolveValue(icon, ctx)
        }

        return icon
    }

    renderInlineActionItem = (ctx, icon, text, cls) => {
        const view = (
            <>
                {icon ? icon : null}
                {text ? text : null}
            </>
        )

        const { dropdownMenus, popoverProps } = ctx.action

        if (Array.isArray(dropdownMenus) && dropdownMenus.length !== 0) {
            return (
                <Dropdown
                    overlay={this.renderInlineDropdownMenus(dropdownMenus)}
                    trigger={['hover']}
                    placement='bottomCenter'>
                    <span className={cls}>{view}</span>
                </Dropdown>
            )
        }

        if (!!popoverProps) {
            return (
                <Popover {...popoverProps}>
                    <span className={cls}>{view}</span>
                </Popover>
            )
        }

        return (
            <span
                key={ctx.key}
                className={cls}
                onClick={ctx.trigger}>
                {view}
            </span>
        )
    }

    renderMenuActionItem = (ctx, icon, text, cls) => {
        return (
            <Menu.Item
                className={cls}
                key={ctx.action.key || index}
                onClick={ctx.trigger}
                disabled={ctx.disabled}>
                {icon ? icon : null}
                {text ? text : null}
            </Menu.Item>
        )
    }

    renderInlineDropdownMenuItem = (menu, index) => {
        if (!menu) return null

        const visible = !!resolveValue(defaultValue(menu.visible, true))
        if (!visible) return null

        const disabled = !!resolveValue(defaultValue(menu.disabled, false))
        const loading = !!resolveValue(defaultValue(menu.loading, false))

        const icon = loading ? (
            <Icon
                type={LoadingIcon}
                className='mr-5'
            />
        ) : null
        const text = menu.text

        return (
            <Menu.Item
                key={menu.key || index}
                onClick={this.triggerDropdownMenu({
                    ...menu,
                    disabled,
                    loading
                })}
                disabled={disabled}>
                {icon ? icon : null}
                {text ? text : null}
            </Menu.Item>
        )
    }

    renderInlineDropdownMenus = (menus) => {
        return (
            <Menu>
                {menus.map((menu, index) => {
                    return this.renderInlineDropdownMenuItem(menu, index)
                })}
            </Menu>
        )
    }

    defaultActionRender = (ctx) => {
        const { action, mode } = ctx

        const text = this.rendertText(action.text, ctx)
        const icon = this.renderIcon(action.icon, ctx)
        const cls = CLASSNAME[ctx.mode](ctx.action.className, ctx)

        switch (mode) {
            case MODE.inline:
                return this.renderInlineActionItem(ctx, icon, text, cls)
            case MODE.menu:
                return this.renderMenuActionItem(ctx, icon, text, cls)
            default:
                return null
        }
    }

    renderActionContenxt = (ctx) => {
        const { action } = ctx

        if (isFn(action.render)) {
            return action.render(ctx)
        }

        return this.defaultActionRender(ctx)
    }

    renderInlineActions = (actions) => {
        return actions.map((action, index) => {
            const ctx = this.createBaseContext(
                action,
                index,
                MODE.inline,
                index == actions.length - 1
            )
            return this.renderActionContenxt(ctx)
        })
    }

    renderMenuActions = (actions) => {
        return (
            <Menu>
                {actions.map((action, index) => {
                    const ctx = this.createBaseContext(action, index, MODE.menu, null)
                    return this.renderActionContenxt(ctx)
                })}
            </Menu>
        )
    }

    renderMore = (menuActions, dropdownProps) => {
        if (menuActions.length === 0) return null

        return (
            <Dropdown
                overlayClassName={CLASSNAME.moreOverlayClassName}
                overlay={this.renderMenuActions(menuActions)}
                trigger={['hover']}
                placement='bottomCenter'
                {...(dropdownProps || {})}>
                <span className={CLASSNAME.more}>
                    <Icon type={this.state.moreIcon} />
                </span>
            </Dropdown>
        )
    }

    render() {
        const { className, dropdownProps } = this.props
        const visibleActions = getVisibleActions(this.props.actions)

        if (!visibleActions.length) return null

        const { inlineActions, menuActions } = splitActions(visibleActions, this.state.maxInline)

        return (
            <div
                className={joinClassNames(CLASSNAME.actionWrapper, className)}
                onClick={this.stopPropagation}
                onMouseDown={this.stopPropagation}>
                {this.renderInlineActions(inlineActions)}
                {this.renderMore(menuActions, dropdownProps)}
            </div>
        )
    }
}

export default TableActionGroup

function getVisibleActions(actions = []) {
    return actions.filter((action) => {
        if (!action) return false
        if (action.hasOwnProperty('visible') && !isFn(action.visible)) {
            return !!action.visible
        }
        return !!resolveValue(defaultValue(action.visible, true))
    })
}

function splitActions(actions, maxInline) {
    const forceInline = []
    const forceMenu = []
    const autoActions = []

    actions.forEach((action) => {
        if (action.placement === MODE.inline || action.mode == MODE.inline) {
            forceInline.push(action)
            return
        }
        if (action.placement === MODE.menu || action.mode === MODE.menu) {
            forceMenu.push(action)
            return
        }

        autoActions.push(action)
    })

    const remain = Math.max(maxInline - forceInline.length, 0)
    const autoInline = autoActions.slice(0, remain)
    const autoMenu = autoActions.slice(remain)

    return {
        inlineActions: [...forceInline, ...autoInline],
        menuActions: [...forceMenu, ...autoMenu]
    }
}

function resolveValue(value, ...args) {
    return isFn(value) ? value(...args) : value
}

function isFn(value) {
    return typeof value === 'function'
}

function joinClassNames(...args) {
    return Array.from(args).filter(Boolean).join(' ')
}

function defaultValue(value, dv) {
    return value !== undefined ? value : dv
}

function isPlainString(value) {
    return typeof value === 'string'
}
