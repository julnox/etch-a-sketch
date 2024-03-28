const divContainer = document.querySelector(".container");
const btnReset = document.querySelector("#btn_reset");
const colorPicker = document.querySelector("#inp_color");
const slider = document.querySelector("#inp_size");
const currentRange = document.querySelector("#curr_size");
let currColor = colorPicker.value;

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
  items = document.querySelectorAll(".line > .item");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = currColor;
    });
  });
}

drawGrid(slider.value);

colorPicker.addEventListener("change", () => {
  currColor = colorPicker.value;
});

slider.addEventListener("change", () => {
  drawGrid(slider.value);
});

btnReset.addEventListener("click", () => {
  slider.value = 16;
  drawGrid(slider.value);
});
