function confirmEnding(str, target) {
  if (str.substr(str.length - target.length, str.length) == target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));

// outputs: true, true, false
