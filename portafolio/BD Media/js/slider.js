var slides = Array.from(document.querySelectorAll('.slide'));
var currentSlide = 0;
slides[currentSlide].classList.add('active');

document.querySelector('.prev').addEventListener('click', function(event) {
  event.preventDefault();
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
});

document.querySelector('.next').addEventListener('click', function(event) {
  event.preventDefault();
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
});