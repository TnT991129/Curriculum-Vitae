let grid = document.querySelectorAll(".grid-container");
window.onscroll = () => {
  grid.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 900;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } 
  });
};
let contact = document.querySelectorAll(".contact");
contact.onscroll = () => {
  grid.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 550;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } 
  });
};