//1.ø Declarar 5 variáveis para representar um funcionário
//2.ø Crie duas variáveis numéricas e exiba uma soma ou multiplicação
//3.ø Declarar salario base e bônus. Calcular salário total e desconto de 10%
//4.ø A partir da declaração de anosEmpresa e salario, exiba se recebe promoção, se está em período de experiência (90 dias) ou se já é sénior

// !Primeiro!
let nomeFuncionario = "João Silva";
let idade = 30;
let cargo = "Desenvolvedor";
let estaAtivo = true;


// !Segundo!
let num1 = 15;
let num2 = 10;

let soma = num1 + num2;
console.log("A soma é: " + soma);


// !Terceiro!
let multiplicacao = num1 * num2;
console.log("A multiplicação é: " + multiplicacao);
let salarioBase = 3000.00;
let bonus = 500.00;

let salarioTotal = salarioBase + bonus;
let desconto = salarioTotal * 0.10; // 10%
let salarioFinal = salarioTotal - desconto;

console.log("Salário Total: " + salarioTotal);
console.log("Desconto (10%): " + desconto);
console.log("Total a Receber: " + salarioFinal);


// !Quarta!
let anosEmpresa = 2; 
let salario = 6000.00;
let diasEmpresa = anosEmpresa * 365;

// Verificação de Senioridade (salario abaixo de R$5000.00 não é sênior)
if (salario >= 5000) {
    console.log("Status: Já é Sênior.");
}

// Verificação de Experiência (dias de trabalho)
if (diasEmpresa <= 90) {
    console.log("Status: Em período de experiência.");
} else {
    console.log("Status: Fora do período de experiência.");
}

// Verificação de Promoção (Exemplo: mais de 1 ano de trabalho na empresa)
if (anosEmpresa >= 1) {
    console.log("Status: Elegível para promoção.");
}

