import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./project.js";

test('capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('reverse string', () => {
  expect(reverseString('world')).toBe('dlrow');
});

test('calculator add', () => {
  expect(calculator(5, 5).add()).toBe(10);
});

test('calculator subtract', () => {
  expect(calculator(5, 3).subtract()).toBe(2);
});

test('calculator multiply', () => {
  expect(calculator(5, 5).multiply()).toBe(25);
});

test('calculator divide', () => {
  expect(calculator(10, 2).divide()).toBe(5);
});

test('caesar cipher', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});


test('analyzes an array of numbers correctly', () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(result).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});