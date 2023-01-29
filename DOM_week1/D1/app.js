const list = document.getElementById("list")
// console.dir(list)
list.textContent = "Hello World!!!"
list.textContent = "<h1>Hello World</h1>"
list.innerHTML = "<h1>Hello World<h1>"

const el = document.querySelector("ul li:nth-child(2)")
const icon = el.querySelector("p .fa-times")
icon.style.color = "yellow"

const icons = document.getElementsByClassName(".fa")
console.log(icons);

for(let i = 0; i < icons.length; i ++){
    console.log(icons[i])
    icons[i].style.color = "blue";
}

const headehr2 = document.querySelector("header")
// console.log(header2);
// headerh2.className = "changeFt"
// headerh2.className += "chanfeBg"

headerh2.classList.add("changeBg");
headehr2.classList.add("changeFt");
header.classList.remove("changeBg");