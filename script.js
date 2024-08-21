const letter = document.getElementById("carta-gerada");
const button = document.getElementById("criar-carta");
const input = document.getElementById("carta-texto");
const counter = document.getElementById("carta-contador");

const classes = {
  estilos: ["newspaper", "magazine1", "magazine2"],
  tamanhos: ["medium", "big", "reallybig"],
  rotacoes: ["rotateleft", "rotateright"],
  inclinacoes: ["skewleft", "skewright"],
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createSpanWithRandomClasses(text) {
  const span = document.createElement("span");
  span.textContent = text;

  for (let i = 0; i < Object.values(classes).length; i += 1) {
    const group = Object.values(classes)[i];
    const randomIndex = getRandomInt(0, group.length - 1);
    span.classList.add(group[randomIndex]);
  }

  return span;
}

function generateLetter(text) {
  letter.innerHTML = "";
  const words = text.split(" ");
  counter.textContent = words.length;
  words.forEach((word) => {
    const span = createSpanWithRandomClasses(word);
    letter.appendChild(span);
  });
}

button.addEventListener("click", () => {
  const text = input.value;

  if (text.trim() === "") {
    letter.textContent = "Por favor, digite o conteúdo da carta.";
  } else {
    generateLetter(text);
  }
});
