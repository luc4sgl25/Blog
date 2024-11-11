const body = document.querySelector("body");
const menu = [document.querySelector("#icon-menu"), document.querySelector("#close-menu")];
const darkmode_btn = document.querySelector("#darkmode-container");

function addDarkmode() {
  body.classList.toggle("dark"); // Alterna a classe "dark"
}
function loadTheme() {
  const darkmode = localStorage.getItem("dark"); 
  if (darkmode) 
    addDarkmode();
}
loadTheme();
darkmode_btn.addEventListener("click", () => {
  addDarkmode(); // Alterna o modo escuro
  // Salva ou remove o modo escuro do localStorage
  localStorage.removeItem("dark"); // Remove a chave "dark"
  if (body.classList.contains("dark")) // Se o body contém a classe "dark"
    localStorage.setItem("dark", 1); // Salva a chave "dark" no localStorage
});
menu.map(i => {
  i.addEventListener("click", () => {
    body.classList.toggle("overflow"); 
    document.querySelector("#navbar-inner").classList.toggle("show");
  });
});
