import React from 'react'

// import Demo1 from './Demo1'
// import Editor from './Editor'
// import CommonTable from './CommonTable'
// import TableTest from './TableTest'
import ResizableTable from './ResizableTable'
 
class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <ResizableTable />
                {/* <TableTest /> */}
                {/* <CommonTable /> */}
                {/* <Demo1 /> */}
                {/* <Editor></Editor> */}
            </div>
        )
    }
}

export default App
