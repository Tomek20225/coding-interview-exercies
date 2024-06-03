import { oneAway } from './task_1_5';

test('identifies the same strings', () => {
  const str1 = 'mama';
  const str2 = 'mama';
  expect(oneAway(str1, str2)).toEqual(true);
});

test('breaks on strings with vastly different lengths', () => {
  const str1 = 'mama';
  const str2 = 'mamaaa';
  expect(oneAway(str1, str2)).toEqual(false);
});

test('identifies 1 added character at the end', () => {
  const str1 = 'mama';
  const str2 = 'mamaa';
  expect(oneAway(str1, str2)).toEqual(true);
});

test('identifies 1 added character at the beginning', () => {
  const str1 = 'mama';
  const str2 = 'amama';
  expect(oneAway(str1, str2)).toEqual(true);
});

test('identifies 1 removed character from the beginning', () => {
  const str1 = 'mama';
  const str2 = 'ama';
  expect(oneAway(str1, str2)).toEqual(true);
});

test('identifies 1 removed character from the middle', () => {
  const str1 = 'mama';
  const str2 = 'mma';
  expect(oneAway(str1, str2)).toEqual(true);
});

test('identifies 1 removed character from the end', () => {
  const str1 = 'mama';
  const str2 = 'mam';
  expect(oneAway(str1, str2)).toEqual(true);
});

test('identifies 1 replaced character in the beginning', () => {
  const str1 = 'mama';
  const str2 = 'gama';
  expect(oneAway(str1, str2)).toEqual(true);
});

test('identifies 1 replaced character in the middle', () => {
  const str1 = 'mama';
  const str2 = 'mgma';
  expect(oneAway(str1, str2)).toEqual(true);
});

test('identifies 1 replaced character in the end', () => {
  const str1 = 'mama';
  const str2 = 'mamg';
  expect(oneAway(str1, str2)).toEqual(true);
});

test('does not get fooled by repeated characters', () => {
  const str1 = 'mmmmmmm';
  const str2 = 'mmmammm';
  expect(oneAway(str1, str2)).toEqual(true);
});
