let burgerMenuBlock = document.querySelector('.burger')
burgerMenuBlock.addEventListener('click', (elem)  => {
    burgerMenuBlock.classList.toggle('active');    
    let menu=document.querySelector('.burger__menu')
    menu.classList.toggle('burger__menu-active');
    })

let menuLink = document.querySelector('.menu__link')
menuLink.addEventListener('click', (elem)  => {
    elem.preventDefault()    
    let menu=document.querySelector('.burger__menu')
    menu.classList.toggle('burger__menu-active');
})