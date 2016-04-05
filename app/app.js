
let wordCount = document.querySelector(".container").innerHTML.split(" ").length;

let total = wordCount / 230;

// document.create.element("small").innerHTML = total;

document.querySelector("#minutes-read").textContent = `${Math.round(total)} min read`;
