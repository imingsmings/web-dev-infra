import React from 'react'

const noop = () => {}

const FormContext = React.createContext({
  form: null,
  layout: 'horizontal',
  labelCol: undefined,
  wrapperCol: undefined,
  colon: true,
  labelAlign: 'right',
  hideRequiredMark: false,
  disabled: false,
  readonly: false,
  submitting: false,
  controller: null,
  fieldComponents: {},
  getFieldComponent: noop,
  extraErrors: {},
  getExtraError: noop,
  setExtraErrors: noop,
  resetExtraErrors: noop,
  registerField: noop,
  unregisterField: noop,
  getAllValues: () => ({}),
  valueVersion: 0,
})

export default FormContext
