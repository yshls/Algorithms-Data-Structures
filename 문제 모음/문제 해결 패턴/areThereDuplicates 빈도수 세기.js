/**
빈도수 세기 / 다중 포인터 - areThereDuplicates
가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.  빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.

예시:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
제약 조건:

Time - O(n)

Space - O(n)

보너스:

Time - O(n log n)

Space - O(1)
*/

function areThereDuplicates(...arr) {
  if (arr.every((item) => typeof item === 'number')) {
    arr.sort((a, b) => a - b);
  } else arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      return true;
    }
  }
  return false;
}
