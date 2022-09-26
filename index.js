import { menFirstNames, womenFirstNames, lastNames } from './nameList.js'
import { countries } from './countryList.js'
import { letters, specialCharacters } from './characterList.js'


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
    constructor () {
        this.#gender = this.#generateGender()
        this.#fullName = this.#generateFullName()
        this.#age = this.#generateAge()
        this.#email = this.#generateEmail()
        this.#country = this.#generateCountry()
        this.#password = this.#generatePassword()
    }

    /**
     * Create one or many fake persons at once.
     * @param {number} num - The amount of fake persons to create.
     * @returns {Array} - Array of fake persons.
     */
    static createMany = (num) => {
        const people = []

        for (let i = 0; i < num; i++) {
            const person = new FakePerson()
            people.push(person)
        }

        return people
    }

    /**
     * Generate a random gender.
     * @returns {string} - The gender as in male or female.
     */
     #generateGender = () => {
        const genders = ['male', 'female'] 
        const randomGender = genders[Math.floor(Math.random() * 2)]
        return randomGender
    }

    /**
     * Generate a random full name.
     * @returns {string} - The full name including a first and last name.
     */
    #generateFullName = () => {
        const firstName = this.#generateFirstName()
        const lastName = this.#generateLastName()
        return firstName + ' ' + lastName
    }

    /**
     * Generate a random first name based on the gender of the fake person.
     * @returns {string} - A male or a female first name.
     */
    #generateFirstName = () => {
        // catch if no gender

        if (this.#gender === 'male') {
            return menFirstNames[Math.floor(Math.random() * (menFirstNames.length))]
        } else if (this.#gender === 'female') {
            return womenFirstNames[Math.floor(Math.random() * (womenFirstNames.length))]
        }
    }

    /**
     * Generate a random last name based on the gender of the fake person.
     * @returns {string} - A last name.
     */
    #generateLastName = () => {
        return lastNames[Math.floor(Math.random() * lastNames.length)]
    }

    /**
     * Generate a random age.
     * @returns {number} - An age.
     */
    #generateAge = () => {
        return Math.floor(Math.random() * 90 + 18)
    }

    /**
     * Generate a random email based on the first and last name of the fake person.
     * @returns {string} - An email.
     */
    #generateEmail = () => {
        const email = this.getFirstName() + '.' + this.getLastName() + '@example.com'
        return email.toLowerCase()
    }

    /**
     * Generate a random country.
     * @returns {string} - A country.
     */
    #generateCountry = () => {
        return countries[Math.floor(Math.random() * (countries.length))]
    }

    /**
     * Generate a random and unique 12 word password including special characters, digits, as well as upper and lower
     * letters.
     * @returns {string} - A password.
     */
    #generatePassword = () => {
        let password = ''

        // Adding 4 different types of characters 3 times resulting in a unique 12 word password.
        for (let i = 0; i < 3; i++) {
            password += specialCharacters[Math.floor(Math.random() * (specialCharacters.length))]
            password += Math.floor(Math.random() * 10 + 1)
            password += letters[Math.floor(Math.random() * (letters.length))].toUpperCase()
            password += letters[Math.floor(Math.random() * (letters.length))]
        }

        return password
    }

    /**
     * 
     * @returns {string} - A gender. 
     */
    getGender () {
        return this.#gender
    }

    /**
     * 
     * @returns {string} - A full name.
     */
    getFullName () {
        return this.#fullName
    }

    /**
     * 
     * @returns {string} - A first name.
     */
    getFirstName = () => {
        return this.#fullName.split(' ')[0]
    }

    /**
     * 
     * @returns {string} - A last name. 
     */
    getLastName = () => {
        return this.#fullName.split(' ')[1]
    }

    /**
     * 
     * @returns {number} - An age.
     */
    getAge () {
        return this.#age
    }

    /**
     * 
     * @returns {string} - An email.
     */
    getEmail () {
        return this.#email
    }

    /**
     * 
     * @returns {string} - A country.
     */
    getCountry () {
        return this.#country
    }

    /**
     * 
     * @returns {string} - A password.
     */
    getPassword () {
        return this.#password
    }

    /**
     * 
     * @returns {string} - An description.
     */
    getDescription = () => {
        return `Hello, my name is ${this.#fullName} and I am ${this.#age} years old. I live in ${this.#country} and you can contact me at ${this.#email}.`
    }

    /**
     * Randomly selects an option from an array of options.
     * @param {Array} options - An array of options.
     * @returns {string|number} - The randomly selected value.
     */
    randomSelection = (options) => {
        const selection = options[Math.floor(Math.random() * (options.length))]
        return selection
    }

    /**
     * Roll one or many dice with X faces.
     * @param {*} sides - The number of faces the dice has.
     * @param {*} numOfDices - The number of dice that should be rolled.
     * @returns {Array} - Array containing the result from the dice roll(s).
     */
    rollDice = (faces, numOfDices) => {
        // error handling => can't be null or minus.
        const rolls = []

        for (let i = 0; i < numOfDices; i++) {
             const roll = Math.floor((Math.random() * faces) + 1)
             rolls.push(roll)
        }

        return rolls
    }

    /**
     * Play the rock paper scissor game.
     * @returns {string} - Rock, paper or scissor.
     */
    playRockPaperScissor = () => {
        const options = ['rock', 'paper', 'scissor']
        return options[Math.floor(Math.random() * (options.length))]
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
        const randNum = Math.floor((Math.random() * 10) + 1)
        return randNum <= skillLevels[skillLevel]
    }

    /**
     * Attempt to answer a quiz question correctly based on the skill level.
     * @param {object} question - An object containing the options as an array and the correct answer as a string.
     * @param {string} skillLevel - Determines how likely the fake person is to answer correctly.
     * @returns {string} - The answer given by the fake person.
     */
    answerQuizQuestion = (question, skillLevel = 'average') => {
        // Error handling; unknown skillLevel.
        const { options, correctAnswer } = question

        if (this.#answeredCorrectly(skillLevel)) {
            return correctAnswer
        } else {
            const indexOfCorrectAnswer = options.indexOf(correctAnswer)
            options.splice(indexOfCorrectAnswer, 1) // Remove correct answer from the options.
            return options[Math.floor(Math.random() * (options.length))] // Return any of the remaining wrong answers.
        }
    }
}






const computer = new FakePerson()
console.log("gender: ", computer.getGender())
console.log("full name: ", computer.getFullName())
console.log("age: ", computer.getAge())
console.log("email: ", computer.getEmail())
console.log("country: ", computer.getCountry())
console.log("password: ", computer.getPassword())
console.log("description: ", computer.getDescription())
console.log("guessed letter: ", computer.guess(letters))
console.log("roll dice: ", computer.rollDice(6, 2))
console.log("Rock paper scissor: ", computer.playRockPaperScissor())
const question = {
    text: 'What is the capital of Sweden?',
    options: ['oslo', 'helsinki', 'stockholm', 'copenhagen'],
    correctAnswer: 'stockholm'
}
console.log("quiz answer: ", computer.answerQuizQuestion(question, 'beginner'))

// const people = FakePerson.createMany(10)
// console.log(people)
// console.log(people[0])