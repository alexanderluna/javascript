function mutation(arr) {
  let arr_0 = arr[0].toLowerCase();
  let arr_1 = arr[1].toLowerCase();
  for (let i of arr_1.split('')) {
    if (!arr_0.includes(i)) { return false; }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
