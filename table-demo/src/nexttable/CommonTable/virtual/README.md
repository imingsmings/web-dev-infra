`CommonTable/virtual` 当前承接 `CommonTable` 的虚拟滚动渲染分支。

分层约定:
- `CommonTable` 只负责 legacy/virtual 入口切换、公共 props 组装，以及既有壳层能力 (`swap / resizable / sorter / selection`)。
- `src/nexttable/CommonTable/virtual` 负责 virtual 模式的准入判断、props 归一化和少量行为桥接。
- `src/table/VirtualTable.jsx` 是底层虚拟渲染引擎。

能力边界:
- 支持纵向虚拟滚动
- 支持左/右 fixed 列
- 支持 `rowSelection`
- 支持 `rowSelection.getCheckboxProps`
- 支持 `rowSelection.onSelect`
- 支持 `rowSelection.onSelectAll`
- 支持 `rowSelection.onSelectNone`
- 支持 `rowSelection.onSelectInvert`
- 支持 `rowSelection.selections`
- 支持 `rowSelection.hideDefaultSelections`
- 支持 `swap`
- 支持 `resizable`
- 支持 `loading`
- 支持 `locale.emptyText`
- 支持 `scrollToFirstRowOnChange`
- 支持 `components.body.row`
- 支持 `components.body.cell`
- 支持 `rowSelection.columnTitle + selections` 组合
- 支持 `style`
- 支持 `scrollToRow(index, options)`
- 支持 `scrollToKey(rowKey, options)`
- 支持 `onVisibleRangeChange(start, end, detail)`

当前仍回退到 legacy 的场景:
- 分组表头
- 展开行
- 内部分页
- 本地 sorter / filter
- tree data

接入约束:
- fixed 列必须显式设置 `width`
- virtual 模式默认依赖固定行高
- 文本列建议保持单行省略，避免真实行高漂移
- 支持 `components.body.row` / `components.body.cell`，但当前不承诺 `components.body.wrapper`

样式策略:
- 基础布局和运行时几何样式主要都保留在 `src/table/VirtualTable.jsx`
- 仅将 fixed 阴影、壳层外观、CommonTable 相关样式放在外部 CSS
- 当前保留为动态值的主要是:
  - 列宽 `width / minWidth / maxWidth`
  - fixed 列偏移 `left / right`
  - 表格宽度 / 最小宽度
  - 可视区高度、总高度、窗口 top 偏移
- `textAlign`、selection 菜单触发器等也保持显式样式，优先保证几何稳定

关键 props:
- `virtual`
- `virtualRowHeight`
- `virtualOverscan`
- `virtualThreshold`
- `dynamicOverscan`
- `dataChangeBehavior`
- `dataChangeKey`
- `scrollToFirstRowOnChange`
- `onVirtualScroll`
- `onVisibleRangeChange`

滚动定位:
- `scrollToRow(index, { align })`
- `scrollToKey(rowKey, { align })`

`align` 支持:
- `start`
- `center`
- `end`
- `nearest`

可视区事件:
- `start / end`: 当前真实可视区索引，`end` 为包含端
- `detail.overscanStart / detail.overscanEnd`: 当前渲染窗口索引
- `detail.scrollTop`: 当前滚动位置
- `detail.rowHeight`: 当前行高
- `detail.total`: 当前数据总量

选择列菜单:
- `rowSelection.selections === true` 时展示默认菜单项：`全选 / 反选 / 清空`
- `rowSelection.hideDefaultSelections === true` 时仅展示自定义 `selections`
- 自定义 `selections[].onSelect` 接收当前可选行 key 列表，不包含 disabled 项
- `rowSelection.columnTitle` 有值时仍可挂接选择菜单入口

说明:
- `scrollToFirstRowOnChange` 仍由 `CommonTable` 自己在 `onChange` 链路里控制
- `style` 会继续透传到底层 virtual table；`className` 仍以 `wx__common__table__virtual-base` 为主
