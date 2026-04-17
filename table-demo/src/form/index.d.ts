import * as React from 'react'

export type NamePath = string | string[]
export type BaseFormErrorValue = string | Error | Array<string | Error>
export type BaseFormErrorMap = Record<string, BaseFormErrorValue>
export type BaseFormExtraErrorMap = Record<string, any>

export interface BaseFormSubmitContext {
  form: any
  values: Record<string, any>
  getValues: BaseFormController['getValues']
  getValue: BaseFormController['getValue']
}

export interface BaseFormController {
  getForm(): any
  getValues(names?: NamePath[] | NamePath): any
  getValue(name: NamePath): any
  setValues(values: Record<string, any>): void
  setErrors(errors: BaseFormErrorMap): void
  getFieldError(name: NamePath): any[]
  getFieldsError(names?: NamePath[] | NamePath): Record<string, any[]>
  isFieldTouched(name: NamePath): boolean
  isFieldsTouched(names?: NamePath[] | NamePath): boolean
  isFieldValidating(name: NamePath): boolean
  isFieldsValidating(names?: NamePath[] | NamePath): boolean
  setExtraErrors(errors: BaseFormExtraErrorMap): void
  getExtraErrors(): BaseFormExtraErrorMap
  getExtraError(name: string): any
  resetExtraErrors(names?: string | string[]): void
  reset(names?: NamePath[] | NamePath): void
  validate(names?: NamePath[] | NamePath, options?: Record<string, any>): Promise<any>
  validateAndScroll(names?: NamePath[] | NamePath, options?: Record<string, any>): Promise<any>
  scrollToError(err?: Record<string, any>): void
  submit(): Promise<any>
  reinitialize(values?: Record<string, any>, options?: { resetTouched?: boolean; resetErrors?: boolean }): void
  isSubmitting(): boolean
}

export interface BaseFormValuesChangePayload {
  changedValues: Record<string, any>
  changedKeys: string[]
  changedKey?: string
  changedValue?: any
  prevValues: Record<string, any>
  nextValues: Record<string, any>
  form: any
  hasChanged: (name: string) => boolean
}

export interface BaseFormRenderContext {
  layout?: 'horizontal' | 'vertical' | 'inline'
  labelCol?: any
  wrapperCol?: any
  colon?: boolean
  labelAlign?: 'left' | 'right'
  hideRequiredMark?: boolean
  disabled: boolean
  readonly: boolean
  submitting: boolean
  controller: BaseFormController
  fieldComponents: Record<string, React.ComponentType<any>>
  getFieldComponent: (type: string) => React.ComponentType<any> | null
  extraErrors: BaseFormExtraErrorMap
  getExtraError: (name: string) => any
  setExtraErrors: (errors: BaseFormExtraErrorMap) => void
  resetExtraErrors: (names?: string | string[]) => void
  registerField: (name: string, getMeta: () => any) => void
  unregisterField: (name: string) => void
  getAllValues: () => Record<string, any>
  valueVersion: number
  values: Record<string, any>
  submit: BaseFormController['submit']
  reset: (names?: NamePath[] | NamePath) => void
}

export interface BaseFormFieldComponentMap {
  [type: string]: React.ComponentType<any>
}

export interface BaseFormProps {
  layout?: 'horizontal' | 'vertical' | 'inline'
  labelCol?: any
  wrapperCol?: any
  colon?: boolean
  labelAlign?: 'left' | 'right'
  hideRequiredMark?: boolean
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
  readonly?: boolean
  submitting?: boolean
  preventRepeatSubmit?: boolean
  autoScrollToError?: boolean
  scrollToErrorOptions?: Record<string, any>
  initialValues?: Record<string, any>
  fieldComponents?: BaseFormFieldComponentMap
  beforeSubmit?: (values: Record<string, any>, form: any) => Record<string, any> | false | Promise<Record<string, any> | false>
  transformValues?: (values: Record<string, any>, form: any) => Record<string, any>
  validateExtra?: (ctx: BaseFormSubmitContext) => void | Promise<void>
  getExtraValues?: (ctx: BaseFormSubmitContext) => Record<string, any>
  onSubmit?: (values: Record<string, any>, form: any) => any | Promise<any>
  onReset?: (form: any, event?: any) => void
  onValuesChange?: (payload: BaseFormValuesChangePayload) => void
  children?: React.ReactNode | ((ctx: BaseFormRenderContext) => React.ReactNode)
  wrappedComponentRef?: (instance: BaseFormController | null) => void
}

export interface FormFieldStateResolverContext {
  form: any
  values: Record<string, any>
  disabled: boolean
  readonly: boolean
  submitting: boolean
  valueVersion: number
}

export type BaseFormComponentType = string | React.ComponentType<any>

export interface FormFieldProps {
  name: string
  label?: React.ReactNode
  component?: BaseFormComponentType
  componentProps?: Record<string, any>
  options?: Array<{ label: React.ReactNode; value: any; disabled?: boolean }>
  rules?: any[]
  required?: boolean
  requiredMessage?: string
  initialValue?: any
  normalize?: (...args: any[]) => any
  getValueFromEvent?: (...args: any[]) => any
  validateFirst?: boolean
  validateTrigger?: string | string[]
  trigger?: string
  valuePropName?: string
  hidden?: boolean | ((ctx: FormFieldStateResolverContext) => boolean)
  disabled?: boolean | ((ctx: FormFieldStateResolverContext) => boolean)
  readonly?: boolean | ((ctx: FormFieldStateResolverContext) => boolean)
  preserveOnHidden?: boolean
  clearOnHidden?: boolean
  transform?: (value: any, allValues: Record<string, any>, form: any) => any
  valueFormat?: string
  checkTools?: boolean | {
    actions?: Array<'checkAll' | 'clear' | 'invert'>
    variant?: 'panel' | 'inline'
    position?: 'top' | 'bottom'
    showCount?: boolean
    disabled?: boolean
    checkAllLabel?: string
    clearLabel?: string
    invertLabel?: string
  }
  renderControl?: (args: {
    component: BaseFormComponentType
    componentProps: Record<string, any>
    options: Array<{ label: React.ReactNode; value: any; disabled?: boolean }>
    form: any
    values: Record<string, any>
    disabled: boolean
    readonly: boolean
  }) => React.ReactNode
  renderReadOnly?: (args: { value: any; values: Record<string, any>; fieldProps: FormFieldProps }) => React.ReactNode
  noStyle?: boolean
  extra?: React.ReactNode
  help?: React.ReactNode
  validateStatus?: '' | 'success' | 'warning' | 'error' | 'validating'
  labelCol?: any
  wrapperCol?: any
  colon?: boolean
  className?: string
  style?: React.CSSProperties
}

export interface FormActionsProps {
  align?: 'left' | 'center' | 'right'
  submitText?: React.ReactNode
  resetText?: React.ReactNode
  cancelText?: React.ReactNode
  showSubmit?: boolean
  showReset?: boolean
  showCancel?: boolean
  onCancel?: () => void
  submitProps?: Record<string, any>
  resetProps?: Record<string, any>
  cancelProps?: Record<string, any>
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface FormSectionProps {
  title?: React.ReactNode
  extra?: React.ReactNode
  collapsible?: boolean
  defaultCollapsed?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface VirtualFieldProps {
  name?: string
  label?: React.ReactNode
  required?: boolean
  help?: React.ReactNode
  validateStatus?: '' | 'success' | 'warning' | 'error' | 'validating'
  errorDisplayMode?: 'formItem' | 'message' | 'border'
  extra?: React.ReactNode
  labelCol?: any
  wrapperCol?: any
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface FormRowProps {
  columns?: 1 | 2 | 3 | 4 | 6
  gutter?: number | [number, number]
  align?: 'top' | 'middle' | 'bottom'
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface FormColProps {
  span?: number
  offset?: number
  pull?: number
  push?: number
  xs?: number | object
  sm?: number | object
  md?: number | object
  lg?: number | object
  xl?: number | object
  xxl?: number | object
  /**
   * @deprecated hidden on BaseForm.Col destroys the subtree. Prefer destroyOnHide for clarity.
   */
  hidden?: boolean
  destroyOnHide?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface FormGridProps extends FormRowProps {
  colProps?: Omit<FormColProps, 'children'>
}

export interface BaseFormComponent extends React.ComponentClass<BaseFormProps> {
  Actions: React.ComponentType<FormActionsProps>
  Section: React.ComponentType<FormSectionProps>
  VirtualField: React.ComponentType<VirtualFieldProps>
  Row: React.ComponentType<FormRowProps>
  Col: React.ComponentType<FormColProps>
  Grid: React.ComponentType<FormGridProps>
}

export const BaseForm: BaseFormComponent
export const FormField: React.ComponentType<FormFieldProps>
export function registerFieldComponent(
  type: string,
  component: React.ComponentType<any>,
  options?: { override?: boolean; silent?: boolean }
): void
export function hasFieldComponent(type: string): boolean
export function unregisterFieldComponent(type: string): void
export function getRegisteredFieldComponents(): BaseFormFieldComponentMap
export function getForm(formRef: any): any
export function getFormValues(formRef: any, names?: NamePath[] | NamePath): any
export function getFormValue(formRef: any, name: NamePath): any
export function setFormValues(formRef: any, values: Record<string, any>): void
export function setFormErrors(formRef: any, errors: BaseFormErrorMap): void
export function resetForm(formRef: any, names?: NamePath[] | NamePath): void
export function validateForm(formRef: any, names?: NamePath[] | NamePath, options?: Record<string, any>): Promise<any>
export function scrollToFieldError(formRef: any, errObj?: Record<string, any>): void

export default BaseForm
