/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */

//input = string or empty string
//output = integer representing the length of the longest substring without repeating characters
//constraints = empty string should return 0, no repeating characters should return the length of the string
//edge cases = empty string, string with no repeating characters, string with repeating characters
//approach = use a set to keep track of unique characters in the current substring
//time complexity = O(n) where n is the length of the string
//space complexity = O(n) where n is the length of the string
function lengthOfLongestSubstring(s){
  let sub = new Set();
  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++){
    while(sub.has(s[right])) {
      sub.delete(s[left])
      left++
    }
  
    sub.add(s[right])
    longest = Math.max(longest, right - left + 1)
  }
  return longest
}

console.log(lengthOfLongestSubstring('school'))

module.exports = lengthOfLongestSubstring;
