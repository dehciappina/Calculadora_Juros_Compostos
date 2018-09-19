const hamburguer = document.querySelector('.hamburguer')

const hamburguer1 = document.querySelector('.hamburguer div:first-child')
const hamburguer2 = document.querySelector('.hamburguer div:nth-child(2)')
const hamburguer3 = document.querySelector('.hamburguer div:last-child')

const logo = document.querySelector('.main_header > img')
const mainHeader = document.querySelector('.main_header')

const headerMenu = document.querySelector('.header_menu')


hamburguer.addEventListener('click', function() {
    logo.classList.toggle('main_header_img_right')
    mainHeader.classList.toggle('main_header_clicked')

    hamburguer1.classList.toggle('top_burger')
    hamburguer2.classList.toggle('mid_burger')
    hamburguer3.classList.toggle('bot_burger')

    headerMenu.classList.toggle('menu_show')
})














const mainContainerH2 = document.querySelector('.main_container > h2')
const taxaJurosBotao = document.querySelector('#taxaJuros')
const valorParcelaBotao = document.querySelector('#valorParcela')
const valorPresenteBotao = document.querySelector('#valorPresente')
const valorFuturoBotao = document.querySelector('#valorFuturo')
const calculator = document.querySelector('.calculator')

const pTaxaJ = document.querySelector('#taxaJuros p')
const imgTaxaJ = document.querySelector('#taxaJuros img')

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

// setTimeout(function() {
//     taxaJurosBotao.click()
// },400)



/* === CALC AREA === */

const calcButton = document.querySelector('#calcButton')

const inputValorPresente = document.querySelector('#inputValorPresente')
const inputValorParcela = document.querySelector('#inputValorParcela')
const inputQteParcelas = document.querySelector('#inputQteParcelas')
const inputValorFuturo = document.querySelector('#inputValorFuturo')

const areaResultado = document.querySelector('.calc_results')
let areaResultadoH3 = document.querySelector('#res_number')


// iVP_value = Number(inputValorPresente.value)
// vPar_value = Number(inputValorParcela.value)
// QteP_value = Number(inputQteParcelas.value)
// VF_value = Number(inputValorFuturo.value)

let soma = 0;
let i = 0;

function calcularTaxaJuros() {

    campo1 = Number(inputValorPresente.value)
    campo2 = Number(inputValorParcela.value)
    campo3 = Number(inputValorFuturo.value)
    QteP_value = Number(inputQteParcelas.value)
    
    if(campo2 == "" || campo2 == 0) {
        i = (((campo3 / Math.abs(campo1)) ** (1 / QteP_value) - 1))
        console.log('PRIMEIRO IF')
    } else {
        console.log('PRIMEIRO ELSE')
        if(Math.abs(campo2) >= 1) {
            console.log('SEGUNDO IF')
            while(soma < Math.abs(campo2)) {
                i = i + 0.000001;
                soma = (((1 + i) ** QteP_value * i) / ((1 + i) ** QteP_value - 1)) * Math.abs(campo1)
            }
        }

        
        if(Math.abs(campo3) >= 1) {
            console.log('TERCEIRO IF')
            if(campo3 > (campo2 * QteP_value)) {
                console.log('QUARTO IF')
                while(soma < Math.abs(campo3)) {
                    i = i + 0.000001;
                    soma = Math.abs(campo1) * (1 + i) ** QteP_value + campo2 * ((1 + i) ** QteP_value - 1) / i
                    // console.log(i)
                }
                console.log('FIM')
            }
        }
    }
    

    // while(soma < vPar_value) {
    //     i = i + 0.00001;
    //     soma = (((1 + i) ** QteP_value * i / 100) / ((1 + i) ** QteP_value - 1)) * iVP_value
    //     // soma = pvValue + nValue + valorParcelaValue;
    //     console.log(i)
    // }


    // alert(
    //     `
    //     Taxa de Juros = ${(i * 100).toFixed(3)}%
    //     `
    // )

    setTimeout(function() {
        areaResultado.classList.add('calc_results_appear')
        areaResultadoH3.innerHTML = `${(i * 100).toFixed(3)}%`
    }, 200)
    return;
}


calcButton.addEventListener('click', calcularTaxaJuros)



const redoButton = document.querySelector('.redo_res');
