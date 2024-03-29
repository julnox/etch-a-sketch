const divGrid = document.querySelector(".grid");
const btnClear = document.querySelector("#btn_clear");
const btnRainbow = document.querySelector("#btn_rainbow");
const colorPicker = document.querySelector("#inp_color");
const sizeSlider = document.querySelector("#inp_size");
const currSize = document.querySelector("#curr_size");
let currColor = colorPicker.value;
let intervalID;

function updateColor() {
  const items = document.querySelectorAll(".grid-line > .grid-item");
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = currColor;
    });
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function resetRainbow() {
  clearInterval(intervalID);
  currColor = colorPicker.value;
}

colorPicker.addEventListener("change", resetRainbow);

sizeSlider.addEventListener("change", () => {
  resetRainbow();
  drawGrid(sizeSlider.value);
});

btnRainbow.addEventListener("click", () => {
  clearInterval(intervalID);
  intervalID = setInterval(() => {
    currColor = getRandomColor();
    updateColor();
  }, 500);
});

btnClear.addEventListener("click", () => {
  resetRainbow();
  drawGrid(sizeSlider.value);
});

function drawGrid(dimension) {
  divGrid.replaceChildren();
  currSize.textContent = `Size: ${dimension}x${dimension}`;
  let line, item;

  for (let i = 0; i < dimension; i++) {
    line = document.createElement("div");
    line.setAttribute("class", "grid-line");

    for (let j = 0; j < dimension; j++) {
      item = document.createElement("div");
      item.setAttribute("class", "grid-item");
      line.append(item);
    }
    divGrid.append(line);
  }
  updateColor();
}

drawGrid(sizeSlider.value);
