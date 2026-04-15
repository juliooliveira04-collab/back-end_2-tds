const alunos = ["Julio", "Carlos", "Wallace"]

alunos.push("Marcos");
alunos.unshift("Felipe neto")
console.log(alunos);

console.log(alunos.indexOf("Marcos")); //Retorna o indece do array
console.log(alunos.indexOf("Paula"));

console.log(alunos.includes("Paula"));
console.log(alunos.includes("Marcos"));