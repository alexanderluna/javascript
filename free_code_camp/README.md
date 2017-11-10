# Free Code Camp

[Free code camp](https://www.freecodecamp.org/) javascript exercises.

- [reverseString](#reverseString)
- [factoralize](#factoralize)
- [largestArray](#largestArray)
- [palindrome](#palindrome)
- [longestWord](#longestWord)
- [compareEnding](#compareEnding)
- [titleCase](#titleCase)
- [repeatString](#repeatString)
- [truncateString](#truncateString)
- [chunkArrayInGroups](#chunkArrayInGroups)
- [slasherFlick](#slasherFlick)
- [mutation](#mutation)



### <a name="reverseString">Reverse String</a>

Reverse the provided string.
- [View Source](reverseString.js)

```
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
- [View Source](factoralize.js)

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
- [View Source](largestArray.js)

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
- [View Source](palindrome.js)

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
- [View Source](longestWord.js)

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
- [View Source](compareEnding.js)

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
- [View Source](titleCase.js)

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


### <a name="repeatString">Repeat String</a>

Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
- [View Source](repeatString.js)

```
function repeatStringNumTimes(str, num) {
  if(!(Math.sign(num) == 1)){ return '';}
  var newStr = "";
  for (var i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}
```
---


### <a name="truncateString">Truncate String</a>

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
- [View Source](truncateString.js)

```
function truncateString(str, num) {
  if(str.length <= num){ return str; }
  if (num >= 5) { num = num - 3 }
  var new_str = str.slice(0, num)
  new_str += '...'
  return new_str;
}
```
---


### <a name="chunkArrayInGroups">Chunk Array in Groups</a>

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
- [View source](chunkArray.js)

```
function chunkArrayInGroups(arr, size) {
  var newArr = []
  for (var i = 0; i < arr.length/size; i++) {
    var start = i * size;
    var finish = start + size;
    newArr.push(arr.slice(start, finish));
  }
  return newArr;
}
```
---


### <a name="slasherFlick">Slasher Flick</a>

Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
- [View source](slasherFlick.js)

```
function slasher(arr, howMany) {
  var newArr = arr.slice(howMany);
  return newArr;
}
```
---


### <a name="mutation">Mutation</a>

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

- [View source](mutation.js)

```
function mutation(arr) {
  let arr_0 = arr[0].toLowerCase();
  let arr_1 = arr[1].toLowerCase();
  for (let i of arr_1.split('')) {
    if (!arr_0.includes(i)) { return false; }
  }
  return true;
}
```
---
