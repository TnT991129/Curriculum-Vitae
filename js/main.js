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
