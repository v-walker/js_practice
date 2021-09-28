// JS 101 homework 9/27/21

// Write a function hello which given a name, says hello to the name. Use the following template:

// function hello(name) {
//     // put your code here
//   }
//   hello('Mustache');
//   Make the above program print the following to the console:
//   Hello, Mustache!

function hello(name) {
    console.log(`Hello, ${name}!`)
}

hello('Mustache')

function hello2(name = 'world') {
    console.log(`Hello, ${name}!`)
}

hello2()

// Madlib
// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

function madLib(name, subject) {
    console.log(`${name}'s favorite subject in school is ${subject}.`)
}

madLib('Victoria', 'lunch')

// Tip Calculator
// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20%

// fair -> 15%

// bad -> 10%

function tipAmount(bill, LoS, split) {
    switch (LoS) {
        case 'good':
            amount = 20;
            break;
        case 'fair':
            amount = 15;
            break;
        case 'bad':
            amount = 10;
            break;
        default:
            amount = 0;
            break;
    }
    let total = bill + (bill * (amount/100));
    let splitBill = total / split
    console.log(`You should tip $${amount}. Including your bill, your total amount equals $${total}. Each person in your party should pay $${splitBill}.`);
}

tipAmount(100, 'good', 3)