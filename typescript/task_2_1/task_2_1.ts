import { ListNode } from './types';

export function removeDups(head: ListNode): ListNode {
  const allData = new Set<number>([head.data]);
  let prevNode: ListNode = head;
  let currentNode: ListNode | null = head.next;

  while (currentNode) {
    if (allData.has(currentNode.data)) {
      prevNode.next = currentNode.next ?? null;
    } else {
      allData.add(currentNode.data);
      prevNode = currentNode;
    }

    currentNode = currentNode.next;
  }

  return head;
}

// currentNode variable is not needed, as we modify the references

// This can also be done without a HashSet with the usage of two pointers:
// - one to iterate through the linked list
// - second to remove any duplicates of the current node in the next nodes
// However, despite being O(1) in space, it would run in O(n^2) time
