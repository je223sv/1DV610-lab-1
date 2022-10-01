/**
 * Generate a random number between max and min where max is exclusive.
 *
 * @param {number} max - The maximum number.
 * @param {number} min - The minimum number.
 * @returns {number} - A random number between max and min.
 */
export const generateRandomNumExclusive = (max, min = 0) => {
    // Error handling.. 
    return Math.floor(Math.random() * (max - min) + min)
}
