function getIndexToIns(arr, num) {
  let num_index = 0;
  var newArr = arr.sort((a,b) => a - b);
  for(index of newArr) {
    if(index < num) num_index++;
  }
  return num_index;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([2, 20, 10], 19));
