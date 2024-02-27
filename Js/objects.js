const details ={
    name:"pramod",
    age:31,
    phone:9700928100,
    email:"pramod.morthala@gmail.com",
    company:"Winfo"
};

const keys=Object.keys(details);
console.log(keys);

const values=Object.values(details);
console.log(values);

const enties=Object.entries(details);
console.log(enties);

// var isEmpty = function(obj) {
//     let objLenght= Object.keys(obj).length;

//     return objLenght>0? false:true;
// };
obj = {"x": 5, "y": 42}

var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
 };
 isEmpty(obj);