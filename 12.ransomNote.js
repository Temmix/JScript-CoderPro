/**
 * Given an arbitrary ransom note and another string containing letters from all the magazines,
 * write a function that will return true if the ransom note can be constructed from the magazine,
 * otherwise return false.
 * canConstruct('a', 'b') => false
 * canConstruct('aa','aba') => true
 *
 * Assume both string are lower case
 */

// Big O for Time is O(n ) + O(m), space complexity is O(n)
const canConstruct = (note, magazine) => {
  const magObj = {};
  magazine
    .split(" ")
    .join("")
    .split("")
    .forEach(x => (magObj[x] = magObj[x] + 1 || 1));
  const list = note
    .split(" ")
    .join("")
    .split("");

  for (let i = 0; i < list.length; i++) {
    let x = list[i];
    if (!magObj[x]) return false;
    magObj[x] -= 1;
    if (magObj[x] < 0) return false;
  }
  return true;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "aba"));
console.log(
  canConstruct("what is your name", "what of if i say your name is Temi")
);
