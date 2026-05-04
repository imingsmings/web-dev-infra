import React from 'react'
import ReactDOM from 'react-dom'
import { Dropdown, Checkbox, message } from 'antd'
import { CLASSNAME, getColumnRealKey } from '../utils'
import Icon from '../../shared/icons'

class Swap extends React.Component {
    constructor(props) {
        super(props)
    }

    onCheckTip = () => {
        message.warning('至少保留一列')
    }

    onSwapCheck = (type, arg) => {
        this.props.onCheck(type, arg, this.onCheckTip)
    }

    getCheckboxValues = () => {
        return this.props.column.filter((item) => item.show).map((item) => getColumnRealKey(item))
    }

    renderSwapMenu = () => {
        const value = this.getCheckboxValues()

        return (
            <>
                <div className='border-bottom'>
                    <Checkbox
                        className='lh-28'
                        onChange={this.onSwapCheck.bind(null, 1)}
                        checked={this.props.swapCheckedAll}>
                        全选
                    </Checkbox>
                </div>
                <Checkbox.Group
                    className='flex-fdc'
                    onChange={this.onSwapCheck.bind(null, 2)}
                    value={value}>
                    {this.props.column.map((item) => {
                        const titleText = item.titleText
                        const value = getColumnRealKey(item)
                        return (
                            <Checkbox
                                key={`${titleText}${value}`}
                                className='lh-28'
                                value={value}
                                disabled={item.isOperateColumn}>
                                {titleText}
                            </Checkbox>
                        )
                    })}
                </Checkbox.Group>
            </>
        )
    }

    renderSwap = () => {
        if (this.props.swap !== true) return null

        const swapId = CLASSNAME.SWAPID(this.props.tableId)

        return (
            <>
                <div className={CLASSNAME.SWAP}>
                    <Dropdown
                        getPopupContainer={() => document.getElementById(swapId)}
                        overlay={this.renderSwapMenu()}>
                        <Icon
                            type='swap'
                            theme='outlined'
                        />
                    </Dropdown>
                </div>
                {ReactDOM.createPortal(
                    <div
                        className={CLASSNAME.SWAPWRAPPER}
                        id={swapId}
                    />,
                    document.body
                )}
            </>
        )
    }

    render() {
        return this.renderSwap()
    }
}

export default Swap
