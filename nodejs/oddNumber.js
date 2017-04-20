var newArray = [];
// var oddNumber = process.argv[2];
var oddNumber = [1,2,2,2,3,3,3,3,3,5,5,5,5,6,7,8,9,10,11,12,13,14]

function findNumber(oddNumber){
  console.log(oddNumber);
  for (var i = 0; i < oddNumber.length; i++) {
    if (oddNumber[i] % 2 == 1) {
      console.log("Modulo: " + oddNumber[i]);
      console.log("Number: " + oddNumber);
      if (newArray.includes(oddNumber[i])) {
      } else {
          newArray.push(oddNumber[i]);
      }
    }
  }
  return newArray;
}

console.log(findNumber(oddNumber));
