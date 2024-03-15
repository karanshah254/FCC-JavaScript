## ES6 Module / ECMAScript 6 

1. Difference between var and let

    ```js
    function checkScope() 
    {
    let i = 'function scope';
    if (true) 
    {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }

    console.log('Function scope i is: ', i);
    return i;
    }

    // var is used minimum ..... let is block scoped and used most along const keyword
    ```

2. Mutate an array with const keyword

    ```js
    const a=[1,2,3];

    function mutateArray()
    {
        a[0]=5;
        a[1]=6;
        a[2]=7;

        console.log(a); // now a has [5,6,7]
    }

    mutateArray();
    ```

3. Use of (Object.freeze) in JS to stop data mutation

    ```js
    const obj = {
        PI:3.14,
        name : "Karan",
    };

    Object.freeze(obj); // function to prevent data mutation
    obj.name = "Kavan"; // will not run due to freeze function executed above

    console.log(mathConstants); // will print PI = 3.14
    ```

4. Use of Arrow funtions to write concise anonymous functions

    ```js
    // equivalent to const magic = function() {..}
    const magic = () => 
    {
        return new Date();
    };
    ```

5. Write Arrow function with parameters 

    ```js
    const myConcat = (arr1,arr2) => arr1.concate(arr2)
    console.log(myConcat([1,2],[3,4,5]));

    // prints [1,2,3,4,5] after concatation .
    ```

6. Set default parameters for your functions

    ```js
    const increment = (number, value = 1) => number + value;
    console.log(increment(5,2)); // gives 7
    ```

7. Use the rest parameter with function paramater

    ```js
    const sum = (...args) =>{
        let total = 0;

        for(let i=o; i<args.length; i++)
        {
            total += args[i];
        }
        return total;
    }
    console.log(sum(0,1,2));  // Output is 3
    ```

8. Use the spread opeator to evaluate array in place

    ```js
    const arr1 = [1,2,3];

    const spread = [...arr1];

    console.log(spread);  // Prints [1,2,3]
    ```

9. Use Destructuring Assignment to Extract Values from Objects

    ```js
    const HIGH_TEMPERATURES = {
        yesterday: 75,
        today: 77,
        tomorrow: 80
    };

    const {today , tomorrow} = HIGH_TEMPERATURES;   
    // Here's an equivalent assignment statement using the ES6 destructuring syntax:

    console.log({today,tomorrow});  
    // prints { today: 77, tomorrow: 80 }
    ```

10. Use Destructuring Assignment to Assign Variables from Objects

    ```js
    const HIGH_TEMPERATURES = {
        yesterday: 75,
        today: 77,
        tomorrow: 80
    };

    const {today : highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
    // Here's how you can give new variable names in the assignment

    console.log({today : highToday, tomorrow: highTomorrow});
    // { today: 77, tomorrow: 80 }
    ```

11. Use Destructuring Assignment to Assign Variables from Nested Objects

    ```js
    const LOCAL_FORECAST = {
        yesterday: { low: 61, high: 75 },
        today: { low: 64, high: 77 },
        tomorrow: { low: 68, high: 80 }
    };
  
    const {today:{low: lowToday, high:highToday}} = LOCAL_FORECAST;
    // here's how you can assign an object properties' values to variables with different names

    console.log({today: {low: lowToday, high:highToday}});
    // { today: { low: 64, high: 77 } }
    ```

12. Use Destructuring Assignment to Assign Variables from Arrays

    ```js
    let a = 8, b = 6;
    [a,b] =[b,a];
    //swap a with b and b with a

    console.log([a,b]);
    // [6,8]
    ```

13. Destructuring via rest elements

    ```js
    function removeFirstTwo(list) {
        const [a,b,...shorterlist] = list;  
        // removes 1st and 2nd number from source 

        return shorterlist;
    }

    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sourceWithoutFirstTwo = removeFirstTwo(source);

    console.log(sourceWithoutFirstTwo);
    // prints [ 3, 4, 5, 6, 7, 8, 9, 10 ]
    ```

14. Use Destructuring Assignment to Pass an Object as a Function's Parameters

    ```js
    const stats = {
        max: 56.78,
        standard_deviation: 4.34,
        median: 34.54,
        mode: 23.87,
        min: -0.75,
        average: 35.85
    };

    const half = ({ max, min}) => (max + min) / 2.0; 
    console.log(half(stats));
    // answer is 28.015
    ```

15. Create String Using Template Literals

    ```js
    const result = {
        success: ["max-length", "no-amd", "prefer-arrow-functions"],
        failure: ["no-var", "var-on-top", "linebreak"],
        skipped: ["no-extra-semi", "no-dup-keys"]
    };
    function makeList(arr) {
   
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }

    return failureItems;
    }
    const failuresList = makeList(result.failure);

    console.log(failuresList);
    /* Output :
    [
        '<li class="text-warning">no-var</li>',
        '<li class="text-warning">var-on-top</li>',
        '<li class="text-warning">linebreak</li>'
    ]
    */
    ```

16. Write Concise Object Literal Declarations Using Object Property Shorthand

    ```js
    const  createPerson(name,age,gender) => ({name,age,gender});
    const display = createPerson("Karan Shah", 19, "male");

    console.log(display);
    // { name: 'Karan Shah', age: 19, gender: 'male' }
    ```

17. Write Concise Declarative Functions with ES6

    ```js
    const bicycle = {
        gear: 48,
        setGear(newGear)  {
            "use strict";
            this.gear = newGear;
        }
    };
    bicycle.setGear(48);
    console.log(bicycle.gear);   // 48
    ```

18. Use class Syntax to Define a Constructor Function

    ```js
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }

    const carrot = new Vegetable("carrot");
    console.log(carrot.name); // => should be 'carrot'
    ```

19. Use getters and setters to Control Access to an Object

    ```js
    class Thermostat {
        constructor(fahrenheit) {
            this._fahrenheit = fahrenheit;
        }
  
        get temperature() {
            return (5 / 9) * (this._fahrenheit - 32);
        }
  
        set temperature(celsius) {
            return this._fahrenheit = (celsius * 9.0) / 5 + 32;
        }
    }
    ```

20. Create a Module Script

    ```js
    <script type="module" src="filename.js"></script>
    ```

21. Use export to Share a Code Block

    ```js
    export const uppercaseString = (string) => {
        return string.toUpperCase();
    }

    export const lowercaseString = (string) => {
        return string.toLowerCase()
    }
    ```

22. Reuse JavaScript Code Using import

    ```js
    import { uppercaseString, lowercaseString } from './string_functions.js';
    uppercaseString("hello");
    lowercaseString("WORLD!");
    ```

23. Use * to Import Everything from a File

    ```js
    import * as stringFunctions from "./string_functions.js";
    stringFunctions.uppercaseString("hello");
    stringFunctions.lowercaseString("WORLD!");
    ```

24. Create an Export Fallback with export default

    ```js
    export default function subtract(x, y) {
        return x - y;
    }
    ```

25. Import a Default Export 

    ```js
    import subtract from "./math_functions.js";
    subtract(7,4);
    ```

26. Create a JavaScript Promise 

    ```js
    const myPromise = new Promise((resolve, reject) => {
        // code 
    });
    ```

27. Complete a Promise with resolve and reject

    ```js
    const myPromise = new Promise((resolve, reject) => {
        if(condition here) {
            resolve("Promise was fulfilled");
        } else {
            reject("Promise was rejected");
        }
    });
    ```

28. Hamdle a Fulfilled Promise with "then"

    ```js
    const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;
    
    if(responseFromServer) {
        resolve("We got the data");
    } else {  
        reject("Data not received");
    }
    });

    makeServerRequest.then(result => {
        console.log(result);
    });
    ```

29. Handle a Rejected Promise with catch

    ```js
    // above code 
    makeServerRequest.catch(error => {
        console.log(error);
    });
    ```