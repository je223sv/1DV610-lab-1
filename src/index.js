import {
    menFirstNames,
    womenFirstNames,
    lastNames
} from './data/nameList.js'
import { countries } from './data/countryList.js'
import {
    validatePositiveNumber,
    validateOptions,
    validateFaces,
    validateNumOfDice,
    validateCorrectAnswer,
    validateSkillLevel
} from './validations/index.js'
import { generateRandomNumExclusive } from './utils/generateRandomNumExclusive.js'
import { generateRandomNumInclusive } from './utils/generateRandomNumInclusive.js'
import { generateSpecialCharacters } from './utils/generateSpecialCharacters.js'
import { generateLetters } from './utils/generateLetters.js'

/** Class representing a fake person. */
class FakePerson {
    #fullName
    #age
    #email
    #country
    #gender
    #password

    /**
     * Creates a fake person.
     */
    constructor(gender) {
        // validateGender(gender)

        this.#gender = gender || this.#generateGender()
        this.#fullName = this.#generateFullName()
        this.#age = this.#generateAge()
        this.#email = this.#generateEmail()
        this.#country = this.#generateCountry()
        this.#password = this.#generatePassword()
    }

    /**
     * Create many fake persons at once.
     *
     * @param {number} num - The number of fake persons to create.
     * @returns {Array} - Array of fake persons.
     */
    static createMany = (num) => {
        try {
            validatePositiveNumber(num)

            const people = []

            for (let i = 0; i < num; i++) {
                people.push(new FakePerson())
            }

            return people
        } catch (error) {
            console.error(error.message)
        }
    }

    /**
     * Generate a random gender.
     *
     * @returns {string} - The gender as in male or female.
     */
    #generateGender = () => {
        const genders = ['male', 'female']
        const randomIndex = generateRandomNumExclusive(genders.length)
        const randomGender = genders[randomIndex]
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
        if (!this.#hasGender()) {
            this.#generateGender()
        }

        if (this.isMale()) {
            const randomIndex = generateRandomNumExclusive(menFirstNames.length)
            return menFirstNames[randomIndex]
        } else if (this.isFemale()) {
            const randomIndex = generateRandomNumExclusive(womenFirstNames.length)
            return womenFirstNames[randomIndex]
        }
    }

    /**
     * Check whether the fake person has a gender. 
     *
     * @returns {boolean} - true or false.
     */
    #hasGender = () => {
        return this.#gender ? true : false
    }

    /**
     * Check whether the fake person has a full name. 
     *
     * @returns {boolean} - true or false.
     */
    #hasFullName = () => {
        return this.#fullName ? true : false
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
     * Generate a random last name based on the gender of the fake person.
     *
     * @returns {string} - A last name.
     */
    #generateLastName = () => {
        const randomIndex = generateRandomNumExclusive(lastNames.length)
        return lastNames[randomIndex]
    }

    /**
     * Generate a random age.
     *
     * @returns {number} - An age.
     */
    #generateAge = () => {
        const maxAge = 99
        const minAge = 18
        return generateRandomNumInclusive(maxAge, minAge)
    }

    /**
     * Generate a random email based on the first and last name of the fake person.
     *
     * @returns {string} - An email.
     */
    #generateEmail = () => {
        if (!this.#hasFullName()) {
            this.#generateFullName()
        }

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
        return countries[randomIndex]
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
    getGender() {
        return this.#gender
    }

    /**
     * Get the full name of the fake person.
     *
     * @returns {string} - A full name.
     */
    getFullName() {
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
    getAge() {
        return this.#age
    }

    /**
     * Get the email of the fake person.
     *
     * @returns {string} - An email.
     */
    getEmail() {
        return this.#email
    }

    /**
     * Get the country of the fake person.
     *
     * @returns {string} - A country.
     */
    getCountry() {
        return this.#country
    }

    /**
     * Get the password of the fake person.
     *
     * @returns {string} - A password.
     */
    getPassword() {
        return this.#password
    }

    /**
     * Get a description of the fake person.
     *
     * @returns {string} - A description.
     */
    getDescription = () => {
        return `Hello, my name is ${this.#fullName || 'anon'} and I am ${this.#age || '0'} years old. I live in ${this.#country || 'space'} and you can contact me at ${this.#email || 'anon@example.com'}.`
    }

    /**
     * Randomly selects an option from an array of options.
     *
     * @param {Array} options - An array of options.
     * @returns {*} - The randomly selected value.
     */
    makeSelection = (options) => {
        try {
            validateOptions(options)

            const randomIndex = generateRandomNumExclusive(options.length)
            const selection = options[randomIndex]
            return selection
        } catch (error) {
            console.error(error.message)
        }
    }

    /**
     * Roll one or many dice with X faces.
     *
     * @param {number} sides - The number of faces the dice has.
     * @param {number} numOfDices - The number of dice that should be rolled.
     * @returns {Array} - Array containing the result from the dice roll(s).
     */
    rollDice = (faces, numOfDice) => {
        try {
            validateFaces(faces)
            validateNumOfDice(numOfDice)

            const rolls = []

            for (let i = 0; i < numOfDice; i++) {
                const roll = generateRandomNumInclusive(faces, 1)
                rolls.push(roll)
            }

            return rolls
        } catch (error) {
            console.error(error.message)
        }
    }

    /**
     * Play the rock paper scissor game.
     *
     * @returns {string} - Rock, paper or scissor.
     */
    playRockPaperScissor = () => {
        const options = ['rock', 'paper', 'scissor']
        const randomIndex = generateRandomNumExclusive(options.length)
        return options[randomIndex]
    }

    /**
     * Attempt to answer a quiz question correctly based on the skill level.
     *
     * @param {object} question - An object containing the options as an array and the correct answer as a string.
     * @param {string} skillLevel - Determines how likely the fake person is to answer correctly.
     * @returns {string} - The answer given by the fake person.
     */
    answerQuizQuestion = ({options, correctAnswer}, skillLevel = 'average') => {
        try {
            validateOptions(options)
            validateCorrectAnswer(correctAnswer, options)
            validateSkillLevel(skillLevel)

            if (this.#answeredCorrectly(skillLevel)) {
                return correctAnswer
            } else {
                return this.#getWrongAnswer(options, correctAnswer)
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    /**
     * Determines whether the fake person will answer correctly based on its skill level. For example,
     * a beginner is 6/10 likely to answer correctly while an expert is 8/10 likely to answer correctly.
     * 
     * @param {string} skillLevel - Determines how likely the fake person is to answer correctly.
     * @returns {boolean} - Whether the fake person answered correctly or not.
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
        const indexOfCorrectAnswer = options.indexOf(correctAnswer)

        // Remove correct answer from the options.
        optionsCopy.splice(indexOfCorrectAnswer, 1)

        // Return any of the remaining wrong answers.
        return optionsCopy[Math.floor(Math.random() * (optionsCopy.length))]   
    }
}

export default FakePerson