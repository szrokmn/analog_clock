const sec = document.querySelector(".secs");
const min = document.querySelector(".mins");
const hours = document.querySelector(".hours");

function tiktak() {
let second = new Date().getSeconds();
let minute = new Date().getMinutes();
let hour = new Date().getHours();

console.log(second, minute, hour);
}

setInterval(tiktak, 1000);



