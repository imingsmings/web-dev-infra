function formatMomentLike(value, format) {
  if (!value || typeof value.format !== 'function') return value
  return value.format(format)
}

function formatFieldValue(value, meta) {
  const { component, valueFormat } = meta || {}
  if (!valueFormat) return value

  if (component === 'rangePicker') {
    if (!Array.isArray(value)) return value
    return value.map(item => formatMomentLike(item, valueFormat))
  }

  if (['datePicker', 'monthPicker', 'timePicker'].includes(component)) {
    return formatMomentLike(value, valueFormat)
  }

  return value
}

export function applyFieldTransforms(values, fieldMetas, form) {
  const nextValues = { ...values }

  Object.keys(fieldMetas).forEach((name) => {
    const meta = fieldMetas[name] || {}
    if (typeof meta.transform === 'function') {
      nextValues[name] = meta.transform(nextValues[name], nextValues, form)
      return
    }

    if (meta.valueFormat) {
      nextValues[name] = formatFieldValue(nextValues[name], meta)
    }
  })

  return nextValues
}
