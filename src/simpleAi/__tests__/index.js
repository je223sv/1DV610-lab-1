import SimpleAi from '../index.js'
import { MIN_FACE_VALUE, VALID_ROCK_PAPER_SCISSORS_VALUES } from '../../data/constants.js'

const ai = new SimpleAi()

describe('makeSelection', () => {
  describe('Valid input', () => {
    it('Should return an item in the options array', () => {
      const options = [1, 2, 3]
      expect(options).toContain(ai.makeSelection(options))

      const oneOption = [1]
      expect(oneOption).toContain(ai.makeSelection(oneOption))
    })
  })

  describe('Invalid input', () => {
    it('Should throw an Error if options is not an array with more than one item', () => {
      expect(() => ai.makeSelection()).toThrow('You must provide an array.')
      expect(() => ai.makeSelection('')).toThrow('You must provide an array.')
    })
  })
})

describe('getDiceValue', () => {
  describe('Valid input', () => {
    it('Should return correct values', () => {
      const faces = 6
      const numOfDice = 2
      const rolls = ai.getDiceValue(faces, numOfDice)

      expect(rolls).toHaveLength(numOfDice)
      expect(rolls.every(roll => roll <= faces && roll >= MIN_FACE_VALUE)).toBeTruthy()
    })
  })

  describe('Invalid input', () => {
    it('Should throw an Error if arguments are omitted', () => {
      expect(() => ai.getDiceValue()).toThrow('Faces must be a number.')
      expect(() => ai.getDiceValue(6)).toThrow('Number of dice must be a number.')
    })

    it('Should throw an Error if faces is not a positive number', () => {
      expect(() => ai.getDiceValue('1', 2)).toThrow('Faces must be a number.')
      expect(() => ai.getDiceValue(0, 2)).toThrow('Faces must be a positive number.')
      expect(() => ai.getDiceValue(-1, 2)).toThrow('Faces must be a positive number.')
    })

    it('Should throw an Error if numOfDice is not a positive number', () => {
      expect(() => ai.getDiceValue(6)).toThrow('Number of dice must be a number.')
      expect(() => ai.getDiceValue(6, '1')).toThrow('Number of dice must be a number.')
      expect(() => ai.getDiceValue(6, 0)).toThrow('Number of dice must be a positive number.')
      expect(() => ai.getDiceValue(6, -1)).toThrow('Number of dice must be a positive number.')
    })
  })
})

describe('playRockPaperScissors', () => {
  it('Should return a valid option', () => {
    const option = ai.playRockPaperScissors()

    expect(VALID_ROCK_PAPER_SCISSORS_VALUES).toContain(option)
  })
})

describe('answerQuizQuestion', () => {
  const options = ['a', 'b', 'c', 'd']
  const correctAnswer = 'a'

  describe('Valid input', () => {
    it('Should return a valid answer with the default skill level', () => {
      const answer = ai.answerQuizQuestion({ options, correctAnswer })

      expect(options).toContain(answer)
    })

    it('Should return a valid answer with the skill level: beginner', () => {
      const answer = ai.answerQuizQuestion({ options, correctAnswer }, 'beginner')

      expect(options).toContain(answer)
    })

    it('Should return a valid answer with the skill level: average', () => {
      const answer = ai.answerQuizQuestion({ options, correctAnswer }, 'average')

      expect(options).toContain(answer)
    })

    it('Should return a valid answer with the skill level: expert', () => {
      const answer = ai.answerQuizQuestion({ options, correctAnswer }, 'expert')

      expect(options).toContain(answer)
    })
  })

  describe('Invalid input', () => {
    it('Should throw an Error if arguments are omitted', () => {
      expect(() => ai.answerQuizQuestion()).toThrow(TypeError)
    })

    it('Should thrown an Error if the correct answer is not part of the options', () => {
      expect(() => ai.answerQuizQuestion({ options, correctAnswer: 'e' })).toThrow('The correct answer must be in the options array.')
    })

    it('Should thrown an Error if the correct answer is not a string', () => {
      expect(() => ai.answerQuizQuestion({ options, correctAnswer: 1 })).toThrow('The correct answer must be a string.')
    })

    it('Should throw an Error if options is not an array with at least one item', () => {
      expect(() => ai.answerQuizQuestion({ correctAnswer })).toThrow('You must provide an array.')
      expect(() => ai.answerQuizQuestion({ options: '', correctAnswer })).toThrow('You must provide an array.')
      expect(() => ai.answerQuizQuestion({ options: [], correctAnswer })).toThrow('The options array must have at least one 1 item.')
    })

    it('Should throw an Error if the skill level is not valid (i.e. not beginner, average or expert)', () => {
      expect(() => ai.answerQuizQuestion({ options, correctAnswer }, 'pro')).toThrow('You must provide a valid skill level such as expert, average or beginner.')
    })
  })
})

describe('shouldGetNewCard', () => {
  describe('Valid input', () => {
    it('Should return the correct value for the risky mode', () => {
      expect(ai.shouldGetNewCard(0, 'risky')).toBeTruthy()
      expect(ai.shouldGetNewCard(18, 'risky')).toBeTruthy()
      expect(ai.shouldGetNewCard(19, 'risky')).toBeFalsy()
    })

    it('Should return the correct value for the safe mode', () => {
      expect(ai.shouldGetNewCard(0, 'safe')).toBeTruthy()
      expect(ai.shouldGetNewCard(16, 'safe')).toBeTruthy()
      expect(ai.shouldGetNewCard(17, 'safe')).toBeFalsy()
      expect(ai.shouldGetNewCard(18)).toBeFalsy()
    })
  })

  describe('Invalid input', () => {
    it('Should throw an Error if currentValue is not a whole number', () => {
      expect(() => ai.shouldGetNewCard('1', 'risky')).toThrow('You must provide a number.')
      expect(() => ai.shouldGetNewCard(-1, 'risky')).toThrow('You must provide a whole number.')
    })

    it('Should throw an Error if the mode is not valid (i.e. not risky or safe)', () => {
      expect(() => ai.shouldGetNewCard(0, 'cool')).toThrow('You must provide a valid mode such as risky or safe.')
    })
  })
})
