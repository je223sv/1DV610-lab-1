
class FakePerson {
    #fullName
    #age
    #email
    #country
    #gender
    #password 

    constructor () {
        this.#gender = 'male'
        this.#fullName = 'john doe'
        this.#age = 44
        this.#email = 'john.doe@example.com'
        this.#country = 'Sweden'
        this.#password = 'mysupersecretpassword123'
    }

    getGender () {
        return this.#gender
    }

    getFullName () {
        return this.#fullName
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
