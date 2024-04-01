let about = document.querySelectorAll(".img_info, .info, .skills-container, .portafolio, .contact");
window.onscroll = () => {
  about.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 350;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } 
  });
};
var nombre = document.getElementById('nombre');
var correo = document.getElementById('correo');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
  console.log('Enviando formulario')
  var mensajesError = [];
  if (nombre.value === null|| nombre.value === ''){
    mensajesError.push('Ingresa tu nombre');
  }
  if (correo.value === null|| nombre.value === ''){
    mensajesError.push('Ingresa tu correo');
  }

  error.innerHTML = mensajesError.join(', ');
  
  return false
}