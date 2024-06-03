import { ListNode } from './types';

export function returnKthToLast(head: ListNode, k: number): ListNode {
  if (k < 1) {
    throw new Error('Index must be larger or equal to 1');
  }

  let currentNode: ListNode = head;
  let i = 0;

  while (i !== k - 1) {
    if (currentNode.next) {
      currentNode = currentNode.next;
      i++;
    } else {
      throw new Error(
        'The list is not long enough to get the ' + k + 'th node onwards',
      );
    }
  }

  return currentNode;
}

// The question asked about returning kth to last nodes, but counting from the end
// - this implementation returns them from the beginning
// An easy fix would be to iterate through the list twice
// - once to get the length of the list
// - second to grab the items from the desired index onwards, just like in the original implementation

// In the beginning I should ask if the length of the list is known

// There are also other recursive and iterative solutions,
// which iterate through the list only once using the two-pointer technique
