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
    document.body.style.backgroundColor = color;
    document.querySelector("#current-color").innerHTML = color;
  };
  document.querySelector("div.colors").appendChild(button);
});
