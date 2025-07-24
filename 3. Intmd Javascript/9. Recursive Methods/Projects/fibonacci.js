function fibonacci(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib;
}

console.log(fibonacci(81));

function fibonacciRec(n, sequence = [0, 1]) {
  if (sequence.length > n) return sequence.slice(0, n + 1);
  
  const nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  sequence.push(nextNum);
  
  return fibonacci(n, sequence);
}

console.log(fibonacciRec(0));