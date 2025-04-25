
// grid number inputs
const inputRows = document.getElementById("input-rows");
const inputCols = document.getElementById("input-cols");

let currentColor = "#000000";
let isDrawing = false;
let isRandomColor = false;

const gridCanvas = document.getElementById("grid-canvas");

gridCanvas.addEventListener('mousedown', () => isDrawing = true);
document.addEventListener('mouseup', () => isDrawing = false);

function getRows() {
    return inputRows.value;
}

function getCols() {
    return inputCols.value;
}

function generateGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let createRow = document.createElement("div");
        createRow.classList.add("row");
    
        for (let j = 0; j < cols; j++) {
            let createCol = document.createElement("div");
            createCol.classList.add("col");
            createRow.appendChild(createCol);

            createCol.addEventListener('mouseover', () => {
                if (isDrawing) {
                    createCol.style.backgroundColor = currentColor;
                }
            })
        }
        gridCanvas.appendChild(createRow);
    }    
}

function generateRandomColors() {
    const hex = "123456789ABCDEF";
    let color = "#";

    for (i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("btn-generate-grid").addEventListener('click', () => {
    gridCanvas.innerHTML = "";
    
    generateGrid(parseInt(getRows()), parseInt(getCols()));

    inputRows.value = '';
    inputCols.value = '';
})

document.getElementById("btn-colors").addEventListener('click', () => {
    const inputColor = document.getElementById("color-picker");
    currentColor = inputColor.value;

    console.log(currentColor);
})

document.getElementById("btn-random-color").addEventListener('click', () => {
    currentColor = generateRandomColors();

    console.log(currentColor);
})

document.getElementById("btn-erase").addEventListener('click', () => {
    currentColor = "#FFFFFF";

    console.log(currentColor);
})



