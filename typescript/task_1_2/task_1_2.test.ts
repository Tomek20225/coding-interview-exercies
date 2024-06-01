import { checkPermutation } from './task_1_2';

test('identifies permutations correctly', () => {
  const s1 = 'hello';
  const s2 = 'loleh';
  expect(checkPermutation(s1, s2)).toBe(true);
});

test('identifies strings that have different length', () => {
  const s1 = 'mom';
  const s2 = 'mama';
  expect(checkPermutation(s1, s2)).toBe(false);
});

test('identifies if any of the strings is empty', () => {
  const s1 = '';
  const s2 = 'mama';
  expect(checkPermutation(s1, s2)).toBe(false);
});

test('identifies non-permutation pairs', () => {
  const s1 = 'mami';
  const s2 = 'mama';
  expect(checkPermutation(s1, s2)).toBe(false);
});
