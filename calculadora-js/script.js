// Selecionando todos os elementos  

let botaoNumero = document.querySelectorAll('.botao-n');
let botaOperador = document.querySelectorAll('.botao-op');
let display = document.querySelector('.display');
let ligarDesligar = document.querySelector('.botao-onOf');
let limparDisplay = document.querySelector('.botao-limpar');
let botaoPonto = document.querySelector('.botao-ponto'); 
let botaoIgual = document.querySelector('.botao-igual'); 
console.log(botaoPonto);

let Ultimosinal = false; // Variável para verificar se o último caractere digitado foi um operador
let ponto = false; // variavel para nao permitir que tenham 2 virgulas seguidas 

botaoNumero.forEach(el => {

    el.addEventListener('click', (itemClicado) => {

        if (display.textContent === '0' ) {
            display.textContent = ''; 
        }
        display.innerHTML += itemClicado.target.textContent;   
           Ultimosinal= false;
    })
})

botaOperador.forEach(el => {
    el.addEventListener('click', (opClicado) => {
        if (!Ultimosinal && display.textContent !== '' ) {// Verifica se o último caractere não foi um operador
            Ultimosinal = true;// Marca que o último caractere agora é um operador
            display.textContent += opClicado.target.textContent;
        } 
    })
   
})

botaoPonto.addEventListener('click', () => {
    if (!ponto) {
        display.textContent += '.';
        ponto = true;
    }
});


limparDisplay.addEventListener('click', (CClicado) => {
    Ultimosinal = false;
    display.innerHTML = "0";
})

  
botaoIgual.addEventListener('click', (igual)=>{
    ponto = false; 
    Ultimosinal = false; 
    let resposta = eval(display.textContent);
    display.textContent = resposta;
})

ligarDesligar.addEventListener('click', () => {
    display.textContent = '';
});