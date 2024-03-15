1. Using the Test Method
```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
```

2. Match Literal Strings
```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result = waldoRegex.test(waldoIsHiding);
```

3. Match a Literal String with Different Possibilities
```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
```

4. Ignore Case While Matching
```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
```

5. Extract Matches
```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
```

6. Find More Than the First Match
```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result = twinkleStar.match(starRegex); 
```

7. Match Anything with Wildcard Period
```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
```

8. Match Single Character with Multiple Possibilities
```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex); 
```

9. Match Letters of the Alphabet
```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);
```

10. Match Numbers and Letters of the Alphabet
```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex); 
```

11. Match Single Characters Not Specified
```js
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; 
let result = quoteSample.match(myRegex); 
```

12. Match Characters that Occur One or More Times