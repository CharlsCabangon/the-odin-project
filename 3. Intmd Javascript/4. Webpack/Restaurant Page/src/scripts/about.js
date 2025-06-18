
export function loadAbout() {
    const content = document.getElementById("content");

    const aboutContainer = document.createElement("div");
    aboutContainer.className = "about-container";
    
    const aboutUs = document.createElement("p");
    aboutUs.textContent = "About us";
    aboutUs.className = "about-us";

    aboutContainer.appendChild(aboutUs);
    content.appendChild(aboutContainer);
};