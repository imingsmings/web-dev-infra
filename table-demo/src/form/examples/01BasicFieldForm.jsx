import React from 'react'
import { Card, message } from 'antd'
import { BaseForm, FormField } from '..'

class BasicFieldForm extends React.PureComponent {
  handleSubmit = async (values) => {
    console.log('基础字段表单提交', values)
    message.success('基础字段表单提交成功')
  }

  render() {
    return (
      <Card title="01BasicFieldForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 12, color: '#666' }}>
          覆盖最基础的字段类型、常规必填校验、字段级 transform 和标准按钮区。
        </div>

        <BaseForm onSubmit={this.handleSubmit}>
          <BaseForm.Section title="基础字段">
            <FormField
              name="username"
              label="用户名"
              required
              componentProps={{
                placeholder: '请输入用户名',
              }}
              transform={value => (value ? value.trim() : value)}
            />

            <FormField
              name="password"
              label="密码"
              required
              component="password"
              componentProps={{
                placeholder: '请输入密码',
              }}
            />

            <FormField
              name="gender"
              label="性别"
              component="radioGroup"
              initialValue="male"
              options={[
                { label: '男', value: 'male' },
                { label: '女', value: 'female' },
              ]}
            />

            <FormField
              name="hobbies"
              label="兴趣爱好"
              component="checkboxGroup"
              options={[
                { label: '阅读', value: 'read' },
                { label: '运动', value: 'sport' },
                { label: '旅行', value: 'travel' },
              ]}
            />

            <FormField
              name="age"
              label="年龄"
              component="inputNumber"
              componentProps={{
                min: 0,
                max: 120,
                style: { width: '100%' },
              }}
            />

            <FormField
              name="bio"
              label="个人简介"
              component="textarea"
              componentProps={{
                rows: 4,
                placeholder: '请输入个人简介',
              }}
            />
          </BaseForm.Section>

          <BaseForm.Actions showReset submitText="保存基础信息" />
        </BaseForm>
      </Card>
    )
  }
}

export default BasicFieldForm
