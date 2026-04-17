const isDev =
  typeof import.meta !== 'undefined' &&
  import.meta &&
  import.meta.env &&
  import.meta.env.DEV

const warned = {}

export function devWarning(condition, message, key) {
  if (!isDev || condition) return

  const warningKey = key || message
  if (warned[warningKey]) return
  warned[warningKey] = true

  if (typeof console !== 'undefined' && console.warn) {
    console.warn(`[BaseForm] ${message}`)
  }
}
