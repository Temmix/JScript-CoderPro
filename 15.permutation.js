/*
                            PERMUTATION
Given a collection of distinct integers, return all possible permutations
Example [1,2,3] should return [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,2,1], [3,1,2]] 
*/

const permutate = nums => {
  const list = [];
  permutateHelper(0, nums, list);
  return list;
};

const permutateHelper = (start, nums, list) => {
  if (start === nums.length - 1) list.push([...nums]);

  for (let i = 0; i < nums.length; i++) {}
};

permutate([1, 2, 3]);
