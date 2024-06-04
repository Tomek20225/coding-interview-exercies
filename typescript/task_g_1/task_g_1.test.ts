import { decompressString } from './task_g_1';

test('correctly decompresses the string (number-bracket pairs only)', () => {
  const input = '4[abc]3[ac]';
  const result = 'abcabcabcabcacacac';
  expect(decompressString(input)).toEqual(result);
});

test('correctly decompresses the string (number-bracket pairs and single chars)', () => {
  const input = '4[abc]k3[ac]cat';
  const result = 'abcabcabcabckacacaccat';
  expect(decompressString(input)).toEqual(result);
});

test('correctly decompresses the string (single chars only)', () => {
  const input = 'cat';
  const result = 'cat';
  expect(decompressString(input)).toEqual(result);
});

test('handles empty input', () => {
  const input = '';
  const result = '';
  expect(decompressString(input)).toEqual(result);
});
