const pat1=(r)=>{
    let str ="";
    for (let i = 1; i <= r; i++) {
        for(let c=1; c<=i; c++){
           str+="* ";
        }
       str+="\n";
    }
    console.log(str)
}
// pat1(5);
const RevPat=(r)=>{
    let str="";
    for(let i=1;i<=r;i++){
        for(let c=0;c<=r-i;c++){
            str+="* ";
        }
        str+="\n";
    }
    console.log(str);
}
// RevPat(5)

const tri = (r = 5) => {
  let str = "";
  for (let i = 1; i <= r; i++) {
    for (let j = 1; j <= r - i; j++) {
      str += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
};
  tri();
 