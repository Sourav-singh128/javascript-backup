// const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// console.log(fetchPromise);

////******* */ polyfill for filter function.

// Array.prototype.myFilter = function (callback) {
//   const filterArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       filterArr.push(this[i]);
//     }
//   }

//   return filterArr;
// };

// const arr = [1, 2, 3, 4].myFilter((val, index, arr) => {

//   return val > 2;
// });
// console.log(arr);

////******* */ polyfill for map function

// const mapArray = [1, 2, 3, 4].map((val, index) => val * 3);
// console.log(mapArray);

// Array.prototype.myMap = function (callback) {
//   const arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(callback(this[i], i));
//   }
//   return arr;
// };

// const mapArray = [1, 2, 3, 4].myMap((val, index) => val * 3);
// console.log(mapArray);

//******* */ polyfill for reduce function.

// Array.prototype.myReduce = function (callback, initial) {
//   let value;
//   if (initial) {
//     value = initial;
//   } else {
//     value = 0;
//   }
//   for (let i = 0; i < this.length; i++) {
//     value = callback(this[i], value);
//     // console.log(value);
//   }
//   return value;
// };

// const arr = [1, 2, 3, 4];
// const initial = 5;
// const val = arr.myReduce((prev, current) => prev + current);
// console.log(val);

///************************** */ polyfill for forEach function.

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

const arr = [1, 2, 3, 4];
arr.myForEach((val) => {
  console.log(val);
});
