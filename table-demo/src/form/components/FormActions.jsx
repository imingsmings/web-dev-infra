import React from 'react'
import { Button } from 'antd'
import FormContext from '../context/FormContext'

function getJustifyContent(align) {
  if (align === 'left') return 'flex-start'
  if (align === 'center') return 'center'
  return 'flex-end'
}

class FormActions extends React.PureComponent {
  static contextType = FormContext

  handleSubmit = () => {
    const { controller } = this.context
    controller && controller.submit()
  }

  handleReset = () => {
    const { controller } = this.context
    controller && controller.reset()
  }

  render() {
    const {
      align = 'right',
      submitText = '提交',
      resetText = '重置',
      cancelText = '取消',
      showSubmit = true,
      showReset = false,
      showCancel = false,
      onCancel,
      submitProps = {},
      resetProps = {},
      cancelProps = {},
      style,
      className,
      children,
    } = this.props
    const { submitting } = this.context

    return (
      <div
        className={className}
        style={{
          display: 'flex',
          justifyContent: getJustifyContent(align),
          gap: 8,
          marginTop: 24,
          ...style,
        }}
      >
        {children}
        {showCancel ? (
          <Button {...cancelProps} onClick={onCancel}>
            {cancelText}
          </Button>
        ) : null}
        {showReset ? (
          <Button {...resetProps} onClick={this.handleReset}>
            {resetText}
          </Button>
        ) : null}
        {showSubmit ? (
          <Button type="primary" loading={submitting} {...submitProps} onClick={this.handleSubmit}>
            {submitText}
          </Button>
        ) : null}
      </div>
    )
  }
}

export default FormActions
