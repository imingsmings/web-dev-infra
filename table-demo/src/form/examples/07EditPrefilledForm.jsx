import React from 'react'
import { Button, Card, Divider, Switch, Tag, message } from 'antd'
import { BaseForm, FormField } from '..'

const detailList = [
  {
    id: 1,
    name: '订单审批流程',
    code: 'FLOW_ORDER_001',
    owner: '张三',
    scene: 'advanced',
    enabled: true,
    needNotify: true,
    needAttachment: true,
    timeout: 60,
    retryTimes: 3,
    level: 'high',
    notifyUsers: ['产品负责人', '运营负责人'],
    attachments: ['审批说明.docx', '流程图.png'],
  },
  {
    id: 2,
    name: '合同归档流程',
    code: 'FLOW_ARCHIVE_002',
    owner: '李四',
    scene: 'normal',
    enabled: false,
    needNotify: true,
    needAttachment: false,
    timeout: undefined,
    retryTimes: undefined,
    level: 'medium',
    notifyUsers: ['法务负责人'],
    attachments: [],
  },
]

class EditPrefilledForm extends React.PureComponent {
  state = {
    currentId: 1,
    readonly: false,
    notifyUsers: [],
    attachments: [],
    notifyError: '',
    attachmentError: '',
  }

  componentDidMount() {
    this.loadDetail(1)
  }

  getCurrentDetail = (id = this.state.currentId) => (
    detailList.find(item => item.id === id) || detailList[0]
  )

  loadDetail = (id) => {
    const detail = this.getCurrentDetail(id)

    this.setState({
      currentId: detail.id,
      notifyUsers: detail.notifyUsers || [],
      attachments: detail.attachments || [],
      notifyError: '',
      attachmentError: '',
    }, () => {
      if (this.formRef) {
        this.formRef.reinitialize({
          name: detail.name,
          code: detail.code,
          owner: detail.owner,
          scene: detail.scene,
          enabled: detail.enabled,
          needNotify: detail.needNotify,
          needAttachment: detail.needAttachment,
          timeout: detail.timeout,
          retryTimes: detail.retryTimes,
          level: detail.level,
        })
      }
    })
  }

  handleValuesChange = ({ hasChanged, nextValues }) => {
    if (hasChanged('needNotify') && !nextValues.needNotify) {
      this.setState({
        notifyUsers: [],
        notifyError: '',
      })
    }

    if (hasChanged('needAttachment') && !nextValues.needAttachment) {
      this.setState({
        attachments: [],
        attachmentError: '',
      })
    }

    if (hasChanged('scene') && nextValues.scene !== 'advanced') {
      if (this.formRef && typeof this.formRef.setValues === 'function') {
        this.formRef.setValues({
          timeout: undefined,
          retryTimes: undefined,
        })
      }
    }
  }

  validateExtra = ({ values }) => {
    let hasError = false
    const nextState = {}

    if (values.needNotify && !this.state.notifyUsers.length) {
      hasError = true
      nextState.notifyError = '编辑态下开启通知时，接收人不能为空'
    } else {
      nextState.notifyError = ''
    }

    if (values.needAttachment && !this.state.attachments.length) {
      hasError = true
      nextState.attachmentError = '编辑态下开启附件时，附件列表不能为空'
    } else {
      nextState.attachmentError = ''
    }

    this.setState(nextState)

    if (hasError) {
      return Promise.reject(new Error('编辑回填场景外部状态校验失败'))
    }

    return Promise.resolve()
  }

  getExtraValues = ({ values }) => ({
    notifyUsers: values.needNotify ? this.state.notifyUsers : [],
    attachments: values.needAttachment ? this.state.attachments : [],
  })

  transformValues = (values) => {
    const nextValues = {
      ...values,
      enabled: values.enabled ? 1 : 0,
      needNotify: values.needNotify ? 1 : 0,
      needAttachment: values.needAttachment ? 1 : 0,
    }

    if (nextValues.scene !== 'advanced') {
      delete nextValues.timeout
      delete nextValues.retryTimes
    }

    return nextValues
  }

  handleSubmit = async (values) => {
    console.log('编辑回填示例提交', values)
    await new Promise(resolve => setTimeout(resolve, 1000))
    message.success('编辑回填示例提交成功')
  }

  addNotifyUser = () => {
    const nextName = `默认接收人${this.state.notifyUsers.length + 1}`
    this.setState(prevState => ({
      notifyUsers: [...prevState.notifyUsers, nextName],
      notifyError: '',
    }))
  }

  removeNotifyUser = (target) => {
    this.setState(prevState => ({
      notifyUsers: prevState.notifyUsers.filter(item => item !== target),
    }))
  }

  addAttachment = () => {
    const nextName = `默认附件${this.state.attachments.length + 1}.txt`
    this.setState(prevState => ({
      attachments: [...prevState.attachments, nextName],
      attachmentError: '',
    }))
  }

  removeAttachment = (target) => {
    this.setState(prevState => ({
      attachments: prevState.attachments.filter(item => item !== target),
    }))
  }

  renderTagList(items, onClose, emptyText, color) {
    if (!items.length) return <span style={{ color: '#999' }}>{emptyText}</span>

    return items.map(item => (
      <Tag
        key={item}
        closable={!this.state.readonly}
        color={color}
        onClose={() => onClose(item)}
        style={{ marginBottom: 8 }}
      >
        {item}
      </Tag>
    ))
  }

  render() {
    const {
      currentId,
      readonly,
      notifyUsers,
      attachments,
      notifyError,
      attachmentError,
    } = this.state

    return (
      <Card title="07EditPrefilledForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 12, color: '#666' }}>
          覆盖编辑态回填。表单字段和外部 state 都从详情数据整体回填，切换不同详情时通过 `reinitialize()`
          和 `setState()` 一起重置，确保每个字段都有默认值。
        </div>

        <div style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button type={currentId === 1 ? 'primary' : 'default'} onClick={() => this.loadDetail(1)}>
            回填详情 A
          </Button>
          <Button type={currentId === 2 ? 'primary' : 'default'} onClick={() => this.loadDetail(2)}>
            回填详情 B
          </Button>
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
          onValuesChange={this.handleValuesChange}
          onSubmit={this.handleSubmit}
          validateExtra={this.validateExtra}
          getExtraValues={this.getExtraValues}
          transformValues={this.transformValues}
        >
          {({ values = {} }) => (
            <>
              <BaseForm.Section title="基础信息">
                <BaseForm.Row columns={4} gutter={32}>
                  <BaseForm.Col>
                    <FormField name="name" label="流程名称" required componentProps={{ placeholder: '请输入流程名称' }} />
                  </BaseForm.Col>
                  <BaseForm.Col>
                    <FormField name="code" label="流程编码" required componentProps={{ placeholder: '请输入流程编码' }} />
                  </BaseForm.Col>
                  <BaseForm.Col>
                    <FormField name="owner" label="负责人" required componentProps={{ placeholder: '请输入负责人' }} />
                  </BaseForm.Col>
                  <BaseForm.Col>
                    <FormField
                      name="level"
                      label="优先级"
                      component="select"
                      initialValue="medium"
                      options={[
                        { label: '高', value: 'high' },
                        { label: '中', value: 'medium' },
                        { label: '低', value: 'low' },
                      ]}
                      componentProps={{ placeholder: '请选择优先级' }}
                    />
                  </BaseForm.Col>
                </BaseForm.Row>
              </BaseForm.Section>

              <BaseForm.Section title="开关与高级配置">
                <BaseForm.Row columns={4} gutter={32}>
                  <BaseForm.Col>
                    <FormField
                      name="scene"
                      label="场景"
                      component="select"
                      initialValue="normal"
                      options={[
                        { label: '普通场景', value: 'normal' },
                        { label: '高级场景', value: 'advanced' },
                      ]}
                    />
                  </BaseForm.Col>
                  <BaseForm.Col>
                    <FormField name="enabled" label="是否启用" component="switch" initialValue />
                  </BaseForm.Col>
                  <BaseForm.Col>
                    <FormField name="needNotify" label="开启通知" component="switch" initialValue />
                  </BaseForm.Col>
                  <BaseForm.Col>
                    <FormField name="needAttachment" label="开启附件" component="switch" initialValue={false} />
                  </BaseForm.Col>
                </BaseForm.Row>

                <BaseForm.Row columns={4} gutter={32}>
                  <BaseForm.Col destroyOnHide={values.scene !== 'advanced'}>
                    <FormField
                      name="timeout"
                      label="超时(秒)"
                      component="inputNumber"
                      componentProps={{ min: 1, style: { width: '100%' } }}
                    />
                  </BaseForm.Col>
                  <BaseForm.Col destroyOnHide={values.scene !== 'advanced'}>
                    <FormField
                      name="retryTimes"
                      label="重试次数"
                      component="inputNumber"
                      componentProps={{ min: 0, max: 10, style: { width: '100%' } }}
                    />
                  </BaseForm.Col>
                </BaseForm.Row>
              </BaseForm.Section>

              <BaseForm.Section title="外部状态默认值">
                <BaseForm.VirtualField
                  label="通知接收人"
                  required={!!values.needNotify}
                  validateStatus={notifyError ? 'error' : ''}
                  help={notifyError || '编辑态回填时，接收人列表从详情数据整体回填'}
                >
                  <div style={{ marginBottom: 8 }}>
                    {!readonly ? (
                      <Button disabled={!values.needNotify} onClick={this.addNotifyUser}>
                        新增默认接收人
                      </Button>
                    ) : null}
                  </div>
                  <div>{this.renderTagList(notifyUsers, this.removeNotifyUser, '暂无接收人', 'blue')}</div>
                </BaseForm.VirtualField>

                <Divider style={{ margin: '12px 0' }} />

                <BaseForm.VirtualField
                  label="附件列表"
                  required={!!values.needAttachment}
                  validateStatus={attachmentError ? 'error' : ''}
                  help={attachmentError || '编辑态回填时，附件列表同样由外部 state 管理'}
                >
                  <div style={{ marginBottom: 8 }}>
                    {!readonly ? (
                      <Button disabled={!values.needAttachment} onClick={this.addAttachment}>
                        新增默认附件
                      </Button>
                    ) : null}
                  </div>
                  <div>{this.renderTagList(attachments, this.removeAttachment, '暂无附件', 'purple')}</div>
                </BaseForm.VirtualField>
              </BaseForm.Section>

              <BaseForm.Actions showReset submitText="提交编辑回填示例" />
            </>
          )}
        </BaseForm>
      </Card>
    )
  }
}

export default EditPrefilledForm
