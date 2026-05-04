import '@testing-library/jest-dom'

window.matchMedia =
    window.matchMedia ||
    function matchMedia() {
        return {
            matches: false,
            addListener() {},
            removeListener() {},
            addEventListener() {},
            removeEventListener() {},
            dispatchEvent() {
                return false
            }
        }
    }

window.requestAnimationFrame =
    window.requestAnimationFrame ||
    function requestAnimationFrame(callback) {
        return setTimeout(callback, 0)
    }

window.cancelAnimationFrame =
    window.cancelAnimationFrame ||
    function cancelAnimationFrame(id) {
        clearTimeout(id)
    }

window.ResizeObserver =
    window.ResizeObserver ||
    class ResizeObserver {
        observe() {}

        unobserve() {}

        disconnect() {}
    }

const originalConsoleError = console.error

beforeAll(() => {
    vi.spyOn(console, 'error').mockImplementation((...args) => {
        if (
            typeof args[0] === 'string' &&
            args[0].includes(
                "Can't perform a React state update on an unmounted component"
            )
        ) {
            return
        }

        originalConsoleError(...args)
    })
})

afterAll(() => {
    console.error.mockRestore()
})
