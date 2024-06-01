import { isUnique } from './task_1_1';

test('identifies uniqueness correctly', () => {
  const input = 'making';
  expect(isUnique(input)).toBe(true);
});

test('identifies repeated characters correctly', () => {
  const input = 'mom';
  expect(isUnique(input)).toBe(false);
});

test('handles empty strings', () => {
  const input = '';
  expect(() => isUnique(input)).toThrow(Error);
});
