import { urlify } from './task_1_3';

test('urlifies correctly', () => {
  const str = [...'hi mark tanner    '];
  const len = 14;
  const result = [...'hi%20mark%20tanner'];
  expect(urlify(str, len)).toStrictEqual(result);
});

test('works with empty strings', () => {
  const str = [...''];
  const len = 0;
  const result = [...''];
  expect(urlify(str, len)).toStrictEqual(result);
});

test('works with no spaces', () => {
  const str = [...'hello'];
  const len = 5;
  const result = [...'hello'];
  expect(urlify(str, len)).toStrictEqual(result);
});
