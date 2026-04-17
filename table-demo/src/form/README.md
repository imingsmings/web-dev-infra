# BaseForm 使用规范

这个仓库当前主要用于演示两类能力：

- 表格相关示例
- `react 16 + antd 3.x` 下的 `BaseForm` 表单封装示例

基于 `react 16 + antd 3.x`。

`BaseForm` 的定位不是 Schema 引擎，而是复杂表单的控制层。

目标：

- 隐藏 `props.form`
- 统一提交与实例方法
- 保留 React 原生控制力
- 让复杂联动和复杂状态可维护

## 文档与示例入口

核心文档与示例都以当前目录为准：

- 规范文档：当前文件
- 示例目录：[examples](/Users/jason/code/web-dev-infra/table-demo/src/form/examples)

当前示例覆盖：

- 基础字段
- 查询表单
- 基础联动
- 自定义组件接入
- 局部组件注册
- 外部 state 控制
- 编辑态回填
- 栅格布局
- 校验能力
- 高级联动
- 异步联动
- 服务端错误映射
- 字段增强能力
- 通用编辑表单
- 弹窗编辑表单
- 权限配置表单

推荐阅读顺序：

1. 当前文档
2. [06ExternalStateControlForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/06ExternalStateControlForm.jsx:1)
3. [07EditPrefilledForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/07EditPrefilledForm.jsx:1)
4. [10AdvancedLinkageForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/10AdvancedLinkageForm.jsx:1)
5. [11AsyncLinkageForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/11AsyncLinkageForm.jsx:1)
6. [12ServerErrorMappingForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/12ServerErrorMappingForm.jsx:1)

## 核心原则

1. 简单字段交给 `FormField + antd Form`
2. 复杂业务状态留在页面 `state` / 子组件内部状态
3. `BaseForm` 负责把两者统一到提交流程里
4. 联动逻辑写普通 React 代码，不发明 DSL

---

## 推荐用法

```jsx
<BaseForm
  wrappedComponentRef={(inst) => {
    this.formRef = inst
  }}
  onSubmit={this.handleSubmit}
  validateExtra={this.validateExtra}
  getExtraValues={this.getExtraValues}
  transformValues={this.transformValues}
>
  <FormField name="userName" label="用户名" required />
  <FormField
    name="status"
    label="状态"
    component="select"
    options={[
      { label: '启用', value: 1 },
      { label: '停用', value: 0 },
    ]}
  />

  <BaseForm.Actions showReset />
</BaseForm>
```

页面层统一通过实例方法操作表单：

```jsx
this.formRef.getValues()
this.formRef.setValues({ userName: '张三' })
await this.formRef.validateAndScroll()
await this.formRef.submit()
```

不要再直接依赖：

```jsx
this.formRef.props.form
```

---

## 组件选择指南

先判断你面对的是哪一类数据，再决定用哪种组件承载。

### 1. 用 `FormField`

适合：

- `input`
- `select`
- `radioGroup`
- `checkboxGroup`
- `switch`
- `datePicker`
- `rangePicker`
- `inputNumber`
- 其他符合 `value/onChange` 协议的标准字段

典型特征：

- 值就是一个普通字段值
- 可以自然接入 `getFieldDecorator`
- 校验逻辑主要是字段级规则

### 2. 用 `BaseForm.VirtualField`

适合：

- 树组件
- 穿梭框
- 上传区
- 富文本
- 地图选点
- 可编辑表格
- 复杂业务选择器

典型特征：

- 组件内部状态复杂
- 有自己的搜索框、局部状态、异步流程
- 不适合强塞进 `getFieldDecorator`
- 但又希望保留统一的 label、required、help、错误提示样式

### 3. 值放 Form 还是放外部 state

推荐规则：

1. 普通字段值：放 Form
2. 复杂业务状态：放外部 state
3. 提交时通过 `getExtraValues` 合并
4. 校验时通过 `validateExtra` 补齐

### 4. 什么时候用 `errorDisplayMode`

推荐规则：

- 普通轻组件：`formItem`
- 树组件 / 穿梭框 / 上传区 / 富文本：`message`
- 需要整体块级提示边界：`border`

---

## API 概览

下面只列最常用的 API，详细类型以 [index.d.ts](/Users/jason/code/web-dev-infra/table-demo/src/form/index.d.ts:1) 为准。

### `BaseForm` 常用 props

- `onSubmit`
- `beforeSubmit`
- `transformValues`
- `validateExtra`
- `getExtraValues`
- `onValuesChange`
- `initialValues`
- `fieldComponents`
- `disabled`
- `readonly`
- `preventRepeatSubmit`
- `layout`

### `FormField` 常用 props

- `name`
- `label`
- `component`
- `componentProps`
- `options`
- `rules`
- `required`
- `initialValue`
- `hidden`
- `clearOnHidden`
- `readonly`
- `disabled`
- `transform`
- `valueFormat`
- `checkTools`
- `renderReadOnly`

### `VirtualField` 常用 props

- `name`
- `label`
- `required`
- `help`
- `validateStatus`
- `errorDisplayMode`
- `extra`

### `BaseForm` 实例方法

```jsx
this.formRef.getForm()
this.formRef.getValues()
this.formRef.getValue('userName')
this.formRef.setValues({ userName: '张三' })
this.formRef.setErrors({ userName: '用户名重复' })
this.formRef.setExtraErrors({ approvers: '审批人不能为空' })
this.formRef.getExtraError('approvers')
this.formRef.reset()
this.formRef.validate()
this.formRef.validateAndScroll()
this.formRef.submit()
this.formRef.reinitialize(detail)
this.formRef.isSubmitting()
```

---

## 提交流程

`this.formRef.submit()` 的执行顺序：

1. `validateFields`
2. 校验失败自动滚动到首个错误项
3. `validateExtra`
4. `getExtraValues`
5. 字段级 `transform`
6. 表单级 `transformValues`
7. `beforeSubmit`
8. `onSubmit`

推荐：

- 页面提交统一走 `this.formRef.submit()`
- 不要在按钮点击里自己重新拼 `validate + getFieldsValue + transform`

### 防重复提交

默认开启 `preventRepeatSubmit`。

当前行为：

- 同步 `onSubmit` 也会在本次提交链路结束前加锁
- 异步 `onSubmit` 会持续锁定到 Promise 结束
- `BaseForm.Actions` 会自动跟随 `submitting` 显示 loading

如果你确实需要关闭：

```jsx
<BaseForm preventRepeatSubmit={false} />
```

---

## 隐藏规则

这是最容易混淆的地方，必须区分两类隐藏。

### 1. `FormField.hidden`

语义：

- 隐藏字段 UI
- 字段仍然注册在 Form 中
- 默认保留值

推荐用于：

- 条件显示字段
- 需要在联动中保留字段值的场景

```jsx
<FormField
  name="mentor"
  label="导师"
  hidden={({ values }) => values.employmentType !== 'intern'}
/>
```

### 2. `clearOnHidden`

语义：

- 当字段变为隐藏时，自动清空字段值

适合：

- 字段隐藏后不应再参与提交

```jsx
<FormField
  name="vendorCompany"
  label="外包公司"
  hidden={({ values }) => values.employmentType !== 'contractor'}
  clearOnHidden
/>
```

### 3. `preserveOnHidden`

语义：

- 明确声明隐藏后保留值

说明：

- 当前默认就是保留值
- `clearOnHidden` 优先级高于 `preserveOnHidden`

### 4. `BaseForm.Col destroyOnHide`

语义：

- 直接卸载整列
- 列内字段会被销毁并取消注册

适合：

- 整块布局需要消失
- 你明确接受字段被卸载的行为

```jsx
<BaseForm.Col destroyOnHide={values.scene !== 'advanced'}>
  <FormField name="timeout" label="超时" />
</BaseForm.Col>
```

### 5. 禁止混淆

不要把这两类能力当成一回事：

- `FormField.hidden`: 隐藏但不卸载
- `BaseForm.Col destroyOnHide`: 直接卸载

推荐规则：

1. 只隐藏字段本身：优先用 `FormField.hidden`
2. 需要整列消失：用 `BaseForm.Col destroyOnHide`

---

## 回填规则

### 1. 静态初始值

首次静态值用 `initialValue`：

```jsx
<FormField name="enabled" label="启用" component="switch" initialValue />
```

适合：

- 新增表单默认值
- 不依赖异步详情的固定默认值

### 2. 编辑态 / 异步详情回填

统一用：

```jsx
this.formRef.reinitialize(detail)
```

或：

```jsx
this.formRef.setValues(detail)
```

推荐规则：

- 切换“新增/编辑/编辑不同记录”时，优先用 `reinitialize`
- 仅局部补值时用 `setValues`

### 3. 不支持 `mapPropsToFields`

`BaseForm` 不再支持 `antd 3.x Form.create` 的 `mapPropsToFields`。

原因：

- 它会把表单拖回“由 props 隐式控制”的模式
- 父组件任意一次普通 `setState` 都可能重新映射字段值
- 非表单项操作也可能把用户正在编辑的值覆盖掉

统一替代方案：

- 首次静态默认值：`initialValue`
- 编辑态整体回填：`reinitialize`
- 局部程序化补值：`setValues`

### 4. 不要依赖修改 `initialValue`

错误示例：

```jsx
<FormField initialValue={this.state.detail.name} />
```

然后希望 `detail` 更新后字段自动刷新。

这在 `antd 3.x` 里不可靠，因为：

- `initialValue` 只在字段首次注册时生效

### 5. 外部 state 也要一起回填

编辑态不是只有 Form 字段要回填。

如果页面有复杂状态，也必须在同一轮一起重置：

```jsx
this.setState({
  attachments: detail.attachments || [],
  notifyUsers: detail.notifyUsers || [],
}, () => {
  this.formRef.reinitialize({
    name: detail.name,
    code: detail.code,
  })
})
```

推荐规则：

1. 先回填页面外部状态
2. 再 `reinitialize` Form 字段

---

## 外部 State 规则

有些数据不适合进 `antd Form`，应当明确放在外部状态里。

常见类型：

- 上传文件列表
- 可编辑表格
- 权限树
- 标签列表
- 富文本
- 地图选点
- 审批流
- 复杂业务选择器

### 推荐模式

简单字段进 Form：

```jsx
<FormField name="title" label="标题" />
```

复杂状态留页面：

```jsx
this.state = {
  fileList: [],
  selectedUsers: [],
}
```

提交时统一合并：

```jsx
<BaseForm
  validateExtra={this.validateExtra}
  getExtraValues={this.getExtraValues}
/>
```

### `validateExtra`

用于校验不在 Form 内的数据：

```jsx
validateExtra = ({ values }) => {
  if (values.needAttachment && !this.state.fileList.length) {
    return Promise.reject(new Error('附件不能为空'))
  }
  return Promise.resolve()
}
```

### `getExtraValues`

用于把外部状态并入提交：

```jsx
getExtraValues = ({ values }) => ({
  attachments: values.needAttachment ? this.state.fileList : [],
})
```

### `VirtualField`

用于给外部状态一个统一的表单外壳：

```jsx
<BaseForm.VirtualField
  label="附件列表"
  required
  validateStatus={fileError ? 'error' : ''}
  help={fileError}
>
  <UploadBlock />
</BaseForm.VirtualField>
```

注意：

- `VirtualField` 只负责外观
- 不接入 `getFieldDecorator`
- 不会自动进入 Form 值

### `VirtualField` 错误展示模式

复杂组件场景下，内部常常还有搜索框、筛选框或其他交互控件。此时如果直接使用 `Form.Item` 的错误态，内部控件也可能一起变红。

因此 `VirtualField` 支持：

- `errorDisplayMode="formItem"`
  默认行为，沿用 `Form.Item` 的错误态
- `errorDisplayMode="message"`
  只显示字段级错误文案，不给内部控件施加错误态
- `errorDisplayMode="border"`
  只给外层区域加轻红边框，并显示错误文案

树组件、穿梭框、上传区、富文本这类复杂伪表单项，推荐优先用：

```jsx
<BaseForm.VirtualField
  name="selectedNodes"
  label="网元配置"
  required
  errorDisplayMode="message"
>
  <TreeTransfer ... />
</BaseForm.VirtualField>
```

### 外部错误收口

外部 state 的错误推荐统一收口到 `extraErrors`。

方式一：`validateExtra` 中 reject 一个对象

```jsx
validateExtra = ({ values }) => {
  if (values.needApprovers && !this.state.approvers.length) {
    return Promise.reject({
      approvers: '审批人不能为空',
    })
  }
  return Promise.resolve()
}
```

方式二：服务端返回后手动设置

```jsx
this.formRef.setExtraErrors({
  approvers: '服务端返回：审批人不能为空',
})
```

然后在 `VirtualField` 上提供 `name`：

```jsx
<BaseForm.VirtualField name="approvers" label="审批人">
  ...
</BaseForm.VirtualField>
```

这样 `VirtualField` 会自动读取对应错误。

---

## 字段增强能力

### `checkboxGroup` 内置操作条

`checkboxGroup` 可以开启内置操作条，用于高频的：

- 全选
- 全不选
- 反选
- 已选数量展示

最简用法：

```jsx
<FormField
  name="permissions"
  label="权限"
  component="checkboxGroup"
  options={permissionOptions}
  checkTools
/>
```

默认会使用 `panel` 风格，也就是浅灰容器卡片 + 弱化工具栏 + 底部选项区。

自定义用法：

```jsx
<FormField
  name="cities"
  label="投放城市"
  component="checkboxGroup"
  options={cityOptions}
  checkTools={{
    variant: 'inline',
    actions: ['checkAll', 'invert'],
    position: 'bottom',
    showCount: true,
    checkAllLabel: '全部勾选',
    invertLabel: '反向选择',
  }}
/>
```

说明：

- 只对 `component="checkboxGroup"` 生效
- 默认只操作未禁用项
- 已禁用且已选中的值会保留
- 表单内部值仍然是数组，不改变字段结构
- `variant` 支持：
  - `panel`：推荐样式，浅灰容器 + 弱化工具栏 + 选项区
  - `inline`：轻量样式，适合空间紧凑的场景
- 在 `layout="vertical"` 下，`panel` 变体会把工具栏与标题放在同一行并两端对齐，面板内部只保留选项内容，见 [13FieldValueEnhancementsForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/13FieldValueEnhancementsForm.jsx:1)

### 时间类字段的 `valueFormat`

`datePicker / monthPicker / timePicker / rangePicker` 可以通过 `valueFormat` 在提交时自动格式化。

```jsx
<FormField
  name="effectiveDate"
  label="生效日期"
  component="datePicker"
  valueFormat="YYYY-MM-DD"
/>
```

```jsx
<FormField
  name="activeRange"
  label="活动时间范围"
  component="rangePicker"
  valueFormat="YYYY-MM-DD HH:mm:ss"
/>
```

规则：

- 表单内部值仍然保持 `moment`
- `submit()` 时自动按 `valueFormat` 转成字符串
- `rangePicker` 默认转成字符串数组
- 如果字段同时传了 `transform`，优先使用自定义 `transform`

复杂结构转换仍建议放到 `transformValues`：

```jsx
transformValues={(values) => ({
  ...values,
  startDate: values.activeRange?.[0],
  endDate: values.activeRange?.[1],
})}
```

---

## 联动规则

联动统一写在普通 React 逻辑中，优先通过 `onValuesChange` 实现。

### `onValuesChange` 推荐 payload

当前回调可直接使用：

- `changedValues`
- `changedKeys`
- `changedKey`
- `changedValue`
- `prevValues`
- `nextValues`
- `form`
- `hasChanged(name)`

推荐规则：

1. 单字段联动优先用 `changedKey / changedValue`
2. 多字段联动优先用 `hasChanged(name) + nextValues`

### 推荐写法

```jsx
handleValuesChange = ({ changedKey, changedValue, form }) => {
  if (changedKey !== 'scene') return

  form.setFieldsValue({
    channel: undefined,
    templateCode: undefined,
  })

  this.loadTemplateOptions(changedValue)
}
```

```jsx
handleValuesChange = ({ hasChanged, nextValues }) => {
  if (hasChanged('scene')) {
    this.formRef.setValues({
      channel: undefined,
      templateCode: undefined,
    })
  }

  if (!nextValues.needReceivers) {
    this.setState({
      receiverTags: [],
    })
  }
}
```

### 联动时推荐的 4 类操作

1. 清空下游字段

```jsx
this.formRef.setValues({
  templateCode: undefined,
})
```

2. 控制字段隐藏

```jsx
<FormField
  name="vendorCode"
  hidden={({ values }) => values.channel !== 'sms'}
  clearOnHidden
/>
```

3. 控制整列显隐

```jsx
<BaseForm.Col destroyOnHide={!values.advancedRule}>
  <FormField name="ruleExpression" label="规则表达式" />
</BaseForm.Col>
```

4. 清空外部 state

```jsx
if (!changedValues.needNotify) {
  this.setState({
    notifyUsers: [],
  })
}
```

### 联动中的禁止写法

不要写成：

```jsx
if (changedValues.scene === 'advanced') {
  this.state.xxx = []
}
```

也不要继续依赖：

```jsx
this.formRef.props.form.setFieldsValue(...)
```

统一改成：

```jsx
this.formRef.setValues(...)
```

如果联动逻辑就在 `onValuesChange` 里，优先使用回调参数里的 `form`，时序更稳定：

```jsx
handleValuesChange = ({ changedKey, changedValue, form }) => {
  if (changedKey === 'scene' && form) {
    form.setFieldsValue({
      templateCode: undefined,
    })
  }
}
```

### 联动优先级建议

1. 上游字段变更
2. 先清下游 Form 字段
3. 再清外部 state
4. 最后依赖 `hidden / destroyOnHide` 控制 UI

这样最稳定。

---

## 布局规则

### 1. 横向布局

默认是 `horizontal`：

```jsx
<BaseForm>
  <FormField name="userName" label="用户名" />
</BaseForm>
```

### 2. 上下布局

如果标题在上、输入框在下：

```jsx
<BaseForm layout="vertical">
  <FormField name="mobile" label="手机号" />
</BaseForm>
```

### 3. 一行四列

```jsx
<BaseForm layout="vertical">
  <BaseForm.Row columns={4} gutter={48}>
    <BaseForm.Col>
      <FormField name="userName" label="用户姓名" />
    </BaseForm.Col>
    <BaseForm.Col>
      <FormField name="mobile" label="手机号" />
    </BaseForm.Col>
  </BaseForm.Row>
</BaseForm>
```

### 4. 快速分列

```jsx
<BaseForm.Grid columns={4} gutter={48}>
  <FormField name="a" label="字段A" />
  <FormField name="b" label="字段B" />
</BaseForm.Grid>
```

---

## 局部组件注册规则

优先推荐表单局部注册：

```jsx
<BaseForm
  fieldComponents={{
    userPicker: UserPicker,
  }}
>
  <FormField name="owner" label="负责人" component="userPicker" />
</BaseForm>
```

解析优先级：

1. 当前表单 `fieldComponents`
2. 全局 registry
3. 直接传入的 React 组件

推荐规则：

- 页面专属组件：用 `fieldComponents`
- 全项目通用组件：再考虑 `registerFieldComponent`

---

## 只读规则

整表只读：

```jsx
<BaseForm readonly />
```

字段级只读：

```jsx
<FormField name="status" label="状态" readonly />
```

复杂组件建议显式提供：

```jsx
<FormField
  name="region"
  component="regionPicker"
  renderReadOnly={({ value }) => value ? value.join(' / ') : '-'}
/>
```

推荐规则：

- 基础组件可依赖内置只读展示
- 自定义业务组件必须自己提供 `renderReadOnly`

---

## 校验规则

### 基础必填

```jsx
<FormField name="userName" label="用户名" required />
```

### 原生规则

```jsx
<FormField
  name="mobile"
  label="手机号"
  rules={[
    { required: true, message: '请输入手机号' },
    { pattern: /^1\d{10}$/, message: '请输入正确的手机号' },
  ]}
/>
```

### 自定义 validator

```jsx
<FormField
  name="confirmPassword"
  label="确认密码"
  rules={[
    {
      validator: (rule, value, callback) => {
        if (value !== this.formRef.getValue('password')) {
          callback('两次密码不一致')
          return
        }
        callback()
      },
    },
  ]}
/>
```

### 外部状态校验

```jsx
<BaseForm validateExtra={this.validateExtra} />
```

### 服务端错误回填

字段错误：

```jsx
this.formRef.setErrors({
  userName: '用户名重复',
  email: '邮箱已被占用',
})
```

外部状态错误：

```jsx
this.formRef.setExtraErrors({
  approvers: '审批人不能为空',
})
```

### 常用状态方法

实例方法还支持：

```jsx
this.formRef.getFieldError('userName')
this.formRef.getFieldsError()
this.formRef.isFieldTouched('userName')
this.formRef.isFieldsTouched()
this.formRef.isFieldValidating('email')
this.formRef.isFieldsValidating()
this.formRef.setExtraErrors({ approvers: '审批人不能为空' })
this.formRef.getExtraErrors()
this.formRef.getExtraError('approvers')
this.formRef.resetExtraErrors()
```

---

## 防重复提交规则

默认开启：

```jsx
<BaseForm preventRepeatSubmit />
```

当前机制：

- 异步 `onSubmit` 进入 `submitting`
- `submit()` 期间再次提交会被拦住
- `BaseForm.Actions` 提交按钮自动 loading

注意：

- 当前主要防的是异步提交流程中的重复点击
- 最终幂等仍然应由后端保证

---

## 常见误区

### 1. 不要再用 `mapPropsToFields`

`BaseForm` 已明确禁用这套能力。

原因：

- 会把表单拖回 antd 3.x 的隐式受控模式
- 父组件普通 `setState` 也可能覆盖正在编辑的值

统一改成：

- 静态默认值：`initialValue`
- 整体回填：`reinitialize`
- 局部补值：`setValues`

### 2. 不要再直接依赖 `this.formRef.props.form`

统一改成实例方法：

```jsx
this.formRef.setValues(...)
this.formRef.validate(...)
this.formRef.submit()
```

### 3. 不要把复杂组件强塞进 `getFieldDecorator`

像：

- 树组件
- 穿梭框
- 上传区
- 富文本
- 可编辑表格

统一改成：

- 外部 state 管值
- `VirtualField` 包壳
- `validateExtra + getExtraValues` 并入表单

### 4. 不要指望修改 `initialValue` 触发异步刷新

`initialValue` 只在字段首次注册时生效。

异步详情回填请直接：

```jsx
this.formRef.reinitialize(detail)
```

### 5. 不要混淆 `hidden` 和 `destroyOnHide`

- `FormField.hidden`：隐藏但不卸载
- `BaseForm.Col destroyOnHide`：直接卸载

### 6. 联动里不要直接改 state 对象

错误写法：

```jsx
this.state.xxx = []
```

统一改成：

```jsx
this.setState({ xxx: [] })
```

### 7. 联动里不要把 `valueFormat` 误当成内部值类型

时间类字段即使配了 `valueFormat`：

- 表单内部值仍然是 `moment`
- `onValuesChange` / 联动逻辑拿到的也仍然是 `moment`
- 只有 `submit()` 才会输出格式化后的字符串

---

## 推荐示例索引

- [01BasicFieldForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/01BasicFieldForm.jsx:1)
- [02QueryFilterForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/02QueryFilterForm.jsx:1)
- [03LinkageForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/03LinkageForm.jsx:1)
- [04CustomComponentForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/04CustomComponentForm.jsx:1)
- [05LocalRegistryForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/05LocalRegistryForm.jsx:1)
- [06ExternalStateControlForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/06ExternalStateControlForm.jsx:1)
- [07EditPrefilledForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/07EditPrefilledForm.jsx:1)
- [08GridLayoutForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/08GridLayoutForm.jsx:1)
- [09ValidationShowcaseForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/09ValidationShowcaseForm.jsx:1)
- [10AdvancedLinkageForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/10AdvancedLinkageForm.jsx:1)
- [11AsyncLinkageForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/11AsyncLinkageForm.jsx:1)
- [12ServerErrorMappingForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/12ServerErrorMappingForm.jsx:1)
- [13FieldValueEnhancementsForm.jsx](/Users/jason/code/web-dev-infra/table-demo/src/form/examples/13FieldValueEnhancementsForm.jsx:1)

---

## 最终建议

页面开发时先判断这个数据属于哪一类：

1. 简单字段值：放 Form
2. 复杂业务状态：放外部 state
3. 只隐藏不卸载：`FormField.hidden`
4. 整列销毁：`BaseForm.Col destroyOnHide`
5. 编辑态回填：`reinitialize`
6. 联动：`onValuesChange + setValues + setState`

只要按这套规则走，`BaseForm` 在老项目复杂场景里会比较稳。

---

## 运行

```bash
npm install
npx vite dev
```

如果你使用的是 `pnpm` 或 `yarn`，也可以按项目当前锁文件选择对应命令。
