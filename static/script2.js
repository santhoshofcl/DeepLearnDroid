const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active"); 
});

var sliderNov = function(manual){
    btns.forEach((btn) =>{
        btn.classList.remove("active");
    });

    slides.forEach((slide) =>{
        slide.classList.remove("active");
    });

    contents.forEach((content) =>{
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () =>{
        sliderNov(i);
    });
});


var currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides[index].classList.add("active");
    contents[index].classList.add("active");
    btns[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Start autosliding
var slideInterval = setInterval(nextSlide, 15000); // Change slide every 15 seconds

// Pause autosliding when mouse is over the slider
slides.forEach((slide) => {
    slide.addEventListener("mouseenter", () => {
        clearInterval(slideInterval);
    });

    slide.addEventListener("mouseleave", () => {
        slideInterval = setInterval(nextSlide, 15000);
    });
});
