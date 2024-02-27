const fetch = require('node-fetch');

function* myGen(){
    let count =0;
    while(true){
        yield count++;
    }
    
}


const ite=myGen();
console.log(ite.next().value);
console.log(ite.next().value);
console.log(ite.next().value);


function* paginationFetch(){
    let user=1;
    while(true){
        const userData = fetch(`https://jsonplaceholder.typicode.com/users/${user}`);
        yield userData.then(res=>console.log(res))
        user++;
    }
}

const pag=paginationFetch();
console.log(pag.next());
console.log(pag.next());


async function* paginationFetch() {
    let user = 1;
  
    while (true) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`);
      
      if (!response.ok) {
        // Handle error, break out of the loop, or perform any other necessary action
        console.error(`Error fetching user data for user ${user}`);
        break;
      }
  
      const userData = await response.json();
      yield userData;
      user++;
    }
  }
  
  // Example of using the generator
  (async () => {
    const generator = paginationFetch();
  
    for (let i = 0; i < 5; i++) {
      const result = await generator.next();
      console.log(result.value);
    }
  })();
  
