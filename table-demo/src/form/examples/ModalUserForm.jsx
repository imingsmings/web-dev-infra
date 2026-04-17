import React from 'react'
import { Button, Card, Modal, message } from 'antd'
import { BaseForm, FormField } from '..'

const mockUsers = [
  {
    id: 1,
    username: '张三',
    mobile: '13800000001',
    status: 1,
    remark: '已有管理权限',
  },
  {
    id: 2,
    username: '李四',
    mobile: '13800000002',
    status: 0,
    remark: '待激活',
  },
]

class ModalUserForm extends React.PureComponent {
  state = {
    visible: false,
    currentUser: null,
  }

  openCreate = () => {
    this.setState({
      visible: true,
      currentUser: null,
    }, () => {
      if (this.formRef) {
        this.formRef.reinitialize({
          status: 1,
        })
      }
    })
  }

  openEdit = (user) => {
    this.setState({
      visible: true,
      currentUser: user,
    }, () => {
      if (this.formRef) {
        this.formRef.reinitialize({
          username: user.username,
          mobile: user.mobile,
          status: user.status,
          remark: user.remark,
        })
      }
    })
  }

  closeModal = () => {
    this.setState({
      visible: false,
      currentUser: null,
    })
  }

  handleSubmit = async (values) => {
    console.log('弹窗表单提交', values)
    await new Promise(resolve => setTimeout(resolve, 800))
    message.success(this.state.currentUser ? '编辑成功' : '创建成功')
    this.closeModal()
  }

  renderActions(user) {
    return (
      <Button size="small" onClick={() => this.openEdit(user)}>
        编辑
      </Button>
    )
  }

  render() {
    const { visible, currentUser } = this.state

    return (
      <Card
        title="ModalUserForm.jsx"
        style={{ marginTop: 24 }}
        extra={<Button type="primary" onClick={this.openCreate}>新增用户</Button>}
      >
        <div style={{ marginBottom: 12, color: '#666' }}>
          场景重点：同一个表单在新增 / 编辑之间复用，通过 `reinitialize()` 做安全回填。
        </div>

        <div style={{ display: 'grid', gap: 12 }}>
          {mockUsers.map(user => (
            <div
              key={user.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 12,
                border: '1px solid #f0f0f0',
                borderRadius: 4,
              }}
            >
              <div>
                <div>{user.username}</div>
                <div style={{ color: '#999', fontSize: 12 }}>
                  {user.mobile} / {user.status ? '启用' : '停用'}
                </div>
              </div>
              {this.renderActions(user)}
            </div>
          ))}
        </div>

        <Modal
          visible={visible}
          title={currentUser ? '编辑用户' : '新增用户'}
          width={720}
          onCancel={this.closeModal}
          footer={null}
          destroyOnClose={false}
        >
          <BaseForm
            wrappedComponentRef={(inst) => {
              this.formRef = inst
            }}
            onSubmit={this.handleSubmit}
          >
            <BaseForm.Section title="用户信息">
              <FormField
                name="username"
                label="用户名"
                required
                componentProps={{
                  placeholder: '请输入用户名',
                }}
              />
              <FormField
                name="mobile"
                label="手机号"
                required
                rules={[
                  { pattern: /^1\d{10}$/, message: '请输入正确的手机号' },
                ]}
                componentProps={{
                  placeholder: '请输入手机号',
                }}
              />
              <FormField
                name="status"
                label="状态"
                component="radioGroup"
                required
                options={[
                  { label: '启用', value: 1 },
                  { label: '停用', value: 0 },
                ]}
              />
              <FormField
                name="remark"
                label="备注"
                component="textarea"
                componentProps={{
                  rows: 4,
                  placeholder: '请输入备注',
                }}
              />
            </BaseForm.Section>

            <BaseForm.Actions
              showReset
              showCancel
              submitText={currentUser ? '保存修改' : '确认创建'}
              cancelText="关闭"
              onCancel={this.closeModal}
            />
          </BaseForm>
        </Modal>
      </Card>
    )
  }
}

export default ModalUserForm
