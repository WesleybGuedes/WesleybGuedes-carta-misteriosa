const button = document.getElementById("criar-carta");
const cartaGerada = document.getElementById("carta-gerada");

const estilos = ["newspaper", "magazine1", "magazine2"];
const tamanhos = ["medium", "big", "reallybig"];
const rotacoes = ["rotateleft", "rotateright"];
const inclinacoes = ["skewleft", "skewright"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function criarSpanComClassesAleatorias(texto) {
  const span = document.createElement("span");
  span.textContent = texto;

  const estiloAleatorio = estilos[getRandomInt(estilos.length)];
  const tamanhoAleatorio = tamanhos[getRandomInt(tamanhos.length)];
  const rotacaoAleatoria = rotacoes[getRandomInt(rotacoes.length)];
  const inclinacaoAleatoria = inclinacoes[getRandomInt(tamanhos.length)];

  span.classList.add(estiloAleatorio, tamanhoAleatorio, rotacaoAleatoria, inclinacaoAleatoria);
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
  const input = document.getElementById("carta-texto");
  const texto = input.value;

  if (texto.trim() === "") {
    cartaGerada.innerText = "Por favor, digite o conteúdo da carta.";
  } else {
    gerarCarta(texto);
  }
});
