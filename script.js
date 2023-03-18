let menus = document.querySelector('.navbar');
let btnClose = document.querySelector('.close_btn');
let menuBtn = document.querySelector('.menu_btn');

menuBtn.addEventListener('click', function(){
    menus.classList.add("display");
})

btnClose.addEventListener('click', function(){
    menus.classList.remove("display");
})
