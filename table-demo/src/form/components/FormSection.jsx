import React from 'react'

class FormSection extends React.PureComponent {
  render() {
    const {
      title,
      extra,
      collapsible = false,
      style,
      className,
      children,
    } = this.props

    return (
      <section
        className={className}
        style={{
          marginBottom: 24,
          padding: 16,
          border: '1px solid #f0f0f0',
          borderRadius: 4,
          background: '#fff',
          ...style,
        }}
      >
        {children}
      </section>
    )
  }
}

export default FormSection
