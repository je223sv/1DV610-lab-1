import { specialCharacters } from '../data/characterList.js'
import { generateRandomNumExclusive } from '../utils/generateRandomNumExclusive.js'

/**
 * Generate a random special character.
 * @param {number} num - The number of special characters to create.
 * @returns {string} - A special character.
 */
export const generateSpecialCharacters = (num) => {
    let randomCharacters = ''

    for (let i = 0; i < num; i++) {
        const randomIndex = generateRandomNumExclusive(specialCharacters.length, 0)
        randomCharacters += specialCharacters[randomIndex]
    }
            
    return randomCharacters
}
