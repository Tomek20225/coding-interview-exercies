import { volumeOfLakes } from './task_g_2';

test('correctly decompresses the string (number-bracket pairs only)', () => {
  const input = [1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2];
  const result = 15;
  expect(volumeOfLakes(input)).toEqual(result);
});
