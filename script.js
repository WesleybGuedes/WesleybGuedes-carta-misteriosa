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
  const cartaGerada = document.getElementById("carta-gerada");
  cartaGerada.innerHTML = "";

  const palavras = texto.split(" ");
  // Substituindo for...of por forEach
  palavras.forEach((palavra) => {
    const span = criarSpanComClassesAleatorias(palavra);
    cartaGerada.appendChild(span);
  });
}

// Obtém os elementos do DOM
const button = document.getElementById("criar-carta");
const input = document.getElementById("carta-texto");

// Adiciona um ouvinte de evento ao botão para gerar a carta
button.addEventListener("click", () => {
  const texto = input.value;

  if (texto.trim() === "") {
    alert("Por favor, digite o conteúdo da carta.");
  } else {
    gerarCarta(texto);
  }
});
