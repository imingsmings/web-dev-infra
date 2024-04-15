import type { Color } from 'antd/es/color-picker'
import { ColorPicker, Slider } from 'antd'
import {
    SyntheticEvent,
    useCallback,
    useState
} from 'react'
import { classNames } from '@/data/classnames'
import {
    setIconColor,
    getInitalIconColor,
    setIconSize,
    getInitalIconSize,
    ORIGINAL_COLOR,
    ORIGINAL_SIZE,
    getSource
} from './utils/helper'

function Content() {
    const [color, setColor] = useState(getInitalIconColor())
    const [sliderValue, setSliderValue] = useState(
        getInitalIconSize()
    )
    const [searchValue, setSearchValue] = useState('')
    const [endIndex, setEndIndex] = useState(100)

    const onSliderChange = useCallback((value: number) => {
        setSliderValue(value)
        setIconSize(value)
    }, [])

    const onColorChange = useCallback((value: Color) => {
        const rgba = value.toRgb()
        const color = `rgba(${rgba.r},${rgba.g},${rgba.a}, ${rgba.a})`
        setColor(color)
        setIconColor(color)
    }, [])

    const onReset = useCallback(() => {
        setColor(ORIGINAL_COLOR)
        setIconColor(ORIGINAL_COLOR)
        onSliderChange(ORIGINAL_SIZE)
    }, [])

    const onDownload = useCallback((e: SyntheticEvent) => {
        const target = e.target as HTMLAnchorElement

        if (target.download) return

        const iconName = target.dataset.key as string
        const source = getSource(iconName)(
            color,
            sliderValue,
            sliderValue
        )

        target.download = `${iconName}.svg`
        target.href = source
    }, [])

    const onSearch = useCallback((e: SyntheticEvent) => {
        const target = e.target as HTMLInputElement
        setSearchValue(target.value)
    }, [])

    const onScroll = (e: SyntheticEvent) => {
        const target = e.target as HTMLDivElement

        const scrollY =
            target.scrollHeight - target.scrollTop
        const maxScrollY = window.innerHeight - 40

        if (scrollY <= maxScrollY) {
            window.requestAnimationFrame(() => {
                setEndIndex(endIndex + 10)
            })
        }
    }

    const REMNDER_DATA = searchValue
        ? classNames
        : classNames.slice(0, endIndex)

    return (
        <div className='main-wrapper'>
            <div
                className='content-wrapper'
                onScroll={onScroll}
            >
                {REMNDER_DATA.filter((c) =>
                    c.includes(searchValue)
                ).map((item) => {
                    return (
                        <div
                            key={item}
                            className='icon-item'
                        >
                            <div className='icon-inner'>
                                <span
                                    className={`iconoir ${item}`}
                                ></span>
                                <a
                                    data-key={item}
                                    onClick={onDownload}
                                    className='download'
                                >
                                    Download
                                </a>
                            </div>
                            <span className='icon-text'>
                                {item.replace(
                                    'iconoir-',
                                    ''
                                )}
                            </span>
                        </div>
                    )
                })}
            </div>
            <div className='aside-wrapper'>
                <div className='search-wrapper'>
                    <input
                        type='text'
                        className='search'
                        placeholder='Search...'
                        onChange={onSearch}
                    />
                </div>
                <div className='tool-wrapper'>
                    <div className='customize'>
                        <div className='text'>
                            Customize
                        </div>
                        <div
                            className='reset'
                            onClick={onReset}
                        >
                            Reset
                        </div>
                    </div>
                    <div className='size'>
                        <div className='label'>Size</div>
                        <Slider
                            className='slider'
                            min={16}
                            max={60}
                            onChange={onSliderChange}
                            value={sliderValue}
                        />
                    </div>
                    <div className='color'>
                        <div className='label'>Color</div>
                        <ColorPicker
                            value={color}
                            onChange={onColorChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
