import { palindromePermutation } from './task_1_4';

test('identifies permutation of palindrome correctly', () => {
  const str = 'Tact Coa';
  expect(palindromePermutation(str)).toStrictEqual(true);
});

test('skips non-letter characters', () => {
  const str = ' Tact 2Coa   ';
  expect(palindromePermutation(str)).toStrictEqual(true);
});

test('handles empty string', () => {
  const str = '';
  expect(palindromePermutation(str)).toStrictEqual(true);
});

test('handles string with no letter characters', () => {
  const str = ' 231#234 93@!  ';
  expect(palindromePermutation(str)).toStrictEqual(true);
});

test('handles 2-character palindrome', () => {
  const str = 'aa';
  expect(palindromePermutation(str)).toStrictEqual(true);
});

test('handles 1-character string', () => {
  const str = 'a';
  expect(palindromePermutation(str)).toStrictEqual(true);
});

test('identifies non-palindromes', () => {
  const str = 'das';
  expect(palindromePermutation(str)).toStrictEqual(false);
});
