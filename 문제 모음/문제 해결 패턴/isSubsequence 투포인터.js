/**
다중 포인터 - isSubsequence
두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence라는 함수를 작성합니다. 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.

예시:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
솔루션에는 최소한 다음과 같은 복잡성이 있어야 합니다:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

function isSubsequence(arr1, arr2) {
  let i = 0;

  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      i++;
    }
    if (i === arr1.length) {
      return true;
    }
  }

  return false;
}
