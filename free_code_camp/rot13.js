function rot13(str) { // LBH QVQ VG!
  var new_string = "";
  for (character of str) {
    var charCode = character.charCodeAt();
    switch (true) {
      case (charCode < 65 || charCode > 90):
        new_string += String.fromCharCode(charCode);
        break;
      case (charCode < 78):
        new_string += String.fromCharCode(charCode + 13);
        break;
      default:
        new_string += String.fromCharCode(charCode - 13)

    }
  }
  return new_string;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("LBH QVQ VG!"));
