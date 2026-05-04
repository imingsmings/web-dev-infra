import React, { useCallback, useState } from 'react'
import { Resizable } from 'react-resizable'

function preventHandleClick(e) {
    e.stopPropagation()
}

function ResizableTitle(props) {
    const { onResize, width, resizable, ...restProps } = props

    if (!resizable || width == undefined) {
        return <th {...restProps} />
    }

    const [cls, setCls] = useState('')

    const handleResizeStart = useCallback(() => {
        setCls('resizing')
    }, [])

    const handleResizeStop = useCallback(() => {
        setCls('')
    }, [])

    return (
        <Resizable
            width={width}
            height={0}
            handle={<span
                className={`react-resizable-handle ${cls}`}
                onClick={preventHandleClick}
            />}
            onResize={onResize}
            onResizeStart={handleResizeStart}
            onResizeStop={handleResizeStop}
            draggableOpts={{
                enableUserSelectHack: false
            }}>
            <th {...restProps} />
        </Resizable>
    )
}

export default ResizableTitle