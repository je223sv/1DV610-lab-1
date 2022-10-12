# fake-person

``fake-person`` is a JavaScript library that allows you to easily generate user(s) with randomized mock properties, and simple AI capabilities.

This library will come in handy when you need to generate dummy user data or if you need an AI player for simple games such as guess the number, the hanging man, rock paper scissors, quizzes, black jack, etc.

**🚨 NOTICE**: This library was created for a school project.

## Installation
Using npm:
```bash
npm i fake-person
```

## Usage


### Dummy user data
Each fake person instantiated will get their own unique set of randomized properties that can be accessed with getter methods:

```javascript
import FakePerson from 'fake-person'

const fakePerson = new FakePerson()

fakePerson.getFullName() // Helge Svensson
fakePerson.getFirstName() // Helge
fakePerson.getLastName() // Svensson
fakePerson.getGender() // male
fakePerson.getAge() // 45
fakePerson.getCountry() // Sweden
fakePerson.getEmail() // helge.svensson@example.com
fakePerson.getPassword() // $5Ab!7Ox&9Pa
fakePerson.getDescription() // Hello, my name is Helge Svensson and I am 45 years old. I live in Sweden and you can contact me at helge.svensson@example.com.
```

### Simple AI Capabilities

Beside generating fake user data, a fake person can also be used as an AI player for simple games as demonstrated below.

#### makeSelection(*options*)

> ***options***: ``Array``

Returns a random item from an `options`.

```javascript
import FakePerson from 'fake-person'

const fakePerson = new FakePerson()

// Guess the number
const correctNumber = 7
const numbers = [...Array(10).keys()]
const aiNumberGuess = fakePerson.makeSelection(numbers) // example output: 4

// The hanging man
const correctWord = 'jazz'
const availableLetters = 'abcdefghijklmnopqrstuvxyz'.split('')
const aiLetterGuess = fakePerson.makeSelection(availableLetters) // example output: j
```
#### rollDice(*faces*, *numOfDice*)
> ***faces***: `number`

> ***numOfDice***: `number`

Rolls one or many dice and return the results as an `array`.

```javascript
import FakePerson from 'fake-person'

const fakePerson = new FakePerson()

const rollOneDice = fakePerson.rollDice(6, 1) // example output: [4] 
const rollTwoDice= fakePerson.rollDice(6, 2) // example output: [2, 6] 
const rollThreeDice = fakePerson.rollDice(10, 3) // example output: [9, 3, 5] 
```

#### playRockPaperScissors()
Returns rock, paper or scissors as a `string`.
```javascript
import FakePerson from 'fake-person'

const fakePerson = new FakePerson()

const aiHand = fakePerson.playRockPaperScissors() // example output: paper 
```
#### answerQuizQuestion({ *options*, *correctAnswer* }, *skillLevel*)
> ***options***: An `array` with a length greater than 1.
> ***correctAnswer***: A `string` that exists in the options array.
> ***skillLevel***:  A `string` that equals either 'beginner', 'average' or 'expert'.

Returns an answer as a `string`. The likelihood of returning the `correctAnswer` from the `options`  is based on the provided `skillLevel`.

```javascript
import FakePerson from 'fake-person'

const fakePerson = new FakePerson()

const question = {
	text: 'What is the capital of Sweden?',
	options: ['Helsinki', 'Stockholm', 'Copenhagen', 'Oslo'],
	correctAnswer: 'Stockholm'
}

// 'beginner' ai is 60% likely to return the correct answer
const aiAnswerAsBeginner = fakePerson.answerQuizQuestion(question, 'beginner') // example output: Helsinki

// 'average' ai is 70% likely to return the correct answer
const aiAnswerAsAverage = 
fakePerson.answerQuizQuestion(question, 'average') // example output: Copenhagen

// 'expert' ai is 80% likely to return the correct answer
const aiAnswerAsExpert = fakePerson.answerQuizQuestion(question, 'expert') // example output: Stockholm
```

#### shouldHitMe(*currentScore*, *mode*)
> ***currentScore***: A whole `number`.
> ***mode***: A `string` that equals either 'risky' or 'safe'.

Returns a `boolean` based on the `currentScore` and the `mode`.
```javascript
import FakePerson from 'fake-person'

const fakePerson = new FakePerson()

const aiScore = fakePerson.getScore()

if (fakePerson.shouldHitMe(aiScore, 'risky')) {
	// Hit AI with a new card
}
```

### Keeping Score
```javascript
import FakePerson from 'fake-person'

const fakePerson = new FakePerson()

// Get score
const currentScore = fakePerson.getScore() // 0

// Set score
fakePerson.setScore(currentScore + 10)
```

## Version
1.0.0

## License
ISC


