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

7. Search and Replace
```js
function myReplace(str, before, after) {
  let index = str.indexOf(before);
  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  str = str.replace(before, after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

8. DNA Pairing
```js
function pairElement(str) {
  const matchWithBasePair = function (char) {
    switch (char) {
      case 'A': return ['A', 'T'];
      case 'T': return ['T', 'A'];
      case 'G': return ['G', 'C'];
      case 'C': return ['C', 'G'];
    }
  };

  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(matchWithBasePair(str[i]));
  }

  return pairs;
}

pairElement("GCG");
```

9. Missing letters
```js
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (charCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
```

10. Sorted Union
```js
function uniteUnique(arr1, arr2, arr3) {
  const finalArray = [];
  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i];
    for (let j = 0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

11. Convert HTML Entities
```js
function convertHTML(str) {
  let temp = str.split("");

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

convertHTML("Dolce & Gabbana");
```

12. Sum All Odd Fibonacci Numbers
```js
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

sumFibs(4);
```

13. Sum All Primes
```js
function sumPrimes(num) {
  function isPrime(num) {
    let endPoint = Math.sqrt(num);
    for (let i = 2; i <= endPoint; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }

  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum = sum + i;
    }
  }
  return sum;
}

sumPrimes(10);
```

14. Smallest Common Multiple
```js
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

console.log(smallestCommons([1, 5]));
```

15. Drop it
```js
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));
```

16. Steamroller
```js
function steamrollArray(arr) {
  const flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
```

17. Binary Agents
```js
function binaryAgent(str) {
  let biString = str.split(" ");
  let uniString = [];
  for (let i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  return uniString.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
```

18. Everything Be True
```js
function truthCheck(collection, pre) {
  let counter = 0;
  for (let c in collection) {
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  return counter == collection.length;
}

console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"));
```

19. Arguments Optional
```js
function addTogether() {
  const [first, second] = arguments;
  if (typeof (first) === "number") {
    if (typeof (second) === "number") return first + second;
    if (arguments.length === 1) return (second) => addTogether(first, second);
  }
}

console.log(addTogether(2, 5));
```

20. Make a Person
```js
const Person = function (first, last) {
  let firstName = first;
  let lastName = last;

  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFirstName = function (first) {
    return firstName = first;
  };

  this.setLastName = function (last) {
    return lastName = last;
  };

  this.setFullName = function (first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};

const bob = new Person("Bob", "Ross");
console.log(bob.getFullName());
```

21. Map the Debris
```js
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function (obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    return { name: obj.name, orbitalPeriod: orbPeriod };
  };

  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
```