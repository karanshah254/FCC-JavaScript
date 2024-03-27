1. Convert Celsius to Fahrenheit
```js
function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

convertCtoF(30);
```

2. Reverse a String
```js
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

reverseString("hello");
```

3. Factorialize a Number
```js
function factorialize(num) {
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

factorialize(5);
```

4. Find the Longest Word in a String
```js
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

5. Return Largest Numbers in Arrays
```js
function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];
    for (let j = 1; j < arr.length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    results[i] = largest;
  }
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

6. Confirm the Ending
```js
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
```

7. Repeat a String Repeat a String
```js
function repeatStringNumTimes(str, num) {
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
```

8. Truncate a String
```js
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  else {
    return str;
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```

9. Finders Keepers
```js
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if(func(num)){
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

10. Boo who
```js
function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);
```

11. Title Case a Sentence
```js
function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

titleCase("I'm a little tea pot");
```

12. Slice and Splice
```js
function frankenSplice(arr1, arr2, n) {
  let newArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    newArray.splice(n, 0, arr1[i]);
    n++;
  }
  return newArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

13. Falsy Bouncer
```js
function bouncer(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i])
    }
  }
  console.log(newArray);
  return newArray;
}

bouncer([7, "ate", "", false, 9]); // returns [ 7, 'ate', 9 ]
```

14. Where do I Belong
```js
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);
```

15. Mutations
```js
function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
```

16. Chunky Monkey
```js
function chunkArrayInGroups(arr, size) {
  const newArray = [];
  while(arr.length > 0){
    newArray.push(arr.splice(0,size));
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```