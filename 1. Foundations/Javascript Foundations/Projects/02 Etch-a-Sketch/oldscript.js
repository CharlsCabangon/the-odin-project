
const container = document.querySelector(".container");


function createDivs(columnCount, rowCount) {
    for(let i = 0; i < columnCount; i++) {
        let column = document.createElement("div");
        column.classList.add("column");

        for(let j = 0; j < rowCount; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            column.appendChild(row);

            row.addEventListener("mousemove", () => {
                if (isMouseDown) {
                    row.style.backgroundColor = "#000000";
                }
            });
        }
        container.appendChild(column);
    }
}

function setColumn() {
    while(true) {
        columnCount = Number(prompt("Set column number:"));

        if(columnCount > 100) {
            alert("Invalid! Max is 100");
            continue;
        }
        else {
            return columnCount;
        }
    }
}

function setRow() {
    while(true) {
        rowCount = Number(prompt("Set row number:"));

        if(rowCount > 100) {
            alert("Invalid! Max is 100");
            continue;
        }
        else {
            return rowCount;
        }
    }
}

let isMouseDown = false;

// Track mouse state globally
document.body.addEventListener("mousedown", () => isMouseDown = true);
document.body.addEventListener("mouseup", () => isMouseDown = false);
createDivs(setColumn(), setRow());

