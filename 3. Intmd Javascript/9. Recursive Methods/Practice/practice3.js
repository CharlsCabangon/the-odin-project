function factorial(n, total = 1) {
  if (n <= 0) return total;
  return factorial(n - 1, total * n);
}

console.log(factorial(4))

// another solution

function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(4))