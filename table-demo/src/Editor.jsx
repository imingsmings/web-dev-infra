import React from 'react'
import Quill from 'quill'

import LineNumber from './LineNumber'

import 'quill/dist/quill.snow.css'
import './lineNumber.css'

Quill.register('modules/lineNumber', LineNumber, true)

class Editor extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const toolbarOptions = [
            'bold',
            'italic',
            'underline',
            'strike'
        ]
        this.quill = new Quill('#editor', {
            theme: 'snow',
            modules: {
                lineNumber: {
                    container: '#lineNumber'
                }

                // toolbar: toolbarOptions
            }
        })

        this.quill.setContents([
            { insert: 'ADD Query123:S_gNB=[505];' },
            // {
            //     attributes: { bold: true }
            // },
            { insert: '\n' }
        ])

        this.quill.on(
            'editor-change',
            (eventName, ...args) => {
                if (eventName === 'text-change') {
                    // args[0] will be delta
                    console.log(args)
                } else if (
                    eventName === 'selection-change'
                ) {
                    // args[0] will be old range
                    console.log(args)
                }
                // console.log(this.quill.getContents())
                console.log(this.quill.getText())
                // this.quill.setSelection(0, 5)
            }
        )
    }

    render() {
        return (
            <div id='container'>
                <div id='editor'></div>
                <div id='lineNumber'></div>
            </div>
        )
    }
}

export default Editor
