document.querySelector('.menu__btn').onclick = function(){
    document.querySelector('.menu__list').classList.toggle('menu__show');
}

var swiper = new Swiper(".swiper", {
loop: true,
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
});