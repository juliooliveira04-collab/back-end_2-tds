const idade = 18;
const MaiorDeIdade = idade >= 18;
const possuiCNH = false;

//Operador E
const podeDirigir = MaiorDeIdade && possuiCNH;
console.log("Pode dirigir? " + podeDirigir);

//Operador OU
const podeViajarSozinho = MaiorDeIdade || possuiCNH;
console.log("Pode viajar sozinho? " + podeViajarSozinho);

//Operador NOT
const precisaDeAcompanhante = !MaiorDeIdade;
console.log("Precisa de acompanhante? " + precisaDeAcompanhante);