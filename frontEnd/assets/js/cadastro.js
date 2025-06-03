const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const confirmar = document.querySelector("#conSenha");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  if (senha.value.length < 8) {
    e.preventDefault();

    senha.style.borderColor = "red";
    senha.style.borderWidth = "2px";
    document.querySelector("#span-senha").style.display = "block";
  } else {
    document.querySelector("#span-senha").style.display = "none";
  }
  if (confirmar.value !== senha.value) {
    e.preventDefault();
    document.querySelector("#span-conSenha").style.display = "block";
  } else {
    document.querySelector("#span-conSenha").style.display = "none";
  }
});
