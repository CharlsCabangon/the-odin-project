
// Do not use this method!!!
// const arrayOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = arrayOfNums.filter(evenNum => evenNum % 2 ===0);

// const tripled = even.map(evenTripiled => evenTripiled * 3);

// const total = arrayOfNums.reduce((total, num) => {
//     return total + num;
// });

// console.log(even);
// console.log(tripled);
// console.log(total);


// METHOD CHAINING

console.log("hello".toUpperCase().charAt(3));

const arrayOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .filter(arrayOfNums => arrayOfNums % 2 === 0)
    .map(arrayOfNums => arrayOfNums * 3)
    .reduce((total, num) => total + num);

console.log(arrayOfNums);



