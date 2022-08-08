(function (params) {
    
    const slides = [
        `<div class="blog__slide">
            <img src="img/img-blog/true-logo.png" alt="logo of true brand">
          </div>`,
          
          
          `<div class="blog__slide">
          <img src="img/img-blog/nike-logo.png" alt="logo of nike brand">
        </div>`,

        `<div class="blog__slide">
            <img src="img/img-blog/everlast-logo.png" alt="logo of everlast brand">
          </div>`,

          `<div class="blog__slide">
            <img src="img/img-blog/power-crunch-logo.png" alt="logo of powercrunch brand">
          </div>`,

          `<div class="blog__slide">
            <img src="img/img-blog/adidas-logo.png" alt="logo of adidas brand">
          </div>`
    ];

    let currentSlideIdx = 0;

    function renderCarousel(){
        const slideContainer = document.querySelector('.carousel__slides');
        slideContainer.innerHTML = slides[currentSlideIdx];
    };


    function prev() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderCarousel();
    };

    function next() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1
        renderCarousel();
    };

    setInterval(next, 4000);

    renderCarousel();


    const nextBtn = document.querySelector(".blog-carousel__btn-next");
    nextBtn.addEventListener('click', next);

    const prevBtn = document.querySelector(".blog-carousel__btn-prev");
    prevBtn.addEventListener('click', prev);
})();