import React from 'react'
import { Button, Card, message } from 'antd'
import { BaseForm, FormField } from '..'

class ServerErrorMappingForm extends React.PureComponent {
  handleSubmit = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 500))

    this.formRef.setErrors({
      userName: '服务端返回：用户名重复',
      email: '服务端返回：邮箱已被注册',
    })

    this.formRef.setExtraErrors({
      approvers: '服务端返回：审批人不能为空',
    })

    message.warning(`模拟服务端错误回填: ${JSON.stringify(values)}`)
  }

  render() {
    return (
      <Card title="12ServerErrorMappingForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 12, color: '#666' }}>
          覆盖服务端错误映射：字段错误通过 `setErrors()` 回填，外部状态错误通过 `setExtraErrors()` 收口到 `VirtualField`。
        </div>

        <BaseForm
          wrappedComponentRef={(inst) => {
            this.formRef = inst
          }}
          onSubmit={this.handleSubmit}
        >
          <BaseForm.Row columns={2} gutter={32}>
            <BaseForm.Col>
              <FormField
                name="userName"
                label="用户名"
                required
                componentProps={{ placeholder: '请输入用户名' }}
              />
            </BaseForm.Col>
            <BaseForm.Col>
              <FormField
                name="email"
                label="邮箱"
                required
                componentProps={{ placeholder: '请输入邮箱' }}
              />
            </BaseForm.Col>
          </BaseForm.Row>

          <BaseForm.VirtualField
            name="approvers"
            label="审批人"
            required
            help="点击提交后，模拟服务端返回外部状态错误"
          >
            <Button>模拟审批人选择器</Button>
          </BaseForm.VirtualField>

          <BaseForm.Actions submitText="模拟服务端错误回填" />
        </BaseForm>
      </Card>
    )
  }
}

export default ServerErrorMappingForm
