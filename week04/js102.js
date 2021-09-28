// Print Numbers
// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

function printNumbers(start, end) {
    while (start <= end) {
        console.log(start);
        start ++;
    }
}

printNumbers(1, 10);

function printNumbers2(start, end) {
    for (start; start <= end; start++) {
        console.log(start);
    }
}

printNumbers2(1, 10);

// Write a function printSquare which is given a size and prints a square of that size using asterisks.

function printSquare(num) {
    let stars = []
    let index = 0;
    while (index < num) {
        stars.push("*");
        index ++;
    }
    let joinedStars = stars.join('');
    let index2 = 0;
    while (index2 < num) {
        console.log(joinedStars)
        index2 ++
    }
}

printSquare(5);

// Print a box
// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

function printBox (width, height) {
    let w = '';
    let spaces = '';
    for (let start = 0; start < width - 2; start++) {
        spaces += ' '
    }
    for (let start = 0; start < width; start ++){
        w += ("*");
    }
    console.log(w)
    for (let start = height - 2; start < height; start ++) {
        console.log(`*${spaces}*`);
    }
    console.log(w)
}

printBox(6, 4)

// Print a Banner
// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

function printBanner (text) {
    let width = '';
    for (let start = 0; start < text.length + 4; start++) {
        width += ("*");
    }
    console.log(width);
    console.log(`* ${text} *`);
    console.log(width);
}

printBanner("Victoria")
printBanner("I love cookies.")

// Factor a Number
// Write a function factors which is given a number and returns an array containing all its factors.

function factorNum (num) {
    let start = 1;
    let numArr = [];
    let factors = [];

    while (start <= num) {
        numArr.push(start);
        start ++;
    }

    for (let index = 0; index < numArr.length; index++) {
        if (num % numArr[index] === 0) {
            factors.push(numArr[index]);
        }
    }
    console.log(factors)
}

factorNum(120)


// Caesar Cipher
// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

function cipher(string, offset) {
    var alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    var outputString = ''

    for (let index = 0; index < string.length; index++) {
        var letter = string[index]
        if (alphabet.includes(letter)) {
            var alphabetIndex = alphabet.indexOf(letter);
            var newLetter = alphabet[alphabetIndex + offset];
            outputString += newLetter;
        }
        else {
            var newLetter = string[index];
            outputString += newLetter;
        }
    }
    console.log(outputString);
}
    

cipher('genius without education is like silver in the mine', 13);


// Caesar Cipher 2
// Write a function decipher which is given a string, an offset, and returns the original message.

function decipher(string, offset) {
    var alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    var outputString = ''

    for (let index = 0; index < string.length; index++) {
        var letter = string[index]
        if (alphabet.includes(letter)) {
            var alphabetIndex = alphabet.indexOf(letter);
            var newLetter = alphabet[alphabetIndex + offset];
            outputString += newLetter;
        }
        else {
            var newLetter = string[index];
            outputString += newLetter;
        }
    }
    console.log(outputString);
}

decipher("travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", 13)

// Leetspeak
// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:
// A => 4 E => 3 G => 6 I => 1 O => 0 S => 5 T => 7

function leetspeak (string) {
    var outputString = ""

    for (let index = 0; index < string.length; index++) {
        var letter = string[index];
        if (letter == 'a') {
            outputString += '4';
        }
        else if (letter == 'e') {
            outputString += '3';
        }
        else if (letter == 'g') {
            outputString += '6';
        }
        else if (letter == 'i') {
            outputString += '1';
        }
        else if (letter == 'o') {
            outputString += '0';
        }
        else if (letter == 's') {
            outputString += '5';
        }
        else if (letter == 't') {
            outputString += '7';
        }
        else {
            outputString += string[index]
        }
    }
    console.log(outputString);
}

leetspeak('Leet');


function leetspeak2(string) {
    var stringLower = string.toLowerCase();
    var letters = ["a", "e", "g", "i", "o", "s", "t"];
    var leetChars = ["4", "3", "6", "1", "0", "5", "7"];
    var outputString = ""

    for (let index = 0; index < stringLower.length; index++) {
        var letter = stringLower[index];
        if (letters.includes(letter)) {
            letter = leetChars[letters.indexOf(letter)];
        }
        outputString += letter;
    }
    console.log(outputString)
}

leetspeak2('Leet');

// Long-long Vowels
// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.


    // this is not working... keep debugging this...
function longLongVowels(string) {
    var stringLower = string.toLowerCase();
    // var doubleVowels = ["aa", "ee", "ii", "oo", "uu"];
    var longerVowels = ["aaaaa", "eeeee", "iiiii", "ooooo", "uuuuu"];
    var outputString = ""
    var index = 0

    while (index < stringLower) {
        var char = stringLower[index]
        if (index + 1 == stringLower.length) {
            outputString += char;
            break;
        }
        else if (char == "a" && stringLower[index + 1] == "a") {
            char = longerVowels[0];
            if (index == stringLower.length) {
                break;
            }
            else {
                index++;
            }
        }
        else if (char == "e" && stringLower[index + 1] == "e") {
            char = longerVowels[1];
            if (index == stringLower.length) {
                break;
            }
            else {
                index++;
            }
        }
        else if (char == "i" && stringLower[index + 1] == "i") {
            char = longerVowels[2];
            if (index == stringLower.length) {
                break;
            }
            else {
                index++;
            }
        }
        else if (char == "o" && stringLower[index + 1] == "o") {
            char = longerVowels[3];
            if (index == stringLower.length) {
                break;
            }
            else {
                index++;
            }
        }
        else if (char == "u" && stringLower[index + 1] == "u") {
            char = longerVowels[4];
            if (index == stringLower.length) {
                break;
            }
            else {
                index++;
            }
        }
        outputString += char;
    }    
    console.log(outputString)
}

longLongVowels("Moose")

// Sum the numbers
// Write a function sumNumbers which is given an array of numbers and returns the sum of the numbers.

function sumNumbers(numList) {
    let sum = 0;
    for (let index = 0; index < numList.length; index ++) {
        sum += numList[index];
    }
    console.log(sum);
}

sumNumbers([1, 2, 3, 4, 5])

// Just the positives
// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

function positiveNumbers(numList) {
    let positives = [];

    for (let index = 0; index < numList.length; index ++) {
        if (numList[index] >= 0) {
            positives.push(numList[index]);
        }
    }
    console.log(positives)
}

positiveNumbers([1, -3, 5, -3, 0])