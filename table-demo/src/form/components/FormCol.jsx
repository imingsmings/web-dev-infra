import React from 'react'
import { Col } from 'antd'
import FormGridContext from '../context/FormGridContext'
import { devWarning } from '../core/warnings'

class FormCol extends React.PureComponent {
  static contextType = FormGridContext

  render() {
    const {
      span,
      hidden,
      destroyOnHide,
      className,
      style,
      children,
      ...restProps
    } = this.props
    const { defaultSpan = 24 } = this.context || {}

    if (typeof hidden !== 'undefined') {
      devWarning(
        false,
        'BaseForm.Col 的 hidden 表示直接卸载整列，建议改用 destroyOnHide 以避免与 FormField.hidden 语义混淆。',
        'base-form-col-hidden-deprecated'
      )
    }

    if (hidden || destroyOnHide) return null

    return (
      <Col
        span={typeof span === 'number' ? span : defaultSpan}
        className={className}
        style={style}
        {...restProps}
      >
        {children}
      </Col>
    )
  }
}

export default FormCol
