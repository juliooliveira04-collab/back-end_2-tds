const cidade = "curitiba";
const tempCelsius = 19;

const tempFahrenheit = tempCelsius * (9 / 5) + 32;
const tempKelvin = tempCelsius + 273.15;
const VariacaoDiaria = 26.3 - tempCelsius;

console.log(`A temperatura em ${cidade} está ${tempCelsius} Cº`);
console.log(`\nCelsius: ${tempCelsius} Cº`);
console.log(`Fanrenheit: ${tempFahrenheit} Fº`);
console.log(`Kelvin: ${tempKelvin} Kº`);
console.log(`Variação prevista: ${VariacaoDiaria}`);