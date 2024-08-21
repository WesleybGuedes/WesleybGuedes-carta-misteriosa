const cartaGerada = document.getElementById("carta-gerada");
const button = document.getElementById("criar-carta");
const input = document.getElementById("carta-texto");

const classes = {
  estilos: ["newspaper", "magazine1", "magazine2"],
  tamanhos: ["medium", "big", "reallybig"],
  rotacoes: ["rotateleft", "rotateright"],
  inclinacoes: ["skewleft", "skewright"],
};

function getRandomInt(min, max) {
  const mini = Math.ceil(min);
  const maxi = Math.floor(max);
  return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
}

function criarSpanComClassesAleatorias(texto) {
  const span = document.createElement("span");
  span.textContent = texto;

  for (let i = 0; i < Object.values(classes).length; i += 1) {
    const grupo = Object.values(classes)[i];
    const indiceAleatorio = getRandomInt(0, grupo.length - 1);
    span.classList.add(grupo[indiceAleatorio]);
  }

  return span;
}
function gerarCarta(texto) {
  cartaGerada.innerHTML = "";

  const palavras = texto.split(" ");
  palavras.forEach((palavra) => {
    const span = criarSpanComClassesAleatorias(palavra);
    cartaGerada.appendChild(span);
  });
}

button.addEventListener("click", () => {
  const texto = input.value;

  if (texto.trim() === "") {
    cartaGerada.textContent = "Por favor, digite o conteúdo da carta.";
  } else {
    gerarCarta(texto);
  }
});
