
export function loadHome() {
    const container = document.getElementById("content");

    const div = document.createElement("div");
    const para = document.createElement("p");

    div.innerHTML = "Hello";

    container.appendChild(div);
}