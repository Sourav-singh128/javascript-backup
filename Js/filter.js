const arr =[5,1,3,2,6];
const output =arr.filter(x=>x%2);
console.log(output); 


// Polyfill

Array.prototype.myFilter=function(logic){
    let temp=[];
    for(let i=0;i<this.length;i++){
        if(logic(this[i],i,this)){
            temp.push(this[i]);
        }
    }
    return temp;
}