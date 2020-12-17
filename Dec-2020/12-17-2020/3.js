// Function Description

// Complete the printLinkedList function in the editor below.

// printLinkedList has the following parameter(s):

// SinglyLinkedListNode head: a reference to the head of the list
// Print

// For each node, print its  value on a new line (console.log in Javascript).
function printLinkedList(head) {
  let current = head
  while(current.next) {
    console.log(current.data)
    current = current.next
  }
  console.log(current.data)
}