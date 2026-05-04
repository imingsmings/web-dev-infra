const LETTER_ALPHABET =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBER_ALPHABET = '0123456789'
const LETTERS_AND_NUMBERS =
    LETTER_ALPHABET + NUMBER_ALPHABET

function randomFromAlphabet(alphabet, size = 21) {
    let output = ''

    for (let index = 0; index < size; index += 1) {
        const nextIndex = Math.floor(
            Math.random() * alphabet.length
        )
        output += alphabet[nextIndex]
    }

    return output
}

function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]'
}

export default function nanoid(options = {}) {
    if (isObject(options)) {
        if (options.alphabet) {
            return randomFromAlphabet(
                options.alphabet,
                options.size
            )
        }

        if (options.mixed) {
            return randomFromAlphabet(
                LETTERS_AND_NUMBERS,
                options.size
            )
        }

        if (options.letter) {
            return randomFromAlphabet(
                LETTER_ALPHABET,
                options.size
            )
        }

        if (options.digital) {
            return randomFromAlphabet(
                NUMBER_ALPHABET,
                options.size
            )
        }
    }

    if (typeof options === 'number') {
        return randomFromAlphabet(
            LETTERS_AND_NUMBERS,
            options
        )
    }

    return randomFromAlphabet(LETTERS_AND_NUMBERS, 21)
}
