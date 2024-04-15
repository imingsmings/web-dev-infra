const ORIGINAL_COLOR = '#333'
const ORIGINAL_SIZE = 16

function setIconColor(color: string): void {
    document.documentElement.style.setProperty(
        '--icon-color',
        color
    )

    localStorage.setItem('iconcolor', color)
}

function getInitalIconColor(): string {
    const prevColor = localStorage.getItem('iconcolor')

    if (prevColor) {
        setIconColor(prevColor)
        return prevColor
    }

    const originColor = getComputedStyle(
        document.documentElement
    ).getPropertyValue('--icon-color')

    return originColor
}

function setIconSize(size: number): void {
    document.documentElement.style.setProperty(
        '--icon-size',
        `${size}px`
    )

    localStorage.setItem('iconsize', `${size}`)
}

function getInitalIconSize(): number {
    const prevSize = localStorage.getItem('iconsize')

    if (prevSize) {
        const size = Number(prevSize)
        setIconSize(Number(size))
        return Number(size)
    }

    const originSize = getComputedStyle(
        document.documentElement
    ).getPropertyValue('--icon-size')

    return Number(originSize)
}

function getIconSource(className: string) {
    const dom = document.querySelector(`.${className}`)

    if (!dom) return ''

    const styles = getComputedStyle(dom, ':before')
    const maskImage =
        styles.maskImage || styles.webkitMaskImage
    const result = maskImage.match(/\("(.+)"\)/)

    if (!result) return ''

    return result[1].replace(/\\/g, '')
}

function getStyledSource(
    source: string,
    color: string,
    width: string | number,
    height: string | number
): string {
    return source
        .replace(/width=(.+?) /, `width="${width}px" `)
        .replace(/height=(.+?) /, `height="${height}px" `)
        .replace(/>/, ` color="${color}">`)
}

function getSource(className: string) {
    const source = getIconSource(className)
    return function (
        color: string,
        width: string | number,
        height: string | number
    ): string {
        return getStyledSource(source, color, width, height)
    }
}

export {
    ORIGINAL_COLOR,
    ORIGINAL_SIZE,
    setIconColor,
    getInitalIconColor,
    setIconSize,
    getInitalIconSize,
    getSource
}
