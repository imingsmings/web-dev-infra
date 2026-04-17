import React from 'react'
import { Button, Card, Divider, Input, Switch, Tag, message } from 'antd'
import { BaseForm, FormField } from '..'

const sceneOptions = [
  { label: '营销消息', value: 'marketing' },
  { label: '审批通知', value: 'approval' },
  { label: '系统告警', value: 'alarm' },
]

const channelOptionsMap = {
  marketing: [
    { label: '短信', value: 'sms' },
    { label: '邮件', value: 'email' },
    { label: '站内信', value: 'internal' },
  ],
  approval: [
    { label: '站内信', value: 'internal' },
    { label: '企业微信', value: 'wecom' },
  ],
  alarm: [
    { label: '邮件', value: 'email' },
    { label: 'Webhook', value: 'webhook' },
  ],
}

const templateOptionsMap = {
  marketing: {
    sms: [
      { label: '营销短信模板A', value: 'm_sms_a' },
      { label: '营销短信模板B', value: 'm_sms_b' },
    ],
    email: [
      { label: '营销邮件模板A', value: 'm_email_a' },
      { label: '营销邮件模板B', value: 'm_email_b' },
    ],
    internal: [
      { label: '营销站内信模板A', value: 'm_internal_a' },
    ],
  },
  approval: {
    internal: [
      { label: '审批站内信模板', value: 'a_internal' },
    ],
    wecom: [
      { label: '审批企微模板', value: 'a_wecom' },
    ],
  },
  alarm: {
    email: [
      { label: '告警邮件模板', value: 'alarm_email' },
    ],
    webhook: [
      { label: 'Webhook 告警模板', value: 'alarm_webhook' },
    ],
  },
}

class AdvancedLinkageForm extends React.PureComponent {
  state = {
    readonly: false,
    receiverTags: ['默认接收组'],
    receiverInput: '',
    receiverError: '',
  }

  getChannelOptions = (scene) => channelOptionsMap[scene] || []

  getTemplateOptions = (scene, channel) => {
    if (!scene || !channel) return []
    return (templateOptionsMap[scene] && templateOptionsMap[scene][channel]) || []
  }

  handleValuesChange = ({ hasChanged, nextValues }) => {
    if (hasChanged('scene')) {
      this.formRef.setValues({
        channel: undefined,
        templateCode: undefined,
        vendorCode: undefined,
        webhookUrl: undefined,
      })
    }

    if (hasChanged('channel')) {
      this.formRef.setValues({
        templateCode: undefined,
        vendorCode: undefined,
        webhookUrl: undefined,
      })
    }

    if (hasChanged('needReceivers') && !nextValues.needReceivers) {
      this.setState({
        receiverTags: [],
        receiverInput: '',
        receiverError: '',
      })
    }

    if (hasChanged('advancedRule') && !nextValues.advancedRule) {
      this.formRef.setValues({
        ruleExpression: undefined,
        deduplicateMinutes: undefined,
      })
    }

    if (nextValues.scene !== 'alarm' && nextValues.channel !== 'webhook') {
      this.formRef.setValues({
        webhookUrl: undefined,
      })
    }
  }

  validateExtra = ({ values }) => {
    if (values.needReceivers && !this.state.receiverTags.length) {
      this.setState({
        receiverError: '开启接收对象时，至少需要一个接收组',
      })
      return Promise.reject(new Error('接收对象校验失败'))
    }

    this.setState({
      receiverError: '',
    })
    return Promise.resolve()
  }

  getExtraValues = ({ values }) => ({
    receiverGroups: values.needReceivers ? this.state.receiverTags : [],
  })

  transformValues = (values) => {
    const nextValues = {
      ...values,
      needReceivers: values.needReceivers ? 1 : 0,
      advancedRule: values.advancedRule ? 1 : 0,
    }

    if (!(values.scene === 'alarm' && values.channel === 'webhook')) {
      delete nextValues.webhookUrl
    }

    if (!values.advancedRule) {
      delete nextValues.ruleExpression
      delete nextValues.deduplicateMinutes
    }

    return nextValues
  }

  handleSubmit = async (values) => {
    console.log('高级联动示例提交', values)
    await new Promise(resolve => setTimeout(resolve, 700))
    message.success('高级联动示例提交成功')
  }

  addReceiverGroup = () => {
    const value = (this.state.receiverInput || '').trim()
    if (!value) return

    this.setState(prevState => ({
      receiverTags: prevState.receiverTags.includes(value)
        ? prevState.receiverTags
        : [...prevState.receiverTags, value],
      receiverInput: '',
      receiverError: '',
    }))
  }

  removeReceiverGroup = (target) => {
    this.setState(prevState => ({
      receiverTags: prevState.receiverTags.filter(item => item !== target),
    }))
  }

  renderReceiverEditor(readonly, needReceivers) {
    const { receiverTags, receiverInput, receiverError } = this.state

    return (
      <BaseForm.VirtualField
        label="接收对象"
        required={needReceivers}
        validateStatus={receiverError ? 'error' : ''}
        help={receiverError || '演示外部 state 跟着表单开关联动清空和提交合并'}
      >
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <Input
            disabled={readonly || !needReceivers}
            value={receiverInput}
            placeholder="输入一个接收组"
            onChange={e => this.setState({ receiverInput: e.target.value })}
          />
          <Button disabled={readonly || !needReceivers} onClick={this.addReceiverGroup}>
            添加接收组
          </Button>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {receiverTags.length ? receiverTags.map(item => (
            <Tag
              key={item}
              closable={!readonly && needReceivers}
              color="blue"
              onClose={() => this.removeReceiverGroup(item)}
            >
              {item}
            </Tag>
          )) : (
            <span style={{ color: '#999' }}>当前没有接收对象</span>
          )}
        </div>
      </BaseForm.VirtualField>
    )
  }

  render() {
    const { readonly } = this.state

    return (
      <Card title="10AdvancedLinkageForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 12, color: '#666' }}>
          覆盖更完整的联动场景：字段切换后清空下游字段、动态 options、条件显示列、外部 state 联动、
          高级规则区块开关以及提交前转换。
        </div>

        <div style={{ marginBottom: 16 }}>
          <span>
            只读：
            <Switch
              checked={readonly}
              style={{ marginLeft: 8 }}
              onChange={(checked) => this.setState({ readonly: checked })}
            />
          </span>
        </div>

        <BaseForm
          wrappedComponentRef={(inst) => {
            this.formRef = inst
          }}
          readonly={readonly}
          layout="vertical"
          onValuesChange={this.handleValuesChange}
          onSubmit={this.handleSubmit}
          validateExtra={this.validateExtra}
          getExtraValues={this.getExtraValues}
          transformValues={this.transformValues}
        >
          {({ values = {} }) => {
            const channelOptions = this.getChannelOptions(values.scene)
            const templateOptions = this.getTemplateOptions(values.scene, values.channel)
            const isWebhook = values.scene === 'alarm' && values.channel === 'webhook'

            return (
              <>
                <BaseForm.Section title="基础联动">
                  <BaseForm.Row columns={4} gutter={32}>
                    <BaseForm.Col>
                      <FormField
                        name="taskName"
                        label="任务名称"
                        required
                        componentProps={{ placeholder: '请输入任务名称' }}
                      />
                    </BaseForm.Col>
                    <BaseForm.Col>
                      <FormField
                        name="scene"
                        label="消息场景"
                        component="select"
                        initialValue="marketing"
                        options={sceneOptions}
                        componentProps={{ placeholder: '请选择消息场景' }}
                      />
                    </BaseForm.Col>
                    <BaseForm.Col>
                      <FormField
                        name="channel"
                        label="发送渠道"
                        component="select"
                        required
                        options={channelOptions}
                        disabled={({ values: currentValues }) => !currentValues.scene}
                        componentProps={{ placeholder: '请选择发送渠道' }}
                      />
                    </BaseForm.Col>
                    <BaseForm.Col>
                      <FormField
                        name="templateCode"
                        label="模板编码"
                        component="select"
                        required
                        options={templateOptions}
                        disabled={({ values: currentValues }) => !currentValues.channel}
                        componentProps={{ placeholder: '请选择模板' }}
                      />
                    </BaseForm.Col>
                  </BaseForm.Row>

                  <BaseForm.Row columns={4} gutter={32}>
                    <BaseForm.Col destroyOnHide={values.channel !== 'sms'}>
                      <FormField
                        name="vendorCode"
                        label="短信供应商"
                        component="select"
                        clearOnHidden
                        options={[
                          { label: '阿里云短信', value: 'aliyun' },
                          { label: '腾讯云短信', value: 'tencent' },
                        ]}
                        componentProps={{ placeholder: '请选择短信供应商' }}
                      />
                    </BaseForm.Col>
                    <BaseForm.Col destroyOnHide={!isWebhook} span={12}>
                      <FormField
                        name="webhookUrl"
                        label="Webhook 地址"
                        clearOnHidden
                        rules={[
                          { required: isWebhook, message: 'Webhook 地址不能为空' },
                        ]}
                        componentProps={{ placeholder: '请输入 Webhook 地址' }}
                      />
                    </BaseForm.Col>
                  </BaseForm.Row>
                </BaseForm.Section>

                <BaseForm.Section title="对象联动">
                  <BaseForm.Row columns={4} gutter={32}>
                    <BaseForm.Col>
                      <FormField
                        name="needReceivers"
                        label="指定接收对象"
                        component="switch"
                        initialValue
                      />
                    </BaseForm.Col>
                    <BaseForm.Col>
                      <FormField
                        name="advancedRule"
                        label="启用高级规则"
                        component="switch"
                        initialValue={false}
                      />
                    </BaseForm.Col>
                  </BaseForm.Row>

                  {this.renderReceiverEditor(readonly, !!values.needReceivers)}
                </BaseForm.Section>

                <BaseForm.Section title="高级规则联动">
                  <BaseForm.Row columns={4} gutter={32}>
                    <BaseForm.Col destroyOnHide={!values.advancedRule} span={12}>
                      <FormField
                        name="ruleExpression"
                        label="规则表达式"
                        clearOnHidden
                        componentProps={{ placeholder: '例如 level >= 3 && region === "华东"' }}
                      />
                    </BaseForm.Col>
                    <BaseForm.Col destroyOnHide={!values.advancedRule}>
                      <FormField
                        name="deduplicateMinutes"
                        label="去重分钟数"
                        clearOnHidden
                        component="inputNumber"
                        componentProps={{ min: 1, max: 1440, style: { width: '100%' } }}
                      />
                    </BaseForm.Col>
                  </BaseForm.Row>
                </BaseForm.Section>

                <Divider style={{ margin: '12px 0' }} />
                <BaseForm.Actions showReset submitText="提交高级联动示例" />
              </>
            )
          }}
        </BaseForm>
      </Card>
    )
  }
}

export default AdvancedLinkageForm
