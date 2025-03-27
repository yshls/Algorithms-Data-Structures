// function countUniqueValus(arr) {
//   let countSet = new set(arr);
//   return countSet.size;
// }

// function countUniqueValus(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }

//   let count = 1;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] == arr[i] - 1) {
//       count++;
//     }
//   }
//   return count;
// }

// 강의 코드
function countUniqueValus(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
