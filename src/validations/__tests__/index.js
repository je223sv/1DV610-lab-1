import {
    validateString,
    validateNumber,
    validatePositiveNumber,
    validateArray,
    validateOptions,
    validateFaces,
    validateNumOfDice,
    validateCorrectAnswer
} from '../index.js'


// Message can be cut and still pass..

it('Should validate strings', () => {
    expect(() => validateString('test')).not.toThrow()
    expect(() => validateString(42)).toThrow('You must provide a string.')
})

it('Should validate number', () => {
    expect(() => validateNumber(42)).not.toThrow()
    expect(() => validateNumber('test')).toThrow('You must provide a number.')
})

it('Should validate positive number', () => {
    expect(() => validatePositiveNumber(1).not.toThrow())
    expect(() => validatePositiveNumber(0).toThrow('You must provide a positive number.'))
    expect(() => validatePositiveNumber(-1).toThrow('You must provide a positive number.'))
})

it('Should validate array', () => {
    expect(() => validateArray([1, 2, 3]).not.toThrow())
    expect(() => validateArray('test').toThrow('You must provide an array.'))
})

it('Should validate options', () => {
    // doesn't work
    expect(() => validateOptions([1, 2, 3]).not.toThrow())
    expect(() => validateOptions([1]).toThrowError('You must provide a populated array of optio'))
    expect(() => validateOptions('test').toThrow('You must provide a populated array of options.'))
})

it('Should validate faces', () => {
    expect(() => validateFaces(1)).not.toThrow()
    expect(() => validateFaces(-1)).toThrow()
})

it('should validate number of dice', () => {
    expect(() => validateNumOfDice(1)).not.toThrow()
    expect(() => validateNumOfDice(-1)).toThrow()
})

it('should validate the correct answer', () => {
    const question = {
        text: 'What is the capital of Stockholm?',
        options: ['Oslo', 'Copenhagen', 'Stockholm', 'Helsinki'],
        correctAnswer: 'Stockholm'
    }
    const {options, correctAnswer} = question

    expect(() => validateCorrectAnswer(correctAnswer, options)).not.toThrow()
    expect(() => validateCorrectAnswer('london', options)).toThrow()
})




