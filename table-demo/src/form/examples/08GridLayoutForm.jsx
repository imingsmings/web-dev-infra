import React from 'react'
import { Card, Tag, message } from 'antd'
import { BaseForm, FormField } from '..'

class GridLayoutForm extends React.PureComponent {
  handleSubmit = async (values) => {
    console.log('栅格布局表单提交', values)
    message.success('四列栅格表单提交成功')
  }

  render() {
    return (
      <Card title="08GridLayoutForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 12, color: '#666' }}>
          覆盖一行四列、标题和内容上下排布。关键点是 `BaseForm layout="vertical"` 配合
          `BaseForm.Row / BaseForm.Col` 或 `BaseForm.Grid`。
        </div>

        <div style={{ marginBottom: 12 }}>
          <Tag color="green">layout="vertical"</Tag>
          <Tag color="blue">BaseForm.Row columns=4</Tag>
          <Tag color="purple">BaseForm.Grid</Tag>
        </div>

        <BaseForm
          layout="vertical"
          onSubmit={this.handleSubmit}
        >
          <BaseForm.Section title="按 Row / Col 明确控制">
            <BaseForm.Row columns={4} gutter={48}>
              <BaseForm.Col>
                <FormField
                  name="userName"
                  label="用户姓名"
                  required
                  componentProps={{ placeholder: '请输入姓名' }}
                />
              </BaseForm.Col>
              <BaseForm.Col>
                <FormField
                  name="mobile"
                  label="手机号"
                  componentProps={{ placeholder: '请输入手机号' }}
                />
              </BaseForm.Col>
              <BaseForm.Col>
                <FormField
                  name="dept"
                  label="所属部门"
                  component="select"
                  options={[
                    { label: '运营部', value: 'operation' },
                    { label: '产品部', value: 'product' },
                    { label: '研发部', value: 'engineering' },
                  ]}
                  componentProps={{ placeholder: '请选择部门' }}
                />
              </BaseForm.Col>
              <BaseForm.Col>
                <FormField
                  name="status"
                  label="状态"
                  component="select"
                  options={[
                    { label: '启用', value: 1 },
                    { label: '停用', value: 0 },
                  ]}
                  componentProps={{ placeholder: '请选择状态' }}
                />
              </BaseForm.Col>
            </BaseForm.Row>

            <BaseForm.Row columns={4} gutter={48}>
              <BaseForm.Col>
                <FormField
                  name="creator"
                  label="创建人"
                  componentProps={{ placeholder: '请输入创建人' }}
                />
              </BaseForm.Col>
              <BaseForm.Col>
                <FormField
                  name="updater"
                  label="更新人"
                  componentProps={{ placeholder: '请输入更新人' }}
                />
              </BaseForm.Col>
            </BaseForm.Row>
          </BaseForm.Section>

          <BaseForm.Section title="按 Grid 自动分列">
            <BaseForm.Grid columns={4} gutter={48}>
              <FormField
                name="projectName"
                label="项目名称"
                componentProps={{ placeholder: '请输入项目名称' }}
              />
              <FormField
                name="projectCode"
                label="项目编码"
                componentProps={{ placeholder: '请输入项目编码' }}
              />
              <FormField
                name="manager"
                label="负责人"
                componentProps={{ placeholder: '请输入负责人' }}
              />
              <FormField
                name="projectType"
                label="项目类型"
                component="select"
                options={[
                  { label: '内部项目', value: 'internal' },
                  { label: '客户项目', value: 'client' },
                ]}
                componentProps={{ placeholder: '请选择项目类型' }}
              />
              <FormField
                name="budget"
                label="预算"
                component="inputNumber"
                componentProps={{ min: 0, style: { width: '100%' } }}
              />
              <FormField
                name="remark"
                label="备注"
                componentProps={{ placeholder: '这一项会自动进入下一行' }}
              />
            </BaseForm.Grid>
          </BaseForm.Section>

          <BaseForm.Actions showReset submitText="保存栅格布局表单" />
        </BaseForm>
      </Card>
    )
  }
}

export default GridLayoutForm
