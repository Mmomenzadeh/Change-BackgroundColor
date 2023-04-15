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

/// Making buttons for each color and add event to button for change backgroundColor of body
Colors.forEach((color) => {
  const button = document.createElement("button");
  button.style.backgroundColor = color;
  button.onclick = function () {
    setBackgroundColor(color);
  };
  document.querySelector("div.colors").appendChild(button);
});

/// making random background color for body
document.body.onload = function () {
  const randomIndex = Math.floor(Math.random() * Colors.length);
  const color = Colors[randomIndex];
  setBackgroundColor(color);
};

/// making function for change background Color
function setBackgroundColor(color) {
  document.querySelector("#current-color").innerHTML = color;
  document.body.style.backgroundColor = color;
}
