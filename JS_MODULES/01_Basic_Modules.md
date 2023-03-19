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