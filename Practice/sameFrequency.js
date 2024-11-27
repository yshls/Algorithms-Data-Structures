function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num1Digit = num1.length;
  num2 = num2.toString();
  num2Digit = num2.length;

  if (num1Digit == num2Digit) {
    return true;
  } else {
    return false;
  }
}
sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
