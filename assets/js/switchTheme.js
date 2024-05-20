const corpoPagina = document.querySelector(".container");
const botaoMudaCor = document.querySelector("#mudar-cor");
let icon = document.createElement("i");

icon.classList.add("fa-solid", "fa-sun"); // Inicia com icone do sol
botaoMudaCor.appendChild(icon);

botaoMudaCor.addEventListener("click", () => {
  corpoPagina.classList.toggle("mode-dark");

  // Alterne entre ícone sol e lua
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
});