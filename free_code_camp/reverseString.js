var test_string = "Greetings from Earth";

function reverseString(str) {
  var s = "";
  for (var i=str.length; i>0; i--) {
    s += str.charAt(i-1);
  }
   return s;
}

console.log(reverseString(test_string));
