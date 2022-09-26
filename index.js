import { menFirstNames, womenFirstNames, lastNames } from './nameList.js'
import { countries } from './countryList.js'
import { letters, specialCharacters } from './characterList.js'


class FakePerson {
    #fullName
    #age
    #email
    #country
    #gender
    #password 

    constructor () {
        this.#gender = this.#generateGender()
        this.#fullName = this.#generateFullName()
        this.#age = this.#generateAge()
        this.#email = this.#generateEmail()
        this.#country = this.#generateCountry()
        this.#password = this.#generatePassword()
    }

     #generateGender = () => {
        const genders = ['male', 'female'] 
        const randomGender = genders[Math.floor(Math.random() * 2)]
        return randomGender
    }

    #generateFullName = () => {
        const firstName = this.#generateFirstName()
        const lastName = this.#generateLastName()
        return firstName + ' ' + lastName
    }

    #generateFirstName = () => {
        // catch if no gender

        if (this.#gender === 'male') {
            return menFirstNames[Math.floor(Math.random() * (menFirstNames.length))]
        } else if (this.#gender === 'female') {
            return womenFirstNames[Math.floor(Math.random() * (womenFirstNames.length))]
        }
    }

    #generateLastName = () => {
        return lastNames[Math.floor(Math.random() * lastNames.length)]
    }

    #generateAge = () => {
        return Math.floor(Math.random() * 90 + 18)
    }


    #generateEmail = () => {
        const email = this.getFirstName() + '.' + this.getLastName() + '@example.com'
        return email.toLowerCase()
    }

    #generateCountry = () => {
        return countries[Math.floor(Math.random() * (countries.length))]
    }

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

    getGender () {
        return this.#gender
    }

    getFullName () {
        return this.#fullName
    }

    getFirstName = () => {
        return this.#fullName.split(' ')[0]
    }

    getLastName = () => {
        return this.#fullName.split(' ')[1]
    }

    getAge () {
        return this.#age
    }

    getEmail () {
        return this.#email
    }

    getCountry () {
        return this.#country
    }

    getPassword () {
        return this.#password
    }

    getDescription = () => {
        return `Hello, my name is ${this.#fullName} and I am ${this.#age} years old. I live in ${this.#country} and you can contact me at ${this.#email}.`
    }

    guess = (options) => {
        const selection = options[Math.floor(Math.random() * (options.length))]
        return selection
    }

    rollDice = (sides, numOfDices) => {
        const rolls = []

        for (let i = 0; i < numOfDices; i++) {
             const roll = Math.floor((Math.random() * sides) + 1)
             rolls.push(roll)
        }

        return rolls
    }

    playRockPaperScissor = () => {
        const options = ['rock', 'paper', 'scissor']
        return options[Math.floor(Math.random() * (options.length))]
    }

    #answeredCorrectly = (skillLevel) => {
        // Map skill level to an integer.
        const skillLevels = { expert: 8, average: 7, beginner: 6 }

        const randNum = Math.floor((Math.random() * 10) + 1)
        return randNum <= skillLevel
    }

    answerQuizQuestion = (question, skillLevel = 'average') => {
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
