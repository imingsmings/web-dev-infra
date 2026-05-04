`src/nexttable` 当前承接从 low-code 项目迁移过来的表格基础实现。

来源:
- `/Users/jason/code/web-dev-infra/low-code/studio-front/src/shell/components/CommonTable`

本次迁移策略:
- `CommonTable` 主体目录基本保留原结构，放在 `src/nexttable/CommonTable`
- 将 low-code 壳层依赖替换为当前目录内的本地适配层
- 适配层位于 `src/nexttable/shared`

当前本地适配包含:
- `injectIntl.js`: 无 `react-intl` 时的轻量兼容
- `nanoid.js`: 轻量随机 id 生成
- `icons/index.jsx`: 基于 antd 3 `Icon` 的简化图标封装

virtual 说明:
- `CommonTable` 已增加 `legacy / virtual` 双渲染入口
- `CommonTable` 当前仍以 legacy 壳层逻辑为主，只在入口处切到底层 virtual 渲染引擎 `src/table/VirtualTable.jsx`
- virtual 相关说明见 `src/nexttable/CommonTable/virtual/README.md`

说明:
- `styles/index.less` 也已一并迁移，但当前项目尚未接入该 less 文件
- 这批代码还没有挂到现有 demo 页面，只是先完成代码落盘，方便后续继续基于它改造
