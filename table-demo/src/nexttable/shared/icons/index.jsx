import React from 'react'
import { Icon as AntdIcon } from 'antd'

const statusMap = {
    success: 'check-circle',
    warning: 'exclamation-circle',
    error: 'close-circle',
    info: 'info-circle'
}

const typeMap = {
    omit: 'ellipsis',
    more: 'ellipsis',
    swap: 'swap',
    loading: 'loading'
}

function normalizeType(type, status) {
    if (status && statusMap[status]) {
        return statusMap[status]
    }

    return typeMap[type] || type || 'info-circle'
}

export default function Icon(props) {
    const {
        text,
        title,
        status,
        type,
        className,
        ...restProps
    } = props
    const iconType = normalizeType(type, status)
    const suffixText = text || title

    if (!suffixText) {
        return (
            <AntdIcon
                {...restProps}
                className={className}
                type={iconType}
            />
        )
    }

    return (
        <span className='flex-fc'>
            <AntdIcon
                {...restProps}
                className={className}
                type={iconType}
            />
            <span>{suffixText}</span>
        </span>
    )
}
