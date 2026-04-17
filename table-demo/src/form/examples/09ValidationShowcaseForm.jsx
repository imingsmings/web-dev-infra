import React from 'react'
import { Button, Card, Divider, Input, message } from 'antd'
import { BaseForm, FormField } from '..'

class ValidationShowcaseForm extends React.PureComponent {
  state = {
    extraTags: ['已存在标签'],
    extraTagInput: '',
    extraTagError: '',
    validateResult: '',
  }

  handleValuesChange = ({ hasChanged, form }) => {
    if (hasChanged('password')) {
      form.validateFields(['confirmPassword'], { force: true }, () => {})
    }
  }

  validateExtra = ({ values }) => {
    if (values.needExtraTags && !this.state.extraTags.length) {
      this.setState({
        extraTagError: '开启扩展标签后，至少保留一个标签',
      })
      return Promise.reject(new Error('扩展标签校验失败'))
    }

    this.setState({
      extraTagError: '',
    })
    return Promise.resolve()
  }

  getExtraValues = ({ values }) => ({
    extraTags: values.needExtraTags ? this.state.extraTags : [],
  })

  handleSubmit = async (values) => {
    console.log('校验示例提交', values)
    await new Promise(resolve => setTimeout(resolve, 500))
    message.success('校验示例提交成功')
  }

  triggerValidate = async () => {
    try {
      const values = await this.formRef.validateAndScroll()
      this.setState({
        validateResult: JSON.stringify(values, null, 2),
      })
      message.success('手动校验通过')
    } catch (error) {
      this.setState({
        validateResult: '校验失败，已滚动到首个错误项',
      })
    }
  }

  mockServerError = () => {
    this.formRef.setErrors({
      userName: '服务端返回：用户名已存在',
      email: '服务端返回：邮箱已被占用',
    })
  }

  addExtraTag = () => {
    const value = (this.state.extraTagInput || '').trim()
    if (!value) return

    this.setState(prevState => ({
      extraTags: prevState.extraTags.includes(value)
        ? prevState.extraTags
        : [...prevState.extraTags, value],
      extraTagInput: '',
      extraTagError: '',
    }))
  }

  removeExtraTag = (target) => {
    this.setState(prevState => ({
      extraTags: prevState.extraTags.filter(item => item !== target),
    }))
  }

  renderExtraTags(readonly, needExtraTags) {
    const { extraTags, extraTagInput, extraTagError } = this.state

    return (
      <BaseForm.VirtualField
        label="扩展标签"
        required={needExtraTags}
        validateStatus={extraTagError ? 'error' : ''}
        help={extraTagError || '示例：不进入 Form 的复杂状态通过 validateExtra 校验'}
      >
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <Input
            disabled={readonly || !needExtraTags}
            value={extraTagInput}
            placeholder="输入扩展标签"
            onChange={e => this.setState({ extraTagInput: e.target.value })}
          />
          <Button disabled={readonly || !needExtraTags} onClick={this.addExtraTag}>
            添加标签
          </Button>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {extraTags.length ? extraTags.map(item => (
            <Button
              key={item}
              size="small"
              onClick={() => this.removeExtraTag(item)}
              disabled={readonly || !needExtraTags}
            >
              删除 {item}
            </Button>
          )) : (
            <span style={{ color: '#999' }}>当前没有扩展标签</span>
          )}
        </div>
      </BaseForm.VirtualField>
    )
  }

  render() {
    const { validateResult } = this.state

    return (
      <Card title="09ValidationShowcaseForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 12, color: '#666' }}>
          覆盖 `required`、原生 `rules`、自定义 `validator`、`validateTrigger`、手动校验、
          服务端错误回填和 `validateExtra`。
        </div>

        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          <Button onClick={this.triggerValidate}>手动执行 validateAndScroll()</Button>
          <Button onClick={this.mockServerError}>模拟服务端错误回填</Button>
        </div>

        <BaseForm
          wrappedComponentRef={(inst) => {
            this.formRef = inst
          }}
          onValuesChange={this.handleValuesChange}
          onSubmit={this.handleSubmit}
          validateExtra={this.validateExtra}
          getExtraValues={this.getExtraValues}
        >
          {({ values = {}, readonly }) => (
            <>
              <BaseForm.Section title="字段规则校验">
                <BaseForm.Row columns={2} gutter={32}>
                  <BaseForm.Col>
                    <FormField
                      name="userName"
                      label="用户名"
                      required
                      componentProps={{
                        placeholder: 'required 自动生成必填规则',
                      }}
                    />
                  </BaseForm.Col>

                  <BaseForm.Col>
                    <FormField
                      name="mobile"
                      label="手机号"
                      rules={[
                        { required: true, message: '请输入手机号' },
                        { pattern: /^1\d{10}$/, message: '请输入正确的手机号' },
                      ]}
                      componentProps={{
                        placeholder: 'pattern 规则示例',
                      }}
                    />
                  </BaseForm.Col>

                  <BaseForm.Col>
                    <FormField
                      name="email"
                      label="邮箱"
                      validateTrigger="onBlur"
                      rules={[
                        { required: true, message: '请输入邮箱' },
                        { type: 'email', message: '邮箱格式不正确' },
                      ]}
                      componentProps={{
                        placeholder: 'onBlur 触发校验',
                      }}
                    />
                  </BaseForm.Col>

                  <BaseForm.Col>
                    <FormField
                      name="age"
                      label="年龄"
                      component="inputNumber"
                      rules={[
                        { type: 'number', required: true, message: '请输入年龄' },
                        { type: 'number', min: 18, max: 60, message: '年龄必须在 18 到 60 之间' },
                      ]}
                      componentProps={{
                        style: { width: '100%' },
                      }}
                    />
                  </BaseForm.Col>
                </BaseForm.Row>
              </BaseForm.Section>

              <BaseForm.Section title="自定义 validator">
                <BaseForm.Row columns={2} gutter={32}>
                  <BaseForm.Col>
                    <FormField
                      name="password"
                      label="密码"
                      component="password"
                      required
                      rules={[
                        { min: 6, message: '密码长度至少 6 位' },
                      ]}
                      componentProps={{
                        placeholder: '请输入密码',
                      }}
                    />
                  </BaseForm.Col>

                  <BaseForm.Col>
                    <FormField
                      name="confirmPassword"
                      label="确认密码"
                      component="password"
                      rules={[
                        {
                          validator: (rule, value, callback) => {
                            const password = this.formRef ? this.formRef.getValue('password') : undefined

                            if (!value) {
                              callback('请输入确认密码')
                              return
                            }

                            if (value !== password) {
                              callback('两次输入的密码不一致')
                              return
                            }

                            callback()
                          },
                        },
                      ]}
                      componentProps={{
                        placeholder: '请输入确认密码',
                      }}
                    />
                  </BaseForm.Col>
                </BaseForm.Row>
              </BaseForm.Section>

              <BaseForm.Section title="外部复杂状态校验">
                <BaseForm.Row columns={2} gutter={32}>
                  <BaseForm.Col>
                    <FormField
                      name="needExtraTags"
                      label="开启扩展标签"
                      component="switch"
                      initialValue
                    />
                  </BaseForm.Col>
                </BaseForm.Row>

                <Divider style={{ margin: '12px 0' }} />
                {this.renderExtraTags(readonly, !!values.needExtraTags)}
              </BaseForm.Section>

              <BaseForm.Actions showReset submitText="提交校验示例" />
            </>
          )}
        </BaseForm>

        {validateResult ? (
          <pre
            style={{
              marginTop: 16,
              padding: 12,
              background: '#fafafa',
              border: '1px solid #f0f0f0',
              borderRadius: 4,
              overflow: 'auto',
            }}
          >
            {validateResult}
          </pre>
        ) : null}
      </Card>
    )
  }
}

export default ValidationShowcaseForm
