function palindrome(str) {
  var str_cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  var str_reversed = str_cleaned.split("").reverse().join("");
  //console.log(str_reversed);
  if(str_cleaned == str_reversed) {
    return true
  } else {
    return false
  }
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));

// return true
