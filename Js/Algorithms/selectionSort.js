const selectionSort=(arr)=>{
    const ar=arr.slice()
    for(let i=0;i<ar.length-1;i++){
        let minIndex=i;
        for(let j=i+1;j<ar.length;j++){
            if(ar[j]<ar[minIndex]){
              minIndex=j  
            }
        }
        const temp=ar[i]
        ar[i]=ar[minIndex]
        ar[minIndex]=temp
        //[ar[i],ar[minIndex]]=[ar[minIndex],ar[i]]
    }
    return ar
}
const arr=[1,3,2,8,1,94,42]
console.log(selectionSort(arr))
console.log(arr)
const out=arr.slice()
console.log(out,"out")