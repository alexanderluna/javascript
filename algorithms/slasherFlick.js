function slasher(arr, howMany) {
  var newArr = arr.slice(howMany);
  return newArr;
}

console.log(slasher([1, 2, 3], 2));
console.log(slasher([1, 2, 3], 0));
console.log(slasher([1, 2, 3], 9));
