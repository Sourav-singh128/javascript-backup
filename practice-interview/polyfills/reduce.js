const ar = [1, 2, 4, 5];

// first implementation

// Array.prototype.myReduce = function (cb, initialValue) {
//   console.log(initialValue);
//   let sum;
//   if (initialValue != undefined) {
//     sum = initialValue;
//   } else sum = this[0];

//   console.log("sum ", sum);
//   for (let i = 0; i < this.length; i++) {
//     if (initialValue != undefined) {
//       sum = cb(sum, this[i], i, this);
//     } else {
//       if (i + 1 < this.length) {
//         sum = cb(sum, this[i + 1], i + 1, this);
//         // console.log("sum-inside ", sum, i);
//       }
//     }
//   }

//   return sum;
// };

// const nwAr = ar.myReduce((acc, curr, i, ar) => {
//   //   console.log(`this is ${i} index`);
//   return acc + curr;
// }, 8);

// console.log(nwAr);

// Bit proper implementation.

const arr = [2, 6, 9, 4, 7, 2];

Array.prototype.myReduce = function (cb, initial) {
  let accum = initial != undefined ? initial : this[0];
  for (let i = initial != undefined ? 0 : 1; i < this.length; i++) {
    accum = cb(accum, this[i]);
  }
  return accum;
};

const val = arr.myReduce((acc, curr) => {
  return acc - curr;
}, 40);

console.log(val);
