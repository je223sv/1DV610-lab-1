# fake-person

`fake-person` is a JavaScript library which allows you to easily generate user(s) with randomized mock properties, and simple AI capabilities.

This library will come handy when you need to generate dummy user data or if you need an AI player for simple games such as guess the number, the hanging man, rock paper scissors, quizes, black jack, etc.

**🚨  NOTICE**: This library was created for a school project.

## Installation
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


