function sum(n, total = 0) {
  if (n <= 0) {
    return total;
  }
  return sum(n - 1, total += n);
}

console.log(sum(3));

function sumRange(n) {
  if (n == 1) return 1;

  return n + sumRange(n - 1);
}

console.log(sumRange(3));