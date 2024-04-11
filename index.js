// Easy Leetcode

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

// 1672. Richest Customer Wealth COME BACK FOR HIGHER ORDER FUNCTION REFRACTOR

var maximumWealth = function (accounts) {
  // sum up values of nested array, then choose largest of those values
  var result = [];

  for (var i = 0; i < accounts.length; i++) {
    var sum = 0;

    for (var j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    result.push(sum);
  }

  return result.sort((a, b) => a - b).pop();
};

// 412. Fizz Buzz

var fizzBuzz = function (n) {
  let arr = [];
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else {
      arr.push(`${i}`);
    }
  }

  return arr;
};
