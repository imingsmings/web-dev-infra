import React from 'react'

const defaultIntl = {
    formatMessage({ id, defaultMessage }) {
        if (defaultMessage) {
            return defaultMessage
        }

        return id
    }
}

export default function injectIntl(Component) {
    class InjectIntlWrapper extends React.PureComponent {
        render() {
            const {
                forwardedRef,
                ...restProps
            } = this.props
            const intl = restProps.intl || defaultIntl

            return (
                <Component
                    {...restProps}
                    ref={forwardedRef}
                    intl={intl}
                />
            )
        }
    }

    const displayName = `InjectIntl(${
        Component.displayName || Component.name || 'Component'
    })`

    InjectIntlWrapper.displayName = displayName

    const ForwardedInjectIntl = React.forwardRef(
        (props, ref) => (
            <InjectIntlWrapper
                {...props}
                forwardedRef={ref}
            />
        )
    )

    ForwardedInjectIntl.displayName = displayName

    return ForwardedInjectIntl
}
