(function () {
    const dots = document.getElementsByClassName("testimonials__dots");
    const slides = document.getElementById("testimonials__slides");
    let activeIndex = 0;

    function showSlide(idx) {
        console.log("showSlide index = " + idx);
        for (let i = 0; i <= dots.length - 1; i++) {
            dots[i].classList.remove("active");
        }
        activeIndex = idx;
        dots[idx].classList.add("active");
        slides.style.transform = `translateX(${-idx * 800}px)`;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click',
            () => showSlide(i));
    }

    function onArrowNext() {
        if (activeIndex < dots.length) {
            activeIndex = (activeIndex + 1) % dots.length;
            showSlide(activeIndex);
        }
    }

    function onArrowPrev() {
        if (activeIndex > 0) {
            activeIndex = activeIndex - 1;
        } else {
            activeIndex = dots.length - 1;
        }
        showSlide(activeIndex);
    }

    const nextBtn = document.querySelector(".button__next");
    nextBtn.addEventListener('click', onArrowNext);

    const prevBtn = document.querySelector(".button__prev");
    prevBtn.addEventListener('click', onArrowPrev);
})();