1. Learn About Functional Programming
```js
const prepareTea = () => 'greenTea';
const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);
```

2. Understand Functional Programming Terminology
```js
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```

3. Understand the Hazards of Using Imperative Code
```js
const Window = function(tabs) {
  this.tabs = tabs;
};

Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab');
  return this;
};

Window.prototype.tabClose = function(index) {

  const tabsBeforeIndex = this.tabs.splice(0, index);
  const tabsAfterIndex = this.tabs.splice(1);
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);

  return this;
 };

const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

const finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```

4. Avoid Mutations and Side Effects Using Functional Programming
```js
let fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}

let newValue = incrementer();
console.log(fixedValue);
```

5. Pass Arguments to Avoid External Dependence in a Function
```js
let fixedValue = 4;

function incrementer(fixedValue) {
  return fixedValue + 1;
}
```

6. Refactor Global Variables Out of Functions
```js
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  let newArray = [...arr];
  newArray.push(bookName);
  return newArray;
}

function remove(arr, bookName) {
  let newArray = [...arr];
  const book_index = newArray.indexOf(bookName);
  if (book_index >= 0) {
    newArray.splice(book_index, 1);
    return newArray;
  }
}
```