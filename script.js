let search   = document.querySelector('.searchbox');

document.querySelector('#search-icon').onclick = ()=> {
    search.classList.toggle('active');
}
document.getElementById('menu-icon').onclick = function() {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
}
//header
let header = document.querySelector('header');
window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});
document.addEventListener('DOMContentLoaded', function() {
    // Function to hide the banner after 5 seconds
    setTimeout(function() {
        const banner = document.getElementById('banner');
        banner.style.opacity = '0';
        setTimeout(function() {
            banner.style.display = 'none';
        }, 1000); // Give time for the opacity transition
    }, 5000); // Banner visible for 5 seconds
});
/*About*/
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 20000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Add event listeners to buttons
prevButton.addEventListener('click', () => {
    stopSlideShow();
    prevSlide();
    startSlideShow();
});

nextButton.addEventListener('click', () => {
    stopSlideShow();
    nextSlide();
    startSlideShow();
});

// Initial display of the first slide
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    startSlideShow();
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.destinations-container .box h2').forEach(h2 => {
        h2.addEventListener('click', function() {
            const info = this.nextElementSibling;
            if (info.style.opacity === '1') {
                info.style.opacity = '0';
            } else {
                // Hide all other info boxes
                document.querySelectorAll('.destinations-container .info').forEach(p => p.style.opacity = '0');
                // Show the clicked one
                info.style.opacity = '1';
            }
        });
    });
});