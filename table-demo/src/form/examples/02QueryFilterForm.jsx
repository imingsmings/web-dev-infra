import React from 'react'
import { Button, Card, Tag } from 'antd'
import { BaseForm, FormField } from '..'

class QueryFilterForm extends React.PureComponent {
  state = {
    resultText: '',
  }

  handleSubmit = (values) => {
    this.setState({
      resultText: JSON.stringify(values, null, 2),
    })
  }

  fillCommonQuery = () => {
    this.formRef.setValues({
      keyword: '张三',
      status: 1,
      dateType: 'createdAt',
    })
  }

  renderResult() {
    const { resultText } = this.state
    if (!resultText) return null

    return (
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
        {resultText}
      </pre>
    )
  }

  render() {
    return (
      <Card title="02QueryFilterForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 12, color: '#666' }}>
          覆盖查询表单、`layout=&quot;inline&quot;`、程序化回填和直接读取表单值。
        </div>

        <div style={{ marginBottom: 12 }}>
          <Button onClick={this.fillCommonQuery}>填入常用查询条件</Button>
          <Tag color="blue" style={{ marginLeft: 8 }}>
            this.formRef.getValues()
          </Tag>
        </div>

        <BaseForm
          layout="inline"
          wrappedComponentRef={(inst) => {
            this.formRef = inst
          }}
          onSubmit={this.handleSubmit}
        >
          <FormField
            name="keyword"
            label="关键词"
            componentProps={{
              placeholder: '姓名 / 手机号',
              style: { width: 180 },
            }}
          />

          <FormField
            name="status"
            label="状态"
            component="select"
            options={[
              { label: '全部', value: '' },
              { label: '启用', value: 1 },
              { label: '停用', value: 0 },
            ]}
            componentProps={{
              placeholder: '请选择状态',
              style: { width: 160 },
            }}
          />

          <FormField
            name="dateType"
            label="时间类型"
            component="select"
            initialValue="createdAt"
            options={[
              { label: '创建时间', value: 'createdAt' },
              { label: '更新时间', value: 'updatedAt' },
            ]}
            componentProps={{
              style: { width: 160 },
            }}
          />

          <BaseForm.Actions
            style={{ marginTop: 0 }}
            showReset
            submitText="查询"
            resetText="清空"
          />
        </BaseForm>

        {this.renderResult()}
      </Card>
    )
  }
}

export default QueryFilterForm
