1. Use an Array to Store a Collection of Data
```js
let yourArray = [true, 2, 'Karan', 4, 'john'];
```

2. Access an Array's Contents Using Bracket Notation
```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "not b anymore";
console.log(myArray);
```

3. Add Items to an Array with push() and unshift()
```js
function mixedNumbers(arr) {
  // Only change code below this line
    arr.push(7,'VIII',9);
    arr.unshift('I',2,'three');
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
```

4. Remove Items from an Array with pop() and shift()
```js
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift(); 
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

5. Remove Items Using splice()
```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1,4);
console.log(arr);
```

6. Add Items Using splice()
```js
function htmlColorNames(arr) {
arr.splice(0,2,"DarkSalmon","BlanchedAlmond");
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise','FireBrick']));
```

7. Copy Array Items Using slice()
```js
function forecast(arr) {
  return arr.slice(2, 4);
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

8. Copy an Array with the Spread Operator
```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
  newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
```

9. Combine Arrays with the Spread Operator
```js
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ["learning",...fragment,"is","fun"];; // Change this line
  return sentence;
}

console.log(spreadOut());
```

10. Check For The Presence of an Element With indexOf()
```js
function quickCheck(arr, elem) {
   if(arr.indexOf(elem) >= 0){
        return true;
   }
   else {
    return false;
   }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

11. Iterate Through All an Array's Items Using For Loops
```js
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

12. Create complex multi-dimensional arrays
```js
let myNestedArray = [
  'level 1',
  ['level 2'],
  [['level 3', 'deep']],
  [[['level 4', 'deeper']]],
  [[[['level 5', 'deepest']]]]
];
```

13. Add Key-Value Pairs to JavaScript Objects
```js
const foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
console.log(foods);
```

14. Modify an Object Nested Within an Object
```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;
console.log(userActivity);
```

15. Access Property Names with Bracket Notation
```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

console.log(checkInventory("apples"));
```

16. Use the delete Keyword to Remove Object Properties
```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```

17. Check if an Object has a Property
```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  return userObj.hasOwnProperty('Alan') &&
    userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan');
}

console.log(isEveryoneHere(users));
```

18. Iterate Through the Keys of an Object with a for...in Statement
```js
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  let result = 0;
  for (let user in allUsers) {
    if (allUsers[user].online == true) {
      result++;
    }
  }
  return result;
}

console.log(countOnline(users));
```

19. Generate an Array of All Object Keys with Object.keys()
```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(users);
}

console.log(getArrayOfUsers(users));
```

20. Modify an Array Stored in an Object
```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  user.data.friends.push(friend);
  return user.data.friends;
}

console.log(addFriend(user, 'Pete'));
```