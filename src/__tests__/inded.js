/**
 * The test file.
 */

import FakePerson from '../index.js'
import { menFirstNames, womenFirstNames, lastNames } from '../data/nameList.js'
import { countries } from '../data/countryList.js'
import { specialCharacters, letters } from '../data/characterList.js'

// Create completely random person
const fakePerson = new FakePerson()
// Create a man
const fakeMale = new FakePerson('male')
// Create a female
const fakeFemale = new FakePerson('female')
// Create people


describe('Creating fake people', () => {
    it ('Should create correct amount of people', () => {
        const fakePeople = FakePerson.createMany(10)
        expect(fakePeople).toHaveLength(10)
    })
})

describe('Creating a fake person', () => {
    it('Should get a gender automatically', () => {
        const genders = ['male', 'female']
        const gender = fakePerson.getGender()
        expect(genders.includes(gender)).toBeTruthy()
    })

    it('Should get specified gender', () => {
        expect(fakeMale.getGender()).toBe('male')
        expect(fakeFemale.getGender()).toBe('female')
    })

    it('Should get a full name automatically', () => {
        const fullName = fakePerson.getFullName()
        expect(fullName.split(' ')).toHaveLength(2)
    })

    it('Should get a first name that is part of the full name', () => {
        const fullName = fakePerson.getFullName()
        const firstName = fakePerson.getFirstName()
        expect(fullName.split(' ')[0]).toBe(firstName)
    })

    it('Should get a Last name that is part of the full name', () => {
        const fullName = fakePerson.getFullName()
        const lastName = fakePerson.getLastName()
        expect(fullName.split(' ')[1]).toBe(lastName)
        expect(lastNames.includes(lastName)).toBeTruthy()
    })

    it('Should get a male name if male', () => {
        const name = fakeMale.getFirstName()
        expect(menFirstNames.includes(name)).toBeTruthy()
    })

    it('Should get a female name if female', () => {
        const name = fakeFemale.getFirstName()
        expect(womenFirstNames.includes(name)).toBeTruthy()
    })

    it('Should get an age between 18 and 99 automatically', () => {
        const age = fakePerson.getAge()
        expect(age).toBeGreaterThanOrEqual(18)
        expect(age).toBeLessThanOrEqual(99)
    })

    it('Should get an email based on the full name automatically', () => {
        const email = fakePerson.getEmail()
        const firstName = fakePerson.getFirstName().toLowerCase()
        const lastName = fakePerson.getLastName().toLowerCase()

        expect(email.split('.')[0]).toBe(firstName)
        expect(email.split('.')[1]).toBe(lastName + '@example')
        expect(email.split('.')[2]).toBe('com')
    })

    it('Should get a country automatically', () => {
        const country = fakePerson.getCountry()
        expect(countries.includes(country)).toBeTruthy()
    })

    it('Should get a 12 word password automatically', () => {
        const password = fakePerson.getPassword()
        expect(password).toHaveLength(12)
    })

    it('Should get a description', () => {
        const description = fakePerson.getDescription()
        const fullName = fakePerson.getFullName()
        const age = fakePerson.getAge().toString()
        const country = fakePerson.getCountry()
        const email = fakePerson.getEmail()

        expect(description.includes(fullName)).toBeTruthy()
        expect(description.includes(age)).toBeTruthy()
        expect(description.includes(country)).toBeTruthy()
        expect(description.includes(email + '.')).toBeTruthy()
    })
})

describe('Public API', () => {
    it('Should make a selection', () => {
        const options = ['a', 'b', 'c', 'd']
        const selection = fakePerson.makeSelection(options)
        expect(options).toContain(selection)
    })

    it('Should roll dice', () => {
        const roll = fakePerson.rollDice(6, 1)
        expect(roll[0] > 0 && roll[0] <= 6).toBeTruthy()

        const rolls = fakePerson.rollDice(6, 2)
        expect(rolls[0] > 0 && rolls[0] <= 6).toBeTruthy()
        expect(rolls[1] > 0 && rolls[1] <= 6).toBeTruthy()
    })

    it('Should play rock paper scissor', () => {
        const result = fakePerson.playRockPaperScissor()
        const possibleResults = ['rock', 'paper', 'scissor']
        expect(possibleResults).toContain(result)
    })

    it('Should answer a quiz question', () => {
        const question = {
            text: 'What is the capital of Stockholm?',
            options: ['Oslo', 'Copenhagen', 'Stockholm', 'Helsinki'],
            correctAnswer: 'Stockholm'
        }
        const {options, correctAnswer} = question

        const beginnerAnswer = fakePerson.answerQuizQuestion({options, correctAnswer}, 'beginner')
        const averageAnswer = fakePerson.answerQuizQuestion({options, correctAnswer}, 'average')
        const expertAnswer = fakePerson.answerQuizQuestion({options, correctAnswer}, 'expert')

        expect(options).toContain(beginnerAnswer)
        expect(options).toContain(averageAnswer)
        expect(options).toContain(expertAnswer)
    })
})
