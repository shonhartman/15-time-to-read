
let wordCount = document.querySelector("#minutes-read").innerHTML.split(" ").length;

let total = wordCount / 230;

// document.create.element("small").innerHTML = total;

document.querySelector("#minutes-read").textContent = ${Math.round(total)} min read;
