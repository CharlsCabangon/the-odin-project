export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return Array.from(str).reverse().join('');
}

export function calculator(a, b) {
  return {
    add() {
      return a + b;
    },
    subtract() {
      return a - b;
    },
    multiply() {
      return a * b;
    },
    divide() {
      return a / b;
    }
  }
}

// Helper: shift a single character if it's a letter
function shiftChar(char, shift) {
  const isUpperCase = char >= 'A' && char <= 'Z';
  const isLowerCase = char >= 'a' && char <= 'z';

  if (!isUpperCase && !isLowerCase) {
    return char; // Non-letter stays the same
  }

  const startCode = isUpperCase ? 65 : 97;
  // Wrap around using modulo 26
  return String.fromCharCode(
    ((char.charCodeAt(0) - startCode + shift) % 26 + 26) % 26 + startCode
  );
}

// Main Caesar cipher function
export function caesarCipher(str, shift) {
  return Array.from(str)
    .map(char => shiftChar(char, shift))
    .join('');
}

export function analyzeArray(arr) {
  let sum = arr.reduce((acc, num) => acc + num, 0);
  let average = sum / arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let length = arr.length;

  return { average, min, max, length };
}
