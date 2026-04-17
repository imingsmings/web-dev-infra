import {
  Input,
  Select,
  Switch,
  Checkbox,
  Radio,
  DatePicker,
  InputNumber,
  Cascader,
  TimePicker,
} from 'antd'
import { devWarning } from './warnings'

const { TextArea, Password } = Input

const builtInRegistry = {
  input: Input,
  textarea: TextArea,
  password: Password || Input,
  select: Select,
  switch: Switch,
  checkbox: Checkbox,
  checkboxGroup: Checkbox.Group,
  radioGroup: Radio.Group,
  datePicker: DatePicker,
  monthPicker: DatePicker.MonthPicker,
  rangePicker: DatePicker.RangePicker,
  timePicker: TimePicker,
  inputNumber: InputNumber,
  cascader: Cascader,
}

const customRegistry = {}

export function registerFieldComponent(type, component, options = {}) {
  const { override = false, silent = false } = options
  if (!type || !component) return

  if ((customRegistry[type] || builtInRegistry[type]) && !override) {
    if (!silent) {
      devWarning(
        false,
        `全局字段组件 "${type}" 已存在注册，当前注册已忽略。如需替换请显式传入 override: true。`,
        `field-registry-duplicate:${type}`
      )
    }
    return
  }

  customRegistry[type] = component
}

export function getFieldComponent(type) {
  if (!type) return null
  return customRegistry[type] || builtInRegistry[type] || null
}

export function hasFieldComponent(type) {
  return !!(customRegistry[type] || builtInRegistry[type])
}

export function unregisterFieldComponent(type) {
  if (!type) return
  if (builtInRegistry[type]) {
    devWarning(
      false,
      `字段组件 "${type}" 是内置组件，不能通过 unregisterFieldComponent 删除。`,
      `field-registry-unregister-built-in:${type}`
    )
    return
  }

  delete customRegistry[type]
}

export function getRegisteredFieldComponents() {
  return {
    ...builtInRegistry,
    ...customRegistry,
  }
}
