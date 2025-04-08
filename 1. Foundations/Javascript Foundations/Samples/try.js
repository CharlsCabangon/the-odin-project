// function min(a, b) {
//     if (a < b) {
//         return a;
//     }
//     else {
//         return b;
//     }
// }

// console.log(min(1, -1));


// function min(a, b) {
//     return a < b ? a : b;
// }

// console.log(min(3, 7));

// function pow(x, n) {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }

//     return result;
// }
// let x = prompt("Value of x", " ");
// let n = prompt("Value of y", " ");

// if (n < 1) {
//     alert(`${n} is not allowed`)
// }
// else {
//     alert(pow(x, n));
// }


// function add(n) {
//     return n + 7;
// }

// console.log(add(1))

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("hI AKo z"));