(function () {
    const dots = document.getElementsByClassName("testimonials__dots");
    const slides = document.getElementById("testimonials__slides");

    let activeIndex = 0;

    let windowWidth;
    if (window.matchMedia("(min-width: 1080px)").matches) {
        windowWidth = 800;
    } else if (window.matchMedia("(min-width: 800px)").matches) {
        windowWidth = 600;
    } else if (window.matchMedia("(min-width: 600px)").matches) {
        windowWidth = 500;
    } else if (window.matchMedia("(min-width: 500px)").matches) {
        windowWidth = 400;
    } else {
        windowWidth = 300;
    }

    function showSlide(idx) {
        console.log("showSlide index = " + idx);
        for (let i = 0; i <= dots.length - 1; i++) {
            dots[i].classList.remove("active");
        }
        activeIndex = idx;
        dots[idx].classList.add("active");
        slides.style.transform = `translateX(${-idx * windowWidth}px)`;
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