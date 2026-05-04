import './styles/index.css'
import CommonTable from './CommonTable'
import TableActionGroup from './ActionGroup'
import TableOperationGroup from './OperationGroup'

CommonTable.TableActionGroup = TableActionGroup
CommonTable.TableOperationGroup = TableOperationGroup

CommonTable.Actions = TableActionGroup
CommonTable.Operations = TableOperationGroup

export default CommonTable

export { CommonTable, TableActionGroup, TableOperationGroup }
