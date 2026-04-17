import React from 'react'
import { Card, message } from 'antd'
import { BaseForm, FormField } from '..'

const departmentOptions = [
  { label: '平台运营', value: 'operation' },
  { label: '产品设计', value: 'product' },
  { label: '研发中心', value: 'engineering' },
]

class LinkageForm extends React.PureComponent {
  handleValuesChange = ({ hasChanged, nextValues }) => {
    if (hasChanged('employmentType')) {
      const isIntern = nextValues.employmentType === 'intern'
      this.formRef.setValues({
        probationMonths: isIntern ? 0 : this.formRef.getValue('probationMonths'),
      })
    }
  }

  handleSubmit = async (values) => {
    console.log('联动表单提交', values)
    message.success('联动表单提交成功')
  }

  render() {
    return (
      <Card title="03LinkageForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 12, color: '#666' }}>
          基础联动示例，覆盖函数型 `hidden/disabled`、`clearOnHidden` 和增强版 `onValuesChange`。
        </div>

        <BaseForm
          wrappedComponentRef={(inst) => {
            this.formRef = inst
          }}
          onValuesChange={this.handleValuesChange}
          onSubmit={this.handleSubmit}
        >
          <BaseForm.Section title="雇佣关系配置">
            <FormField
              name="employmentType"
              label="雇佣类型"
              component="radioGroup"
              initialValue="fulltime"
              options={[
                { label: '正式员工', value: 'fulltime' },
                { label: '实习生', value: 'intern' },
                { label: '外包顾问', value: 'contractor' },
              ]}
            />

            <FormField
              name="department"
              label="所属部门"
              component="select"
              required
              options={departmentOptions}
              componentProps={{
                placeholder: '请选择部门',
              }}
            />

            <FormField
              name="probationMonths"
              label="试用期(月)"
              component="inputNumber"
              initialValue={3}
              disabled={({ values }) => values.employmentType === 'intern'}
              componentProps={{
                min: 0,
                max: 12,
                style: { width: '100%' },
              }}
            />

            <FormField
              name="mentor"
              label="导师"
              hidden={({ values }) => values.employmentType !== 'intern'}
              clearOnHidden
              componentProps={{
                placeholder: '实习生需要指定导师',
              }}
            />

            <FormField
              name="vendorCompany"
              label="外包公司"
              hidden={({ values }) => values.employmentType !== 'contractor'}
              clearOnHidden
              componentProps={{
                placeholder: '外包顾问需要填写外包公司',
              }}
            />
          </BaseForm.Section>

          <BaseForm.Actions showReset submitText="保存雇佣关系" />
        </BaseForm>
      </Card>
    )
  }
}

export default LinkageForm
