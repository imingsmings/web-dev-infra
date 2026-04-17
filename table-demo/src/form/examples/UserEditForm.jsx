import React from 'react'
import { Alert, Button, Card, Input, Switch, Tag } from 'antd'
import { BaseForm, FormField } from '..'

class UserEditForm extends React.PureComponent {
  state = {
    readonly: false,
    disabled: false,
    attachments: [],
    attachmentError: '',
  }

  handleSubmit = async (values) => {
    console.log('提交参数:', values)
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  beforeSubmit = async (values) => {
    return {
      ...values,
      username: values.username && values.username.trim(),
    }
  }

  transformValues = (values) => {
    const nextValues = { ...values }

    if (Array.isArray(nextValues.activePeriod)) {
      nextValues.startDate = nextValues.activePeriod[0] && nextValues.activePeriod[0].format('YYYY-MM-DD')
      nextValues.endDate = nextValues.activePeriod[1] && nextValues.activePeriod[1].format('YYYY-MM-DD')
      delete nextValues.activePeriod
    }

    return nextValues
  }

  validateExtra = () => {
    if (!this.state.attachments.length) {
      this.setState({
        attachmentError: '请至少录入一个附件说明',
      })
      return Promise.reject(new Error('附件校验失败'))
    }

    this.setState({
      attachmentError: '',
    })

    return Promise.resolve()
  }

  getExtraValues = () => ({
    attachments: this.state.attachments,
  })

  fillDetail = () => {
    this.formRef.reinitialize({
      username: '张三',
      password: '123456',
      status: 1,
      isAdmin: true,
      age: 28,
      city: ['zhejiang', 'hangzhou'],
      activePeriod: [],
      remark: '这是通过 reinitialize 回填的详情数据',
    })

    this.setState({
      attachments: ['身份证复印件', '劳动合同'],
      attachmentError: '',
    })
  }

  handleValuesChange = ({ changedValues, changedKeys, nextValues, prevValues }) => {
    console.log('表单变化', changedValues, changedKeys, nextValues, prevValues)
  }

  addAttachment = () => {
    const nextItem = `附件说明 ${this.state.attachments.length + 1}`
    this.setState(prevState => ({
      attachments: [...prevState.attachments, nextItem],
      attachmentError: '',
    }))
  }

  removeAttachment = (target) => {
    this.setState(prevState => ({
      attachments: prevState.attachments.filter(item => item !== target),
    }))
  }

  renderAttachmentEditor() {
    const { attachments } = this.state

    return (
      <div>
        <div style={{ marginBottom: 12 }}>
          <Button onClick={this.addAttachment}>新增附件说明</Button>
        </div>
        {attachments.length ? attachments.map(item => (
          <Tag
            key={item}
            closable
            color="blue"
            onClose={() => this.removeAttachment(item)}
            style={{ marginBottom: 8 }}
          >
            {item}
          </Tag>
        )) : (
          <Alert type="info" showIcon message="当前没有附件说明，提交前需要补充。" />
        )}
      </div>
    )
  }

  render() {
    const { readonly, disabled, attachmentError } = this.state

    return (
      <Card title="UserEditForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 16, display: 'flex', gap: 12 }}>
          <span>
            只读：
            <Switch
              checked={readonly}
              onChange={(checked) => this.setState({ readonly: checked })}
              style={{ marginLeft: 8 }}
            />
          </span>
          <span>
            禁用：
            <Switch
              checked={disabled}
              onChange={(checked) => this.setState({ disabled: checked })}
              style={{ marginLeft: 8 }}
            />
          </span>
          <Button onClick={this.fillDetail}>回填详情</Button>
          <Button type="primary" ghost onClick={() => this.formRef.submit()}>
            手动触发 submit()
          </Button>
        </div>

        <BaseForm
          wrappedComponentRef={(inst) => {
            this.formRef = inst
          }}
          onSubmit={this.handleSubmit}
          beforeSubmit={this.beforeSubmit}
          transformValues={this.transformValues}
          validateExtra={this.validateExtra}
          getExtraValues={this.getExtraValues}
          onValuesChange={this.handleValuesChange}
          disabled={disabled}
          readonly={readonly}
        >
          <BaseForm.Section title="基础信息" extra={<span>示例展示 BaseForm.Section</span>}>
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
              name="status"
              label="状态"
              component="select"
              required
              options={[
                { label: '启用', value: 1 },
                { label: '停用', value: 0 },
              ]}
              componentProps={{
                placeholder: '请选择状态',
              }}
            />

            <FormField
              name="isAdmin"
              label="管理员"
              component="switch"
              initialValue={false}
              transform={value => (value ? 1 : 0)}
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
              name="city"
              label="城市"
              component="cascader"
              options={[
                {
                  value: 'zhejiang',
                  label: '浙江',
                  children: [
                    { value: 'hangzhou', label: '杭州' },
                    { value: 'ningbo', label: '宁波' },
                  ],
                },
              ]}
              componentProps={{
                placeholder: '请选择城市',
              }}
            />

            <FormField
              name="hasRemark"
              label="补充备注"
              component="switch"
              initialValue={false}
            />

            <FormField
              name="remark"
              label="备注"
              component="textarea"
              hidden={({ values }) => !values.hasRemark}
              clearOnHidden
              componentProps={{
                rows: 4,
                placeholder: '打开“补充备注”后可编辑',
              }}
            />
          </BaseForm.Section>

          <BaseForm.Section title="扩展信息" collapsible>
            <BaseForm.VirtualField
              label="附件说明"
              required
              validateStatus={attachmentError ? 'error' : ''}
              help={attachmentError}
              extra="VirtualField 只负责表单外观，不接入 getFieldDecorator"
            >
              {this.renderAttachmentEditor()}
            </BaseForm.VirtualField>

            <FormField
              name="externalNote"
              label="外部备注"
              renderControl={({ componentProps }) => (
                <Input {...componentProps} addonBefore="自定义" placeholder="演示 renderControl" />
              )}
            />
          </BaseForm.Section>

          <BaseForm.Actions
            align="right"
            showReset
            showCancel
            submitText="保存"
            resetText="重置"
            cancelText="取消"
            onCancel={() => {
              this.formRef.reset()
              this.setState({
                attachments: [],
                attachmentError: '',
              })
            }}
          />
        </BaseForm>
      </Card>
    )
  }
}

export default UserEditForm
