import React from 'react'
import FormRow from './FormRow'
import FormCol from './FormCol'

class FormGrid extends React.PureComponent {
  renderChildren() {
    const { children, colProps } = this.props

    return React.Children.map(children, (child, index) => {
      if (!child) return null

      return (
        <FormCol key={child.key || index} {...colProps}>
          {child}
        </FormCol>
      )
    })
  }

  render() {
    const {
      children,
      colProps,
      ...rowProps
    } = this.props

    return (
      <FormRow {...rowProps}>
        {this.renderChildren(children, colProps)}
      </FormRow>
    )
  }
}

export default FormGrid
