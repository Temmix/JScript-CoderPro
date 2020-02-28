/**
 * Given an array of integers, return  indices of the two numbers such that they add up to
 * a specific target. You may assume that each input would have exactly one solution, and you
 * may not use the same element twice.
 * Given nums = [2,7,11,15], target = 9
 * nums[0] + nums[1] = 9
 * return [0,1]
 */

const addTwoSum = (arr, target, useArray = false) => {
  return useArray ? usingArray(arr, target) : usingHashMap(arr, target);
};

// Time Complexity = O(n) but cos of indexOf method
// which is loop under the hood, makes the method O(n^2)
// Space Complexity = 0
const usingArray = (arr, target) => {
  if (!arr.length) return null;
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    let index = arr.indexOf(diff);
    if (index >= 0) return [i, index];
  }
  return null;
};

// Time complexity is O(n)
// Space complexity is O(n) cos of hashmap
const usingHashMap = (arr, target) => {
  const mapper = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (mapper[diff] !== undefined) return [i, mapper[diff]];
    mapper[arr[i]] = i;
  }
  return null;
};

const list = [2, 7, 11, 15];
console.log(addTwoSum(list, 9, true));
console.log(addTwoSum(list, 26, false));
