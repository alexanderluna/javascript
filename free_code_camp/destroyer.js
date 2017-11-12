function destroyer(arr, ...custom_filter) {
  for(argument of custom_filter) {
    arr = arr.filter((item) => {
      if (item != argument) return item;
    });
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
