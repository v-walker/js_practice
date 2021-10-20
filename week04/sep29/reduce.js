
let arr = [5, 6, 7, 8 ,12]

let result = arr.reduce((accumulator, current) => {
    // console.log(accumulator);
    return accumulator + current;
}, 0) 

let wordArr = ['very', 'important', 'person']

// let acronym = wordArr.reduce((accumulator, current) => {
//     return accumulator + current[0].toUpperCase();
// }, "") 

// console.log(acronym)

const acronym = (arr) => {
    let acronym = arr.reduce((accumulator, current) => {
        return accumulator + current[0].toUpperCase();
    }, "") 

    return acronym;
}

let nasa = ['national', 'aeronautics', 'space', 'administration']

console.log(acronym(nasa));

// Create a function sumPlusMinus() that takes an array and sums
// separately positive and negative numbers
// it should return an object like this:
// {
//     plus: 74, // sum of all positive numbers
//     minus: -54 // sum of all negative numbers
// }

let nums = [-3, 5, 6, -7, -2, 1, 6, 8. -19]

// not this
// let sumPlusMinus = (arr) => {
//     let sumObj = {
//         plus: 0,
//         minus: 0
//     }

//     arr.forEach(num => {
//         if (num >= 0) {
//             let sumPos = arr.reduce((accumulator, current) => {
//                 return accumulator + current;
//             }, 0);
//             return sumPos;
//         }
//         else if (num < 0) {
//             let sumNeg = arr.reduce((accumulator, current) => {
//                 return accumulator + current;
//             }, 0);
//             return sumNeg;
//         }
//     })

//     sumObj.plus += sumPos;
//     sumObj.minus += sumNeg;
//     return sumObj;
// }

// console.log(sumPlusMinus(nums));

let sumPlusMinus = nums.reduce((acc, currentVal) => {
    if (currentVal >= 0) {
        //add to plus
        acc.plus += currentVal
    }
    else {
        //add to minus
        acc.minus += currentVal
    }

    return acc

}, {plus: 0, minus: 0})

console.log(sumPlusMinus);


