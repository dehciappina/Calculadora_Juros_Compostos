let botaoCalcular = document.querySelector('.play_calculo');

let pv = document.querySelector('#valor_presente');
let n = document.querySelector('#n_parcelas');
let valorParcela = document.querySelector('#valor_parcela');

let soma = 0;
let i = 0;

function calcular() {


    pvValue = Number(pv.value);
    nValue = Number(n.value);
    valorParcelaValue = Number(valorParcela.value);

    console.log(pvValue);
    console.log(valorParcelaValue);
    console.log(nValue);

    while(soma < valorParcelaValue) {
        i = i + 0.00001;
        soma = (((1 + i) ** nValue * i / 100) / ((1 + i) ** nValue - 1)) * pvValue
        // soma = pvValue + nValue + valorParcelaValue;
        console.log(i)
    }
    
    alert(i*100)
}

botaoCalcular.addEventListener('click', calcular)