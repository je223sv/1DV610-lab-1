import {
  validateFaces,
  validateNumOfDice,
  validateCorrectAnswer,
  validateSkillLevel,
  validateWholeNumber,
  validateMode,
  validateOptions
} from '../validations/index.js'
import { generateRandomNumExclusive } from '../utils/generateRandomNumExclusive.js'
import { generateRandomNumInclusive } from '../utils/generateRandomNumInclusive.js'
import { MIN_FACE_VALUE, VALID_ROCK_PAPER_SCISSORS_VALUES } from '../data/constants.js'

/** Class representing a simple AI */
export default class SimpleAi {
  /**
   * Randomly selects an option from an array of options.
   *
   * @param {Array} options - An array of options.
   * @returns {*} - A randomly selected value.
   */
  makeSelection = (options) => {
    validateOptions(options)

    if (options.length === 1) {
      return options[0]
    }

    const randomIndex = generateRandomNumExclusive(options.length)
    const selection = options[randomIndex]
    return selection
  }

  /**
   * Roll one or many dice with X faces.
   *
   * @param {number} faces - The number of faces the dice has.
   * @param {number} numOfDice - The number of dice that should be rolled.
   * @returns {Array} - Array containing the result from the dice roll(s).
   */
  rollDice = (faces, numOfDice) => {
    validateFaces(faces)
    validateNumOfDice(numOfDice)

    const rolls = []

    for (let i = 0; i < numOfDice; i++) {
      const roll = generateRandomNumInclusive(faces, MIN_FACE_VALUE)
      rolls.push(roll)
    }

    return rolls
  }

  /**
   * Play the Rock, Paper, Scissors game.
   *
   * @returns {string} - Rock, paper or scissors.
   */
  playRockPaperScissors = () => {
    const randomIndex = generateRandomNumExclusive(VALID_ROCK_PAPER_SCISSORS_VALUES.length)
    return VALID_ROCK_PAPER_SCISSORS_VALUES[randomIndex]
  }

  /**
   * Attempt to answer a quiz question correctly based on the skill level.
   *
   * @param {object} question - An object containing the options as an array and the correct answer as a string.
   * @param {Array} question.options - The options to choose from.
   * @param {string} question.correctAnswer - The element from the options array that is correct.
   * @param {('expert'|'average'|'beginner')} [skillLevel=average] - Determines how likely the fake person is to answer correctly.
   * @returns {string} - The answer given by the fake person.
   */
  answerQuizQuestion = ({ options, correctAnswer }, skillLevel = 'average') => {
    validateOptions(options)
    validateCorrectAnswer(correctAnswer, options)
    validateSkillLevel(skillLevel)

    if (this.#answeredCorrectly(skillLevel)) {
      return correctAnswer
    } else {
      return this.#getWrongAnswer(options, correctAnswer)
    }
  }

  /**
   * Determines whether the AI will answer correctly based on its skill level. For example,
   * a beginner is 6/10 likely to answer correctly while an expert is 8/10 likely to answer correctly.
   *
   * @param {string} skillLevel - Determines how likely the AI is to answer correctly.
   * @returns {boolean} - Whether the AI answered correctly or not.
   */
  #answeredCorrectly = (skillLevel) => {
    const skillLevels = { expert: 8, average: 7, beginner: 6 }
    const randomNumber = generateRandomNumInclusive(10, 1)
    return randomNumber <= skillLevels[skillLevel]
  }

  /**
   * Get the wrong answer.
   *
   * @param {Array} options - The options to choose from.
   * @param {string} correctAnswer - The correct answer.
   * @returns {string} - A wrong answer.
   */
  #getWrongAnswer = (options, correctAnswer) => {
    const optionsCopy = [...options]
    const indexOfCorrectAnswer = optionsCopy.indexOf(correctAnswer)

    // Remove correct answer from the options.
    optionsCopy.splice(indexOfCorrectAnswer, 1)

    // Return any of the remaining wrong answers.
    return optionsCopy[generateRandomNumExclusive(optionsCopy.length)]
  }

  /**
   * Whether the fake person should be "hit" with a new card in a game of
   * Black Jack.
   *
   * @param {number} currentScore - The current score of the fake person.
   * @param {('risky'|'safe')} [mode=safe] - Determines how likely the the fake person is to continue.
   * @returns {boolean} - true or false.
   */
  shouldHitMe = (currentScore, mode = 'safe') => {
    validateWholeNumber(currentScore)
    validateMode(mode)

    if (currentScore <= 18 && mode === 'risky') {
      return true
    } else if (currentScore <= 16 && mode === 'safe') {
      return true
    } else {
      return false
    }
  }
}
