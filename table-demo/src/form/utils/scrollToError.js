export default function scrollToError(errObj, options = {}) {
  if (!errObj || typeof document === 'undefined') return

  const firstField = Object.keys(errObj)[0]
  if (!firstField) return

  const selectors = [
    `[id="${firstField}"]`,
    `[name="${firstField}"]`,
    `[data-field-name="${firstField}"]`,
  ]

  let node = null
  selectors.some((selector) => {
    node = document.querySelector(selector)
    return !!node
  })

  if (!node) {
    const explainNode = document.querySelector('.ant-form-explain')
    node = explainNode && explainNode.parentElement
  }

  if (node && node.scrollIntoView) {
    node.scrollIntoView({
      behavior: options.behavior || 'smooth',
      block: options.block || 'center',
    })
  }
}
