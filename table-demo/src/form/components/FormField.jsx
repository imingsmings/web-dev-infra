import React from 'react'
import { Form, Select, Radio } from 'antd'
import FormContext from '../context/FormContext'
import { getFieldComponent as getGlobalFieldComponent } from '../core/fieldRegistry'
import { devWarning } from '../core/warnings'

const FormItem = Form.Item
const { Option } = Select

function buildRequiredRule({ label, message, component }) {
  const isSelectLike = [
    'select',
    'radioGroup',
    'checkboxGroup',
    'cascader',
    'datePicker',
    'monthPicker',
    'rangePicker',
    'timePicker',
  ].includes(component)

  return {
    required: true,
    message: message || `${isSelectLike ? '请选择' : '请输入'}${label}`,
  }
}

function buildRules(props) {
  const {
    label,
    rules = [],
    required,
    requiredMessage,
    component,
  } = props

  const nextRules = [...rules]

  if (required) {
    nextRules.unshift(buildRequiredRule({
      label,
      message: requiredMessage,
      component,
    }))
  }

  return nextRules
}

function getValuePropName(component, valuePropName) {
  if (valuePropName) return valuePropName

  if (component === 'switch' || component === 'checkbox') {
    return 'checked'
  }

  if (component === 'upload') {
    return 'fileList'
  }

  return 'value'
}

function normalizeOptions(options) {
  return Array.isArray(options) ? options : []
}

function normalizeCheckTools(checkTools) {
  if (!checkTools) return null
  if (checkTools === true) {
    return {
      actions: ['checkAll', 'clear', 'invert'],
      position: 'top',
      showCount: true,
      disabled: false,
      variant: 'panel',
      checkAllLabel: '全选',
      clearLabel: '全不选',
      invertLabel: '反选',
    }
  }

  return {
    actions: Array.isArray(checkTools.actions) && checkTools.actions.length
      ? checkTools.actions
      : ['checkAll', 'clear', 'invert'],
    position: checkTools.position || 'top',
    showCount: typeof checkTools.showCount === 'boolean' ? checkTools.showCount : true,
    disabled: !!checkTools.disabled,
    variant: checkTools.variant || 'panel',
    checkAllLabel: checkTools.checkAllLabel || '全选',
    clearLabel: checkTools.clearLabel || '全不选',
    invertLabel: checkTools.invertLabel || '反选',
  }
}

function getEnabledOptionValues(options) {
  return normalizeOptions(options)
    .filter(item => !item.disabled)
    .map(item => item.value)
}

function getOptionLabel(options, value) {
  const matched = normalizeOptions(options).find(item => item.value === value)
  return matched ? matched.label : value
}

function findCascaderLabels(options, targetValues, collected = []) {
  if (!Array.isArray(targetValues) || !targetValues.length) return collected

  const [current, ...rest] = targetValues
  const currentOption = normalizeOptions(options).find(item => item.value === current)

  if (!currentOption) {
    return [...collected, current]
  }

  const nextCollected = [...collected, currentOption.label]
  if (!rest.length) return nextCollected

  return findCascaderLabels(currentOption.children || [], rest, nextCollected)
}

function formatMomentValue(value, format) {
  if (value && typeof value.format === 'function') {
    return value.format(format || 'YYYY-MM-DD HH:mm:ss')
  }
  return value
}

function defaultRenderControl(Comp, component, componentProps, options) {

  if (component === 'select') {
    return (
      <Comp {...componentProps}>
        {normalizeOptions(options).map(item => (
          <Option key={item.value} value={item.value} disabled={item.disabled}>
            {item.label}
          </Option>
        ))}
      </Comp>
    )
  }

  if (component === 'radioGroup') {
    return (
      <Comp {...componentProps}>
        {normalizeOptions(options).map(item => (
          <Radio key={item.value} value={item.value} disabled={item.disabled}>
            {item.label}
          </Radio>
        ))}
      </Comp>
    )
  }

  if (component === 'checkboxGroup') {
    return (
      <Comp
        options={normalizeOptions(options).map(item => ({
          label: item.label,
          value: item.value,
          disabled: item.disabled,
        }))}
        {...componentProps}
      />
    )
  }

  return <Comp {...componentProps} />
}

class FormField extends React.PureComponent {
  static contextType = FormContext

  getResolvedComponent = () => {
    const { component = 'input' } = this.props
    const context = this.context || {}

    if (typeof component !== 'string') {
      return component
    }

    const localFieldComponent = context.getFieldComponent
      ? context.getFieldComponent(component)
      : null

    return localFieldComponent || getGlobalFieldComponent(component) || component
  }

  getItemLayoutProps = () => {
    const {
      labelCol,
      wrapperCol,
      colon,
    } = this.props
    const context = this.context || {}
    const layout = context.layout || 'horizontal'

    const nextProps = {
      colon: typeof colon === 'undefined' ? context.colon : colon,
    }

    if (layout === 'horizontal') {
      nextProps.labelCol = labelCol || context.labelCol
      nextProps.wrapperCol = wrapperCol || context.wrapperCol
    }

    return nextProps
  }

  componentDidMount() {
    this.registerField()
    this.runPropWarnings()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      this.unregisterField(prevProps.name)
      this.registerField()
    }

    this.runPropWarnings()
    this.handleHiddenSideEffects(this.resolveStateValue(prevProps.hidden), this.isHidden())
  }

  componentWillUnmount() {
    this.unregisterField(this.props.name)
  }

  getFieldContext = () => {
    const context = this.context || {}
    return {
      form: context.form,
      values: context.getAllValues ? context.getAllValues() : {},
      disabled: !!context.disabled || !!context.submitting,
      readonly: !!context.readonly,
      submitting: !!context.submitting,
      valueVersion: context.valueVersion,
    }
  }

  getFieldMeta = () => {
    const {
      name,
      transform,
      component = 'input',
      clearOnHidden,
      preserveOnHidden,
      valueFormat,
    } = this.props

    return {
      name,
      transform,
      component,
      clearOnHidden,
      preserveOnHidden,
      valueFormat,
    }
  }

  shouldPreserveOnHidden = () => {
    const { clearOnHidden, preserveOnHidden } = this.props

    if (clearOnHidden) return false
    if (typeof preserveOnHidden === 'boolean') return preserveOnHidden
    return true
  }

  registerField = () => {
    const { name } = this.props
    const { registerField } = this.context || {}

    if (!name || !registerField) return
    registerField(name, this.getFieldMeta)
  }

  unregisterField = (name) => {
    const { unregisterField } = this.context || {}
    if (!name || !unregisterField) return
    unregisterField(name)
  }

  resolveStateValue = (value) => {
    if (typeof value !== 'function') return !!value
    return !!value(this.getFieldContext())
  }

  isHidden = () => this.resolveStateValue(this.props.hidden)

  isDisabled = () => this.resolveStateValue(this.props.disabled) || this.getFieldContext().disabled

  isReadonly = () => this.resolveStateValue(this.props.readonly) || this.getFieldContext().readonly

  handleHiddenSideEffects = (prevHidden, nextHidden) => {
    const { name } = this.props
    const { form } = this.getFieldContext()

    if (!name || !form) return
    if (prevHidden === nextHidden || !nextHidden) return
    if (this.shouldPreserveOnHidden()) return

    const currentValue = form.getFieldValue ? form.getFieldValue(name) : undefined
    if (typeof currentValue === 'undefined') return

    form.setFieldsValue({
      [name]: undefined,
    })
  }

  runPropWarnings = () => {
    const {
      name,
      component = 'input',
      options,
      initialValue,
      clearOnHidden,
      preserveOnHidden,
      valueFormat,
      checkTools,
    } = this.props

    devWarning(!!name, 'FormField 缺少必填属性 name。', 'field-missing-name')
    const resolvedComponent = this.getResolvedComponent()
    devWarning(
      !!(resolvedComponent || typeof component === 'function' || typeof component === 'object'),
      `字段 "${name || 'unknown'}" 使用了未注册的 component: ${component}`,
      `field-component:${name}:${component}`
    )

    if (['select', 'radioGroup', 'checkboxGroup'].includes(component)) {
      devWarning(
        Array.isArray(options),
        `字段 "${name || 'unknown'}" 的 component="${component}" 时建议提供 options 数组。`,
        `field-options:${name}`
      )
    }

    if (component === 'switch' || component === 'checkbox') {
      devWarning(
        typeof initialValue === 'undefined' || typeof initialValue === 'boolean',
        `字段 "${name || 'unknown'}" 的 initialValue 应为 boolean。`,
        `field-boolean-initial:${name}`
      )
    }

    if (component === 'rangePicker') {
      devWarning(
        typeof initialValue === 'undefined' || Array.isArray(initialValue),
        `字段 "${name || 'unknown'}" 的 initialValue 应为数组。`,
        `field-range-initial:${name}`
      )
    }

    if (typeof preserveOnHidden !== 'undefined') {
      devWarning(
        typeof preserveOnHidden === 'boolean',
        `字段 "${name || 'unknown'}" 的 preserveOnHidden 应为 boolean。`,
        `field-hidden-preserve-type:${name}`
      )
    }

    if (typeof valueFormat !== 'undefined') {
      devWarning(
        ['datePicker', 'monthPicker', 'rangePicker', 'timePicker'].includes(component),
        `字段 "${name || 'unknown'}" 的 valueFormat 仅建议用于 datePicker/monthPicker/rangePicker/timePicker。`,
        `field-value-format-component:${name}`
      )
    }

    if (typeof checkTools !== 'undefined') {
      devWarning(
        component === 'checkboxGroup',
        `字段 "${name || 'unknown'}" 的 checkTools 仅支持 checkboxGroup。`,
        `field-check-tools-component:${name}`
      )
    }
  }

  getDecoratorOptions = () => {
    const {
      initialValue,
      normalize,
      getValueFromEvent,
      validateFirst,
      validateTrigger,
      trigger,
      component,
      valuePropName,
    } = this.props

    const decoratorOptions = {
      initialValue,
      rules: buildRules(this.props),
      valuePropName: getValuePropName(component, valuePropName),
    }

    if (normalize) decoratorOptions.normalize = normalize
    if (getValueFromEvent) decoratorOptions.getValueFromEvent = getValueFromEvent
    if (typeof validateFirst !== 'undefined') decoratorOptions.validateFirst = validateFirst
    if (validateTrigger) decoratorOptions.validateTrigger = validateTrigger
    if (trigger) decoratorOptions.trigger = trigger

    return decoratorOptions
  }

  renderControlNode = () => {
    const {
      component = 'input',
      componentProps = {},
      options = [],
      renderControl,
      name,
    } = this.props
    const disabled = this.isDisabled()

    const mergedProps = {
      ...componentProps,
      disabled: typeof componentProps.disabled === 'undefined'
        ? disabled
        : componentProps.disabled,
      className: componentProps.className
        ? `w-full ${componentProps.className}`
        : 'w-full',
      'data-field-name': name,
    }

    const renderArgs = {
      component,
      componentProps: mergedProps,
      options,
      form: this.getFieldContext().form,
      values: this.getFieldContext().values,
      disabled,
      readonly: this.isReadonly(),
    }

    const ResolvedComponent = this.getResolvedComponent()

    return renderControl
      ? renderControl(renderArgs)
      : defaultRenderControl(ResolvedComponent, component, mergedProps, options)
  }

  setCheckboxGroupValue = (nextValue) => {
    const { name } = this.props
    const { form } = this.getFieldContext()
    if (!name || !form || !form.setFieldsValue) return

    form.setFieldsValue({
      [name]: nextValue,
    })
  }

  handleCheckboxGroupAction = (action) => {
    const { options = [] } = this.props
    const enabledOptionValues = getEnabledOptionValues(options)
    const currentValue = this.getDisplayValue()
    const currentList = Array.isArray(currentValue) ? currentValue : []
    const selectedSet = new Set(currentList)

    if (action === 'checkAll') {
      const preservedDisabledValues = currentList.filter(value => !enabledOptionValues.includes(value))
      this.setCheckboxGroupValue([...preservedDisabledValues, ...enabledOptionValues])
      return
    }

    if (action === 'clear') {
      const preservedDisabledValues = currentList.filter(value => !enabledOptionValues.includes(value))
      this.setCheckboxGroupValue(preservedDisabledValues)
      return
    }

    if (action === 'invert') {
      const preservedDisabledValues = currentList.filter(value => !enabledOptionValues.includes(value))
      const invertedValues = enabledOptionValues.filter(value => !selectedSet.has(value))
      this.setCheckboxGroupValue([...preservedDisabledValues, ...invertedValues])
    }
  }

  renderCheckboxGroupTools = () => {
    const { checkTools, options = [] } = this.props
    const toolConfig = normalizeCheckTools(checkTools)
    if (!toolConfig) return null

    const currentValue = this.getDisplayValue()
    const currentList = Array.isArray(currentValue) ? currentValue : []
    const enabledOptionValues = getEnabledOptionValues(options)

    const actionMap = {
      checkAll: toolConfig.checkAllLabel,
      clear: toolConfig.clearLabel,
      invert: toolConfig.invertLabel,
    }

    const actionsNode = (
      <div>
        {toolConfig.actions.map((action, index) => (
          <React.Fragment key={action}>
            <button
              type="button"
              disabled={toolConfig.disabled || this.isDisabled()}
              onClick={(e) => {
                e.preventDefault()
                this.handleCheckboxGroupAction(action)
              }}
              style={{
                padding: 0,
                marginRight: toolConfig.variant === 'panel' ? 14 : 8,
                border: 'none',
                background: 'transparent',
                color: toolConfig.disabled || this.isDisabled() ? '#bfbfbf' : 'rgba(0, 0, 0, 0.55)',
                fontSize: 12,
                lineHeight: '20px',
                cursor: toolConfig.disabled || this.isDisabled() ? 'not-allowed' : 'pointer',
              }}
            >
              {actionMap[action]}
            </button>
            {toolConfig.variant === 'inline' && index < toolConfig.actions.length - 1 ? (
              <span style={{ marginRight: 8, color: '#d9d9d9' }}>·</span>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    )

    return (
      <div
        className="base-form-checkbox-group-tools"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: toolConfig.position === 'top' ? 6 : 0,
          marginTop: toolConfig.position === 'bottom' ? 6 : 0,
        }}
      >
        {actionsNode}
        {toolConfig.showCount ? (
          <span style={{ color: '#b0b0b0', fontSize: 12 }}>
            已选 {currentList.filter(value => enabledOptionValues.includes(value)).length} / {enabledOptionValues.length}
          </span>
        ) : null}
      </div>
    )
  }

  renderCheckboxGroupWithTools = (controlNode) => {
    const toolConfig = normalizeCheckTools(this.props.checkTools)
    if (!toolConfig) return controlNode

    const toolsNode = this.renderCheckboxGroupTools()
    const shouldEmbedToolsInLabel = this.shouldEmbedCheckboxToolsInLabel()
    const containerStyle = toolConfig.variant === 'panel'
      ? {
          padding: '10px 16px',
          border: '1px solid #f0f0f0',
          borderRadius: 6,
          background: '#fcfcfc',
        }
      : undefined

    if (toolConfig.variant === 'panel') {
      return (
        <div>
          {!shouldEmbedToolsInLabel && toolConfig.position === 'top' ? toolsNode : null}
          <div style={containerStyle}>
            {controlNode}
          </div>
          {!shouldEmbedToolsInLabel && toolConfig.position === 'bottom' ? toolsNode : null}
        </div>
      )
    }

    return (
      <div style={containerStyle}>
        {toolConfig.position === 'top' ? toolsNode : null}
        {controlNode}
        {toolConfig.position === 'bottom' ? toolsNode : null}
      </div>
    )
  }

  renderDecoratedControl = () => {
    const { form } = this.getFieldContext()
    const { name } = this.props

    if (!form || !name) return null

    return form.getFieldDecorator(name, this.getDecoratorOptions())(this.renderControlNode())
  }

  getDisplayValue = () => {
    const { name, initialValue } = this.props
    const { form, values } = this.getFieldContext()

    if (!name) return initialValue
    if (values && Object.prototype.hasOwnProperty.call(values, name)) {
      return values[name]
    }
    if (form) {
      const currentValue = form.getFieldValue(name)
      if (typeof currentValue !== 'undefined') {
        return currentValue
      }
    }

    return initialValue
  }

  renderReadonlyValue = () => {
    const {
      component = 'input',
      options = [],
      renderReadOnly,
      componentProps = {},
    } = this.props
    const { values } = this.getFieldContext()
    const value = this.getDisplayValue()

    if (typeof renderReadOnly === 'function') {
      return renderReadOnly({
        value,
        values,
        fieldProps: this.props,
      })
    }

    if (component === 'password') {
      return value ? '******' : '-'
    }

    if (component === 'select' || component === 'radioGroup') {
      return getOptionLabel(options, value) || '-'
    }

    if (component === 'checkboxGroup') {
      if (!Array.isArray(value) || !value.length) return '-'
      return value.map(item => getOptionLabel(options, item)).join('，')
    }

    if (component === 'checkbox' || component === 'switch') {
      return value ? '是' : '否'
    }

    if (component === 'cascader') {
      if (!Array.isArray(value) || !value.length) return '-'
      return findCascaderLabels(options, value).join(' / ')
    }

    if (component === 'rangePicker') {
      if (!Array.isArray(value) || !value.length) return '-'
      return value
        .map(item => formatMomentValue(item, componentProps.format))
        .join(' ~ ')
    }

    if (['datePicker', 'monthPicker', 'timePicker'].includes(component)) {
      const defaultFormatMap = {
        datePicker: 'YYYY-MM-DD',
        monthPicker: 'YYYY-MM',
        timePicker: 'HH:mm:ss',
      }
      return formatMomentValue(value, componentProps.format || defaultFormatMap[component]) || '-'
    }

    if (Array.isArray(value)) {
      return value.join('，') || '-'
    }

    if (component && typeof component !== 'string' && typeof renderReadOnly !== 'function') {
      return typeof value === 'undefined' || value === null || value === ''
        ? '-'
        : JSON.stringify(value)
    }

    return typeof value === 'undefined' || value === null || value === ''
      ? '-'
      : String(value)
  }

  renderReadonlyControl = () => (
    <>
      <div style={{ display: 'none' }}>
        {this.renderDecoratedControl()}
      </div>
      <div className="base-form-readonly-value">
        {this.renderReadonlyValue()}
      </div>
    </>
  )

  renderFieldContent = () => {
    if (this.isReadonly()) {
      return this.renderReadonlyControl()
    }

    const decoratedControl = this.renderDecoratedControl()

    if (this.props.component === 'checkboxGroup' && this.props.checkTools) {
      return this.renderCheckboxGroupWithTools(decoratedControl)
    }

    return decoratedControl
  }

  shouldEmbedCheckboxToolsInLabel = () => {
    const { component, checkTools, label } = this.props
    const context = this.context || {}
    const toolConfig = normalizeCheckTools(checkTools)

    return (
      component === 'checkboxGroup' &&
      !!label &&
      !!toolConfig &&
      toolConfig.variant === 'panel' &&
      (context.layout || 'horizontal') === 'vertical'
    )
  }

  renderMergedLabel = () => {
    const { label } = this.props
    if (!this.shouldEmbedCheckboxToolsInLabel()) {
      return label
    }

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          gap: 16,
        }}
      >
        <span>{label}</span>
        <div style={{ minWidth: 0, flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          {this.renderCheckboxGroupTools()}
        </div>
      </div>
    )
  }

  render() {
    const {
      noStyle,
      extra,
      help,
      validateStatus,
      required,
      className,
      style,
    } = this.props
    const context = this.context || {}
    const hidden = this.isHidden()

    const content = this.renderFieldContent()

    if (noStyle) {
      return hidden ? <div style={{ display: 'none' }}>{content}</div> : content
    }

    return (
      <FormItem
        label={this.renderMergedLabel()}
        extra={extra}
        help={help}
        validateStatus={validateStatus}
        required={required}
        className={className}
        style={{
          display: hidden ? 'none' : undefined,
          ...style,
        }}
        {...this.getItemLayoutProps()}
      >
        {content}
      </FormItem>
    )
  }
}

export default FormField
