## ES6 Module / ECMAScript

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