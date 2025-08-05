import "../styles/main.css";

import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

loadHome();

document.getElementById("btn-home").addEventListener("click", () => {
    reset();
    loadHome();
});

document.getElementById("btn-menu").addEventListener("click", () => {
    reset();
    loadMenu();
});

document.getElementById("btn-about").addEventListener("click", () => {
    reset();
    loadAbout();
});

function reset() {
    const content = document.getElementById("content");
    
    content.innerHTML = "";
    content.style.backgroundImage = "none";
}; 

