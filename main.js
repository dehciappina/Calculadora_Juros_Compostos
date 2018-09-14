let hamburguer = document.querySelector('.hamburguer')

let hamburguer1 = document.querySelector('.hamburguer div:first-child')
let hamburguer2 = document.querySelector('.hamburguer div:nth-child(2)')
let hamburguer3 = document.querySelector('.hamburguer div:last-child')

let logo = document.querySelector('.main_header > img')
let mainHeader = document.querySelector('.main_header')

let headerMenu = document.querySelector('.header_menu')


hamburguer.addEventListener('click', function() {
    logo.classList.toggle('main_header_img_right')
    mainHeader.classList.toggle('main_header_clicked')

    hamburguer1.classList.toggle('top_burger')
    hamburguer2.classList.toggle('mid_burger')
    hamburguer3.classList.toggle('bot_burger')

    headerMenu.classList.toggle('menu_show')
})

