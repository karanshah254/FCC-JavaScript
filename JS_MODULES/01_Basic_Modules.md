## Basic Of JavaScript

# Module - 1

1. Comment Your Java-Script Code 

    ```js
    // This is in-line comment 
    /* This is s multi-line comment */    
    ```

2. Declare JavaScript Variables 
- > JavaScript provides eight different data types .
- > They are undefined, null, boolean, string, symbol, bigint, number, and object .
- > We tell JavaScript to create or declare a variable by putting the keyword [var] in front of it .

    ```js
    var a;
    ```

3. Storing Values with the Assignment Operator
- > In JavaScript, you can store a value in a variable with the assignment operator (=) .

    ```js
    var a; // Declared the variable a 
    a=7;   // Assigned value 7 to a
    ```

4. Assigning the Value of One Variable to Another
- > We can assign the value of one variable to another by using (=) . 

    ```js
    var a; //Declared variable a .
    a=5;   // Assign value 7 to a .
    var b; // Declare variable b .
    b=a;   // Assign the value of a to b .
    ```

5. Initializing a variable an initial value in the same line .
- > Initializing in same line . 

    ```js
    var a=9; // Initialized the value 9 to variable a .
    ```

6. Declaring String Variables
- > A string literal, or string, is a series of characters enclosed in single or double quotes.

    ```js
    var myName = "name" ;  //  "name" is known as string literals .
    ```

7. Understanding Uninitialized Variables
- > Below is the example ,

    ```js
    var a=5;
    var b=10;
    var c="I am a";

    a = a + 1;          // value of a is now 6  
    b = b + 5;          // value of b is now 15  
    c = c + " String!"; // value of c is "I am a String"
    ```

8. Understanding Case Sensitivity in Variables
- > Variable should be in camelCase .
- >  In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized .

    ```js
    var someVariable;
    someVariable = 10 ;
    ```

9. Explore Differences Between the var and let Keywords
- > (var) can have same variable name 
- > But when you use (let), a variable with the same name can only be declared once. 

    ```js
    var myName = "Karan" ;
    var myname = "Shah" ;
    log.console(myName);  //gives output "Shah" & console.log(varaible_name); prints the output

    let myName = "Karan" ;
    let myName = "Shah" ;
    log.console(myName);  // throws error and gives no output 
    ```

10. Declare a Read-Only Variable with the const Keyword
- > (const) keyword assigns a constant value, which means that once a variable is assigned with const, it cannot be reassigned .

    ```js
    const FCC = "freeCodeCamp"; // assigns the constant value "freeCodeCamp"
    let fact = "is cool!"; // assigns the value "is awesome"
    fact = "is awesome!";
    console.log(FCC, fact); // gives output "freeCodeCamp is awesome"
    ```

11. Add Two Numbers with JavaScript
- > JavaScript uses the + symbol as an addition operator when placed between two numbers.

    ```js
    const sum = 10 + 10 // sum will be 20 
    ```

12. Subtract One Number from Another with JavaScript
- > JavaScript uses the - symbol for subtraction .

    ```js
    const diff = 45 - 33 ; // diff will be 12
    ```

13. Multiply Two Numbers with JavaScript
- > JavaScript uses the * symbol for multiplication of two numbers.

    ```js
    const product = 8 * 10 ;  // product will be 80
    ```

14. Divide One Number by Another with JavaScript
- > JavaScript uses the / symbol for division .

    ```js
    const quotient = 66 / 33;  // quotient will be 2 
    ```

15. Increment a Number with JavaScript
- > You can increment or add one to a variable with the (++) operator.

    ```js
    let myVar = 87 ;
    myVar++ ;  // (myVar++;) is equivalent to (myVar = myVar + 1 ;)
    ```

16. Decrement a Number with JavaScript
- > You can decrement or decrease a variable by one with the (--) operator.

    ```js
    let myVar = 11;
    myVar-- ;  // myVar-- is equivalent to myVar = myVar - 1 ;
    ```

17. Create Decimal Numbers with JavaScript
- > Decimal numbers are sometimes referred to as floating point numbers or floats. 
- > Eg : 4.5, 5.7, etc  

    ```js
    let myDecimal = 5.7 ;    // myDecimal will be 5.7 
    ```

18. Multiply Two Decimals with JavaScript

    ```js
    const product = 5.0 * 1.0 ;  // product will be 5.0 
    ```

19. Divide One Decimal by Another with JavaScript

    ```js
    const quotient = 4.4 / 2 ; // quotient will be 2.2 
    ```

20. Finding a Remainder in JavaScript

    ```js
    const remainder = 11 % 3;  // remainder will be 2
    ```

21. Compound Assignment With Augmented Addition

    ```js
    let a = 3;
    let b = 17;
    let c = 12;

    a+=12;
    b+=9;
    c+=7;

    console.log(a,b,c);  // gives output 15 26 19
    ```


22. Compound Assignment With Augmented Subtraction

    ```js
    let a = 11;
    let b = 9;
    let c = 3;

    a -= 6;
    b -= 15;
    c -= 1;

    console.log(a,b,c); // prints 5 -6 2 as a output
    ```
23. Compound Assignment With Augmented Multiplication

    ```js
    let a = 5;
    let b = 12;
    let c = 4.6;

    a *= 5; // equvalent to a = a * 5 ;
    b *= 3 ; // equvalent to b = b * 3 ;
    c *= 10 ; // equvalent to c = c * 3 ;
    ```
24. Compound Assignment With Augmented Division

    ```js
    let a = 48;
    let b = 108;
    let c = 33;

    a /= 12; // equivalent to a = a / 12;
    b /= 4;  // equivalent to b = b / 4;
    c /=  11; // equivalent to c = c / 11;
    ```
25. Escaping Literal Quotes in Strings
- > When you are defining a string you must start and end with a single or double quote .
- > In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote .

    ```js
    const myStr = "I am a \"double quoted\" string inside \"double quotes\"." 

    console.log(myStr); // Gives output I am a "double quoted" string inside "double quotes".
    ```

26. Quoting Strings with Single Quotes
- > String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote.
- > Unlike some other programming languages, single and double quotes work the same in JavaScript.

    ```js
    const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
    ```

27. Escape Sequences in Strings

    ```js
    Code	Output
    \'	    single quote
    \"	    double quote
    \\	    backslash
    \n	    newline
    \t	    tab
    \r	    carriage return
    \b	    word boundary
    \f	    form feed
    ```

    ```js
    const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
    console.log(myStr); 
    
    /* Output : 

    FirstLine
	    \SecondLine
    ThirdLine

    */
    ```

28. Concatenating Strings with Plus Operator
- > In JavaScript, when the + operator is used with a String value, it is called the concatenation operator .

    ```js
    const myStr = "This is the start. "+"This is the end."; // Change this line

    console.log(myStr); // Output is This is the start. This is the end.
    ```

29. Concatenating Strings with the Plus Equals Operator
- > We can also use the += operator to concatenate a string onto the end of an existing string variable.
- >This can be very helpful to break a long string over several lines.

    ```js
    let myStr="This is the first sentence.";
    myStr+= " This is the second sentence.";

    console.log(myStr); 

    /* Output : 
    This is the first sentence. This is the second sentence.
    */
    ```

30. Constructing Strings with Variables
- > By using the concatenation operator (+), you can insert one or more variables into a string you're building.

    ```js
    const myName = "Karan Shah";
    const myStr = "My name is "+ myName +" and I am well!";

    console.log(myStr);

    /*
    Output = My name is Karan Shah and I am well!
    */
    ```

31. Appending Variables to Strings
- > Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

    ```js
    const someAdjective = "so much awesome.";
    let myStr = "Learning to code is ";
    myStr += someAdjective;

    console.log(myStr);

    /*
    Output = Learning to code is so much awesome.
    */
    ```
32. Find the Length of a String
- > You can find the length of a String value by writing .length after the string variable or string literal.

    ```js
    let lastNameLength = 0;
    const lastName = "Lovelace";

    lastNameLength = lastName.length ;

    console.log(lastName.length);
    /*
    Output = gives 8 
    ```

33. Use Bracket Notation to Find the First Character in a String
- > Bracket notation is a way to get a character at a specific index within a string.
- > Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

    ```js
    let firstLetterOfLastName = "";
    const lastName = "Lovelace";

    firstLetterOfLastName = lastName[0]; 

    console.log(firstLetterOfLastName); // Output = L 
    ```

34. Understand String Immutability
- > In JavaScript, String values are immutable, which means that they cannot be altered once created.

    ```js
    // Setup
    let myStr = "Jello World";

    myStr = "Hello World"; 

    console.log(myStr); // Output = Hello World
    ```

35. Use Bracket Notation to Find the Nth Character in a String
- > You can also use bracket notation to get the character at other positions within a string.

    ```js
    const lastName = "Code is Love";

    const thirdLetterOfLastName = lastName[2]; 

    console.log(thirdLetterOfLastName); //Output = d
    ```

36. Use Bracket Notation to Find the Last Character in a String
- > In order to get the last letter of a string, you can subtract one from the string's length.

    ```js
    const lastName = "Lovelace";

    const lastLetterOfLastName = lastName[lastName.length - 1]; 

    console.log(lastLetterOfLastName); // Output is 'e'
    ```

37. Use Bracket Notation to Find the Nth-to-Last Character in a String
- > You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

    ```js
    const lastName = "Lovelace";

    const secondToLastLetterOfLastName = lastName[lastName.length - 2];

    console.log(secondToLastLetterOfLastName);  // Output = 'c'
    ```

38. Word Blanks
- > You are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

    ```js
    const myNoun = "dog";
    const myAdjective = "big";
    const myVerb = "ran";
    const myAdverb = "quickly";

     wordBlanks = "The " + myAdjective + " " + myNoun +" "+ myVerb +" "+ myAdverb + "." ; 

    console.log(wordBlanks); // Output = The big dog ran quickly.
    ```

39. Store Multiple Values in one Variable using JavaScript Arrays
- > With JavaScript "array" variables, we can store several pieces of data in one place.

    ```js

    const myArray = ["Karan",18];

    ```

40. Nest one Array within Another Array
- > This is also called a multi-dimensional array.

    ```js

    const myArray = [["Karan Shah",25]];

    ```

41. Access Array Data with Indexes
- > Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array.

    ```js
    const myArray = [50, 60, 70];

    const myData =  myArray[0];

    console.log(myData); // Output = 50
    ```

42.Modify Array Data With Indexes
- > Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with "const" .

    ```js
    const myArray = [18, 64, 99];

    myArray[0] = 45;

    console.log(myArray); // Output => [ 45, 64, 99 ] 

    ```

43. Access Multi-Dimensional Arrays With Indexes
- > One way to think of a multi-dimensional array, is as an array of arrays.

    ```js
    const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
    ];

    const myData = myArray[2][1];

    console.log(myData); // Output => 8
    ```

44. Manipulate Arrays With push Method
- > An easy way to append data to the end of an array is via the "push()" function.
- > ".push()" takes one or more parameters and "pushes" them onto the end of the array.

    ```js

    const myArray = [["John", 23], ["cat", 2]];

    myArray.push(["dog",3]);

    console.log(myArray);
 
    // Output = > [ [ 'John', 23 ], [ 'cat', 2 ], [ 'dog', 3 ] ]

    ```

45. Manipulate Arrays With "pop" Method
- > Another way to change the data in an array is with the .pop() function.
- > ".pop()" is used to pop a value off of the end of an array.

    ```js

    const myArray = [["John", 23], ["cat", 2]];

    var removedFromMyArray = myArray.pop();

    console.log(removedFromMyArray);  

    // Output = > [ 'cat', 2 ]

    ```

46. Manipulate Arrays With shift Method
- > .shift() is used to remove the first character of string 
- > The command is [variable_name.shift();]

    ```js
     myArray = [["John", 23], ["dog", 3]];

    const removedFromMyArray = myArray.shift();

    console.log(myArray);

    // Output = > [ [ 'dog', 3 ] ]
    ```

47. Manipulate Arrays With unshift Method
- > ".unshift()" adds the the words at beginning os a string .

    ```js
    const myArray = [["John", 23], ["dog", 3]];
    myArray.shift();

    myArray.unshift(["Paul",35]);

    console.log(myArray);
    
    // Output = > [ [ 'Paul', 35 ], [ 'dog', 3 ] ] 
    ```

