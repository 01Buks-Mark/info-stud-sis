const slideshow = document.querySelector('.slideshow');
const images = slideshow.querySelectorAll('img');
let currentImage = 0;
setInterval(() => {
  images[currentImage].classList.remove('show');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('show');
}, 3000);
