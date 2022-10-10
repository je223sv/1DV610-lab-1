import { letters } from '../data/characterList.js'
import { generateRandomNumExclusive } from '../utils/generateRandomNumExclusive.js'
import { validatePositiveNumber } from '../validations/index.js'

/**
 * Generate a random letter(s).
 *
 * @param {number} num - The number of letters to create.
 * @returns {string} - Letter(s).
 */
export const generateLetters = (num) => {
    validatePositiveNumber(num)

    let randomLetters = ''

    for (let i = 0; i < num; i++) {
        const randomIndex = generateRandomNumExclusive(letters.length, 0)
        randomLetters += letters[randomIndex]
    }

    return randomLetters
}
