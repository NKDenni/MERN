// question 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//prediction first console will print Tesla and the second will print Mercedes
// output nathan@Nathans-MacBook-Pro fundamentals % node Predict_Destructuring.js
// Tesla
// Mercedes


// question 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);
// console.log(otherName);

//Prediction First console will log Elon and second console will log otherName
//output console.log(name);
//                   ^
//     ReferenceError: name is not defined
//     at Object.< anonymous > (/Users/nathan / Documents / Coding_Dojo / MERN / fundamentals / Predict_Destructuring.js: 21: 13)


// question 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
// console.log(hashedPassword);

//Prediction logged to consle '12345' and then hashedPassword
//Output 12345 and undefined
// logging hashedPassword returned undefined because the key password is not in the original const person.


// question 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//Prediction first consol log will print nothing as the condition will note be met. the second will print 2 as first and third are equal.
//Output: false, true.
// first equal second  is false so the printed value = false. first and third are equal so true got printed to the console.


// question 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//Prediction first console will return 'value'. second console will return the list. Third console will return 1 which is the value at position 0. Will this work will return an error as we have to destruct the parent object first to destruct the secondkey. (prediction for final log was wrong and the value of 5 which is at the indicated position did print.)
//Output: 
// value
// [1, 5, 1, 8, 3, 3]
// 1
// 5