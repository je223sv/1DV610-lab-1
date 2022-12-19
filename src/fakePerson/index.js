import { generateRandomNumExclusive } from '../utils/generateRandomNumExclusive.js'
import { generateRandomNumInclusive } from '../utils/generateRandomNumInclusive.js'
import { generateSpecialCharacters } from '../utils/generateSpecialCharacters.js'
import { generateLetters } from '../utils/generateLetters.js'
import SimpleAi from '../simpleAi/index.js'
import { MAX_AGE, MIN_AGE, VALID_GENDERS } from '../data/constants.js'
import { countries } from '../data/countries.js'
import {
  menFirstNames,
  womenFirstNames,
  lastNames
} from '../data/names.js'
import {
  validatePositiveNumber,
  validateGender,
  validateNumber
} from '../validations/index.js'

/** Class representing a fake person. */
export default class FakePerson {
  #MAX_AGE = MAX_AGE
  #MIN_AGE = MIN_AGE
  #fullName
  #age
  #email
  #country
  #gender
  #password
  #score
  #ai

  /**
   * Creates a fake person.
   *
   * @param {('male'|'female')} gender - The gender of the fake person.
   */
  constructor (gender) {
    if (gender) {
      validateGender(gender)
    }

    this.#gender = gender || this.#generateGender()
    this.#fullName = this.#generateFullName()
    this.#age = this.#generateAge()
    this.#email = this.#generateEmail()
    this.#country = this.#generateCountry()
    this.#password = this.#generatePassword()
    this.#score = 0
    this.#ai = new SimpleAi()
  }

  /**
   * Create many fake persons at once.
   *
   * @param {number} num - The number of fake persons to create.
   * @returns {Array} - Array of fake persons.
   */
  static createMany = (num) => {
    validatePositiveNumber(num)

    const people = []

    for (let i = 0; i < num; i++) {
      people.push(new FakePerson())
    }

    return people
  }

  /**
   * Generate a random gender.
   *
   * @returns {string} - The gender as in male or female.
   */
  #generateGender = () => {
    const randomIndex = generateRandomNumExclusive(VALID_GENDERS.length)
    const randomGender = VALID_GENDERS[randomIndex]
    return randomGender
  }

  /**
   * Generate a random full name.
   *
   * @returns {string} - The full name including a first and last name.
   */
  #generateFullName = () => {
    const firstName = this.#generateFirstName()
    const lastName = this.#generateLastName()
    return firstName + ' ' + lastName
  }

  /**
   * Generate a random first name based on the gender of the fake person.
   *
   * @returns {string} - A male or a female first name.
   */
  #generateFirstName = () => {
    if (this.isMale()) {
      const randomIndex = generateRandomNumExclusive(menFirstNames.length)
      return menFirstNames[randomIndex]
    } else if (this.isFemale()) {
      const randomIndex = generateRandomNumExclusive(womenFirstNames.length)
      return womenFirstNames[randomIndex]
    }
  }

  /**
   * Check whether the fake person is a male.
   *
   * @returns {boolean} - true or false.
   */
  isMale = () => {
    return this.#gender === 'male'
  }

  /**
   * Check whether the fake person is a female.
   *
   * @returns {boolean} - true or false.
   */
  isFemale = () => {
    return this.#gender === 'female'
  }

  /**
   * Generate a random last name.
   *
   * @returns {string} - A last name.
   */
  #generateLastName = () => {
    const randomIndex = generateRandomNumExclusive(lastNames.length)
    const lastName = lastNames[randomIndex]
    return lastName
  }

  /**
   * Generate a random age.
   *
   * @returns {number} - A number between MAX_AGE and MIN_AGE.
   */
  #generateAge = () => {
    const age = generateRandomNumInclusive(this.#MAX_AGE, this.#MIN_AGE)
    return age
  }

  /**
   * Generate a random email based on the first and last name of the fake person.
   *
   * @returns {string} - An email.
   */
  #generateEmail = () => {
    const email = this.getFirstName() + '.' + this.getLastName() + '@example.com'
    return email.toLowerCase()
  }

  /**
   * Generate a random country.
   *
   * @returns {string} - A country.
   */
  #generateCountry = () => {
    const randomIndex = generateRandomNumExclusive(countries.length)
    const country = countries[randomIndex]
    return country
  }

  /**
   * Generate a random, 12 word password including special characters, digits, as well as
   * upper and lowercased letters.
   *
   * @returns {string} - A password.
   */
  #generatePassword = () => {
    let password = ''

    // Adding 4 different types of characters, 3 times, resulting in a random 12 word password.
    for (let i = 0; i < 3; i++) {
      password += generateSpecialCharacters(1)
      password += generateRandomNumInclusive(9)
      password += generateLetters(1).toUpperCase()
      password += generateLetters(1)
    }

    return password
  }

  /**
   * Get the gender of the fake person.
   *
   * @returns {string} - A gender.
   */
  getGender = () => {
    return this.#gender
  }

  /**
   * Get the full name of the fake person.
   *
   * @returns {string} - A full name.
   */
  getFullName = () => {
    return this.#fullName
  }

  /**
   * Get the first name of the fake person.
   *
   * @returns {string} - A first name.
   */
  getFirstName = () => {
    return this.#fullName.split(' ')[0]
  }

  /**
   * Get the last name of the fake person.
   *
   * @returns {string} - A last name.
   */
  getLastName = () => {
    return this.#fullName.split(' ')[1]
  }

  /**
   * Get the age of the fake person.
   *
   * @returns {number} - An age.
   */
  getAge = () => {
    return this.#age
  }

  /**
   * Get the email of the fake person.
   *
   * @returns {string} - An email.
   */
  getEmail = () => {
    return this.#email
  }

  /**
   * Get the country of the fake person.
   *
   * @returns {string} - A country.
   */
  getCountry = () => {
    return this.#country
  }

  /**
   * Get the password of the fake person.
   *
   * @returns {string} - A password.
   */
  getPassword = () => {
    return this.#password
  }

  /**
   * Get the score of the fake person.
   *
   * @returns {number} - A score.
   */
  getScore = () => {
    return this.#score
  }

  /**
   * Get a description of the fake person.
   *
   * @returns {string} - A description.
   */
  getDescription = () => {
    return `Hello, my name is ${this.#fullName} and I am ${this.#age} years old. I live in ${this.#country} and you can contact me at ${this.#email}.`
  }

  /**
   * Set the score of the fake person.
   *
   * @param {number} score - The score.
   */
  setScore = (score) => {
    validateNumber(score)

    this.#score = score
  }

  /**
   * Randomly selects an option from an array of options.
   *
   * @param {Array} options - An array of options.
   * @returns {*} - The randomly selected value.
   */
  makeSelection = (options) => {
    return this.#ai.makeSelection(options)
  }

  /**
   * Roll one or many dice with X faces.
   *
   * @param {number} faces - The number of faces the dice has.
   * @param {number} numOfDice - The number of dice that should be rolled.
   * @returns {Array} - Array containing the result from the dice roll(s).
   */
  getDiceValue = (faces, numOfDice) => {
    return this.#ai.getDiceValue(faces, numOfDice)
  }

  /**
   * Play the Rock, Paper, Scissors game.
   *
   * @returns {string} - Rock, paper or scissors.
   */
  playRockPaperScissors = () => {
    return this.#ai.playRockPaperScissors()
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
  answerQuizQuestion = ({ options, correctAnswer }, skillLevel) => {
    return this.#ai.answerQuizQuestion({ options, correctAnswer }, skillLevel)
  }

  /**
   * Whether the fake person should be "hit" with a new card in a game of
   * Black Jack.
   *
   * @param {number} currentScore - The current score of the fake person.
   * @param {('risky'|'safe')} [mode=safe] - Determines how likely the the fake person is to continue.
   * @returns {boolean} - true or false.
   */
  shouldGetNewCard = (currentScore, mode) => {
    return this.#ai.shouldGetNewCard(currentScore, mode)
  }
}
