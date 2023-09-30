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