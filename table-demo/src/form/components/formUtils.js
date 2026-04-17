export function getForm(formRef) {
  if (!formRef) return null
  if (typeof formRef.getForm === 'function') return formRef.getForm()
  if (formRef.props && formRef.props.form) return formRef.props.form
  return formRef.form || null
}

export function getFormValues(formRef, names) {
  if (formRef && typeof formRef.getValues === 'function') {
    return formRef.getValues(names)
  }

  const form = getForm(formRef)
  if (!form) return {}

  if (typeof names === 'string') {
    return form.getFieldValue(names)
  }

  return names ? form.getFieldsValue(names) : form.getFieldsValue()
}

export function getFormValue(formRef, name) {
  if (formRef && typeof formRef.getValue === 'function') {
    return formRef.getValue(name)
  }

  const form = getForm(formRef)
  if (!form) return undefined
  return form.getFieldValue(name)
}

export function setFormValues(formRef, values) {
  if (formRef && typeof formRef.setValues === 'function') {
    formRef.setValues(values)
    return
  }

  const form = getForm(formRef)
  if (!form || !values) return
  form.setFieldsValue(values)
}

export function setFormErrors(formRef, errors) {
  if (formRef && typeof formRef.setErrors === 'function') {
    formRef.setErrors(errors)
    return
  }

  const form = getForm(formRef)
  if (!form || !errors) return

  const next = {}
  Object.keys(errors).forEach((key) => {
    next[key] = {
      value: form.getFieldValue(key),
      errors: Array.isArray(errors[key])
        ? errors[key].map(msg => new Error(msg))
        : [new Error(errors[key])],
    }
  })

  form.setFields(next)
}

export function resetForm(formRef, names) {
  if (formRef && typeof formRef.reset === 'function') {
    formRef.reset(names)
    return
  }

  const form = getForm(formRef)
  if (!form) return
  form.resetFields(names)
}

export function validateForm(formRef, names, options) {
  if (formRef && typeof formRef.validate === 'function') {
    return formRef.validate(names, options)
  }

  const form = getForm(formRef)
  if (!form) {
    return Promise.reject(new Error('form 实例不存在'))
  }

  return new Promise((resolve, reject) => {
    const callback = (err, values) => {
      if (err) {
        reject(err)
        return
      }
      resolve(values)
    }

    if (Array.isArray(names)) {
      form.validateFields(names, options || {}, callback)
      return
    }

    if (names && typeof names === 'object' && !Array.isArray(names)) {
      form.validateFields(names, callback)
      return
    }

    form.validateFields(options || {}, callback)
  })
}

export function scrollToFieldError(formRef, errObj) {
  if (formRef && typeof formRef.scrollToError === 'function') {
    formRef.scrollToError(errObj)
  }
}
