// Easy Leetcode

// 2235. Add Two Integers

var sum = function (num1, num2) {
  return num1 + num2;
};

// 2236. Root Equals Sum of Children

var checkTree = function (root) {
  return root.val === root.left.val + root.right.val;
};
