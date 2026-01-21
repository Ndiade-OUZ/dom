// Sélection des éléments
const box = document.getElementById("colorBox");
const btn = document.getElementById("btn");

// Fonction couleur aléatoire
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Événement click
btn.addEventListener("click", () => {
  const randomColor = getRandomColor();
  box.style.backgroundColor = randomColor;
});
