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