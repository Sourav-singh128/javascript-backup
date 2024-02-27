//Reduce
const people = [
    {
      name: "pramod", age: 28
    },
    {
      name: "prem", age: 30
    },
    {
      name: "nani", age: 30
    },
    {
      name: "ram", age: 28
    },
    {
      name: "hanu", age: 28
    },
  ];

  const result = people.reduce((groupped,person)=>{ //here gropped is accumulator in this ex it is an obj

    const age =person.age; //getting age from obj
    if(groupped[age]==null) //check if in the obj key has with age eg.28
    groupped[age]=[];  // not found with key(28) create empty array {"28":[]}
    else
    groupped[age].push(person); //if found with key(28) push obj {"28":[{name: 'ram', age: 28}]}
   
    return groupped; //return groupped obj
  },{}); // here {} is gropped obj

  console.log(result);

  let nu=[1,1,2,3,1,3,3,4,4,4,4,4,4,5,'pramod'];
  const sum=nu.reduce((total,it)=>{
    total+=it;
    return total;
  },0);
  console.log(sum,"sum")

  const nooc=nu.reduce((occ,n)=>{
    if(occ[n]){
      occ[n]+=1;
    } else{
      occ[n]=1;
    }
  
    return occ;
  },{});
  console.log(nooc);

  const res = people.reduce((acc, curr)=>{
    const age =curr.age;
    if(age<29){
      acc.push(curr.name)
    }
    return acc
  },[]);

  console.log("below 29",res);


  // Polyfill

  Array.prototype.myReduce = function (logic, initialValue){
    var accumulator=initialValue;
    for(i=0;i<this.length;i++){
      accumulator = accumulator?logic(accumulator,this[i],i,this):this[i];
    }
    return accumulator;
  };

  const  frinds=[
    {
      name:"anna",
      books:['Bible', 'Harry Potter'],
      age:29
    },
    {
      name:"pramod",
      books:['Bible 1', 'Harry Potter 2'],
      age:28
    },
    {
      name:"nani",
      books:['Bible 2', 'Harry Potter 2'],
      age:50
    }
  ]
  const result1 = frinds.reduce((acc,itr)=>{
    const bookss= itr.books;
    if(bookss.length>0){
      for(b of bookss){
        acc.push(b);
      }
    }
    return acc
  },[])

  console.log("books : ", result1);


  const fruit=[
    {Apple:4, Orange:7, Grape:3},
    {
      Guva:6,Lemon:4,Banana:8
    },
    {Orange:5,Pineapple:7, Apple:7}
  ]

  const noOfFruit = fruit.reduce((acc,cur)=>{
    for(key in cur){
      if(acc[key]){
        acc[key] +=cur[key]
      }else{

        acc[key] = cur[key]
      }
    }
    return acc
  },{})

  console.log(noOfFruit)

const obj = {Apple:4, Orange:7, Grape:3};
  for(const val of Object.values(obj)){
    console.log(val) //4,7,3
  }
  for(const val of Object.keys(obj)){
    console.log(val) //Apple, Orange, Grap
  }

  for(const a in )
  for(const a in obj){
    console.log(obj[a])
  }