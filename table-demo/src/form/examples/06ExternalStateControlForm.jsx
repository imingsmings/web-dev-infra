import React from 'react'
import { Alert, Button, Card, Divider, Input, Switch, Tag, message } from 'antd'
import { BaseForm, FormField } from '..'

class ExternalStateControlForm extends React.PureComponent {
  state = {
    enableAdvanced: false,
    notifyUsers: ['张三'],
    notifyInput: '',
    fileList: ['需求文档.pdf'],
    fileInput: '',
    notifyError: '',
    fileError: '',
  }

  handleValuesChange = ({ hasChanged, nextValues }) => {
    if (hasChanged('needNotify')) {
      const needNotify = !!nextValues.needNotify

      if (!needNotify) {
        this.setState({
          notifyUsers: [],
          notifyInput: '',
          notifyError: '',
        })
      }
    }

    if (hasChanged('needAttachment')) {
      const needAttachment = !!nextValues.needAttachment

      if (!needAttachment) {
        this.setState({
          fileList: [],
          fileInput: '',
          fileError: '',
        })
      }
    }

    if (hasChanged('scene')) {
      const enableAdvanced = nextValues.scene === 'advanced'
      this.setState({
        enableAdvanced,
      })

      if (!enableAdvanced) {
        this.formRef.setValues({
          timeout: undefined,
          retryTimes: undefined,
        })
      }
    }
  }

  addNotifyUser = () => {
    const value = (this.state.notifyInput || '').trim()
    if (!value) return

    this.setState(prevState => ({
      notifyUsers: prevState.notifyUsers.includes(value)
        ? prevState.notifyUsers
        : [...prevState.notifyUsers, value],
      notifyInput: '',
      notifyError: '',
    }))
  }

  removeNotifyUser = (target) => {
    this.setState(prevState => ({
      notifyUsers: prevState.notifyUsers.filter(item => item !== target),
    }))
  }

  addFile = () => {
    const value = (this.state.fileInput || '').trim()
    if (!value) return

    this.setState(prevState => ({
      fileList: prevState.fileList.includes(value)
        ? prevState.fileList
        : [...prevState.fileList, value],
      fileInput: '',
      fileError: '',
    }))
  }

  removeFile = (target) => {
    this.setState(prevState => ({
      fileList: prevState.fileList.filter(item => item !== target),
    }))
  }

  validateExtra = ({ values }) => {
    let hasError = false
    const nextState = {}

    if (values.needNotify && !this.state.notifyUsers.length) {
      hasError = true
      nextState.notifyError = '开启通知后，至少需要一个接收人'
    } else {
      nextState.notifyError = ''
    }

    if (values.needAttachment && !this.state.fileList.length) {
      hasError = true
      nextState.fileError = '开启附件后，至少需要一个附件名称'
    } else {
      nextState.fileError = ''
    }

    this.setState(nextState)

    if (hasError) {
      return Promise.reject(new Error('外部状态校验失败'))
    }

    return Promise.resolve()
  }

  getExtraValues = ({ values }) => ({
    notifyUsers: values.needNotify ? this.state.notifyUsers : [],
    attachments: values.needAttachment ? this.state.fileList : [],
  })

  transformValues = (values) => {
    const nextValues = { ...values }

    if (nextValues.scene !== 'advanced') {
      delete nextValues.timeout
      delete nextValues.retryTimes
    }

    nextValues.needNotify = nextValues.needNotify ? 1 : 0
    nextValues.needAttachment = nextValues.needAttachment ? 1 : 0

    return nextValues
  }

  handleSubmit = async (values) => {
    console.log('外部 state 控制示例提交', values)
    await new Promise(resolve => setTimeout(resolve, 1000))
    message.success('外部 state 控制示例提交成功')
  }

  renderTags(items, onRemove, emptyText, color) {
    if (!items.length) {
      return <Alert type="info" showIcon message={emptyText} />
    }

    return items.map(item => (
      <Tag
        key={item}
        closable
        color={color}
        onClose={() => onRemove(item)}
        style={{ marginBottom: 8 }}
      >
        {item}
      </Tag>
    ))
  }

  renderNotifyEditor(readonly, needNotify) {
    const { notifyUsers, notifyInput, notifyError } = this.state

    return (
      <BaseForm.VirtualField
        label="通知接收人"
        required={needNotify}
        validateStatus={notifyError ? 'error' : ''}
        help={notifyError || '这是页面自己维护的复杂状态，不进入 antd Form'}
        errorDisplayMode={'message'}
      >
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <Input
              disabled={readonly || !needNotify}
              value={notifyInput}
              placeholder="输入一个接收人名称"
              onChange={e => this.setState({ notifyInput: e.target.value })}
            />
            <Button disabled={readonly || !needNotify} onClick={this.addNotifyUser}>
              添加接收人
            </Button>
          </div>
          <div>{this.renderTags(notifyUsers, this.removeNotifyUser, '当前没有接收人', 'blue')}</div>
        </div>
      </BaseForm.VirtualField>
    )
  }

  renderFileEditor(readonly, needAttachment) {
    const { fileList, fileInput, fileError } = this.state

    return (
      <BaseForm.VirtualField
        label="附件清单"
        required={needAttachment}
        validateStatus={fileError ? 'error' : ''}
        help={fileError || '模拟上传组件/文件列表编辑器这类不适合直接放进 Form 的状态'}
      >
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <Input
              disabled={readonly || !needAttachment}
              value={fileInput}
              placeholder="输入一个附件名称"
              onChange={e => this.setState({ fileInput: e.target.value })}
            />
            <Button disabled={readonly || !needAttachment} onClick={this.addFile}>
              添加附件
            </Button>
          </div>
          <div>{this.renderTags(fileList, this.removeFile, '当前没有附件', 'purple')}</div>
        </div>
      </BaseForm.VirtualField>
    )
  }

  render() {
    const { enableAdvanced } = this.state

    return (
      <Card title="06ExternalStateControlForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 12, color: '#666' }}>
          覆盖“外部 state 控制”的完整模式：表单字段驱动外部状态启停，外部状态自己校验，提交时通过
          `validateExtra + getExtraValues + transformValues` 合并成最终 payload。
        </div>

        <BaseForm
          wrappedComponentRef={(inst) => {
            this.formRef = inst
          }}
          onValuesChange={this.handleValuesChange}
          onSubmit={this.handleSubmit}
          validateExtra={this.validateExtra}
          getExtraValues={this.getExtraValues}
          transformValues={this.transformValues}
        >
          {({ values = {}, readonly }) => (
            <>
              <BaseForm.Section title="基础开关">
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
                      label="任务场景"
                      component="select"
                      initialValue="normal"
                      options={[
                        { label: '普通场景', value: 'normal' },
                        { label: '高级场景', value: 'advanced' },
                      ]}
                      componentProps={{ placeholder: '请选择场景' }}
                    />
                  </BaseForm.Col>
                  <BaseForm.Col>
                    <FormField
                      name="needNotify"
                      label="开启通知"
                      component="switch"
                      initialValue
                    />
                  </BaseForm.Col>
                  <BaseForm.Col>
                    <FormField
                      name="needAttachment"
                      label="开启附件"
                      component="switch"
                      initialValue={false}
                    />
                  </BaseForm.Col>
                </BaseForm.Row>
              </BaseForm.Section>

              <BaseForm.Section title="高级配置">
                <BaseForm.Row columns={4} gutter={32}>
                  <BaseForm.Col>
                    <FormField
                      name="timeout"
                      label="超时时间(秒)"
                      component="inputNumber"
                      hidden={() => !enableAdvanced}
                      clearOnHidden
                      componentProps={{ min: 1, style: { width: '100%' } }}
                    />
                  </BaseForm.Col>
                  <BaseForm.Col>
                    <FormField
                      name="retryTimes"
                      label="重试次数"
                      component="inputNumber"
                      hidden={() => !enableAdvanced}
                      clearOnHidden
                      componentProps={{ min: 0, max: 10, style: { width: '100%' } }}
                    />
                  </BaseForm.Col>
                </BaseForm.Row>
              </BaseForm.Section>

              <BaseForm.Section title="外部复杂状态">
                {this.renderNotifyEditor(readonly, !!values.needNotify)}
                <Divider style={{ margin: '12px 0' }} />
                {this.renderFileEditor(readonly, !!values.needAttachment)}
              </BaseForm.Section>

              <BaseForm.Actions showReset submitText="提交外部状态示例" />
            </>
          )}
        </BaseForm>
      </Card>
    )
  }
}

export default ExternalStateControlForm
