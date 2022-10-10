import { specialCharacters } from '../data/characterList.js'
import { generateRandomNumExclusive } from '../utils/generateRandomNumExclusive.js'
import { validatePositiveNumber } from '../validations/index.js'

/**
 * Generate random special character(s).
 *
 * @param {number} num - The number of special characters to create.
 * @returns {string} - Special character(s).
 */
export const generateSpecialCharacters = (num) => {
    validatePositiveNumber(num)

    let randomCharacters = ''

    for (let i = 0; i < num; i++) {
        const randomIndex = generateRandomNumExclusive(specialCharacters.length, 0)
        randomCharacters += specialCharacters[randomIndex]
    }
            
    return randomCharacters
}
