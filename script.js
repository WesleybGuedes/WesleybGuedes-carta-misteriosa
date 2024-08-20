const button = document.getElementById("criar-carta");
button.addEventListener("click", () => {
  const input = document.getElementById("carta-texto");
  const text = input.value;
  if (text.trim() === "") {
    document.getElementById("carta-gerada").innerText = "Por favor, digite o conteúdo da carta.";
  } else {
    const words = text.split(" ");
    const letter = document.getElementById("carta-gerada");
    letter.innerHTML = "";
    for (let i = 0; i < words.length; i += 1) {
      const span = document.createElement("span");
      span.innerText = words[i];
      span.className = `word${Math.floor(Math.random() * 3) + 1}`;
      letter.appendChild(span);
    }
  }
});
