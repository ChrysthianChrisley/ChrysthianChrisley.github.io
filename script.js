function atualizarDataHora() {
    const agora = new Date();
    const opcoes = { weekday: 'long', year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    const dataHoraFormatada = agora.toLocaleDateString('pt-BR', opcoes);
    document.getElementById('dataHora').textContent = dataHoraFormatada;
}

atualizarDataHora(); // Atualiza a data e hora imediatamente
setInterval(atualizarDataHora, 60000); // Atualiza a cada minuto