import {
    validateString,
    validateNumber,
    validatePositiveNumber,
    validateWholeNumber,
    validateArray,
    validateOptions,
    validateFaces,
    validateNumOfDice,
    validateCorrectAnswer,
    validateGender,
    validateMode
} from '../index.js' 

describe('Validating strings', () => {
    it('Should validate strings', () => {
        expect(() => validateString('test')).not.toThrow()
        expect(() => validateString()).toThrow('You must provide a string.')
        expect(() => validateString(42)).toThrow('You must provide a string.')
    })
    
    it('Should validate gender', () => {
        expect(() => validateGender('male')).not.toThrow()
        expect(() => validateGender('female')).not.toThrow()
        expect(() => validateGender('man')).toThrow('You must provide a valid gender such as male or female.')
        expect(() => validateGender()).toThrow('Gender must be a string.')
        expect(() => validateGender(42)).toThrow('Gender must be a string.')
    })

    it('Should validate mode', () => {
        expect(() => validateMode('risky')).not.toThrow()
        expect(() => validateMode('safe')).not.toThrow()
        expect(() => validateMode('allin')).toThrow('You must provide a valid mode such as risky or safe.')
        expect(() => validateMode()).toThrow('Mode must be a string.')
        expect(() => validateMode(42)).toThrow('Mode must be a string.')
    })
})

describe('Validating numbers', () => {
    it('Should validate number', () => {
        expect(() => validateNumber(42)).not.toThrow()
        expect(() => validateNumber(0)).not.toThrow()
        expect(() => validateNumber(-42)).not.toThrow()
        expect(() => validateNumber()).toThrow('You must provide a number.')
        expect(() => validateNumber('NaN')).toThrow('You must provide a number.')
    })

    it('Should validate positive number', () => {
        expect(() => validatePositiveNumber(1)).not.toThrow()
        expect(() => validatePositiveNumber(0)).toThrow('You must provide a positive number.')
        expect(() => validatePositiveNumber(-1)).toThrow('You must provide a positive number.')
        expect(() => validatePositiveNumber()).toThrow('You must provide a number.')
        expect(() => validatePositiveNumber('NaN')).toThrow('You must provide a number.')
    })

    it('Should validate whole number', () => {
        expect(() => validateWholeNumber(1)).not.toThrow()
        expect(() => validateWholeNumber(0)).not.toThrow()
        expect(() => validateWholeNumber(-1)).toThrow('You must provide a whole number.')
        expect(() => validateWholeNumber()).toThrow('You must provide a number.')
        expect(() => validateWholeNumber('NaN')).toThrow('You must provide a number.')
    })

    it('Should validate faces', () => {
        expect(() => validateFaces(1)).not.toThrow()
        expect(() => validateFaces(0)).toThrow('Faces must be a positive number.')
        expect(() => validateFaces(-1)).toThrow('Faces must be a positive number.')
        expect(() => validateFaces()).toThrow('Faces must be a number.')
        expect(() => validateFaces('NaN')).toThrow('Faces must be a number.')
    })

    it('should validate number of dice', () => {
        expect(() => validateNumOfDice(1)).not.toThrow()
        expect(() => validateNumOfDice(0)).toThrow('Number of dice must be a positive number.')
        expect(() => validateNumOfDice(-1)).toThrow('Number of dice must be a positive number.')
        expect(() => validateNumOfDice()).toThrow('Number of dice must be a number.')
        expect(() => validateNumOfDice('NaN')).toThrow('Number of dice must be a number.')
    })
})

describe('Validating arrays', () => {
    it('Should validate array', () => {
        expect(() => validateArray([1, 2, 3])).not.toThrow()
        expect(() => validateArray([])).not.toThrow()
        expect(() => validateArray()).toThrow('You must provide an array.')
        expect(() => validateArray('test')).toThrow('You must provide an array.')
    })

    it('Should validate options array', () => {
        expect(() => validateOptions([1, 2, 3])).not.toThrow()
        expect(() => validateOptions([])).toThrow('The options array must have more than 1 item.')
        expect(() => validateOptions()).toThrow('You must provide an array.')
        expect(() => validateOptions('test')).toThrow('You must provide an array.')
    })
})

describe('Validating correct answer', () => {
    const question = {
        text: 'What is the capital of Stockholm?',
        options: ['Oslo', 'Copenhagen', 'Stockholm', 'Helsinki'],
        correctAnswer: 'Stockholm'
    }
    const {options, correctAnswer} = question

    it('should validate the correct answer', () => {
        expect(() => validateCorrectAnswer(correctAnswer, options)).not.toThrow()
    })

    it('Should throw an Error if correct answer is not a string', () => {
        expect(() => validateCorrectAnswer()).toThrow('The correct answer must be a string.')
        expect(() => validateCorrectAnswer(42)).toThrow('The correct answer must be a string.')
    })

    it('Should throw an Error if options is not an array with more than 1 item', () => {
        expect(() => validateCorrectAnswer(correctAnswer)).toThrow('You must provide an array.')
        expect(() => validateCorrectAnswer(correctAnswer, 'test')).toThrow('You must provide an array.')
        expect(() => validateCorrectAnswer(correctAnswer, [])).toThrow('The options array must have more than 1 item.')
    })
})
