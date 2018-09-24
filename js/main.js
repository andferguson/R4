//Things to initialize on load
const tds = [];
const height = 6;
const width = 7;
const game = new Game(height, width);

// <table> element
const table = document.createElement("table");
for (let h = 0; h < height; h++) {
  const tr = document.createElement("tr");
  for (let w = 0; w < width; w++) {
    const td = document.createElement("td");
    td.dataset.row = h;
    td.dataset.col = w;
    tds.push(td);
    tr.append(td);
  }
  table.append(tr);
}

const buttonRow = document.createElement("tr");
for (let i = 0; i < width; i++) {
  const th = document.createElement("th");
  const childButton = document.createElement("button");
  childButton.innerHTML = i;
  childButton.id = `game-button-${i}`;
  th.appendChild(childButton);
  buttonRow.appendChild(th);
}
table.append(buttonRow);
document.getElementById("game").append(table);

const paint = () => {
  tds.forEach(cell => {
    if (
      gol.getCell(cell.dataset.row, cell.dataset.col) &&
      !cell.classList.length
    ) {
      cell.classList.add("alive");
    } else if (
      cell.classList.length &&
      !gol.getCell(cell.dataset.row, cell.dataset.col)
    ) {
      cell.classList.remove("alive");
    }
  });
};

//game button event listener
table.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    event.target.classList.toggle("red");
    console.log(`button ${+event.target.id.slice(-1)} clicked`);
    game.addMove(+event.target.id.slice(-1));
  }
});
