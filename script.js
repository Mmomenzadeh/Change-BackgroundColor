/// create array of colors
const Colors = [
  "LightSteelBlue",
  "Coral",
  "Crimson",
  "DarkKhaki",
  "DarkOrange",
  "Gold",
  "LightPink",
  "LightGreen",
  "Olive",
  "Plum",
];

/// making function for change background Color and add active class to activeButton
function setBackgroundColor(color) {
  document.querySelector("#current-color").innerHTML = color;
  document.body.style.backgroundColor = color;
  const currntActiveButton = document.querySelector("button.active")
  if (currntActiveButton !== null) {
    currntActiveButton.classList.remove("active")
    
  }
  document.querySelector(`button[data-color = ${color}]`).classList.add("active")
}

/// Making buttons for each color and add event to button for change backgroundColor of body
Colors.forEach((color) => {
  const button = document.createElement("button");
  button.style.backgroundColor = color;
  button.onclick = function () {
    setBackgroundColor(color);
  };
  button.setAttribute(`data-color`, `${color}`);
  document.querySelector("div.colors").appendChild(button);
});

/// making random background color for body
document.body.onload = function () {
  const randomIndex = Math.floor(Math.random() * Colors.length);
  const color = Colors[randomIndex];
  setBackgroundColor(color);
};
