//########## ------->Bobble Sort<------######
const arr=[1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,
    92]
const bobbleSort=(arr)=>{
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                // const temp=arr[j];
                // arr[j]=arr[j+1]
                // arr[j+1]=temp;
            }
        }
    }
    return arr;
}

// console.log(bobbleSort(arr))

//if you dont want to changes given arrat try this
const bobbleSort1=(arr)=>{
    const ar=arr.slice()
    for(let i=0;i<ar.length-1;i++){
        for(let j=0;j<ar.length-1-i;j++){
            if(ar[j]>ar[j+1]){
                [ar[j],ar[j+1]]=[ar[j+1],ar[j]]
                // const temp=ar[j];
                // ar[j]=ar[j+1]
                // ar[j+1]=temp;
            }
        }
    }
    return ar;
}
console.log(bobbleSort1(arr))
console.log(arr)