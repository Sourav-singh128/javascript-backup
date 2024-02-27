/*
A function which takes another function as argument or returns a function is called Higher Order Function.
*/

const radius = [3,5,7,9];

const calArea = function (radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI* radius[i]*radius[i]);
    }
    return output;
}
// console.log(calArea(radius));

const calCircumference = function (radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI* radius[i]);
    }
    return output;
}
// console.log(calCircumference(radius));

const calDiameter = function (radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}
// console.log(calDiameter(radius));


// Higher-Order-function 

const cal=function(radius,logic){
    const output =[];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};

const area = function(val){
    return (Math.PI*val*val)
};
const circumference = function(val){
    return 2*Math.PI*val;
};
const diameter = function(val){
    return 2*val;
};

//To calculate area with HOF

const res= cal(radius,area);
const res1 = cal(radius,circumference);
const res2 = cal(radius,diameter);

//here cal is HOF and area/circumference/diameter are callback functions
console.log(res,res1,res2)



//here this HOF can act like map
console.log(radius.map(area));

//but see res = cal(radius,area) differes map syntax, we can convert same as map

Array.prototype.calculate=function(logic){
    const output =[];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};

console.log(radius.calculate(area),"map polifill");