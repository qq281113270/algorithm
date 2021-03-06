function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
  let head = null;
  let tail = null;
  // 进位值
  let carry = 0;
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + carry;
    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    carry = Math.floor(sum / 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  // 如果遍历结束，还有进位值，那么加上0
  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  console.log("tail=", tail);
  return head;
};

let item = null;
let arr = [2, 4, 3];
for (let i = 0; i < arr.length; i++) {
  item = new ListNode(item, arr[i]);
}
console.log("item=", item);

console.log("addTwoNumbers=", addTwoNumbers([2, 4, 3], [5, 6, 4]));
