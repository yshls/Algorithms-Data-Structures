function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return; // 함수를 종료하라는 의미
  }
  console.log(num);
  num--;
  countDown(num);
}
