import React from 'react'
import { Button, Card, message } from 'antd'
import { BaseForm, FormField, registerFieldComponent } from '..'

class RegionPicker extends React.PureComponent {
  render() {
    const { value = [], onChange, disabled } = this.props

    return (
      <div style={{ display: 'flex', gap: 8 }}>
        <Button
          disabled={disabled}
          type={value[0] === 'east' ? 'primary' : 'default'}
          onClick={() => onChange(['east', 'shanghai'])}
        >
          华东 / 上海
        </Button>
        <Button
          disabled={disabled}
          type={value[0] === 'south' ? 'primary' : 'default'}
          onClick={() => onChange(['south', 'shenzhen'])}
        >
          华南 / 深圳
        </Button>
      </div>
    )
  }
}

registerFieldComponent('regionPicker', RegionPicker)

class CustomComponentForm extends React.PureComponent {
  handleSubmit = async (values) => {
    console.log('自定义组件表单提交', values)
    message.success('自定义组件提交流程正常')
  }

  render() {
    return (
      <Card title="04CustomComponentForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 12, color: '#666' }}>
          覆盖 `registerFieldComponent()`，演示业务组件如何接入字段体系。
        </div>

        <BaseForm onSubmit={this.handleSubmit}>
          <BaseForm.Section title="业务自定义字段">
            <FormField
              name="region"
              label="负责区域"
              component="regionPicker"
              required
              requiredMessage="请选择负责区域"
              renderReadOnly={({ value }) => {
                if (!Array.isArray(value) || !value.length) return '-'
                return value.join(' / ')
              }}
            />

            <FormField
              name="owner"
              label="负责人"
              required
              componentProps={{
                placeholder: '请输入负责人名称',
              }}
            />
          </BaseForm.Section>

          <BaseForm.Actions submitText="保存业务配置" />
        </BaseForm>
      </Card>
    )
  }
}

export default CustomComponentForm
