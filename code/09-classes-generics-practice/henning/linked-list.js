var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
    }
    LinkedList.prototype.add = function (value) {
        var node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
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
    };
    LinkedList.prototype.getNumberOfElements = function () {
        return this.length;
    };
    LinkedList.prototype.print = function () {
        var current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    };
    return LinkedList;
}());
var numberList = new LinkedList();
numberList.add(10);
numberList.add(5);
numberList.add(-3);
console.log(numberList.getNumberOfElements());
numberList.print();
var nameList = new LinkedList();
nameList.add("Henning");
nameList.add("Marty");
nameList.add("Niko");
nameList.print();
