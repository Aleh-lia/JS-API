const sliderImage = document.querySelector('.slider-image');
const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');
const dots = document.querySelectorAll('.dot');

let currentImageIndex = 0;

function updateImage() {
  sliderImage.style.backgroundImage = `url(media/images/slide${currentImageIndex}.jpeg)`;
}

function updateActiveDot() {
  dots.forEach((dot, index) => {
    if (index === currentImageIndex) {
      dot.classList.add('selected');
    } else {
      dot.classList.remove('selected');
    }
  });
}

previousButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + dots.length) % dots.length;
  updateImage();
  updateActiveDot();
});

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % dots.length;
  updateImage();
  updateActiveDot();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentImageIndex = index;
    updateImage();
    updateActiveDot();
  });
});

updateImage();
updateActiveDot();