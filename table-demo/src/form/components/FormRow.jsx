import React from 'react'
import { Row } from 'antd'
import FormGridContext from '../context/FormGridContext'

function getDefaultSpan(columns) {
  if (!columns || columns <= 0) return 24
  return Math.floor(24 / columns)
}

class FormRow extends React.PureComponent {
  render() {
    const {
      columns = 4,
      gutter = 24,
      align,
      justify,
      className,
      style,
      children,
    } = this.props

    return (
      <FormGridContext.Provider
        value={{
          defaultSpan: getDefaultSpan(columns),
        }}
      >
        <Row
          gutter={gutter}
          align={align}
          justify={justify}
          className={className}
          style={style}
        >
          {children}
        </Row>
      </FormGridContext.Provider>
    )
  }
}

export default FormRow
