const contenedorElementos = document.querySelector('.body-container');

setInterval(() => {
  contenedorElementos.scrollLeft += 1;
}, 30);
let contact = document.querySelectorAll(".body_footer");
window.onscroll = () => {
  contact.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 550;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } 
  });
};