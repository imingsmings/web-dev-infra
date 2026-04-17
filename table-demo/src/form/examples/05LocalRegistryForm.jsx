import React from 'react'
import { Button, Card, message, Tag } from 'antd'
import { BaseForm, FormField, registerFieldComponent } from '..'

class LocalUserPicker extends React.PureComponent {
  render() {
    const { value, onChange, disabled } = this.props

    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button
          disabled={disabled}
          type={value === 'local-alice' ? 'primary' : 'default'}
          onClick={() => onChange('local-alice')}
        >
          当前表单 Alice
        </Button>
        <Button
          disabled={disabled}
          type={value === 'local-bob' ? 'primary' : 'default'}
          onClick={() => onChange('local-bob')}
        >
          当前表单 Bob
        </Button>
      </div>
    )
  }
}

class GlobalUserPicker extends React.PureComponent {
  render() {
    const { value, onChange, disabled } = this.props

    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button
          disabled={disabled}
          type={value === 'global-tom' ? 'primary' : 'default'}
          onClick={() => onChange('global-tom')}
        >
          全局组件 Tom
        </Button>
        <Button
          disabled={disabled}
          type={value === 'global-jerry' ? 'primary' : 'default'}
          onClick={() => onChange('global-jerry')}
        >
          全局组件 Jerry
        </Button>
      </div>
    )
  }
}

registerFieldComponent('scopedUserPicker', GlobalUserPicker)

class LocalRegistryForm extends React.PureComponent {
  handleSubmit = async (values) => {
    console.log('局部注册表单提交', values)
    message.success('局部注册优先解析成功')
  }

  render() {
    return (
      <Card title="05LocalRegistryForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 12, color: '#666' }}>
          覆盖 `fieldComponents` 局部注册。当前表单内同名组件会优先于全局 registry 解析，避免全局污染。
        </div>

        <div style={{ marginBottom: 12 }}>
          <Tag color="blue">局部 fieldComponents 优先</Tag>
          <Tag color="orange">全局 registry 只做兜底</Tag>
        </div>

        <BaseForm
          onSubmit={this.handleSubmit}
          fieldComponents={{
            scopedUserPicker: LocalUserPicker,
          }}
        >
          <BaseForm.Section title="局部注册组件">
            <FormField
              name="owner"
              label="负责人"
              component="scopedUserPicker"
              required
            />

            <FormField
              name="comment"
              label="备注"
              componentProps={{
                placeholder: '这个表单里的 scopedUserPicker 会命中局部注册版本',
              }}
            />
          </BaseForm.Section>

          <BaseForm.Actions submitText="提交局部注册示例" />
        </BaseForm>
      </Card>
    )
  }
}

export default LocalRegistryForm
