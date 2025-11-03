function bouncer(arr) {
  var arr = arr.filter((item) => {
    if (item) return item;
  });
  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([1, null, NaN, 2, undefined]));
