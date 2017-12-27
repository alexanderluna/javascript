// take user input and create a array
let INPUT = process.argv[2].split('');
let sum = 0

// loop array & match values
INPUT.forEach((value, index) => {
  if (index + 1 == INPUT.length && INPUT[0] == value) sum += parseInt(value)
  if (value == INPUT[index + 1]) sum += parseInt(value)
})

// log results
console.log(sum);
