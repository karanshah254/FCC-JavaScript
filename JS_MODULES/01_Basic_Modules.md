## Basic Of JavaScript

# Module - 1

1. Comment Your Java-Script Code
- > // This is in-line comment .
- > /* This is s multi-line comment */

2. Declare JavaScript Variables 
- > JavaScript provides eight different data types .
- > They are undefined, null, boolean, string, symbol, bigint, number, and object .
- > We tell JavaScript to create or declare a variable by putting the keyword [var] in front of it .
- > Example : var a;

3. Storing Values with the Assignment Operator
- > In JavaScript, you can store a value in a variable with the assignment operator (=) .
- > Example : a=7;   // Assigned value 7 to a .

4. Assigning the Value of One Variable to Another
- > We can assign the value of one variable to another by using (=) .
- > Example : var a; //Declared variable a .
              a=5;   // Assign value 7 to a .
              var b; // Declare variable b .
              b=a;   // Assign the value of a to b .

5. Initializing a variable an initial value in the same line .
- > Example : var a=9; // Initialized the value 9 to variable a .

6. Declaring String Variables
- > Example : var myName = "name" ; // "name" is known as string literals .
- > A string literal, or string, is a series of characters enclosed in single or double quotes.

7. Understanding Uninitialized Variables
- > Example : var a=5;
              var b=10;
              var c="I am a";

              a = a + 1;          // value of a is now 6  
              b = b + 5;          // value of b is now 15  
              c = c + " String!"; // value of c is "I am a String"

8. Understanding Case Sensitivity in Variables
- > Variable should be in camelCase .
- >  In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.
- > Example : var someVariable;
              someVariable = 10 ;

9. Explore Differences Between the var and let Keywords
- > (var) can have same variable name 
- >But when you use (let), a variable with the same name can only be declared once.
- > Example : var myName = "Karan" ;
              var myname = "Shah" ;
              log.console(myName);  //gives output "Shah"

              let myName = "Karan" ;
              let myName = "Shah" ;
              log.console(myName);  // throws error and gives no output 