function repeatStringNumTimes(str, num) {
  if(!(Math.sign(num) == 1)){ return '';}
  var newStr = "";
  for (var i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", -5)); // should not work
