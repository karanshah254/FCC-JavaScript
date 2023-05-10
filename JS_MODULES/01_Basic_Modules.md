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

48. Shopping List
- > Create a shopping list in the variable (myList). The list should be a multi-dimensional array containing several sub-arrays.

    ```js
    const myList = [["Chocolate",30],["Apple",50],["Banana",50],["Milk",50],["Cereal",50],["Spices",80]];

    console.log(myList);

    /* Output :-
    [   
        [ 'Chocolate', 30 ],
        [ 'Apple', 50 ],
        [ 'Banana', 50 ],
        [ 'Milk', 50 ],
        [ 'Cereal', 50 ],
        [ 'Spices', 80 ] 
        
    ] 
    */
    ```

49. Write Reusable JavaScript with Functions
- > A Basic Example is given below :

    ```js
    reusableFunction();

    function reusableFunction(){
        console.log("Hi World");
    }

    /*
    Gives output Hi World
    */
    ```

50. Passing Values to Functions with Arguments
- > Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. 
- > When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

    ```js
    function functionWithArgs(a,b)
    {
        console.log(a+b);
    }

    functionWithArgs(1,2); // Output : 3
    functionWithArgs(7,9); // Output : 16
    ```

51. Return a Value from a Function with Return
- > You can use a (return) statement to send a value back out of a function.

    ```js
    function timesFive(number)
    {
        return number * 5;
    }

    const ans= timesFive(5); 
    const ans1 = timesFive(2); 
    const ans2 = timesFive(0); 

    console.log(ans,ans1,ans2); // Output = 25 10 0
    ```

52. Global Scope and Functions
- > In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

    ```js
    // Declare the myGlobal variable below this line
    const myGlobal = 10;

    function fun1() 
    {
        oopsGlobal =5;
    }

    function fun2() 
    {
        let output = "";
        if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    
    if (typeof oopsGlobal != "undefined") 
    {
        output += " oopsGlobal: " + oopsGlobal;
    }
    
    console.log(output);
    
    }

    // Output = [ myGlobal: 10 oopsGlobal: 5 ]
    ```

53. Local Scope and Functions
- > Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

    ```js
    function myLocalScope() \
    {
        const myVar=5;
        console.log('inside myLocalScope =', myVar);
    }
    
    myLocalScope();

    // Output = (inside myLocalScope = 5)
    ```

54. Global vs. Local Scope in Functions
- > When you do this, the local variable takes precedence over the global variable.

    ```js

    const outerWear = "T-Shirt";

    function myOutfit() 
    {
        const outerWear ="sweater" ;
        return outerWear;
    }

    myOutfit();

    console.log(myOutfit());  // Now Output will be sweater 

    ```

55. Understanding Undefined Value returned from a Function

    ```js
    // function without arguments and return value 
    let sum = 0;

    function addThree() 
    {
        sum = sum + 3;
    }

    function addFive()
    {
        sum = sum+ 5 ;
    }

    addThree();
    addFive();

    ```

56. Assignment with a Returned Value

    ```js

    let processed = 0;

    function processArg(num) 
    {
        return (num + 3) / 5;
    }

    processed = processArg(7);  
    // Assigned value of func. processArg to variable processed .

    console.log(processArg(7)); // Gives output [(7+3)/5] = 2

    ```

57. Stand in Line
- > In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

    ```js
    function nextInLine(arr, item) 
    {
        arr.push(item);
        return arr.shift(); 
    }

    let testArr = [1, 2, 3, 4, 5];

    // Display code
    console.log("Before: " + JSON.stringify(testArr));
    console.log(nextInLine(testArr, 6));
    console.log("After: " + JSON.stringify(testArr));

    /*
    Output :- 
    Before: [1,2,3,4,5]
    1
    After: [2,3,4,5,6]
    */
    ```

58. Understanding Boolean Values

    ```js

    function welcomeToBooleans() 
    {
        return true; // Gives Output as a True .
    }

    ```

59. Use Conditional Logic with If Statements

    ```js
    
    function trueOrFalse(wasThatTrue) 
    {
        if(wasThatTrue)
        {
            return "Yes, that was true" ;
        }
  
        return "No, that was false" ;
    }

    console.log(trueOrFalse(true)); // Yes, that was true
    console.log(trueOrFalse(false)); // No, that was false

    ```

60. Comparison with the Equality Operator

    ```js
    
    function testEqual(val) 
    {
        if (val == 12) 
    { 
        return "Equal";
    }
        
        return "Not Equal";
    }

    console.log(testEqual(10));
    // Output is "Not Equal"

    ```

61. Comparison with the Strict Equality Operator
- > Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

    ```js
    // Use of ( === ) operator :

    function testStrict(val) 
    {
        if (val===7) 
        { 
            return "Equal";
        }
        
        return "Not Equal";
    }

    testStrict(10);
    testStrict("7");
    testStrict(7);

    console.log(testStrict(10)); // Output is Not Equal 
    console.log(testStrict("7")); // Output is Not Equal
    console.log(testStrict(7)); // Output is Equal

    ```

62. Practice comparing different values
- > Here we will use both (==) & (===) operator .

    ```js
    // Using ( == ) operator  :

    function compare(a,b)
    {
        if(a==b)
        {
            return "Equal";
        }
        return "Not Equal";

        console.log(compare(10,"10")); // Output is "Equal"

    }
    ```

    ```js
    // Using (===) operator :

    function compare(a,b)
    {
        if(a===b)
        {
            return "Equal" ;
        }
        return "Not Equal" ;

        console.log(compare(10,"10")); // Output is "Not Equal"

    }
    ```

63. Comparison with the Inequality Operator
- > Now comes Inequality opreator (!=) which means not equal to...

    ```js
    // USe of ( != ) operator :

    function notEqual(value)
    {
        if(value != 99)
        {
            return "Not Equal" ;
        }
        return "Equal" ;

        console.log(notEqual(99)); // Output Equal
        console.log(notEqual("99")); // Output Equal
        console.log(notEqual("55")); // Output is Not Equal
        console.log(notEqual("Karan")); // Output is Not Equal

    }
    ```

64. Comparison with the Strict Inequality Operator
- > Now Comes Strict Inequality operatot (!==) .

    ```js
    // USe of ( !== ) operator :

    function strictNotEqual(value)
    {
        if(value !== 100)
        {
            return "Not Equal" ;
        }
        return "Equal" ;

        console.log(strictNotEqual(100)); // Output is  Equal
        console.log(strictNotEqual("100")); // Output is Not Equal
        console.log(strictNotEqual("Karan")); // Output is Not Equal

    }
    ```

65. Comparison with the Greater Than Operator
- > Use of (>) operator .
    ```js
    Examples

    5   >  3  // true
    7   > '3' // true
    2   >  3  // false
    '1' >  9  // false
    ```

    ```js
    // Use of (>) operator :

    function testGreater(val)
    {
        if(val > 100)
        {
            return "Over 100" ;
        }
        if(val > 10)
        {
            return "Over 10" ;
        }

        return "10 or under" ;
    }

    console.log(testGreaterThan(10)); // 10 or Under
    console.log(testGreaterThan(0)); // 10 or Under
    console.log(testGreaterThan(11)); // Over 10
    console.log(testGreaterThan(99)); // Over 10
    console.log(testGreaterThan(100)); // Over 10
    console.log(testGreaterThan(101)); // Over 100
    console.log(testGreaterThan(150)); // Over 100

    ```

66. Comparison with the Greater Than Or Equal To Operator
- > Use of (>=) operator 

    ```js
    // Use of (>=) operator :

    function testGreaterEqual(val)
    {
        if(val >= 20)
        {
            return "20 or Over" ;
        }
        if(val >= 10)
        {
            return "10 or Over" ;
        }

        return "Less than 10" ;
    }

    console.log(testGreaterOrEqual(10)); // 10 or Over
    console.log(testGreaterOrEqual(0)); // Less than 10
    console.log(testGreaterOrEqual(9)); // Less than 10
    console.log(testGreaterOrEqual(11)); // 10 or Over
    console.log(testGreaterOrEqual(19)); // 10 or Over
    console.log(testGreaterOrEqual(100)); // 20 or Over
    console.log(testGreaterOrEqual(21)); // 20 or Over

    ```

67. Comparison with the Less Than Operator
- > Use of (<) operator .

    ```js

    function testLessThan(val) 
    {
        if (val<25) 
        {  
            return "Under 25";
        }

        if (val<55) 
        {  
            return "Under 55";
        }

        return "55 or Over";
    }

    console.log(testLessThan(10)); // Under 25
    console.log(testLessThan(0)); // Under 25
    console.log(testLessThan(24)); // Under 25
    console.log(testLessThan(25)); // Under 55
    console.log(testLessThan(54)); // Under 55
    console.log(testLessThan(55)); // 55 or Over
    console.log(testLessThan(99)); // 55 or Over

    ```

68. Comparison with the Less Than Or Equal To Operator
- > Use of (<=) operator .

    ```js
    function testLessOrEqual(val) 
    {
        if (val<=12) 
        {  
            return "Smaller Than or Equal to 12";
        }

        if (val<=24) 
        {  
            return "Smaller Than or Equal to 24";
        }

        return "More Than 24";
    }

    console.log(testLessOrEqual(10)); // Smaller Than or Equal to 12
    console.log(testLessOrEqual(0)); // Smaller Than or Equal to 12
    console.log(testLessOrEqual(12)); // Smaller Than or Equal to 12
    console.log(testLessOrEqual(23)); // Smaller Than or Equal to 24
    console.log(testLessOrEqual(24)); // Smaller Than or Equal to 24
    console.log(testLessOrEqual(11)); // Smaller Than or Equal to 12
    console.log(testLessOrEqual(25)); // More Than 24
    console.log(testLessOrEqual(55)); // More Than 24
    ```

69. Comparisons with the Logical And Operator
- > Use of (&&) operator .

    ```js

    function testLogicalAnd(val) 
    {
        if (val <= 50 && val >= 25) 
        {
            return "Yes";
    
        }
        return "No";
    }

    console.log(testLogicalAnd(10)); // No
    console.log(testLogicalAnd(0)); // No
    console.log(testLogicalAnd(24)); // No
    console.log(testLogicalAnd(25)); // Yes
    console.log(testLogicalAnd(30)); // Yes 
    console.log(testLogicalAnd(50)); // Yes

    ```

70. Comparisons with the Logical Or Operator
- > Use of (||) operator .

    ```js
    // Use of (||) operator : 
    function testLogicalOr(val) 
    {
        if (val<10 || val >20) 
        {
            return "Outside";
        }

        return "Inside";
    }

    console.log(testLogicalOr(15)); // Inside
    console.log(testLogicalOr(0)); // Outside
    console.log(testLogicalOr(9)); // Outside
    console.log(testLogicalOr(10)); // Inside
    console.log(testLogicalOr(15)); // Inside
    console.log(testLogicalOr(21)); // Outside
    console.log(testLogicalOr(25)); // Outside
    ```

71. Introducing Else Statements
- > else statement is used to when given condition doesn't satisfy the test condition .

    ```js
    // Use of (||) operator : 
    function testElse(val) 
    {
        let result = "";

        if (val > 5) 
        {
            result = "Bigger than 5";
        }
        else 
        {
            result = "5 or Smaller";
        }

        return result;
    }

    console.log(testElse(4)); // 5 or Smaller 
    console.log(testElse(5)); // 5 or Smaller 
    console.log(testElse(6)); // Bigger than 5
    console.log(testElse(10)); // Bigger than 5

    ```

72. Introducing Else If Statements

    ```js

    function testElseIf(val) 
    {
        if (val > 10) 
        {
            return "Greater than 10";
        }
        else if (val < 5) 
        {
            return "Smaller than 5";
        }
        else
        {
            return "Between 5 and 10";
        }
    }


    console.log(testElseIf(0)); // Smaller than 5 
    console.log(testElseIf(5)); // Between 5 and 10
    console.log(testElseIf(7)); // Between 5 and 10
    console.log(testElseIf(10)); // Between 5 and 10
    console.log(testElseIf(12)); // Greater than 10

    ```

73. Logical Order in If Else Statements

    ```js
    
    function orderMyLogic(val) 
    {
        if (val < 5 ) 
        {
            return "Less than 5";
        }
         else if (val < 10) 
        {
            return "Less than 10";
        } 
        else 
        {
            return "Greater than or equal to 10";
        }
    }

    console.log(orderMyLogic(4)); // Less than 5
    console.log(orderMyLogic(6)); // Less than 10
    console.log(orderMyLogic(11)); // Greater than or equal to 10

    ```

74. Chaining If Else Statements

    ```js
    function testSize(num) 
    {
        if(num < 5)
        {
            return "Tiny" ;
        }
        else if(num<10)
        {
            return "Small" ;
        }
        else if(num<15)
        {
            return "Medium" ;
        }
        else if(num <20)
        {
            return "Large" ;
        }
        else
        {
            return "Huge" ;
        }
    }

    console.log(testSize(0)); // Tiny
    console.log(testSize(5)); // Small
    console.log(testSize(10)); // Medium
    console.log(testSize(17)); // Large
    console.log(testSize(20)); // Huge
    ```

75. Golf Code

    ```js
    /*Strokes	Return
    1	        "Hole-in-one!"
    <= par-2	"Eagle"
    par - 1	    "Birdie"
    par	        "Par"
    par + 1	    "Bogey"
    par + 2	    "Double Bogey"
    >= par + 3	"Go Home!"
    */
    ```

    ```js
    var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
    function golfScore(par, strokes) 
    {
        if (strokes == 1) 
            {
            return names[0]
        } 
        else if (strokes <= par - 2) 
        {
            return names[1]
        } 
        else if (strokes == par - 1) 
        {
            return names[2]
        } 
        else if (strokes == par) 
        {
            return names[3]
        }
        else if (strokes == par + 1) 
        {
            return names[4]
        } 
        else if (strokes == par + 2) 
        {
            return names[5]
        } 
        else if (strokes >= par + 3) 
        {
            return names[6]
        }
    }

    console.log(golfScore(5, 4)); // Output is Birdie
    ```

76. Selecting from Many Options with Switch Statements

    ```js
    function caseInSwitch(val) 
    {
        let answer = "";

        switch(val)
        {
            case 1 : answer = "alpha"; break;
            case 2 : answer = "beta"; break ;
            case 3 : answer = "gamma" ; break;
            case 4 : answer = "delta" ; break ;
         }

        return answer;
    }

    console.log(caseInSwitch(1));
    console.log(caseInSwitch(2));
    console.log(caseInSwitch(3));
    console.log(caseInSwitch(4));

    ```

77. Adding a Default Option in Switch Statements

    ```js

    function switchOfStuff(val) 
    {
        var answer = "";
  // Only change code below this line

        switch(val)
        {
            case "a" : answer = "apple" ; break;
            case "b" : answer = "bird" ; break;
            case "c" : answer = "cat" ; break;

            default : answer = "stuff" ; break;

        }

        return answer;

    }

    console.log(switchOfStuff("a")); // Output is apple
    console.log(switchOfStuff("b")); // Output is bird 
    console.log(switchOfStuff("c")); // Output is cat
    console.log(switchOfStuff("d")); // Output is stuff 
    console.log(switchOfStuff(4)); // Output is stuff

    ```

78. Multiple Identical Options in Switch Statements

    ```js

    function sequentialSizes(val) 
    {
        var answer = "";

        switch(val)
        {
            case 1:
            case 2:
            case 3: answer ="Low" ;
                    break;

            case 4:
            case 5:
            case 6: answer ="Mid" ;
                    break;

            case 7:
            case 8:
            case 9: answer ="High" ;
                    break;
        }

        return answer;
    }

    console.log(sequentialSizes(1)); // Output is Low
    console.log(sequentialSizes(2)); // Output is Low
    console.log(sequentialSizes(5)); // Output is Mid
    console.log(sequentialSizes(4)); // Output is Mid
    console.log(sequentialSizes(8)); // Output is High
    console.log(sequentialSizes(9)); // Output is High
    
    ```

79. Replacing If Else Chains with Switch

    ```js
    function if_else_to_switch(val)
    {
        var answer = "" ;
        if(val == 1)
        {
            answer = 1 ;
        }
        else if(val == 99)
        {
            answer = 99 ;
        }

        return answer ;
    }

    console.log(if_else_to_switch(99)) ; // Outptu is 99 

    // Same Problem with Switch 

    function if_else_to_switch(val)
    {
        var answer = "" ;

        switch(val)
        {
            case 1 : answer = 1 ; break ;

            case 99 : answer = 99 ; break ;

            default : answer = "Karan" ; break ;
        }

        return answer ;
    }

    console.log(if_else_to_switch(99)) ; // Output is 99
    console.log(if_else_to_switch(150)) ; // Output is Karan

    ```