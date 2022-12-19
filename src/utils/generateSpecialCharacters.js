import { specialCharacters } from '../data/characters.js'
import { generateCharacters } from './generateCharacter.js'

/**
 * Generate random special character(s).
 *
 * @param {number} num - The number of special characters to create.
 * @returns {string} - Special character(s).
 */
export const generateSpecialCharacters = (num) => {
  return generateCharacters(num, specialCharacters)
}
