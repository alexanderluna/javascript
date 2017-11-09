function factorialize(num) {
  var n = 1
  for(var i=1; i<=num; i++) {
    n *= i
  }
  return n;
}
console.log(factorialize(10));
// outputs: 3628800
