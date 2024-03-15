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
let fccRegex = /freecodecamp/i;
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
```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
```

13. Match Characters that Occur Zero or More Times
```js
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
```

14. Find Characters with Lazy Matching
```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);
```

15. Find One or More Criminals in a Hunt
```js
let reCriminals = /C+/g; 
// greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.
```

16. Match Beginning String Patterns
```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);
```

17. Match Ending String Patterns
```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);
```

18. Match All Letters and Numbers
```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;
```

19. Match Everything But Letters and Numbers
```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;
```

20. Match All Numbers
```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;
```

21. Match All Non-Numbers
```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;
```

22. Restrict Possible Usernames
```js
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
```

23. Match Whitespace
```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```

24. Match Non-Whitespace Characters
```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
```

25. Specify Upper and Lower Number of Matches
```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);
```

26. Specify Only the Lower Number of Matches
```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);
```

27. Specify Exact Number of Matches
```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);
```

28. Check for All or None
```js
let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);
```

29. Positive and Negative Lookahead
```js
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
```

30. Check For Mixed Grouping of Characters
```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; 
let result = myRegex.test(myString);
```

31. Reuse Patterns Using Capture Groups
```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);
```

32. Use Capture Groups to Search and Replace
```js
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);
```

33. Remove Whitespace from Start and End
```js
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
```