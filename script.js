const divContainer = document.querySelector(".container");
const btnReset = document.querySelector("#btn_reset");
const btnRainbow = document.querySelector("#btn_rainbow");
const colorPicker = document.querySelector("#inp_color");
const slider = document.querySelector("#inp_size");
const currentRange = document.querySelector("#curr_size");
let currColor = colorPicker.value;
let intervalID;

function drawGrid(dimension) {
  divContainer.replaceChildren();
  currentRange.textContent = `Size: ${dimension}x${dimension}`;
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
  updateColor();
}

drawGrid(slider.value);

function updateColor() {
  items = document.querySelectorAll(".line > .item");
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = currColor;
    });
  });
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function resetGrid(){
  clearInterval(intervalID);
  currColor = colorPicker.value;
}

colorPicker.addEventListener("change", () => {
  resetGrid();
});

slider.addEventListener("change", () => {
  resetGrid();
  drawGrid(slider.value);
});

btnRainbow.addEventListener("click", async () => {
  intervalID = setInterval(() => {
    currColor = getRandomColor();
    updateColor();
  }, 500);
});

btnReset.addEventListener("click", () => {
  resetGrid();
  colorPicker.value = "#252525";
  currColor = colorPicker.value;
  slider.value = 16;
  drawGrid(slider.value);
});
