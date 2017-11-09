function findLongestWord(str) {
  var str_a = str.split(" ");
  var longest_str = 0;
  for(i in str_a) {
    if (str_a[i].length >= longest_str) {
      longest_str = str_a[i].length;
    }
  }
  return longest_str;
}
console.log(findLongestWord("one two three oiwhfjd"));
// puts 7
