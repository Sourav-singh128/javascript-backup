const names = ["pramod", "pramod1", "pramod2", "pramod3"]

//itterate values
// for(const ele of names){
//     console.log(ele)
// }
//itterate properties/index (max used for Objects)
// for(const name in names){
//     console.log(name)
// }


//findIndex
// const julieIndex= names.findIndex(el=>el==="pramod1");
// console.log(julieIndex,"")


//###########################------->SETS<-------######################

// const ids = new Set();

// ids.add('pramod');
// ids.add(1);
// ids.add('pramod1')
// ids.add(1)
// sets are itteratable

// for (const ele of ids) {
//     console.log(ele)
// }

// console.log(ids[1]) //willnt work
// console.log(ids.has('pramod'))
// ids.delete('pramod1')
// console.log(ids)

//###########################------->Objects<-------######################

// const person = {
//     firstName: 'Max', 
//     age: 31, 
//     hobbies: ['Sports', 'Cooking'], 
//     greet() {
//         console.log("Hi Im "+this.firstName)
//     }
// };

// //for-of willnt work for Objects
// for (const ele in person) {
//     console.log(ele)
// }

// console.log(person['firstName'])
// console.log(person.firstName)

// person.lastName = "morthala"
// console.log(person)
// person.greet()


//###########################------->Maps<-------######################

// const resultData=new Map();

// resultData.set('average',1.53);
// resultData.set('lastResult',null);

// const germany={name:'Germany',population:82};

// resultData.set(germany,0.89);

// for (const ele of resultData){
//     console.log(ele,"pr")
// }

// console.log(resultData.get('average'))
// resultData.delete(germany)
// console.log(resultData)


//###########################------->Linked List<-------######################

class LinkedList{
    constructor(){
        this.head=null; //First element of the list
        this.tail=null; //Last element of the list
    }

    append(value){
        const newNode={value:value,next: null};

        if(this.tail){
            this.tail.next=newNode;
        }
        this.tail=newNode;
        if(!this.head){
            this.head=newNode;
        }
    }
    prepend(value){
        const newNode={value:value, next:this.head}
        this.head=newNode;
        if(!this.tail){
            this.tail=newNode;
        }
    }

   

    find(value){
        if(!this.head){
            return null;
        }
        let curNode=this.head;

        while(curNode){
            if(curNode.value===value){
                return curNode;
            }
            curNode=curNode.next;
        }
        return null;
    }
    insertAfter(value,afterValue){
        const existingNode=this.find(afterValue);
        if(existingNode){
        const newNode={value:value, next:existingNode.next}
        existingNode.next=newNode;
        }
    }

    delete(value){
        if(!this.head){
            return;
        }

        while(this.head && this.head.value===value){
            this.head=this.head.next;
        }

        let curNode=this.head;

        while(curNode.next){
            if(curNode.next.value===value){
                curNode.next=curNode.next.next;
            }else{
                curNode=curNode.next;
            }
        }

        if(this.tail.value===value){
            this.tail=curNode;
        }
    }

    toArray(){
        const element=[];

        let curNode=this.head;
        while(curNode){
            element.push(curNode)
            curNode=curNode.next;
        }
        return element;
    }
}

const linkedList1=new LinkedList()

linkedList1.append(1);
linkedList1.append('hello')
linkedList1.append('pramod')
linkedList1.append('pramod')
linkedList1.append(true)
linkedList1.prepend('first value')
linkedList1.prepend('second value')

console.log(linkedList1.toArray())
linkedList1.delete('pramod');

console.log(linkedList1.find(1),linkedList1.find('hello'))

linkedList1.insertAfter('new value-1',1);
linkedList1.insertAfter('new value-2','hello')
console.log(linkedList1.toArray())
