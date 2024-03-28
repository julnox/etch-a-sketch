const divContainer = document.querySelector(".container");
const button = document.querySelector("button");

function drawGrid(dimension = 16) {
  divContainer.replaceChildren();
  let line, item;

  for (let i = 0; i < dimension; i++) {
    line = document.createElement("div");
    line.setAttribute("class", "line");
    for (let j = 0; j < dimension; j++) {
      item = document.createElement("div");
      item.setAttribute("class", "item");
      line.append(item);
    }
    divContainer.append(line);
  }
}
drawGrid();

button.addEventListener("click", () => {
  let dimension = Math.floor(+prompt());
  if (dimension > 1 && dimension <= 100) {
    drawGrid(dimension);
  } else {
    alert("Error: Dimension must be a number between 2 and 100");
  }
});
