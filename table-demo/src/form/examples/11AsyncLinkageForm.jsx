import React from 'react'
import { Alert, Button, Card, Select, Spin, message } from 'antd'
import { BaseForm, FormField } from '..'

const sceneOptions = [
  { label: '业务线 A', value: 'bizA' },
  { label: '业务线 B', value: 'bizB' },
]

const mockFetchTemplateOptions = (scene) => new Promise((resolve) => {
  setTimeout(() => {
    if (scene === 'bizA') {
      resolve([
        { label: '业务线 A 模板 1', value: 'a_1' },
        { label: '业务线 A 模板 2', value: 'a_2' },
      ])
      return
    }

    resolve([
      { label: '业务线 B 模板 1', value: 'b_1' },
      { label: '业务线 B 模板 2', value: 'b_2' },
    ])
  }, 600)
})

class AsyncLinkageForm extends React.PureComponent {
  requestId = 0

  state = {
    templateOptions: [],
    templateLoading: false,
    templateLoadError: '',
  }

  componentDidMount() {
    this.loadTemplateOptions('bizA')
  }

  loadTemplateOptions = async (scene) => {
    if (!scene) {
      this.setState({
        templateOptions: [],
        templateLoading: false,
        templateLoadError: '',
      })
      return
    }

    this.setState({
      templateLoading: true,
      templateLoadError: '',
      templateOptions: [],
    })

    const currentRequestId = ++this.requestId

    try {
      const templateOptions = await mockFetchTemplateOptions(scene)
      if (currentRequestId !== this.requestId) return

      this.setState({
        templateOptions,
        templateLoading: false,
      })
    } catch (error) {
      if (currentRequestId !== this.requestId) return

      this.setState({
        templateLoading: false,
        templateLoadError: '模板选项加载失败',
      })
    }
  }

  handleValuesChange = ({ changedKey, changedValue }) => {
    if (changedKey !== 'scene') return

    if (this.formRef && typeof this.formRef.setValues === 'function') {
      this.formRef.setValues({
        templateCode: undefined,
      })
    }

    this.loadTemplateOptions(changedValue)
  }

  handleSubmit = async (values) => {
    console.log('异步联动示例提交', values)
    await new Promise(resolve => setTimeout(resolve, 500))
    message.success('异步联动示例提交成功')
  }

  render() {
    const { templateOptions, templateLoading, templateLoadError } = this.state

    return (
      <Card title="11AsyncLinkageForm.jsx" style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 12, color: '#666' }}>
          覆盖异步联动：上游字段变化后请求下游 options，处理 loading、清值和简单竞态。
        </div>

        <BaseForm
          wrappedComponentRef={(inst) => {
            this.formRef = inst
          }}
          onValuesChange={this.handleValuesChange}
          onSubmit={this.handleSubmit}
        >
          <BaseForm.Row columns={2} gutter={32}>
            <BaseForm.Col>
              <FormField
                name="scene"
                label="业务线"
                component="select"
                required
                initialValue="bizA"
                options={sceneOptions}
                componentProps={{ placeholder: '请选择业务线' }}
              />
            </BaseForm.Col>
            <BaseForm.Col>
              <FormField
                name="templateCode"
                label="模板"
                required
                renderControl={({ componentProps, form }) => (
                  <Select
                    {...componentProps}
                    placeholder="请选择模板"
                    disabled={!form.getFieldValue('scene') || templateLoading}
                    notFoundContent={templateLoading ? <Spin size="small" /> : null}
                  >
                    {templateOptions.map(item => (
                      <Select.Option key={item.value} value={item.value}>
                        {item.label}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              />
            </BaseForm.Col>
          </BaseForm.Row>

          {templateLoadError ? (
            <Alert type="error" showIcon message={templateLoadError} style={{ marginBottom: 16 }} />
          ) : null}

          <BaseForm.Actions submitText="提交异步联动示例" />
        </BaseForm>
      </Card>
    )
  }
}

export default AsyncLinkageForm
