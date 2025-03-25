/**
function same(arr1, arr2) {
  // 배열 오름차순 정렬
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  // 길이가 다르면 false
  if (arr1.length !== arr2.length) return false;

  // arr1의 각 값을 제곱해서 arr2와 비교
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] ** 2 !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [1, 4, 9])); // true
console.log(same([1, 2, 1], [1, 4, 4])); // false
console.log(same([1, 2, 2], [1, 4, 4])); // true
*/

/**
function same(arr1, arr2) {
  // 두 배열의 길이가 다른지 여부에 대한 확인
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // 각 제곱을 전달하는 위치에 indexOf를 호출
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }

  return true;
}

console.log(same([1, 2, 3], [1, 4, 9])); // true
console.log(same([1, 2, 1], [1, 4, 4])); // false
console.log(same([1, 2, 2], [1, 4, 4])); // true
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // 두개의 루프가 두개의 중첩된 개별 루프보다 훨씬 낫다.
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
