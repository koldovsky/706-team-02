function burgerClick() {
    burgerChange();
}

function burgerChange() {
    let burgerMenuBlock = document.querySelector('.burger');
    burgerMenuBlock.classList.toggle('active');
    let menu = document.querySelector('.burger__menu');
    menu.classList.toggle('burger__menu-active');
    let body = document.querySelector('body');
    body.classList.toggle('overflow-hidden');
}