import { letters } from '../data/characters.js'
import { generateCharacters } from './generateCharacter.js'

/**
 * Generate a random letter(s).
 *
 * @param {number} num - The number of letters to create.
 * @returns {string} - Letter(s).
 */
export const generateLetters = (num) => {
  return generateCharacters(num, letters)
}
