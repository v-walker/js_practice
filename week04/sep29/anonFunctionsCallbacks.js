// Homework - Anonymous Functions & Callbacks


// 1. Positive Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

let positives = (nums) => nums.filter(num => num > 0);

console.log(positives([-1, 3, 5, 7, -4]));

// 2. Even Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

let evens = (nums) => nums.filter(num => num % 2 == 0);

console.log(evens([2, 7, 6, 1, 3, 8]));

// 3. Square the Numbers
// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

let squares = (nums) => nums.map(num => num * num);

console.log(squares([1, 2, 3]));

// 4. Cities 1
// Write a function which takes an array of city objects like such:

var cities = [
{ name: 'Los Angeles', temperature: 60.0},
{ name: 'Atlanta', temperature: 52.0 },
{ name: 'Detroit', temperature: 48.0 },
{ name: 'New York', temperature: 80.0 } ];
// as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

let newCities = (cities) => cities.filter(city => city.temperature < 70.0);
console.log(newCities(cities));

// 5. Cities 2
// Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.

let cityNames = (cities) => cities.map(city => city.name);
console.log(cityNames(cities));

// 6. Good Job!
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// Print out 'Good Job, {{name}}!' for each person's name, one on a line.

people.forEach(person => console.log(`Good job, ${person}!`))

// 7. Sort an array
// Given an array of strings such the array of names given in the previous problem, sort them by alphabetically order.

let sortedPeople = [...people];
sortedPeople.sort();
console.log(sortedPeople);

// 8. Sort an array, 2
// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.

let sortedPeople2 = [...people];

sortedPeople2.sort((a, b) => a.length - b.length);

sortedPeople2.forEach(person => console.log(person));

// 9. Sort an array, 3
// Given an array of array of numbers like:

var arr = [
[1, 3, 4],
[2, 4, 6, 8],
[3, 6] ];
// Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:

// [ [1, 3, 4],
// [3, 6],
// [2, 4, 6, 8] ]

let newArr = [...arr];

let sum = (array) => {
    let total = 0;
    for (let index = 0; index < array.length; index ++) {
        total += array[index];
    }
    return total;
}

newArr.sort((a, b) => sum(a) - sum(b));

newArr.forEach(item => console.log(item))

// 10. 3 times
// Given this function:

function call3Times(fun) { fun(); fun(); fun(); }

// Use the call3Times function to print "Hello, world!" 3 times.

let hello = () => console.log("Hello, world!");

call3Times(hello);

// 11. n times
// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// You are allowed to use a loop in the implementation of callNTimes.

let callNTimes = (times, fun) => {
    for (num = 0; num < times; num ++) {
        fun();
    }
}

callNTimes(5, hello);

// 12. Sum an array
// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

// > sum([1, 2, 3])
// 6
let reducer = (sum, current) => sum + current;
let sumArr = (array) => array.reduce(reducer);

console.log(sumArr([1, 2, 3]));


// 13. Acronym
// Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

// > acronym(['very', 'important', 'person'])
// 'VIP' > acronym(['national', 'aeronautics', 'space', 'administration']) 'NASA'

let reducer2 = (previous = "", current) => previous += current[0];
let acronym = (array) => array.reduce(reducer2).toUpperCase();

console.log(acronym(['national', 'aeronautics', 'space', 'administration']));

// Close, but not quite... I tried :)... I'll come back to this later this evening...
