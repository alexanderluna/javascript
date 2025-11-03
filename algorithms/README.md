# Free Code Camp

[Free code camp](https://www.freecodecamp.org/) javascript exercises.

- [Free Code Camp](#free-code-camp)
  - [Reverse String](#reverse-string)
  - [Factoralize](#factoralize)
  - [Largest Array](#largest-array)
  - [Palindrome](#palindrome)
  - [Longest Word](#longest-word)
  - [Compare Ending](#compare-ending)
  - [Title Case](#title-case)
  - [Repeat String](#repeat-string)
  - [Truncate String](#truncate-string)
  - [Chunk Array in groups](#chunk-array-in-groups)
  - [Slasher Flick](#slasher-flick)
  - [Mutation](#mutation)
  - [Destroyer](#destroyer)
  - [Get Index to Ins](#get-index-to-ins)

## [Reverse String](reverseString.js)

Reverse the provided string.

```javascript
function reverseString(str) {
  var s = "";
  for (var i=str.length; i>0; i--) {
    s += str.charAt(i-1);
  }
   return s;
}
```

## [Factoralize](factoralize.js)

Return the factorial of the provided integer.
For example: ```5! = 1 * 2 * 3 * 4 * 5 = 120```

```javascript
function factorialize(num) {
  var n = 1
  for(var i=1; i<=num; i++) {
    n *= i
  }
  return n;
}
```

## [Largest Array](largestArray.js)

Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

```javascript
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

## [Palindrome](palindrome.js)

Return true if the given string is a palindrome. Otherwise, return false.

```javascript
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

## [Longest Word](longestWord.js)

Return the length of the longest word in the provided sentence.

```javascript
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

## [Compare Ending](compareEnding.js)

Check if a string (first argument, str) ends with the given target string
(second argument, target)

```javascript
function confirmEnding(str, target) {
  if (str.substr(str.length - target.length, str.length) == target) {
    return true;
  } else {
    return false;
  }
}
```

## [Title Case](titleCase.js)

Return the provided string with the first letter of each word capitalized. Make
sure the rest of the word is in lower case.

```javascript
function titleCase(str) {
  var str_a = str.toLowerCase().split(" ");
  for (var i in str_a) {
    str_a[i] = str_a[i].charAt(0).toUpperCase() + str_a[i].slice(1);
  }
  return str_a.join(" ");
}
```

## [Repeat String](repeatString.js)

Repeat a given string (first argument) num times (second argument). Return an
empty string if num is not a positive number.

```javascript
function repeatStringNumTimes(str, num) {
  if(!(Math.sign(num) == 1)){ return '';}
  var newStr = "";
  for (var i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}
```

## [Truncate String](truncateString.js)

Truncate a string (first argument) if it is longer than the given maximum string
length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then
the addition of the three dots does not add to the string length in determining
the truncated string.

```javascript
function truncateString(str, num) {
  if(str.length <= num){ return str; }
  if (num >= 5) { num = num - 3 }
  var new_str = str.slice(0, num)
  new_str += '...'
  return new_str;
}
```

## [Chunk Array in groups](chunkArray.js)

Write a function that splits an array (first argument) into groups the length of
size (second argument) and returns them as a two-dimensional array.

```javascript
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

## [Slasher Flick](slasherFlick.js)

Return the remaining elements of an array after chopping off n elements from the
head. The head means the beginning of the array, or the zeroth index.

```javascript
function slasher(arr, howMany) {
  var newArr = arr.slice(howMany);
  return newArr;
}
```

## [Mutation](mutation.js)

Return true if the string in the first element of the array contains all of the
letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters
in the second string are present in the first, ignoring case.

```javascript
function mutation(arr) {
  let arr_0 = arr[0].toLowerCase();
  let arr_1 = arr[1].toLowerCase();
  for (let i of arr_1.split('')) {
    if (!arr_0.includes(i)) { return false; }
  }
  return true;
}
```

## [Destroyer](destroyer.js)

You will be provided with an initial array (the first argument in the destroyer
function), followed by one or more arguments. Remove all elements from the
initial array that are of the same value as these arguments.

```javascript
function destroyer(arr, ...custom_filter) {
  for(argument of custom_filter) {
    arr = arr.filter((item) => {
      if (item != argument) return item;
    });
  }
  return arr;
}
```

## [Get Index to Ins](getIndexToIns.js)

Return the lowest index at which a value (second argument) should be inserted
into an array (first argument) once it has been sorted. The returned value
should be a number.

For example, ```getIndexToIns([1,2,3,4], 1.5)``` should return ```1``` because
it is greater than 1 (index 0), but less than 2 (index 1).

```javascript
function getIndexToIns(arr, num) {
  let num_index = 0;
  var newArr = arr.sort((a,b) => a - b);
  for(index of newArr) {
    if(index < num) num_index++;
  }
  return num_index;
}
```
