
const container = document.querySelector("#container");

const content = document.createElement("div");
const paragraph = document.createElement("p");
const h3 = document.createElement("h3");

paragraph.textContent = "Hey I'm Red!";
paragraph.style.color = "red";

h3.textContent = "I'm a blue h3";
h3.style.color = "blue";

// content.createElement("h1");
content.style.height = "500px";
content.style.border = "2px solid black";
content.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I AM GOING TO BE A SUCCESSFUL UX/UI DESIGNER/DEVOPS/GRAPHIC DESIGNER!!!";

const p = document.createElement("p");
p.textContent = "MANIFESTING! ACTING! CLAIMING!";
p.style.color = "red";


content.appendChild(h1);
content.appendChild(p);

document.body.appendChild(paragraph);
document.body.appendChild(h3);
document.body.appendChild(content);