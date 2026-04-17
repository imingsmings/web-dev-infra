import React from 'react'

// import Demo1 from './Demo1'
// import Editor from './Editor'
// import CommonTable from './CommonTable'
// import TableTest from './TableTest'
// import ResizableTable from './ResizableTable'
import BasicFieldForm from './form/examples/01BasicFieldForm'
import QueryFilterForm from './form/examples/02QueryFilterForm'
import LinkageForm from './form/examples/03LinkageForm'
import CustomComponentForm from './form/examples/04CustomComponentForm'
import LocalRegistryForm from './form/examples/05LocalRegistryForm'
import ExternalStateControlForm from './form/examples/06ExternalStateControlForm'
import EditPrefilledForm from './form/examples/07EditPrefilledForm'
import GridLayoutForm from './form/examples/08GridLayoutForm'
import ValidationShowcaseForm from './form/examples/09ValidationShowcaseForm'
import AdvancedLinkageForm from './form/examples/10AdvancedLinkageForm'
import AsyncLinkageForm from './form/examples/11AsyncLinkageForm'
import ServerErrorMappingForm from './form/examples/12ServerErrorMappingForm'
import FieldValueEnhancementsForm from './form/examples/13FieldValueEnhancementsForm'
import UserEditForm from './form/examples/UserEditForm'
import ModalUserForm from './form/examples/ModalUserForm'
import PermissionConfigForm from './form/examples/PermissionConfigForm'
 
class App extends React.Component {
    render() {
        return (
            <div className='app' style={{ padding: 24, background: '#f5f5f5' }}>
                <div style={{ marginBottom: 16 }}>
                    <h2 style={{ marginBottom: 8 }}>BaseForm 示例集</h2>
                    <div style={{ color: '#666' }}>
                        按文件名区分，从简单到复杂覆盖基础字段、查询、联动、自定义组件、通用编辑、弹窗复用和复杂外部状态场景。
                    </div>
                </div>
                <BasicFieldForm />
                <QueryFilterForm />
                <LinkageForm />
                <CustomComponentForm />
                <LocalRegistryForm />
                <ExternalStateControlForm />
                <EditPrefilledForm />
                <GridLayoutForm />
                <ValidationShowcaseForm />
                <AdvancedLinkageForm />
                <AsyncLinkageForm />
                <ServerErrorMappingForm />
                <FieldValueEnhancementsForm />
                <UserEditForm />
                <ModalUserForm />
                <PermissionConfigForm />
                {/* <ResizableTable /> */}
                {/* <TableTest /> */}
                {/* <CommonTable /> */}
                {/* <Demo1 /> */}
                {/* <Editor></Editor> */}
                
            </div>
        )
    }
}

export default App
