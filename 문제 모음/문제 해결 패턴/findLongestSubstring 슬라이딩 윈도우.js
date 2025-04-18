/**
Sliding Window - findLongestSubstring
문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는 findLongestSubstring이라는 함수를 작성하세요.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)

문자의 중복없이 가장 긴 부분..ㅋㅋ
*/

// 문자열에서 중복 없이 가장 긴 연속된 하위 문자열을 구해보자!
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // 중복 된 문자를 만나면
    if (seen[char] !== undefined) {
      start = Math.max(start, seen[char] + 1);
    }
    // seen[char] = 인덱스 저장
    seen[char] = i;

    // 최대 길이 갱신
    longest = Math.max(longest, i - start + 1);
  }

  return longest;
}
