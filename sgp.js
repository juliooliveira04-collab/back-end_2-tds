//sistema de gerenciamento de personagem

function calcularPontuacaoTotal(historicoDePontos) {
    const somarRodada = function(acumulador, pontosDaFase) {
        const novaSoma = acumulador + pontosDaFase;
        return novaSoma;
    };

    const pontuacaoFinal = historicoDePontos.reduce(somarRodada, 0)
    return pontuacaoFinal;
};

function filtrarMissoesConcluidas(listaDeMissoes) {
    const verificarStatusDamissao = function(missao) {
        const foiFinalizada = missao.status === "concluida"; //=== igualdade ESTRITA
        return foiFinalizada;
    };

    const apenasConcluidas = listaDeMissoes.filter(verificarStatusDamissao);
    return apenasConcluidas;
};

function atualizarInventario(inventarioAtual, acao, nomeDoItem) {
    let novoInventario;

    if (acao === "pegar") {
        const inventarioComItemNovo = [inventarioAtual, nomeDoItem];
        novoInventario = inventarioComItemNovo;
    } else if (acao === "descartar") {
        const inventarioSemUltimoItem = inventarioAtual.slice();
        novoInventario = inventarioSemUltimoItem;
    } else {
        novoInventario = inventarioAtual;
    }
    return novoInventario; //retornar a mochila do jogador atualizada
};

const pontosDoJogador = [100, 50, 200, 10]
const total = calcularPontuacaoTotal
console.log("pontuação final: " , total);

const missoes = [
    {nome: "Salvar a aldeia", status: "concluida"},
    {nome: "Encontrar o mapa", status: "em andamento"},
    {nome: "Derrotar o chefão", status: "falhou"},
    {nome: "Coletar recursos", status: "concluida"}
];

const concluidas = filtrarMissoesConcluidas(missoes)
console.log("Missoes concluidas: " , concluidas);

const mochila = ["Mapa", "Lanterna"];
const mochilaAtualizada = atualizarInventario(mochila, "pegar", "Bússola");
