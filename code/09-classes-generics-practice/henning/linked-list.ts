class ListNode<T> {
  next?: ListNode<T>; // Forward the same generic type
  constructor(public value: T) {}
}

class LinkedList<T> {
  private root?: ListNode<T>; // Forward the same generic type
  private tail?: ListNode<T>;
  private length = 0;

  add(value: T) {
    const node = new ListNode(value);
    if (!this.root || !this.tail) {
      this.root = node;
      this.tail = node;
    } else {
      // Without 'tail' property:
      // let current = this.root; // Start at root
      //   while (current.next) {
      //     // If next is truthy
      //     current = current.next; // Update current
      //     // On the last iteration 'current' is the last node in the list
      //   }
      // current.next = node; // Link new node to last node

      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  getNumberOfElements() {
    return this.length;
  }

  print() {
    let current = this.root;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const numberList = new LinkedList<number>();
numberList.add(10);
numberList.add(5);
numberList.add(-3);

console.log(numberList.getNumberOfElements());
numberList.print();

const nameList = new LinkedList<string>();
nameList.add("Henning");
nameList.add("Marty");
nameList.add("Niko");

nameList.print();
