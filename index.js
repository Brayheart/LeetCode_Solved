// Easy Leetcode test

// 2235. Add Two Integers

var sum = function (num1, num2) {
  return num1 + num2;
};

// 2236. Root Equals Sum of Children

var checkTree = function (root) {
  return root.val === root.left.val + root.right.val;
};

// 1480. Running Sum of 1d Array

var runningSum = function (nums) {
  var solution = [];
  var sum = 0;

  for (i = 0; i < nums.length; i++) {
    solution.push((sum += nums[i]));
  }

  return solution;
};
