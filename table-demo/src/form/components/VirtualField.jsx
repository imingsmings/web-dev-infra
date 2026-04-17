import React from 'react'
import { Form } from 'antd'
import FormContext from '../context/FormContext'

const FormItem = Form.Item

class VirtualField extends React.PureComponent {
  static contextType = FormContext

  getItemLayoutProps = () => {
    const {
      labelCol,
      wrapperCol,
    } = this.props
    const context = this.context || {}
    const layout = context.layout || 'horizontal'

    if (layout !== 'horizontal') {
      return {}
    }

    return {
      labelCol: labelCol || context.labelCol,
      wrapperCol: wrapperCol || context.wrapperCol,
    }
  }

  render() {
    const {
      name,
      label,
      required,
      help,
      validateStatus,
      errorDisplayMode = 'formItem',
      extra,
      className,
      style,
      children,
    } = this.props
    const context = this.context || {}
    const extraError = name && context.getExtraError ? context.getExtraError(name) : undefined
    const mergedHelp = typeof help !== 'undefined' ? help : extraError
    const shouldUseFormItemStatus = errorDisplayMode === 'formItem'
    const mergedValidateStatus = shouldUseFormItemStatus
      ? (
        typeof validateStatus !== 'undefined'
          ? validateStatus
          : (extraError ? 'error' : undefined)
      )
      : undefined
    const contentNode = errorDisplayMode === 'border' && extraError
      ? (
        <div
          style={{
            border: '1px solid #ffccc7',
            borderRadius: 4,
            padding: 12,
            background: '#fff2f0',
          }}
        >
          {children}
        </div>
      )
      : children

    return (
      <FormItem
        label={label}
        required={required}
        help={mergedHelp}
        extra={extra}
        validateStatus={mergedValidateStatus}
        className={className}
        style={style}
        {...this.getItemLayoutProps()}
      >
        {contentNode}
      </FormItem>
    )
  }
}

export default VirtualField
