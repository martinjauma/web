let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
  } else {
    document.getElementById("nav").classList.add("responsive");
    menuVisible = true;
  }
}

function seleccionar() {
  // Oculta el menú una vez que se selecciona una opción
  document.getElementById("nav").classList.remove("responsive");
  menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if(distancia_skills >= 300){
      let habilidades = document.getElementsByClassName("progreso");
      habilidades[0].classList.add("javascript");
      habilidades[1].classList.add("htmlcss");
      habilidades[2].classList.add("photoshop");
      habilidades[3].classList.add("wordpress");
      habilidades[4].classList.add("drupal");
      habilidades[5].classList.add("comunicacion");
      habilidades[6].classList.add("trabajo");
      habilidades[7].classList.add("creatividad");
      habilidades[8].classList.add("dedicacion");
      habilidades[9].classList.add("proyect");
  }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = efectoHabilidades;

// Obtén una referencia al botón
const botonDescarga = document.querySelector(".sobremi button");

// Agrega un evento de clic al botón
botonDescarga.addEventListener("click", () => {
  // Iniciar la descarga del archivo
  window.open("cv/CV MAJ COACH ES.pdf", "_blank");

});

const langButton = document.getElementById("lang-button");
const aboutMeSection = document.getElementById("about-me");


