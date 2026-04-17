import React from 'react'
import { Alert, Button, Card, Checkbox, Divider, Switch, Tag, message } from 'antd'
import { BaseForm, FormField } from '..'

const permissionOptions = [
  { label: '用户查看', value: 'user:view' },
  { label: '用户编辑', value: 'user:edit' },
  { label: '角色查看', value: 'role:view' },
  { label: '角色编辑', value: 'role:edit' },
]

class PermissionConfigForm extends React.PureComponent {
  state = {
    readonly: false,
    selectedPermissions: ['user:view'],
    approvers: ['产品负责人'],
    permissionError: '',
    approverError: '',
  }

  handlePermissionChange = (checkedValues) => {
    this.setState({
      selectedPermissions: checkedValues,
      permissionError: '',
    })
  }

  addApprover = () => {
    const nextApprover = `审批人${this.state.approvers.length + 1}`
    this.setState(prevState => ({
      approvers: [...prevState.approvers, nextApprover],
      approverError: '',
    }))
  }

  removeApprover = (target) => {
    this.setState(prevState => ({
      approvers: prevState.approvers.filter(item => item !== target),
    }))
  }

  validateExtra = () => {
    let hasError = false

    if (!this.state.selectedPermissions.length) {
      hasError = true
      this.setState({
        permissionError: '请至少选择一个权限项',
      })
    }

    if (!this.state.approvers.length) {
      hasError = true
      this.setState({
        approverError: '请至少保留一个审批人',
      })
    }

    if (hasError) {
      return Promise.reject(new Error('外部复杂状态校验失败'))
    }

    this.setState({
      permissionError: '',
      approverError: '',
    })

    return Promise.resolve()
  }

  getExtraValues = () => ({
    permissionCodes: this.state.selectedPermissions,
    approvers: this.state.approvers,
  })

  transformValues = (values) => ({
    ...values,
    enabled: values.enabled ? 1 : 0,
  })

  handleSubmit = async (values) => {
    console.log('权限配置提交', values)
    await new Promise(resolve => setTimeout(resolve, 1000))
    message.success('权限配置已保存')
  }

  renderApprovers() {
    const { approvers } = this.state

    if (!approvers.length) {
      return <Alert type="warning" showIcon message="当前没有审批人" />
    }

    return approvers.map(item => (
      <Tag
        key={item}
        closable
        color="geekblue"
        onClose={() => this.removeApprover(item)}
        style={{ marginBottom: 8 }}
      >
        {item}
      </Tag>
    ))
  }

  render() {
    const { readonly, selectedPermissions, permissionError, approverError } = this.state

    return (
      <Card title="PermissionConfigForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
          <span>
            只读模式：
            <Switch
              checked={readonly}
              onChange={(checked) => this.setState({ readonly: checked })}
              style={{ marginLeft: 8 }}
            />
          </span>
          <Button onClick={this.addApprover}>新增审批人</Button>
        </div>

        <BaseForm
          wrappedComponentRef={(inst) => {
            this.formRef = inst
          }}
          readonly={readonly}
          onSubmit={this.handleSubmit}
          validateExtra={this.validateExtra}
          getExtraValues={this.getExtraValues}
          transformValues={this.transformValues}
        >
          <BaseForm.Section title="基础配置">
            <FormField
              name="roleName"
              label="角色名称"
              required
              componentProps={{
                placeholder: '请输入角色名称',
              }}
            />
            <FormField
              name="enabled"
              label="是否启用"
              component="switch"
              initialValue
            />
            <FormField
              name="description"
              label="角色说明"
              component="textarea"
              componentProps={{
                rows: 3,
                placeholder: '请输入角色说明',
              }}
            />
          </BaseForm.Section>

          <BaseForm.Section title="外部复杂状态" extra="这些数据不进 antd Form，由页面状态管理">
            <BaseForm.VirtualField
              label="权限项"
              required
              errorDisplayMode="message"
              validateStatus={permissionError ? 'error' : ''}
              help={permissionError}
            >
              <Checkbox.Group
                options={permissionOptions}
                value={selectedPermissions}
                onChange={this.handlePermissionChange}
                disabled={readonly}
              />
            </BaseForm.VirtualField>

            <Divider style={{ margin: '12px 0' }} />

            <BaseForm.VirtualField
              label="审批人"
              required
              errorDisplayMode="message"
              validateStatus={approverError ? 'error' : ''}
              help={approverError}
              extra="模拟人员选择器 / 审批流编辑器这类复杂控件"
            >
              <div>{this.renderApprovers()}</div>
            </BaseForm.VirtualField>
          </BaseForm.Section>

          <BaseForm.Actions
            showReset
            submitText="保存配置"
            resetText="重置字段"
          />
        </BaseForm>
      </Card>
    )
  }
}

export default PermissionConfigForm
