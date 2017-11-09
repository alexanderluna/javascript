# Free Code Camp

[Free code camp](https://www.freecodecamp.org/) javascript exercises.

- [reverseString](#reverseString)
- [factoralize](#factoralize)
- [largestArray](#largestArray)
- [palindrome](#palindrome)
- [longestWord](#longestWord)
- [compareEnding](#compareEnding)
- [titleCase](#titleCase)



### <a name="reverseString">Reverse String</a>

Reverse the provided string.

```
var test_string = "Greetings from Earth";

function reverseString(str) {
  var s = "";
  for (var i=str.length; i>0; i--) {
    s += str.charAt(i-1);
  }
   return s;
}
```
---

### <a name="factoralize">Factoralize</a>

Return the factorial of the provided integer.
For example: ```5! = 1 * 2 * 3 * 4 * 5 = 120```

```
function factorialize(num) {
  var n = 1
  for(var i=1; i<=num; i++) {
    n *= i
  }
  return n;
}
```
---


### <a name="largestArray">Largest Array</a>

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

```
function largestOfFour(arr) {
  var largest = [];
  for (var arr_index in arr) {
    largest[arr_index] = 0;
    for (var index in arr[arr_index]) {
      if (arr[arr_index][index] > largest[arr_index]) {
        largest[arr_index] = arr[arr_index][index];
      }
    }
  }
  return largest;
}
```
---


### <a name="palindrome">Palindrome</a>

Return true if the given string is a palindrome. Otherwise, return false.

```
function palindrome(str) {
  var str_cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  var str_reversed = str_cleaned.split("").reverse().join("");
  //console.log(str_reversed);
  if(str_cleaned == str_reversed) {
    return true
  } else {
    return false
  }
}
```
---


### <a name="longestWord">Longest Word</a>

Return the length of the longest word in the provided sentence.

```
function findLongestWord(str) {
  var str_a = str.split(" ");
  var longest_str = 0;
  for(i in str_a) {
    if (str_a[i].length >= longest_str) {
      longest_str = str_a[i].length;
    }
  }
  return longest_str;
}
```
---


### <a name="compareEnding">Compare Ending</a>

Check if a string (first argument, str) ends with the given target string (second argument, target)

```
function confirmEnding(str, target) {
  if (str.substr(str.length - target.length, str.length) == target) {
    return true;
  } else {
    return false;
  }
}
```
---


### <a name="titleCase">Title Case</a>

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

```
function titleCase(str) {
  var str_a = str.toLowerCase().split(" ");
  for (var i in str_a) {
    str_a[i] = str_a[i].charAt(0).toUpperCase() + str_a[i].slice(1);
  }
  return str_a.join(" ");
}
```
---
