const insertionSort=arr=>{
    const ar=arr.slice()
    let len=ar.length;
    for(let i=1;i<len;i++){
        for(let j=i;j>0;j--){
            if(ar[j]<ar[j-1]){
                [ar[j],ar[j-1]]=[ar[j-1],ar[j]]
            }else{
                break
            }
        }
    }
    return ar
}
const arr=[1,3,2,8,1,94,42]
console.log(insertionSort(arr))
console.log(arr)
const out=arr.slice()
console.log(out,"out")