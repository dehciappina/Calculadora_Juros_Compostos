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














let mainContainerH2 = document.querySelector('.main_container > h2')
let taxaJurosBotao = document.querySelector('#taxaJuros')
let valorParcelaBotao = document.querySelector('#valorParcela')
let valorPresenteBotao = document.querySelector('#valorPresente')
let valorFuturoBotao = document.querySelector('#valorFuturo')
let calculator = document.querySelector('.calculator')

let pTaxaJ = document.querySelector('#taxaJuros p')
let imgTaxaJ = document.querySelector('#taxaJuros img')

taxaJurosBotao.addEventListener('click', function() {
    mainContainerH2.classList.toggle('main_container_h2_hidden')
    valorParcelaBotao.classList.toggle('hidden_main_container_article')
    valorPresenteBotao.classList.toggle('hidden_main_container_article')
    valorFuturoBotao.classList.toggle('hidden_main_container_article')

    taxaJurosBotao.classList.toggle('calc_option_ontop')
    calculator.classList.toggle('calculator_show')
    imgTaxaJ.classList.toggle('img_disappear')

    // setTimeout(function() {
    // },300)

    let AltText = "voltar"
    if(pTaxaJ.innerHTML == AltText) {
        pTaxaJ.innerHTML = "Taxa de Juros"
    } else {
        pTaxaJ.innerHTML = AltText
    }
})

setTimeout(function() {
    taxaJurosBotao.click()
},400)