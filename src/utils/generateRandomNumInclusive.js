import { validatePositiveNumber, validateWholeNumber } from '../validations/index.js'

/**
 * Generate a random number between max and min where max is inclusive.
 *
 * @param {number} max - The maximum number.
 * @param {number} min - The minimum number.
 * @returns {number} - A random number between max and min.
 */
export const generateRandomNumInclusive = (max, min = 0) => {
  validatePositiveNumber(max)
  validateWholeNumber(min)

  if (max < min) {
    throw new Error('max must be bigger than or equal to min.')
  }

  return Math.floor(Math.random() * (max - min + 1) + min)
}
