// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    //loop through linked list 
      //have another loop to get the next val thats not equal to the current and link the two
      let current = linkedList 
      while (current !== null) {
          let next = current.next
          while (next !== null && current.value === next.value) {
              next = next.next
          }
          current.next = next
          current = next
      }
      return linkedList
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
  