
const container = document.querySelector(".container");

function createRow(columnCount, rowCount) {
    for(let i = 0; i < columnCount; i++) {
        let column = document.createElement("div");
        column.classList.add("column");

        for(let j = 0; j < rowCount; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

createRow(100, 16);