import { returnKthToLast } from './task_2_2';
import { ListNode } from './types';

test('returns correct kth element onwards', () => {
  const head: ListNode = {
    data: 1,
    next: {
      data: 2,
      next: null,
    },
  };

  const result: ListNode = {
    data: 2,
    next: null,
  };

  expect(returnKthToLast(head, 2)).toStrictEqual(result);
});

test('throws when the given index exceeds the list length', () => {
  const head: ListNode = {
    data: 1,
    next: {
      data: 2,
      next: null,
    },
  };

  expect(() => returnKthToLast(head, 3)).toThrow();
});

test('throws when the given index is too short', () => {
  const head: ListNode = {
    data: 1,
    next: {
      data: 2,
      next: null,
    },
  };

  expect(() => returnKthToLast(head, 0)).toThrow();
});
