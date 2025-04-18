/**
Sliding Window - minSubArrayLen
양수 배열과 양수라는 두 개의 매개 변수를 받아들이는 minSubArrayLen이라는 함수를 작성하세요.

이 함수는 합이 함수에 전달된 정수보다 크거나 같은 인접한 하위 배열의 최소 길이를 반환해야 합니다. 값이 없는 경우 0을 반환합니다.


예시:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
 */

function minSubArrayLen(arr, num) {
  // 총 합
  let total = 0;
  // 시작 값
  let start = 0;
  // 끝 값
  let end = 0;
  // 최소 길이, 무한대로 설정
  // 왜 무한대로 설정했을까?
  //   처음에는 최소값이 뭔지 모르기때문에 가장 큰 값으로 시작하면서 값을 더하면서 줄여나간다.

  // 0으로 하면 안되는 이유는 실제로 구한 값을 갱신할 수 가 없다.
  let minLen = Infinity;

  while (start < arr.length) {
    // 지금까지 더한 합이 아직 num에 도달하지 않았을 때와 배열의 끝에 도달하지 않앗을 때
    if (total < num && end < arr.length) {
      total += arr[end];
      // 오른쪽으로 값을 확장해나간다.
      end++;
    } else if (total >= num) {
      // 조건 만족할 때마다 더 작은 길이로 갱신한다.
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
      // total < num인데 더 이상 end를 늘릴 수 없을 경우
    } else {
      break;
    }
  }

  //   조건을 만족하는 구간을 한 번도 못찾은 경우 return을 한다.
  return minLen === Infinity ? 0 : minLen;
}

minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
