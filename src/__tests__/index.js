import FakePerson from '../index.js'
import { menFirstNames, womenFirstNames, lastNames } from '../data/nameList'
import { countries } from '../data/countryList.js'
import { MAX_AGE, MIN_AGE, VALID_GENDERS } from '../data/constants.js'

describe('Fake person', () => {
    const fakePerson = new FakePerson()

    describe('Name', () => {
        it('Should get a full name', () => {
            const fullName = fakePerson.getFullName()

            expect(fullName).not.toBe(undefined)
            expect(fullName.split(' ')).toHaveLength(2)
        })

        it('First name should be part of the full name', () => {
            const firstName = fakePerson.getFirstName()
            const fullName = fakePerson.getFullName()

            expect(fullName.split(' ')).toContain(firstName)            
        })

        it('Last name should be part of the full name', () => {
            const lastName = fakePerson.getLastName()
            const fullName = fakePerson.getFullName()

            expect(fullName.split(' ')).toContain(lastName)   
        })

        it('Should get a valid last name', () => {
            const lastName = fakePerson.getLastName()

            expect(lastNames).toContain(lastName)
        })
    })

    describe('Gender', () => {
        const gender = fakePerson.getGender()

        it('Should get a gender', () => {
            expect(gender).not.toBe(undefined)   
        })

        it('Should get a valid gender', () => {
            expect(VALID_GENDERS).toContain(gender)
        })
    })

    describe('Age', () => {
        const age = fakePerson.getAge()

        it('Should get an age', () => {
            expect(age).not.toBe(undefined)
        })

        it('Should get a valid age', () => {
            expect(age).toBeGreaterThanOrEqual(MIN_AGE)
            expect(age).toBeLessThanOrEqual(MAX_AGE)
        })
    })

    describe('Country', () => {
        const country = fakePerson.getCountry()

        it('Should get a country', () => {
            expect(country).not.toBe(undefined) 
        })

        it('Should get a valid country', () => {
            expect(countries).toContain(country) 
        })
    })

    describe('Password', () => {
        const password = fakePerson.getPassword()

        it('Should get a password', () => {
            expect(password).not.toBe(undefined)
        })

        it('Should get a valid password', () => {
            expect(password).toHaveLength(12)
            expect(typeof password === 'string').toBeTruthy()
        })
    })

    describe('Score', () => {
        const score = fakePerson.getScore()

        describe('Valid input', () => {
            it('Should get a score', () => {
                expect(score).not.toBe(undefined)
            })

            it('Should get a valid score', () => {
                expect(typeof score === 'number').toBeTruthy()
            })

            it('Should be able to set a score', () => {
                fakePerson.setScore(10)
                expect(fakePerson.getScore()).toBe(10)
            })
        })

        describe('Invalid input', () => {
            it('Should throw an Error if score is not a number', () => {
                expect(() => fakePerson.setScore()).toThrow('You must provide a number.')
                expect(() => fakePerson.setScore('10')).toThrow('You must provide a number.')
            })
        })
    })

    describe('Email', () => {
        const email = fakePerson.getEmail()
        
        it('Should get an email', () => {
            expect(email).not.toBe(undefined)
        })

        it('Should get an valid email (based on full name)', () => {
            const firstName = fakePerson.getFirstName().toLowerCase()
            const lastName = fakePerson.getLastName().toLowerCase()

            expect(email.split('.')[0]).toBe(firstName)
            expect(email.split('.')[1]).toBe(lastName + '@example')
            expect(email.split('.')[2]).toBe('com')
        })
    })

    describe('Description', () => {
        const description = fakePerson.getDescription()
        
        it('Should return a valid description', () => {
            const fullName = fakePerson.getFullName()
            const age = fakePerson.getAge().toString()
            const country = fakePerson.getCountry()
            const email = fakePerson.getEmail()

            expect(description).not.toBe(undefined)
            expect(description).toContain(fullName)
            expect(description).toContain(age)
            expect(description).toContain(country)
            expect(description).toContain(email)
        })
    })
})

describe('Fake person with specified gender', () => {
    const fakeFemale = new FakePerson('female')
    const fakeMale = new FakePerson('male')

    describe('Gender', () => {
        describe('Valid input', () => {
            it('Should be a female if specified', () => {
                const gender = fakeFemale.getGender()

                expect(gender).toBe('female')
            })

            it('Should be a male if specified', () => {
                const gender = fakeMale.getGender()

                expect(gender).toBe('male')
            })
        })

        describe('Invalid input', () => {
            it('Should throw an Error if an invalid gender is provided', () => {
                expect(() => new FakePerson('invalid gender')).toThrow('You must provide a valid gender such as male or female.')
            })
        })        
    })

    describe('Name', () => {
        it('Should get a male first name if male', () => {
            const firstName = fakeMale.getFirstName()
    
            expect(menFirstNames).toContain(firstName)
        })
    
        it('Should get a female first name if female', () => {
            const firstName = fakeFemale.getFirstName()
    
            expect(womenFirstNames).toContain(firstName)
        })
    })
})

describe('createMany', () => {
    describe('valid input', () => {
        it('Should create an array with FakePerson', () => {
            const people = FakePerson.createMany(1)
    
            expect(Array.isArray(people)).toBeTruthy()
            expect(people[0] instanceof FakePerson).toBeTruthy()
        })

        it('Should create the right amount of people', () => {
            const people = FakePerson.createMany(5)
    
            expect(people).toHaveLength(5)
        })
    })

    describe('invalid input', () => {
        it('Should throw an Error if num is omitted', () => {
            expect(() => FakePerson.createMany()).toThrow()
        })

        it('Should throw an Error if num is not a positive number', () => {
            expect(() => FakePerson.createMany(0)).toThrow()
            expect(() => FakePerson.createMany(-1)).toThrow()
            expect(() => FakePerson.createMany('1')).toThrow()
        })
    })
})
