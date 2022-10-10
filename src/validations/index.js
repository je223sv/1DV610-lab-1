import { VALID_GENDERS, VALID_MODES, VALID_SKILL_LEVELS } from "../data/constants"

/**
 * Validates whether the provided input is a string. 
 *
 * @param input - The input to validate.
 * @param {string} message - A custom error message.  
 */
export const validateString = (input, message) => {
    if (typeof input !== 'string') {
        throw new Error(message || 'You must provide a string.')
    }
}

/**
 * Validates whether the provided input is a number.
 *
 * @param input - The input to validate.
 * @param {string} message - A custom error message.
 */
export const validateNumber = (input, message) => {
    if (typeof input !== 'number') {
        throw new Error(message || 'You must provide a number.')
    }
}

/**
 * Validates whether the provided input is a positive number.
 *
 * @param input - The input to validate. 
 * @param {string} message - A custom error message. 
 */
 export const validatePositiveNumber = (input, message) => {
    validateNumber(input)

    if (input < 1) {
        throw new Error(message || 'You must provide a positive number.')
    }
}

/**
 * Validates whether the provided input is a whole number.
 *
 * @param input - The input to validate. 
 * @param {string} message - A custom error message. 
 */
 export const validateWholeNumber = (input, message) => {
    validateNumber(input)

    if (input < 0) {
        throw new Error(message || 'You must provide a whole number.')
    }
}

/**
 * Validates whether the provided input is an array.
 *
 * @param input - The input to validate. 
 */
 export const validateArray = (input) => {
    if (!Array.isArray(input)) {
        throw new Error('You must provide an array.')
    }
}

/**
 * Validates whether the provided input is an array populated with options.
 *
 * @param input - The input to validate.
 */
 export const validateOptions = (input) => {
    validateArray(input)

    if (input.length < 2) {
        throw new Error('The options array must have more than 1 item.')
    }
}

/**
 * Validates whether the provided input is a number that represents a valid
 * amount of faces.
 *
 * @param input - The input to validate. 
 */
export const validateFaces = (input) => {
    validateNumber(input, 'Faces must be a number.')
    validatePositiveNumber(input, 'Faces must be a positive number.')
}

/**
 * Validates whether the provided input is a number that represents a valid
 * amount of dice.
 *
 * @param input - The input to validate.
 */
export const validateNumOfDice = (input) => {
    validateNumber(input, 'Number of dice must be a number.')
    validatePositiveNumber(input, 'Number of dice must be a positive number.')
}

/**
 * Validates whether the provided input is a string that represents a valid
 * correct answer that exist as an option.
 *
 * @param input - The input to validate. 
 * @param options - The options array which the correct answer must be part of.
 */
export const validateCorrectAnswer = (input, options) => {
    validateString(input, 'The correct answer must be a string.')
    validateOptions(options)

    if (!options.includes(input)) {
        throw new Error('The correct answer must be in the options array.')
    }
}

/**
 * Validates whether the provided input is a string that represents a valid
 * skill level.
 *
 * @param input - The input to validate.
 */
export const validateSkillLevel = (input) => {
    validateString(input, 'The skill level must be a string.')

    if (!VALID_SKILL_LEVELS.includes(input)) {
        throw new Error('You must provide a valid skill level such as expert, average or beginner.')
    }
}

/**
 * Validates whether the provided input is a string that represents a valid gender.
 *
 * @param input - The input to validate.
 */
 export const validateGender = (input) => {
    validateString(input, 'Gender must be a string.')

    if (!VALID_GENDERS.includes(input)) {
        throw new Error('You must provide a valid gender such as male or female.')
    }
}

/**
 * Validates whether the provided input is a string that represents a valid mode in the game of
 * Black Jack.
 *
 * @param input - The input to validate.
 */
 export const validateMode = (input) => {
    validateString(input, 'Mode must be a string.')

    if (!VALID_MODES.includes(input)) {
        throw new Error('You must provide a valid mode such as risky or safe.')
    }
}
