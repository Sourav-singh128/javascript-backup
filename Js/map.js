const arr =[5,1,3,2,6];
const output =arr.map(x=>x*2);
console.log(output); 



// Difference between map and for each

const names = ["Pramod","Prem","Morthala","Nani"];

function test(){

    names.forEach(element => {
        return element.toLowerCase();
    });
}
test();
console.log(names);

// forEach doesnt return any array, it return undefined, it mutes original array
//Map return new array with modified values, it create new array


// Polyfill 

Array.prototype.myMap=function(logic){
    let temp=[];
    for(let i=0;i<this.length;i++){
        temp.push(this[i],i,this);
    }
    return temp;
}