
// console.log(b);//undefined
// console.log(a);//Error

let a=10;
var b=100;

//The line 1-4 are the Temporal dead zone for a

/*
1. let and const declarations are hoisted?
Ans     Yes, but in a different way. It is called temporal dead zone for time being.
        -> for var b memory allocated in global scope(object), let & const allocated memory but in a different memory space (Script), goto inspect - source.
2. what if let a=1; and let a=123?
Ans      Javascript code doesnt run if duplicate declaration found.

3.  let x;
    x=10;
    console.log(x)
    
    ->You can do like above

4.  const x;
    x=10;
    console.log(x)
    
    ->You can't do like above


-----------------SHADOWING-------------------

5. var a=100;
    {
        var a=10;
        console.log(a); //10
    }
    console.log(a); //10

    let b=100;
    {
        let b=10;
        console.log(b); //10
    }
    console.log(b); //100

--------------Lexical Scope-----------------

6.  const a=1;
    {
        const a=2;
        {
            const a=3;
            console.log(a);//3
        }
        console.log(a);//2
    }
    console.log(a);//1

    ->Lexical scope is give the nearest value.
*/
