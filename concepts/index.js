console.log("cathing");

const selectHandler = () => {
  console.log("hit");
  let ele = document.getElementById("select");
  console.log(ele.options.selectedIndex);
  console.log(ele.options[ele.options.selectedIndex].text);
};

window.onclick = function (event) {
  console.log(event.target.matches("#select"));
};
