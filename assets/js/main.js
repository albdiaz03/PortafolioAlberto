/* Funcion Hamburger*/

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Mostrar el botón cuando se baja más de 200px
window.onscroll = function () {
  const btn = document.getElementById("btnVolverArriba");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Función para volver arriba suavemente
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Credentials Blazor
function toggleCreds() {
  const box = document.getElementById("credsBox");
  box.classList.toggle("active");
}

// Try Api
function toggleApiHelp() {
  const box = document.getElementById("apiHelpBox");
  box.classList.toggle("active");
}


