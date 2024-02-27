/*
Currying is a functional programming technique in which a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument.
*/

// Normal function 
function add(a,b){
    console.log(a+b);
}

const sum=add(2,3);

// Currying 
function addCurr(a){
    return function (b){
        console.log(a+b);
    }
}
const sum1=addCurr(5);
sum1(2);


//Q: sum(1)(2)(3)(4)()

let curryingSum = function (a) {
  return function (b) {
    if (b) {
      return curryingSum(a + b);
    }
    return a;
};
};

console.log(curryingSum(1)(2)(3)(4)())

//Q: mul(1)(2)(3)(4)()

const res = function (a){
    return function(b){
        if(b){
            return res(a*b);
        }
        return a;
    }
}

console.log(res(1)(2)(3)(4)());


const sum2 = (a)=>{
    return (b)=>{
        return  b? sum2(a+b): a
    }
}
console.log(sum2(1)(2)())