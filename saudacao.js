//Declaração da função com parâmetro
function saudacao(nomeJogador){
    console.log("Bem vindo ao jogo, " + nomeJogador + "!")
};

saudacao("Fenny");

//função que recebe um valor, soma 1 número e retorna
function subirDeNivel(nivelAtual) {
    return nivelAtual + 1
};

let meuNivel = 10;

let nivelAtualizado = subirDeNivel(meuNivel);
console.log("Seu nivel atual é " + nivelAtualizado);

//Função que soma dois numeros
function soma(numero1, numero2) {
    return numero1 + numero2
};

console.log("a soma entre 5 e 3 é " + soma(5, 3));

