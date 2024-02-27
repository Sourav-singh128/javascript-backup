const clickEle = document.querySelector(".click");
const callEle = document.querySelector(".call");
const btnEle = document.querySelector(".btn");

let clickAction = 0;
let callAction = 0;

// 1st approach is simple one, no need to return a function.

// let timer = 0;
// const debounce = () => {
//   if (timer) {
//     clearTimeout(timer);
//   }
//   timer = setTimeout(() => {
//     console.log("function call");
//     callEle.innerHTML = ++callAction;
//   }, 2000);
// };

// btnEle.addEventListener("click", () => {
//   console.log("clicked");
//   clickEle.innerHTML = ++clickAction;
//   debounce();
// });

// approach 2nd using loadlash. Sadly it is not working, please get back to it later.

// function print() {
//   console.log("saving-something");
// }
// btnEle.addEventListener("click", () => {
//   console.log("clicked");
//   _.debounce(print, 1000);
// });

// 3rd approach, the way it is described in tutorials.
const debounce = (func, time = 3000) => {
  let timer;

  return () => {
    clickEle.innerHTML = ++clickAction;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      // func.apply(this, args) is still not clear
      func();
    }, time);
  };
};
btnEle.addEventListener(
  "click",
  debounce(() => {
    console.log("calling debounce method");
    callEle.innerHTML = ++callAction;
  }, 2000)
);
