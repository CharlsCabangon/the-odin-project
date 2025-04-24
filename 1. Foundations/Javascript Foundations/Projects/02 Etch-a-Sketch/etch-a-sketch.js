
const inputRows = document.getElementById("input-rows");
const inputCols = document.getElementById("input-cols");

const gridCanvas = document.getElementById("grid-canvas");

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
        }
        gridCanvas.appendChild(createRow);
    }    
}

document.getElementById("btn-generate-grid").addEventListener('click', () => {
    gridCanvas.innerHTML = "";
    
    generateGrid(parseInt(getRows()), parseInt(getCols()));

    inputRows.value = '';
    inputCols.value = '';
})

