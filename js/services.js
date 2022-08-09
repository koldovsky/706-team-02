let slidesCard = document.querySelectorAll(".card");
let servicesInner = document.querySelector(".services__card-inner");
let speed = 250;
let idx = 0;

let clickable = true;

function resetAnimation() {
  this.style.WebkitAnimation = "";
  this.style.animation = "";
}

function setAnimation(card) {
  card.style.WebkitAnimation = `move ${speed}ms`;
  card.style.animation = `move ${speed}ms`;
  card.addEventListener("webkitAnimationEnd", resetAnimation);
  card.id = `card_${3}`;
}

function moveThis(e) {
  if (clickable && e.target.classList.contains("card")) {
    clickable = false;
    if (idx == 3) idx = 0;

    let siblingNext = slidesCard[idx].nextElementSibling;
    let siblingPrev = slidesCard[idx].previousElementSibling;
    let prev = slidesCard[0].parentElement.children.length - 1;
    let next = 1;

    setAnimation(slidesCard[idx]);

    while (siblingNext) {
      siblingNext.id = `card_${next}`;
      siblingNext = siblingNext.nextElementSibling;
      next++;
    }

    while (siblingPrev) {
      siblingPrev.id = `card_${prev}`;
      siblingPrev = siblingPrev.previousElementSibling;
      prev--;
    }

    idx++;
    setTimeout(() => (clickable = true), speed);
  }
}

servicesInner.onclick = moveThis;
