import { generateRandomNumExclusive } from '../utils/generateRandomNumExclusive.js'
import { validatePositiveNumber } from '../validations/index.js'

/**
 * Generate random character(s).
 *
 * @param {number} num - The number of special characters to create.
 * @param {characters} characters - The set of characters to generate characters from.
 * @returns {string} - Special character(s).
 */
export const generateCharacters = (num, characters) => {
  validatePositiveNumber(num)

  let randomCharacters = ''

  for (let i = 0; i < num; i++) {
    const randomIndex = generateRandomNumExclusive(characters.length, 0)
    randomCharacters += characters[randomIndex]
  }

  return randomCharacters
}
