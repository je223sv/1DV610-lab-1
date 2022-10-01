import { letters } from '../data/characterList.js'
import { generateRandomNumExclusive } from '../utils/generateRandomNumExclusive.js'

/**
 * Generate a random letter.
 *
 * @param {number} num - The number of letters to create.
 * @returns {string} - A letter.
 */
export const generateLetters = (num) => {
    let randomLetters = ''

    for (let i = 0; i < num; i++) {
        const randomIndex = generateRandomNumExclusive(letters.length, 0)
        randomLetters += letters[randomIndex]
    }

    return randomLetters
}
