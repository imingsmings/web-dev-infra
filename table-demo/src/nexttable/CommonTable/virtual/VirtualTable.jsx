import React from 'react'

import BaseVirtualTable from '../../../table/VirtualTable'

class VirtualTable extends React.PureComponent {
    constructor(props) {
        super(props)
        this.baseVirtualTableRef = React.createRef()
    }

    scrollToRow = (index, options) => {
        if (
            this.baseVirtualTableRef.current &&
            this.baseVirtualTableRef.current.scrollToRow
        ) {
            return this.baseVirtualTableRef.current.scrollToRow(index, options)
        }

        return false
    }

    scrollToKey = (rowKey, options) => {
        if (
            this.baseVirtualTableRef.current &&
            this.baseVirtualTableRef.current.scrollToKey
        ) {
            return this.baseVirtualTableRef.current.scrollToKey(rowKey, options)
        }

        return false
    }

    render() {
        const { ...restProps } = this.props

        return (
            <BaseVirtualTable
                {...restProps}
                className='wx__common__table__virtual-base'
                ref={this.baseVirtualTableRef}
                stretchToContainer
                virtual
            />
        )
    }
}

export default VirtualTable
