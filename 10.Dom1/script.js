// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);

// console.log(document.body.parentNode);
// console.log(document.head.parentElement);

// let a = document.querySelector("div");

// console.log(a.hasAttribute("id"));
// console.log(a.getAttribute("class"));
// console.log(a.setAttribute("id","id1"));

// let b = document.getElementById("id1");
// b.innerText = "How Are you";
// let c = b;
// console.log(c.innerText);
// console.log(document);

let div = document.createElement("div");
let b = div.innerHTML = "How Are You?";

document.body.prepend(div);
console.log(document.body.firstChild.innerHTML);