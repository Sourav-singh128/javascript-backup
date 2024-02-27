console.log("5"-"3");
// for (let index = 0; index < 5; index++) {
//    setTimeout(()=>console.log(index),1000);
// }
// console.log("------------");
// for (var index = 0; index < 5; index++) {
//     setTimeout(()=>console.log(index),1000);
//  }

 var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

//-------------------------------

console.log(0.1+0.2)
console.log(0.1+0.2 == 0.3)

//-------------------------------

function areTheNumbersAlmostEqual(num1, num2) {
	return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));

console.log(1);

// ---------------------------------
console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);
// ---------------------------------
console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));
// ----------------------------------
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

// Fixing the issue 
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity());

// ----------------------------------
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

// The first statement returns true which is as expected.

// The second returns false because of how the engine works regarding operator associativity for < and >. It compares left to right, so 3 > 2 > 1 JavaScript translates to true > 1. true has value 1, so it then compares 1 > 1, which is false.

// -----------------------------------

var myArray = ['a', 'b', 'c', 'd'];
myArray.push('end');
myArray.unshift('start');
console.log(myArray); // ["start", "a", "b", "c", "d", "end"]
// OR 
myArray = ['start', ...myArray];
myArray = [...myArray, 'end'];
// OR 
myArray = ['start', ...myArray, 'end'];
// -------------------------------------

var a = [1,2,3];
a[10]=99;
console.log(a[6]);
// -----------------------------------

function isInt(x){
    // return x^0 == x;
    return typeof x === "number" && x%1===0;
}
console.log(isInt(a))
//-------------------------------------

let x = new Set([1,2,2,3,3,4,'pramod']);
console.log(x, x.size);

//------------------------------------
var mn;
console.log(mn);
a=1;

//let a;: This line declares a variable a using the let keyword, but it does not assign any value to it. In JavaScript, when you declare a variable using let (or var), it's automatically initialized with the value undefined. So, at this point, a is undefined.

//-----------------------------------
let NaN=123;
var _undefined=true;
const Infinity ="Hello";
let $null = [];
console.log($null);

//--------------------------------------------
//How to get properties from other object or linking btw two objects

const hero1={
    name:'Nag'
};
const place={
    industry:'Tollywood'
}
place.__proto__=hero1

console.log(place.name);

//-------------------------------

let arrrr=[1,1,1,2,3,3,4,6,6,5,5,5,5];

let eleCount={};

function count(arr){
    //forEach

    // arr.forEach(ele => {
    //     if(eleCount[ele])
    //     eleCount[ele]+=1;
    //     else eleCount[ele]=1;
    // });

    //For loop

    // for (let index = 0; index < arr.length; index++) {
    //     const ele= arr[index] // ele=1/2/3
    //     if(eleCount[ele])  //{"1"} not exist in first iter
    //     eleCount[ele]+=1; 
    //     else
    //     eleCount[ele]=1; //{"1":1}
        
    // }

    //reduce method

    return arr.reduce((counts,it)=>{
        if(counts[it])
        count[it]+=1;
        else
        counts[it]=1;
    return counts;
    },{})
}
// count(arrrr);
// console.log(eleCount);
const counts=count(arrrr);
console.log(counts)

//--------------------------------
const maxArr=[1,4,7,2,4];
function max(){

    let max=0;
    for (let index = 0; index < maxArr.length; index++) {
        if(maxArr[index]>max){
            max=maxArr[index]
            
        } 
    }
    return max
}
console.log( max());

//------------------------------

const student = [
    {name:"Pramod", rollNo:1, marks:61},
    {name:"Sai", rollNo:2, marks:56},
    {name:"Pavan", rollNo:3, marks:40},
    {name:"Nani", rollNo:4, marks:90},
    {name:"Prem", rollNo:5, marks:35},
];
/*
Q1: Return the names in Capital
*/
let names=[];
for(i=0;i<student.length;i++){
    names.push(student[i].name.toLocaleUpperCase())
}

console.log(names);

const namesMap = student.map((std)=>{
    return std.name.toLocaleUpperCase();
})
console.log(namesMap)

/*
Q2: Return std more then 60marks
*/
const stdMark = student.filter((std)=>{
    if(std.marks>=60){
        return std;
    }
})

console.log(stdMark)

/*
Q3: Sum of marks of all studentd
*/

const marksSum = student.reduce((acc,cur)=>{
        return acc +=cur.marks;
},0)

console.log(marksSum);

/*
Q4: Print the names of students who scored more than 60
*/
const meritStd = student.filter((std)=>std.marks>60).map((std)=>std.name);

console.log(meritStd);

/*
Q5: return total marks for student who has lessthen 60 add 20 marks after who as 60 marks above
*/

const stdLogic = student.map((std)=>{
    if(std.marks<60){
        std.marks +=20;
    }
    return std;
}).filter((std)=>std.marks>=60).reduce((acc,cur)=>acc +=cur.marks,0);

console.log(stdLogic)


//---------------------------------

// Currying 
function sumCur(a){
    return function(b){
        if(b){
            return sumCur(a+b);
        }
        return a;
    }
}
console.log(sumCur(1)(2)(3)(4)())

//---------------------------------

const str='abac';

const reverse=(str)=>{
    let revStr='';
    for(let i=str.length; i>=1; i--){
       revStr +=str.at(i-1)
    }
    return str === revStr
    
}

console.log("Given String is palidrome",reverse(str));


const pali=(st)=>{
    let left = 0;
    let right = st.length-1;

    while(left< right){
        if(st[left]!=st[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log("Given String is palidrome",pali(str));
//----------------------------
// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

const arr = [1,2,3,4,5,6]

const res=arr.filter(ele=>ele%2==0)
console.log(res)

let resAr=[];
for(let i=0; i<=arr.length;i++){
    if(arr[i]%2==0){
        resAr.push(arr[i])
    }
}

console.log(resAr);

//-----------------------
// Write a JavaScript program to calculate the factorial of a given number. 

const fact=(num)=>{
    if(num == 0 || num == 1){
        return 1;
    }
    return num * fact(num-1)
}
console.log("Factorial is : ",fact(10))

//-----------------------------
// Write a JavaScript function to check if a given number is prime. 

const prime=(pr)=>{
    if(pr<=1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(pr);i++){
        if( pr%i==0) return false
    }
    return true;
}

console.log("is Prime 19: " ,prime(3))

const prim=(nu)=>{
    
    for(let l=2;l<=nu;l++){
        if(prime(l)){
            console.log(l)
        }
    }
}

console.log(prim(20))

//--------------------------------
// Write a JavaScript program to find the largest element in a nested array. 

const nestedArray = [1, [3, 7, [10, 2], 8], 5, [6, 4]];

const flatArr=(arr)=>{
    let flatArray =[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flatArray = flatArray.concat(flatArr(arr[i]));
        }else{
            flatArray.push(arr[i])
        }
    }
    // let maxval = Math.max(...flatArray);
    // return maxval;
    return flatArray;
}

console.log(flatArr(nestedArray))

// To find max value 
const maxVal = Math.max(...flatArr(nestedArray))
console.log("Max value in nested array : ",maxVal);


//----------------------------
// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 

const feb=(num)=>{
    let febArr=[0,1];
    for(let i=2; i<num;i++){
        const nextNum = febArr[i-1]+febArr[i-2]; //febArr[2-1]=1, febArr[2-2]=0 1+0=1;
        febArr.push(nextNum);
    }
    return febArr;
}
console.log(feb(8))


//--------------------
// create 6gidit password 
const password=(passLength)=>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for(let i=0; i<passLength ; i++){
       let ind= Math.floor(Math.random()*characters.length);
       result +=characters.at(ind);
    }
    return result
}

console.log(password(6))

const numPass=(digit)=>{
    let pass='';
    for(i=0; i<digit;i++){
        pass += Math.floor(Math.random()*10)
    }
    let num = parseInt(pass)
    return num;
}

console.log(numPass(7))






