1. Sum All Numbers in a Range
```js
function sumAll(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }
  return sum;
}

sumAll([1, 4]);
```

2. Diff Two Arrays
```js
function diffArray(arr1, arr2) {
  const newArr = [];
  function onlyInFirst(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

3. Seek and Destroy
```js
function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```

4. Wherefore art thou
```js
function whatIsInAName(collection, source) {
  const collectionMatches = [];

  for (let i = 0; i < collection.length; i++) {
    let foundMismatch = false;

    for (const sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        foundMismatch = true;
      }
    }
    if (!foundMismatch) {
      collectionMatches.push(collection[i]);
    }
  }
  return collectionMatches;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
```

5. Spinal Tap Case
```js
function spinalCase(str) {
  let regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(regex, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
```

6. Pig Latin
```js
function translatePigLatin(str) {
  let pigLatin = "";
  let regex = /[aeiou]/gi;

  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    pigLatin = str + "ay";
  } else {
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }
  return pigLatin;
}

translatePigLatin("consonant");
```