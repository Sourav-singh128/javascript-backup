const worker = new Worker('worker.js');
const sumBtn= document.querySelector("#sumBtn");
const bgBtn= document.querySelector("#bgBtn");

sumBtn.addEventListener("click",(e)=>{
    worker.postMessage("hello worker")
    // console.log(`The final sum is  ${sum}`);
});
worker.onmessage=function(message){
    console.log(message);
}

bgBtn.addEventListener("click", (event)=>{
    if(document.body.style.background !== "green")
    document.body.style.background = "green";
    else
    document.body.style.background = "blue";
});