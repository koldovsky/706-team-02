(function () {
    const dots = document.getElementsByClassName("testimonials__dots");
    const slides = document.getElementById('testimonials__slides');


    
    function showSlide(idx) {
        for (let i = 0; i <= dots.length - 1; i++) {
            dots[i].classList.remove("active");
        }
        dots[idx].classList.add("active");
        slides.style.transform = `translateX(${-idx*800}px)`;
    }

    for (let i = 0; i <= dots.length; i++) {
        dots[i].addEventListener('click', 
        () => showSlide(i) );
    }
    
})();

