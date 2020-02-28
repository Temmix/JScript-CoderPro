class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

const addTwoLinkedList = (li, l2) => {
  // return addTwoLinkedListRecursiveHelper(li, l2, 0);
  return addTwoLinkedListIterativeHelper(li, l2, 0);
};

const addTwoLinkedListRecursiveHelper = (l1, l2, c) => {
  let val = l1.val + l2.val + c;
  c = Math.floor(val / 10);
  let ret = new Node(val % 10);

  if (l1.next || l2.next) {
    if (!l1.next) l1.next = new Node(0);
    if (!l2.next) l2.next = new Node(0);
    ret.next = addTwoLinkedListHelper(l1.next, l2.next, c);
  } else if (c) ret.next = new Node(c);
  return ret;
};

const addTwoLinkedListIterativeHelper = (l1, l2, c) => {
  let a = l1;
  let b = l2;
  let ret = null;
  let current = null;
  while (a || b) {
    let val = a.val + b.val + c;
    c = Math.floor(val / 10);
    if (!current) {
      ret = new Node(val % 10);
      current = ret;
    } else {
      current.next = new Node(val % 10);
      current = current.next;
    }
    if (a.next || b.next) {
      if (!a.next) a.next = new Node(0);
      if (!b.next) b.next = new Node(0);
    } else if (c) current.next = new Node(c);
    a = a.next;
    b = b.next;
  }
  return ret;
};

const l1 = new Node(2);
l1.next = new Node(4);
l1.next.next = new Node(3);

const l2 = new Node(5);
l2.next = new Node(6);
l2.next.next = new Node(4);

console.log(addTwoLinkedList(l1, l2));
