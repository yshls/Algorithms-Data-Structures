function validAngram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const obj = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // 글자가 존재하면 1을 증가하고 그렇지 않으면 1로 설정해라
    obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }
  for (let i = 0; second.lenth; i++) {
    let letter = second[i];
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
