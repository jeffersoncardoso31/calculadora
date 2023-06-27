let tecla_numerica = document.querySelectorAll('.numero');
let tecla_operacao = document.querySelectorAll('.operacao')
let tecla_limpar = document.querySelector('.limpar')
let tecla_igual = document.querySelector('.igual')
let resultado = document.querySelector('#resultado');
let virgula = false;
let sinal = false;
let verNumero = false;
tecla_numerica.forEach((e) => {
    e.addEventListener('click', telaNumerica);
})
tecla_operacao.forEach((e)=>{
    e.addEventListener('click',telaOperacao);
})

function telaNumerica(e) {
    let numero = e.target.value;
    console.log(numero)
    if (resultado.innerText == '0') {
        resultado.innerText = ''
        if (numero == ',') {
            resultado.innerText = '0'
            
        }
    }
    if(numero == ','){
        if (!virgula) {
            virgula = true;
            resultado.innerText += numero;
            sinal = true;
        }
    }
    else{
        if(!verNumero){
            resultado.innerText += numero
            sinal = false;
        }
    }
    

}
function telaOperacao(e){
    let operacao = e.target.value;
    console.log(operacao)
    if(!sinal){
        sinal = true;
        verNumero = false;
        if(operacao == 'x'){
            resultado.innerText += '*';
        }else{
            if(operacao == '%'){
                resultado.innerText = `(${resultado.innerText}/100)`;
                sinal = false;
                verNumero = true;
            }else
        resultado.innerText += operacao;
    }
    }

}
tecla_limpar.addEventListener('click',()=>{
    resultado.innerText = '0'
    sinal = false;
    virgula = false;
    verNumero = false;
})
tecla_igual.addEventListener('click',()=>{
    sinal = false;
    virgula = false;
    verNumero = true;
    const res = eval(resultado.innerText)
    resultado.innerText = res;
})
