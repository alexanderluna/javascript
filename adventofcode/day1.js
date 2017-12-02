let INPUT = process.argv[2].split('');
let sum = 0

INPUT.forEach((value, index) => {
  if (index + 1 == INPUT.length && INPUT[0] == value) sum += parseInt(value)
  if (value == INPUT[index + 1]) sum += parseInt(value)
})

console.log(sum);
