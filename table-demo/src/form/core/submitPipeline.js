import { applyFieldTransforms } from './transformValues'

function normalizeExtraErrors(error) {
  if (!error) return null
  if (error instanceof Error) return null
  if (typeof error === 'string') {
    return {
      _form: error,
    }
  }
  if (typeof error === 'object') {
    return error
  }
  return null
}

export default async function runSubmitPipeline(host) {
  const {
    preventRepeatSubmit,
    validateExtra,
    getExtraValues,
    transformValues,
    beforeSubmit,
    onSubmit,
  } = host.props

  const shouldLockSubmit = preventRepeatSubmit !== false

  if (shouldLockSubmit && host.isSubmitting()) {
    return Promise.resolve(undefined)
  }

  if (shouldLockSubmit) {
    host.setSubmitting(true)
  }

  try {
    host.resetExtraErrors()

    const form = host.getForm()
    const formValues = await host.validateAndScroll()

    if (typeof validateExtra === 'function') {
      try {
        await validateExtra({
          form,
          values: formValues,
          getValues: host.getValues,
          getValue: host.getValue,
        })
      } catch (error) {
        const normalizedExtraErrors = normalizeExtraErrors(error)
        if (normalizedExtraErrors) {
          host.setExtraErrors(normalizedExtraErrors)
        }
        throw error
      }
    }

    const extraValues = typeof getExtraValues === 'function'
      ? getExtraValues({
          form,
          values: formValues,
          getValues: host.getValues,
          getValue: host.getValue,
        }) || {}
      : {}

    const transformedFieldValues = applyFieldTransforms(
      formValues,
      host.getRegisteredFieldMeta(),
      form
    )

    let submitValues = {
      ...transformedFieldValues,
      ...extraValues,
    }

    if (typeof transformValues === 'function') {
      submitValues = transformValues(submitValues, form)
    }

    if (typeof beforeSubmit === 'function') {
      const nextValues = await beforeSubmit(submitValues, form)
      if (nextValues === false) return undefined
      if (typeof nextValues !== 'undefined') {
        submitValues = nextValues
      }
    }

    if (typeof onSubmit !== 'function') {
      return submitValues
    }

    return await Promise.resolve(onSubmit(submitValues, form))
  } finally {
    if (shouldLockSubmit) {
      host.setSubmitting(false)
    }
  }
}
