import { menFirstNames, womenFirstNames, lastNames } from "./nameList.js"


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
        this.#country = 'Sweden'
        this.#password = 'mysupersecretpassword123'
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
}






const computer = new FakePerson()
console.log("gender: ", computer.getGender())
console.log("full name: ", computer.getFullName())
console.log("age: ", computer.getAge())
console.log("email: ", computer.getEmail())
console.log("country: ", computer.getCountry())
console.log("password: ", computer.getPassword())
