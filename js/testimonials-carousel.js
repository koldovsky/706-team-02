(function () {
    const dot = document.getElementsByClassName("testimonials__dot");
    const slides = document.getElementById('testimonials__slides');

    dot[0].onclick = function () {
        slides.style.transform = "translateX(0px)";
        for (i = 0; i < 3; i++) {
            dot[i].classList.remove("active");
        }
        this.classList.add("active");
    }
    dot[1].onclick = function () {
        slides.style.transform = "translateX(-800px)";
        for (i = 0; i < 3; i++) {
            dot[i].classList.remove("active");
        }
        this.classList.add("active");
    }
    dot[2].onclick = function () {
        slides.style.transform = "translateX(-1600px)";
        for (i = 0; i < 3; i++) {
            dot[i].classList.remove("active");
        }
        this.classList.add("active");
    }

    const prevButton = document.querySelector('.buttons__prev');
    prevButton.addEventListener('click', prev);

    const nextButton = document.querySelector('.buttons__next');
    nextButton.addEventListener('click', next);

})();

