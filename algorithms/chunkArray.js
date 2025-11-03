function chunkArrayInGroups(arr, size) {
  var newArr = [];
  for (var i = 0; i < arr.length/size; i++) {
    var start = i * size;
    var finish = start + size;
    newArr.push(arr.slice(start, finish));
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
