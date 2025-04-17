const fibonacci = function(n) {

    let firstNum = 0;
    let secondNum = 1;
    let fibonacci = [firstNum, secondNum];

    if(n === 0 || n < 0) {
        fibonacci = [0];
        return fibonacci;
    }

    for(let i = 1; i < n - 1; i++) {
        let currentNum = firstNum + secondNum;
        
        fibonacci.push(currentNum);

        firstNum = secondNum;
        secondNum = currentNum;
    }
    return fibonacci;
};

console.log(fibonacci(0));

// Do not edit below this line
module.exports = fibonacci;
