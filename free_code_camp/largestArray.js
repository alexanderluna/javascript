function largestOfFour(arr) {
  var largest = [];
  for (var arr_index in arr) {
    largest[arr_index] = 0;
    for (var index in arr[arr_index]) {
      if (arr[arr_index][index] > largest[arr_index]) {
        largest[arr_index] = arr[arr_index][index];
      }
    }
  }
  return largest;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// outputs: [ 5, 27, 39, 1001 ]
