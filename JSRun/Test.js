const arr=[{key:"value"}]
const copy=[...arr]
copy[0].key="chnage";
console.log(copy)
console.log(arr)