let about = document.querySelectorAll(".about");
window.onscroll = () => {
  about.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 350;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};
