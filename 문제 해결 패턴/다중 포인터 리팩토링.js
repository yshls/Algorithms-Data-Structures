function sumZero(arr) {
  // 0의 위치에서 시작
  let left = 0;
  // 마지막 위치에서 시작, -1을 한 이유는 배열의 길이보다 -1 작은 값에서 시작하기때문에
  let right = arr.legnth - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
