import { removeDups } from './task_2_1';
import { ListNode } from './types';

test('does not modify the same linked lists', () => {
  const head: ListNode = {
    data: 1,
    next: {
      data: 2,
      next: null,
    },
  };

  const result: ListNode = {
    data: 1,
    next: {
      data: 2,
      next: null,
    },
  };

  expect(removeDups(head)).toStrictEqual(result);
});

test('removes successive duplicates, including the tail', () => {
  const head: ListNode = {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 2,
        next: {
          data: 2,
          next: null,
        },
      },
    },
  };

  const result: ListNode = {
    data: 1,
    next: {
      data: 2,
      next: null,
    },
  };

  expect(removeDups(head)).toStrictEqual(result);
});

test('removes non-successive duplicates', () => {
  const head: ListNode = {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: {
          data: 2,
          next: {
            data: 4,
            next: null,
          },
        },
      },
    },
  };

  const result: ListNode = {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: {
          data: 4,
          next: null,
        },
      },
    },
  };

  expect(removeDups(head)).toStrictEqual(result);
});
