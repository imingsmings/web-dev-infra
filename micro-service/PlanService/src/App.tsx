import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Tag } from 'antd'
import { httpGet } from 'BaseRequest'

export default function App() {
    const [time, setTime] = useState(
        moment().format('YYYY:MM:DD HH:mm:ss')
    )

    useEffect(() => {
        console.log(httpGet)
        let timer = setInterval(() => {
            setTime(moment().format('YYYY:MM:DD HH:mm:ss'))
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <p>{time.toString()}</p>
            <Tag>Text</Tag>
        </div>
    )
}
