import React from 'react'
import { Button, Modal, Dropdown, Menu } from 'antd'
import Icon from '../../shared/icons'

const VARIANT = {
    solid: 'solid',
    outlined: 'outlined',
    text: 'text'
}

Object.freeze(VARIANT)

const CLASSNAME = {
    wrapper: `table-operation-wrapper flex-fc justify-content-between`,
    left: `table-operation-left`,
    right: `table-operation-right flex-fc`,
    title: 'wx-list-label',
    subTitle: '',
    btnicon: 'table-operation-icon mr-8',
    btntext: 'table-operation-text',
    solid: 'table-operation-button solid flex-fc',
    outlined: 'table-operation-button outlined flex-fc',
    text: 'table-operation-button text primary-text flex-fc'
}

const LOADING = 'loading'

class OperationGroup extends React.Component {
    constructor(props) {
        super(props)
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
                    onClick: ctx.operation.onClick
                },
                confirm: ctx.operation.confirm
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

    createBaseContext = (operation, variant, index) => {
        const baseCtx = {
            key: `${!!operation.key ? operation.key : index}`,
            variant,
            operation,
            disabled: false,
            loading: false,
            trigger: null
        }

        const { disabled, loading } = normalizeLoadingAndDisabled(operation)

        const ctx = {
            ...baseCtx,
            disabled,
            loading
        }

        ctx.trigger = this.triggerAction(ctx)

        return ctx
    }

    renderTitle = (title) => {
        const renderTitle = defaultValue(resolveValue(title), null)

        if (!renderTitle) return null

        return <div className={CLASSNAME.title}>{renderTitle}</div>
    }

    renderIcon = (ctx) => {
        const { loading, variant, operation } = ctx

        switch (variant) {
            case VARIANT.text:
                return !loading ? null : (
                    <Icon
                        type={LOADING}
                        theme={null}
                        className={CLASSNAME.btnicon}
                    />
                )
            case VARIANT.outlined:
            case VARIANT.solid:
                const icon = loading ? LOADING : resolveValue(operation.icon)
                return (
                    <Icon
                        type={icon}
                        theme={loading ? null : 'filled'}
                        className={CLASSNAME.btnicon}
                    />
                )
            default:
                return null
        }
    }

    renderOperations = (operations) => {
        const { solids, outlineds, texts } = operations

        return (
            <>
                {texts.map((operation, index) => {
                    const ctx = this.createBaseContext(operation, VARIANT.text, index)
                    return this.renderOperationItem(ctx)
                })}
                {outlineds.map((operation, index) => {
                    const ctx = this.createBaseContext(operation, VARIANT.outlined, index)
                    return this.renderOperationItem(ctx)
                })}
                {solids.map((operation, index) => {
                    const ctx = this.createBaseContext(operation, VARIANT.solid, index)
                    return this.renderOperationItem(ctx)
                })}
            </>
        )
    }

    renderOperationItem = (ctx) => {
        const { operation, trigger, variant, key } = ctx
        const text = resolveValue(operation.text)

        const dropdownMenus = operation.dropdownMenus
        const buttonProps = {
            key,
            className: CLASSNAME[variant],
            onClick: trigger
        }

        const view = (
            <>
                {this.renderIcon(ctx)}
                <span className={CLASSNAME.btntext}>{text}</span>
            </>
        )

        if (Array.isArray(dropdownMenus) && dropdownMenus.length !== 0) {
            buttonProps.onClick = null

            return (
                <Dropdown
                    overlay={this.renderOperationDropdownMenus(dropdownMenus)}
                    trigger={['hover']}
                    placement='bottomCenter'>
                    <Button {...buttonProps}>{view}</Button>
                </Dropdown>
            )
        }

        return <Button {...buttonProps}>{view}</Button>
    }

    renderOperationDropdownMenus = (menus) => {
        return (
            <Menu>
                {menus.map((menu, index) => {
                    if (!menu) return null

                    const { disabled, visible, loading } = normalizeLoadingAndDisabled(menu)

                    if (!visible) return null

                    const icon = loading ? (
                        <Icon
                            type={LOADING}
                            className='mr-8'
                        />
                    ) : null
                    const text = menu.text

                    return (
                        <Menu.Item
                            key={!!menu.key ? menu.key : index}
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
                })}
            </Menu>
        )
    }

    render() {
        const visibleOpertions = getVisibleOperations(this.props.operations)
        const operations = splitOperations(visibleOpertions)

        return (
            <div className={CLASSNAME.wrapper}>
                <div className={CLASSNAME.left}>{this.renderTitle(this.props.title)}</div>
                <div className={CLASSNAME.right}>{this.renderOperations(operations)}</div>
            </div>
        )
    }
}

OperationGroup.VARIANT = VARIANT

export default OperationGroup

function normalizeLoadingAndDisabled(obj) {
    const disabled = !!resolveValue(defaultValue(obj.disabled, false))
    const loading = !!resolveValue(defaultValue(obj.loading, false))
    const visible = !!resolveValue(defaultValue(obj.visible, true))

    return {
        disabled,
        loading,
        visible
    }
}

function getVisibleOperations(operations = []) {
    return operations.filter((operation) => {
        if (!operation) return false
        if (operation.hasOwnProperty('visible') && !isFn(operation.visible)) {
            return !!operation.visible
        }
        return !!resolveValue(defaultValue(operation.visible, true))
    })
}

function splitOperations(operations) {
    const solids = []
    const outlineds = []
    const texts = []

    operations.forEach((operation) => {
        if (operation.variant === VARIANT.solid) {
            solids.push(operation)
            return
        }
        if (operation.variant === VARIANT.outlined) {
            outlineds.push(operation)
            return
        }
        if (operation.variant === VARIANT.text) {
            texts.push(operation)
            return
        }
        texts.push(operation)
    })

    return {
        solids,
        outlineds,
        texts
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
