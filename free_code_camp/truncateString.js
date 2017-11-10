function truncateString(str, num) {
  if(str.length <= num){ return str; }
  if (num >= 5) { num = num - 3 }
  var new_str = str.slice(0, num)
  new_str += '...'
  return new_str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("hello", 1));
