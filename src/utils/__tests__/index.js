import { generateLetters } from '../generateLetters.js'
import { generateRandomNumExclusive } from '../generateRandomNumExclusive.js'
import { generateRandomNumInclusive } from '../generateRandomNumInclusive.js'
import { generateSpecialCharacters } from '../generateSpecialCharacters.js'
import { letters, specialCharacters } from '../../data/characters.js'

describe('generateLetters', () => {
  describe('Valid inputs', () => {
    it('Should return the correct number of letters', () => {
      expect(generateLetters(42).split('')).toHaveLength(42)
      expect(generateLetters(42).split('')).not.toHaveLength(41)
    })

    it('Should return valid letters', () => {
      const lettersArray = generateLetters(5).split('')

      expect(lettersArray.every(item => letters.includes(item))).toBeTruthy()
      expect(['a', 'b', '1'].every(item => letters.includes(item))).toBeFalsy()
    })
  })

  describe('Invalid inputs', () => {
    it('Should throw error if num is omitted or an invalid type', () => {
      expect(() => generateLetters()).toThrow('You must provide a number.')
      expect(() => generateLetters('42')).toThrow('You must provide a number.')
    })

    it('Should throw error if num is not positive', () => {
      expect(() => generateLetters(0)).toThrow('You must provide a positive number.')
      expect(() => generateLetters(-1)).toThrow('You must provide a positive number.')
    })
  })
})

describe('generateRandomNumExclusive', () => {
  describe('Valid inputs', () => {
    it('Should return a number within the provided range', () => {
      const max = 2
      const min = 1

      expect(generateRandomNumExclusive(max, min)).toBeLessThan(max)
      expect(generateRandomNumExclusive(max, min)).toBeGreaterThanOrEqual(min)
    })
  })

  describe('Invalid inputs', () => {
    it('Should throw an Error if the arguments max and min is omitted', () => {
      expect(() => generateRandomNumExclusive()).toThrow('You must provide a number.')
    })

    it('Should throw an Error if the argument max is not a positive number', () => {
      expect(() => generateRandomNumExclusive('2', 1)).toThrow('You must provide a number.')
      expect(() => generateRandomNumExclusive(-2, 1)).toThrow('You must provide a positive number.')
      expect(() => generateRandomNumExclusive(0)).toThrow('You must provide a positive number.')
    })

    it('Should throw an Error if the argument min is not a whole number', () => {
      expect(() => generateRandomNumExclusive(2, '1')).toThrow('You must provide a number.')
      expect(() => generateRandomNumExclusive(2, -1)).toThrow('You must provide a whole number.')
    })

    it('Should throw an Error if max is smaller than or equal to min', () => {
      expect(() => generateRandomNumExclusive(1, 2)).toThrow('max must be bigger than min.')
      expect(() => generateRandomNumExclusive(2, 2)).toThrow('max must be bigger than min.')
      expect(() => generateRandomNumExclusive(0)).toThrow()
    })
  })
})

describe('generateRandomNumInclusive', () => {
  describe('Valid inputs', () => {
    it('Should return a number within the provided range', () => {
      const max = 2
      const min = 1

      expect(generateRandomNumInclusive(max, min)).toBeLessThanOrEqual(max)
      expect(generateRandomNumInclusive(max, min)).toBeGreaterThanOrEqual(min)
    })
  })

  describe('Invalid inputs', () => {
    it('Should throw an Error if the arguments max and min is omitted', () => {
      expect(() => generateRandomNumInclusive()).toThrow('You must provide a number.')
    })

    it('Should throw an Error if the argument max is not a positive number', () => {
      expect(() => generateRandomNumInclusive('2', 1)).toThrow('You must provide a number.')
      expect(() => generateRandomNumInclusive(-2, 1)).toThrow('You must provide a positive number.')
      expect(() => generateRandomNumInclusive(0)).toThrow('You must provide a positive number.')
    })

    it('Should throw an Error if the argument min is not a whole number', () => {
      expect(() => generateRandomNumInclusive(2, '1')).toThrow('You must provide a number.')
      expect(() => generateRandomNumInclusive(2, -1)).toThrow('You must provide a whole number.')
    })

    it('Should throw an Error if max is smaller than min', () => {
      expect(() => generateRandomNumInclusive(1, 2)).toThrow('max must be bigger than or equal to min.')
      expect(() => generateRandomNumInclusive(2, 1)).not.toThrow()
      expect(() => generateRandomNumInclusive(1, 1)).not.toThrow()
      expect(() => generateRandomNumInclusive(0)).toThrow('You must provide a positive number.')
    })
  })
})

describe('generateSpecialCharacters', () => {
  describe('Valid inputs', () => {
    it('Should return the correct number of special characters', () => {
      expect(generateSpecialCharacters(42).split('')).toHaveLength(42)
      expect(generateSpecialCharacters(42).split('')).not.toHaveLength(41)
    })

    it('Should return valid special characters', () => {
      const lettersArray = generateSpecialCharacters(5).split('')

      expect(lettersArray.every(item => specialCharacters.includes(item))).toBeTruthy()
      expect(['a', 'b', '1'].every(item => specialCharacters.includes(item))).toBeFalsy()
    })
  })

  describe('Invalid inputs', () => {
    it('Should throw error if num is omitted or an invalid type', () => {
      expect(() => generateSpecialCharacters()).toThrow('You must provide a number.')
      expect(() => generateSpecialCharacters('42')).toThrow('You must provide a number.')
    })

    it('Should throw error if num is not positive', () => {
      expect(() => generateSpecialCharacters(0)).toThrow('You must provide a positive number.')
      expect(() => generateSpecialCharacters(-1)).toThrow('You must provide a positive number.')
    })
  })
})
