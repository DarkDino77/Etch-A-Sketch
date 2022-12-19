const grid = document.querySelector("#grid");
//make horizontal box
/*
function horizontal(size) {
    for (let index = 0; index <= size; index++) {
        const hori = document.createElement('div');
        hori.classList.add('hori');
        container.appendChild(hori);   
        square(size);
    }
}

//make individual squers
function square(size) {
    for (let index = 0; index < size; index++) {
        const squ = document.createElement('div'); 
        squ.classList.add('squ');
        hori.appendChild(squ); 
    }
    
}

horizontal(16);
*/

function makeRows(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      grid.appendChild(cell).className = "grid-item";
    };
  };
  
  makeRows(16, 16);