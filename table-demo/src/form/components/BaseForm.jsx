import React from 'react'
import { Form } from 'antd'
import FormContext from '../context/FormContext'
import createFormController from '../core/createFormController'
import runSubmitPipeline from '../core/submitPipeline'
import scrollToErrorUtil from '../utils/scrollToError'
import { devWarning } from '../core/warnings'
import FormActions from './FormActions'
import FormSection from './FormSection'
import VirtualField from './VirtualField'
import FormRow from './FormRow'
import FormCol from './FormCol'
import FormGrid from './FormGrid'
import { getFieldComponent as getGlobalFieldComponent } from '../core/fieldRegistry'

function isPlainObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value)
}

function normalizeValidateArgs(names, options) {
  let nextNames = names
  let nextOptions = options

  if (typeof nextNames === 'string') {
    nextNames = [nextNames]
  } else if (isPlainObject(nextNames) && typeof nextOptions === 'undefined') {
    nextOptions = nextNames
    nextNames = undefined
  }

  return {
    names: nextNames,
    options: nextOptions || {},
  }
}

const hostMap = new Map()
const valuesSnapshotMap = new Map()
let baseFormInstanceSeed = 0

function buildValuesChangePayload(changedValues, prevValues, nextValues, form) {
  const changedKeys = Object.keys(changedValues || {})
  const changedKey = changedKeys.length === 1 ? changedKeys[0] : undefined
  const changedValue = typeof changedKey === 'undefined' ? undefined : changedValues[changedKey]

  return {
    changedValues,
    changedKeys,
    changedKey,
    changedValue,
    prevValues,
    nextValues: nextValues || {},
    form,
    hasChanged: (name) => changedKeys.includes(name),
  }
}

class BaseFormInner extends React.PureComponent {
  constructor(props) {
    super(props)

    this.fieldMetaMap = new Map()
    this.pendingFieldValues = {}
    this.pendingFieldErrors = {}
    this.submitLock = false
    this.state = {
      innerSubmitting: false,
      extraErrors: {},
    }
    this.controller = createFormController(this)
    this.lastValuesSnapshot = this.getSafeValues(props.form)
  }

  componentDidMount() {
    const instanceId = this.props.__baseFormId
    if (instanceId) {
      hostMap.set(instanceId, this)
      valuesSnapshotMap.set(instanceId, this.getValues())
    }

    this.validateFieldComponents()

    const { initialValues } = this.props

    if (initialValues && Object.keys(initialValues).length) {
      this.setValues(initialValues)
      this.lastValuesSnapshot = this.getSafeValues()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.__baseFormId !== this.props.__baseFormId) {
      if (prevProps.__baseFormId) {
        hostMap.delete(prevProps.__baseFormId)
        valuesSnapshotMap.delete(prevProps.__baseFormId)
      }
      if (this.props.__baseFormId) {
        hostMap.set(this.props.__baseFormId, this)
        valuesSnapshotMap.set(this.props.__baseFormId, this.getValues())
      }
    }

    if (prevProps.fieldComponents !== this.props.fieldComponents) {
      this.validateFieldComponents()
    }
  }

  componentWillUnmount() {
    const instanceId = this.props.__baseFormId
    if (instanceId) {
      hostMap.delete(instanceId)
      valuesSnapshotMap.delete(instanceId)
    }
  }

  getSafeValues = (formInstance) => {
    const form = formInstance || this.getForm()
    if (!form || !form.getFieldsValue) return {}

    try {
      return form.getFieldsValue()
    } catch (error) {
      return {}
    }
  }

  getForm = () => this.props.form

  updateValuesSnapshot = () => {
    const nextValues = this.getValues()
    this.lastValuesSnapshot = nextValues
    if (this.props.__baseFormId) {
      valuesSnapshotMap.set(this.props.__baseFormId, nextValues)
    }
  }

  validateFieldComponents = () => {
    const { fieldComponents } = this.props

    if (typeof fieldComponents === 'undefined') return

    devWarning(
      isPlainObject(fieldComponents),
      'BaseForm 的 fieldComponents 应为对象，形如 { userPicker: UserPicker }。',
      'base-form-field-components-type'
    )

    if (!isPlainObject(fieldComponents)) return

    Object.keys(fieldComponents).forEach((type) => {
      const component = fieldComponents[type]

      devWarning(
        !!component,
        `BaseForm.fieldComponents["${type}"] 不能为空。`,
        `base-form-field-components-empty:${type}`
      )

      if (getGlobalFieldComponent(type)) {
        devWarning(
          false,
          `BaseForm.fieldComponents["${type}"] 会覆盖全局同名字段组件，当前表单将优先使用局部版本。`,
          `base-form-field-components-shadow-global:${type}`
        )
      }
    })
  }

  getValues = (names) => {
    const form = this.getForm()
    const mergedValues = {
      ...(form ? form.getFieldsValue() : {}),
      ...this.pendingFieldValues,
    }
    if (!form) return mergedValues

    if (typeof names === 'string') {
      if (Object.prototype.hasOwnProperty.call(this.pendingFieldValues, names)) {
        return this.pendingFieldValues[names]
      }
      return form.getFieldValue(names)
    }

    if (Array.isArray(names)) {
      return names.reduce((result, key) => {
        result[key] = Object.prototype.hasOwnProperty.call(this.pendingFieldValues, key)
          ? this.pendingFieldValues[key]
          : form.getFieldValue(key)
        return result
      }, {})
    }

    return mergedValues
  }

  getValue = (name) => {
    if (Object.prototype.hasOwnProperty.call(this.pendingFieldValues, name)) {
      return this.pendingFieldValues[name]
    }

    const form = this.getForm()
    if (!form) return undefined
    return form.getFieldValue(name)
  }

  getFieldError = (name) => {
    const form = this.getForm()
    if (!name) return []

    if (Object.prototype.hasOwnProperty.call(this.pendingFieldErrors, name)) {
      return this.pendingFieldErrors[name]
    }

    if (!form || !form.getFieldError) return []
    return form.getFieldError(name)
  }

  getFieldsError = (names) => {
    const form = this.getForm()
    const baseErrors = form && form.getFieldsError
      ? (names ? form.getFieldsError(names) : form.getFieldsError())
      : {}

    if (!names) {
      return {
        ...baseErrors,
        ...this.pendingFieldErrors,
      }
    }

    const nameList = Array.isArray(names) ? names : [names]
    return nameList.reduce((result, name) => {
      result[name] = Object.prototype.hasOwnProperty.call(this.pendingFieldErrors, name)
        ? this.pendingFieldErrors[name]
        : (baseErrors && baseErrors[name]) || []
      return result
    }, {})
  }

  isFieldTouched = (name) => {
    const form = this.getForm()
    if (!form || !form.isFieldTouched) return false
    return form.isFieldTouched(name)
  }

  isFieldsTouched = (names) => {
    const form = this.getForm()
    if (!form || !form.isFieldsTouched) return false
    return typeof names === 'undefined' ? form.isFieldsTouched() : form.isFieldsTouched(names)
  }

  isFieldValidating = (name) => {
    const form = this.getForm()
    if (!form || !form.isFieldValidating) return false
    return form.isFieldValidating(name)
  }

  isFieldsValidating = (names) => {
    const form = this.getForm()
    if (!form || !form.isFieldValidating) return false

    const targetNames = Array.isArray(names)
      ? names
      : (typeof names === 'string' ? [names] : this.getRegisteredFieldNames())

    return targetNames.some(name => form.isFieldValidating(name))
  }

  getRegisteredFieldNames = () => Array.from(this.fieldMetaMap.keys())

  splitValuesByRegistration = (values) => {
    const registeredFieldNames = this.getRegisteredFieldNames()
    const immediateValues = {}
    const pendingValues = {}

    Object.keys(values || {}).forEach((key) => {
      if (registeredFieldNames.includes(key)) {
        immediateValues[key] = values[key]
        return
      }

      pendingValues[key] = values[key]
    })

    return {
      immediateValues,
      pendingValues,
    }
  }

  flushPendingFieldValue = (name) => {
    const form = this.getForm()
    if (!form || !name || !Object.prototype.hasOwnProperty.call(this.pendingFieldValues, name)) {
      return
    }

    const value = this.pendingFieldValues[name]
    delete this.pendingFieldValues[name]

    form.setFieldsValue({
      [name]: value,
    })

    this.updateValuesSnapshot()
  }

  flushPendingFieldError = (name) => {
    const form = this.getForm()
    if (!form || !name || !Object.prototype.hasOwnProperty.call(this.pendingFieldErrors, name)) {
      return
    }

    const errorValue = this.getValue(name)
    const rawErrors = this.pendingFieldErrors[name]
    delete this.pendingFieldErrors[name]

    form.setFields({
      [name]: {
        value: errorValue,
        errors: rawErrors.map(message => (
          message instanceof Error ? message : new Error(message)
        )),
      },
    })
  }

  setValues = (values) => {
    const form = this.getForm()
    if (!form || !values) return

    const { immediateValues, pendingValues } = this.splitValuesByRegistration(values)

    if (Object.keys(immediateValues).length) {
      form.setFieldsValue(immediateValues)
    }

    if (Object.keys(pendingValues).length) {
      this.pendingFieldValues = {
        ...this.pendingFieldValues,
        ...pendingValues,
      }
    }

    this.updateValuesSnapshot()
  }

  setErrors = (errors) => {
    const form = this.getForm()
    if (!form || !errors) return

    const next = {}
    const registeredFieldNames = this.getRegisteredFieldNames()
    Object.keys(errors).forEach((key) => {
      const rawErrors = Array.isArray(errors[key]) ? errors[key] : [errors[key]]

      if (!registeredFieldNames.includes(key)) {
        this.pendingFieldErrors[key] = rawErrors
        return
      }

      const value = form.getFieldValue(key)
      next[key] = {
        value,
        errors: rawErrors.map(message => (
          message instanceof Error ? message : new Error(message)
        )),
      }
    })

    form.setFields(next)
  }

  setExtraErrors = (errors) => {
    this.setState({
      extraErrors: isPlainObject(errors) ? errors : {},
    })
  }

  getExtraErrors = () => this.state.extraErrors || {}

  getExtraError = (name) => {
    if (!name) return undefined
    return this.getExtraErrors()[name]
  }

  resetExtraErrors = (names) => {
    if (!names) {
      this.setState({
        extraErrors: {},
      })
      return
    }

    const nameList = Array.isArray(names) ? names : [names]
    const nextErrors = {
      ...this.getExtraErrors(),
    }
    nameList.forEach((name) => {
      delete nextErrors[name]
    })
    this.setState({
      extraErrors: nextErrors,
    })
  }

  reset = (names) => {
    const form = this.getForm()
    if (!form) return

    if (!names) {
      this.pendingFieldValues = {}
      this.pendingFieldErrors = {}
    } else {
      const nameList = Array.isArray(names) ? names : [names]
      nameList.forEach((name) => {
        delete this.pendingFieldValues[name]
        delete this.pendingFieldErrors[name]
      })
    }

    this.resetExtraErrors()
    form.resetFields(names)
    this.updateValuesSnapshot()
  }

  validate = (names, options) => {
    const form = this.getForm()

    if (!form) {
      return Promise.reject(new Error('form 实例不存在'))
    }

    const normalized = normalizeValidateArgs(names, options)

    return new Promise((resolve, reject) => {
      const callback = (err, values) => {
        if (err) {
          reject(err)
          return
        }
        resolve(values)
      }

      if (normalized.names) {
        form.validateFields(normalized.names, normalized.options, callback)
        return
      }

      form.validateFields(normalized.options, callback)
    })
  }

  validateAndScroll = async (names, options) => {
    try {
      return await this.validate(names, options)
    } catch (error) {
      this.scrollToError(error)
      throw error
    }
  }

  scrollToError = (errObj) => {
    const { autoScrollToError = true, scrollToErrorOptions } = this.props

    if (!autoScrollToError) return
    scrollToErrorUtil(errObj, scrollToErrorOptions)
  }

  submit = () => runSubmitPipeline(this)

  reinitialize = (values, options = {}) => {
    const {
      resetTouched = true,
      resetErrors = true,
    } = options

    if (resetTouched || resetErrors) {
      this.reset()
    }

    this.pendingFieldValues = {}
    this.pendingFieldErrors = {}
    this.resetExtraErrors()

    if (values && Object.keys(values).length) {
      this.setValues(values)
      return
    }

    this.updateValuesSnapshot()
  }

  isSubmitting = () => {
    const { submitting } = this.props
    return typeof submitting !== 'undefined' ? submitting : (this.state.innerSubmitting || this.submitLock)
  }

  setSubmitting = (nextSubmitting) => {
    this.submitLock = !!nextSubmitting
    if (typeof this.props.submitting !== 'undefined') return
    this.setState({
      innerSubmitting: !!nextSubmitting,
    })
  }

  registerField = (name, getMeta) => {
    if (!name || typeof getMeta !== 'function') return

    devWarning(
      !this.fieldMetaMap.has(name),
      `字段 "${name}" 重复注册，请检查同一个 BaseForm 中是否使用了重复的 name。`,
      `duplicate-field:${name}`
    )

    this.fieldMetaMap.set(name, getMeta)
    this.flushPendingFieldValue(name)
    this.flushPendingFieldError(name)
  }

  unregisterField = (name) => {
    if (!name) return
    this.fieldMetaMap.delete(name)
  }

  getRegisteredFieldMeta = () => {
    const fieldMetas = {}

    this.fieldMetaMap.forEach((getter, name) => {
      fieldMetas[name] = typeof getter === 'function' ? getter() : {}
    })

    return fieldMetas
  }

  handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    this.submit()
  }

  handleReset = (e) => {
    if (e && e.preventDefault) e.preventDefault()
    this.reset()

    const { onReset } = this.props
    if (typeof onReset === 'function') {
      onReset(this.getForm(), e)
    }
  }

  getContextValue = () => {
    const {
      layout,
      labelCol,
      wrapperCol,
      colon,
      labelAlign,
      hideRequiredMark,
      disabled = false,
      readonly = false,
      fieldComponents = {},
    } = this.props

    const getFieldComponent = (type) => {
      if (!type) return null
      if (fieldComponents && fieldComponents[type]) {
        return fieldComponents[type]
      }
      return null
    }

    return {
      form: this.getForm(),
      layout,
      labelCol,
      wrapperCol,
      colon,
      labelAlign,
      hideRequiredMark,
      disabled,
      readonly,
      submitting: this.isSubmitting(),
      controller: this.controller,
      fieldComponents,
      getFieldComponent,
      extraErrors: this.getExtraErrors(),
      getExtraError: this.getExtraError,
      setExtraErrors: this.setExtraErrors,
      resetExtraErrors: this.resetExtraErrors,
      registerField: this.registerField,
      unregisterField: this.unregisterField,
      getAllValues: () => this.getValues(),
      valueVersion: 0,
    }
  }

  handleFormValuesChange = (changedValues, nextValues, prevValues) => {
    const resolvedPrevValues = prevValues || this.lastValuesSnapshot || {}
    this.lastValuesSnapshot = {
      ...(nextValues || {}),
      ...this.pendingFieldValues,
    }

    const { onValuesChange } = this.props
    if (typeof onValuesChange === 'function') {
      onValuesChange(buildValuesChangePayload(
        changedValues,
        resolvedPrevValues,
        nextValues,
        this.getForm()
      ))
    }
  }

  renderChildren = () => {
    const { children } = this.props
    const contextValue = this.getContextValue()
    const values = this.getValues()

    if (typeof children === 'function') {
      return children({
        ...contextValue,
        values,
        submit: this.submit,
        reset: this.reset,
      })
    }

    return children
  }

  render() {
    const {
      layout,
      colon,
      hideRequiredMark,
      className,
      style,
      labelAlign,
    } = this.props

    return (
      <FormContext.Provider value={this.getContextValue()}>
        <Form
          layout={layout}
          colon={colon}
          hideRequiredMark={hideRequiredMark}
          className={className}
          style={style}
          labelAlign={labelAlign}
          onSubmit={this.handleSubmit}
        >
          {this.renderChildren()}
        </Form>
      </FormContext.Provider>
    )
  }
}

const BaseFormWithAntd = Form.create({
  onValuesChange(props, changedValues, allValues) {
    const instanceId = props.__baseFormId
    const host = instanceId ? hostMap.get(instanceId) || null : null
    const prevValues = instanceId ? (valuesSnapshotMap.get(instanceId) || {}) : {}
    const nextValues = host
      ? {
          ...(allValues || {}),
          ...host.pendingFieldValues,
        }
      : (allValues || {})

    if (instanceId) {
      valuesSnapshotMap.set(instanceId, nextValues)
    }

    if (host && typeof host.handleFormValuesChange === 'function') {
      host.handleFormValuesChange(changedValues, nextValues, prevValues)
      return
    }

    if (typeof props.onValuesChange === 'function') {
      props.onValuesChange(buildValuesChangePayload(
        changedValues,
        prevValues,
        nextValues,
        props.form
      ))
    }
  },
})(BaseFormInner)

class BaseForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.baseFormInstanceId = `base-form-${baseFormInstanceSeed += 1}`
  }

  render() {
    const {
      wrappedComponentRef,
      ...restProps
    } = this.props

    return (
      <BaseFormWithAntd
        {...restProps}
        __baseFormId={this.baseFormInstanceId}
        wrappedComponentRef={wrappedComponentRef}
      />
    )
  }
}

BaseForm.defaultProps = {
  layout: 'horizontal',
  colon: true,
  hideRequiredMark: false,
  labelAlign: 'right',
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
  autoScrollToError: true,
  preventRepeatSubmit: true,
  disabled: false,
  readonly: false,
}

BaseForm.Actions = FormActions
BaseForm.Section = FormSection
BaseForm.VirtualField = VirtualField
BaseForm.Row = FormRow
BaseForm.Col = FormCol
BaseForm.Grid = FormGrid

export default BaseForm
