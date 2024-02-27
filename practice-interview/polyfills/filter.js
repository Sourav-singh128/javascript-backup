const ar = [1, 2, 4, 5];

Array.prototype.myFilter = function (cb) {
  let tempAr = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) tempAr.push(this[i]);
  }

  return tempAr;
};

const nwAr = ar.myFilter((val, i, ar) => {
  console.log(`this is ${i} index`);
  return val % 2 == 0;
});
console.log(nwAr);
