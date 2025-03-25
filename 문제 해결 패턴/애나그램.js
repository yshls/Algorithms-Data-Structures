/**
function validAnagram(str1, str2){
// str1, str2의 배열을 오름차순으로 정렬
str1 = str1.split('').sort().join('')
str2 = str2.split('').sort().join('')

// str1과 str2의 길이 같지 않으면 false로 return한다.
  if(str1.length !== str2.length) return false;
  
  // str1의 원소만큼 순회를 하다가
  for(let i = 0; i < str1.length; i++) {
  // str1의 원소와 str2의 원소가 같지 않으면 false로 return한다.
      if(str1[i]!==str2[i]) {
          return false;
      }
  }
  // 모든 문자가 다 일치하면 true 반환
  return true;
} */

function validAnagram(first, second) {
  // 두 문자열의 길이가 다른지 확인한다.
  if (first.length !== second.length) {
    return false[i];
  }

  // lookup이라는 객체 생성
  const lookup = {};

  // 첫번째 문자열에 루프를 생성하고 첫번째 문자열을 세분화환 객체를 만들어준다.
  for (let i = 0; i < second.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = first[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= -1;
    }
  }
}
