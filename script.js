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



/// making random background color for body
document.body.onload = function(){
    const randomIndex = Math.floor(Math.random()*Colors.length)
    document.querySelector("#current-color").innerHTML = Colors[randomIndex]
    document.body.style.backgroundColor = Colors[randomIndex]
}