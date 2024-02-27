// q1>event propagation in javascript.
// q2> what is event.target, event.currentTarget, this.target
// q3> stop propagation.
// q4> what is event delegation.
// q5> Modal to close when clicked on negative space.

//1st.

// console.log("start");
// const div = document.querySelector(".div");
// const form = document.querySelector(".form");
// const button = document.querySelector(".btn");
// div.addEventListener("click", () => {
//   alert("div");
// });

// form.addEventListener("click", () => {
//   alert("form");
// });

// button.addEventListener("click", () => {
//   alert("button");
// });
// console.log('end');

//2nd

// console.log("start");
// const div = document.querySelector(".div");
// const form = document.querySelector(".form");
// const button = document.querySelector(".btn");
// function printAlert(event) {
//   console.log(event.target.tagName);
//   alert(event.currentTarget.tagName);
// }
// div.addEventListener("click", (e) => {
//   printAlert(e);
// });

// form.addEventListener("click", (e) => {
//   printAlert(e);
// });

// button.addEventListener("click", (e) => {
//   printAlert(e);
// });
// console.log("end");

//3rd
// console.log("start");
// const div = document.querySelector(".div");
// const form = document.querySelector(".form");
// const button = document.querySelector(".btn");

// div.addEventListener("click", (e) => {
//   alert("div");
// });

// form.addEventListener("click", (e) => {
//   alert("form");
//   e.stopPropagation();
// });

// button.addEventListener("click", (e) => {
//   alert("button");
// });
// console.log("end");

// 4th.
// console.log("start");
// const div = document.querySelector(".outerDiv");

// div.addEventListener("click", (e) => {
//   //   alert(e.target.tagName);
//   window.location.href = `./${e.target.innerText}`;
//   console.log(e.target.innerText);
// });

// console.log("end");

// 5th.
console.log("start");
const button = document.querySelector(".open-modal");
const container = document.querySelector(".modal-container");
const body = document.querySelector("body");
const box = document.querySelector(".box");
console.log(body);
function toggle(value) {
  value
    ? (container.style.display = "flex")
    : (container.style.display = "none");
}
button.addEventListener("click", (event) => {
  toggle(true);
  event.stopPropagation();
});

// body.addEventListener("click", () => {
//   toggle(false);
// });

// container.addEventListener("click", (e) => {
//   // toggle(true);
//   console.log("clicked");
//   e.stopPropagation();
// });

container.addEventListener("click", (event) => {
  console.log(event.target.className);
  if (event.target.className !== "box") {
    toggle(false);
  }
});
console.log("end");
