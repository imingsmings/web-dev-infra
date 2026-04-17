import React from 'react'
import { Card, message } from 'antd'
import { BaseForm, FormField } from '..'

class FieldValueEnhancementsForm extends React.PureComponent {
  handleSubmit = async (values) => {
    console.log('字段增强表单提交', values)
    message.success('字段增强表单提交成功')
  }

  render() {
    return (
      <Card title="13FieldValueEnhancementsForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 12, color: '#666' }}>
          演示 checkboxGroup 内置全选/全不选/反选，以及在 `layout="vertical"` 下“标题在上、内容在下”的
          `checkTools` 展示方式，同时覆盖 datePicker/rangePicker/timePicker 的 `valueFormat`
          提交态格式化能力。
        </div>

        <BaseForm
          layout="vertical"
          onSubmit={this.handleSubmit}
          initialValues={{
            permissions: ['read'],
            cities: ['sh', 'bj'],
          }}
        >
          <BaseForm.Section title="CheckboxGroup 增强">
            <FormField
              name="permissions"
              label="权限"
              component="checkboxGroup"
              options={[
                { label: '查看', value: 'read' },
                { label: '编辑', value: 'write' },
                { label: '删除', value: 'delete' },
                { label: '导出', value: 'export', disabled: true },
              ]}
              checkTools
              extra="这是默认工具条案例，适合权限、标签、渠道等多选场景。"
            />

            <FormField
              name="cities"
              label="投放城市"
              component="checkboxGroup"
              options={[
                { label: '上海', value: 'sh' },
                { label: '北京', value: 'bj' },
                { label: '深圳', value: 'sz' },
              ]}
              checkTools={{
                variant: 'inline',
                actions: ['checkAll', 'invert'],
                position: 'bottom',
                showCount: true,
                checkAllLabel: '全部勾选',
                invertLabel: '反向选择',
              }}
              extra="这是对比案例：使用 inline 轻量样式，工具条放在底部。"
            />
          </BaseForm.Section>

          <BaseForm.Section title="时间值格式化">
            <BaseForm.Row columns={2} gutter={24}>
              <BaseForm.Col>
                <FormField
                  name="effectiveDate"
                  label="生效日期"
                  component="datePicker"
                  valueFormat="YYYY-MM-DD"
                  componentProps={{
                    style: { width: '100%' },
                  }}
                />
              </BaseForm.Col>
              <BaseForm.Col>
                <FormField
                  name="effectiveTime"
                  label="生效时间"
                  component="timePicker"
                  valueFormat="HH:mm:ss"
                  componentProps={{
                    style: { width: '100%' },
                  }}
                />
              </BaseForm.Col>
            </BaseForm.Row>

            <BaseForm.Row columns={2} gutter={24}>
              <BaseForm.Col>
                <FormField
                  name="publishAt"
                  label="发布时间"
                  component="datePicker"
                  valueFormat="YYYY-MM-DD HH:mm:ss"
                  componentProps={{
                    showTime: true,
                    style: { width: '100%' },
                  }}
                />
              </BaseForm.Col>
              <BaseForm.Col>
                <FormField
                  name="activeRange"
                  label="活动时间范围"
                  component="rangePicker"
                  valueFormat="YYYY-MM-DD HH:mm:ss"
                  componentProps={{
                    showTime: true,
                    style: { width: '100%' },
                  }}
                />
              </BaseForm.Col>
            </BaseForm.Row>
          </BaseForm.Section>

          <BaseForm.Actions showReset submitText="提交并查看格式化结果" />
        </BaseForm>
      </Card>
    )
  }
}

export default FieldValueEnhancementsForm
