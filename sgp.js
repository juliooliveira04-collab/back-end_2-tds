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
        const inventarioComItemNovo = [inventarioAtual, nomeDoItem]
        novoInventario = inventarioComItemNovo;
    } else if (acao === "descartar") //Parei aqui
}

const pontosDoJogador = [100, 50, 200, 10]
console.log(pontosDoJogador);