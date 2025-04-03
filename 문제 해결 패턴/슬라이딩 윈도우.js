// 매개변수는 배열과 숫자를 취한다. num은 구하고자하는숫자의 개수이다.
function maxSubarraySum(arr, num) {
  // 각각의 경우에 숫자가 배열의 길이보다 큰지 확인
  // 연속된 숫자의 정수의 가장 큰 합을 구해서 정수가 두개만 있거나 비어있으면 null이 반환
  if (num > arr.length) {
    return null;
  }

  // 양수로만 작업을 하지 않는 한 0에서 시작한 것은 전혀 도움이 안되기에 -Infinity로 설정
  let max = -Infinity;

  // for문은 배열의 끝이나 거의 끝까지 도달한다.
  for (let i = 0; i < arr.length - num + 1; i++) {
    // temp에는 각 루프의 합계가 저장된다.
    let temp = 0;

    for (let j = 0; j < num; j++) {
      // j의 위치(index)가 옆으로 한 자리 이동하는데, 세가지 숫자를 더하는 방법이라고 볼 수 있다.
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
