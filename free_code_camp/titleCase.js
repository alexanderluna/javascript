function titleCase(str) {
  var str_a = str.toLowerCase().split(" ");
  for (var i in str_a) {
    str_a[i] = str_a[i].charAt(0).toUpperCase() + str_a[i].slice(1);
  }
  return str_a.join(" ");
}
console.log(titleCase("I'm a little tea pot"));
// outputs: I'm A Little Tea Pot
