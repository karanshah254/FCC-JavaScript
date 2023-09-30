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
    ```