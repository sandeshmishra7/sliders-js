var wrapper = document.querySelector('.wrapper');
var imgContainer = document.querySelector('.img-container');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var images = document.querySelectorAll('img');

var currentSlide = 0;

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function slideTransition () {
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`
}

// comment

function prevSlide() {
    // Condition to obtain previous index of the slide when index is at 0.
    // And to obtain previous index for other indexes.
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showImage(currentSlide);
    slideTransition();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showImage(currentSlide);
    slideTransition();
}

// Show the first slide at load
showImage(currentSlide);