const ar = [1, 2, 4, 5];

Array.prototype.myMap = function (cb) {
  let tempAr = [];
  for (let i = 0; i < this.length; i++) {
    tempAr.push(cb(this[i], i, this));
  }

  return tempAr;
};

const nwAr = ar.myMap((val, i, ar) => {
  console.log(`this is ${i} index`);
  return val * 3;
});
console.log(nwAr);
