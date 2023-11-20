// getElementsByClassName retorna uma coleção (os dois botões) e guarda na variável
const botoes = document.getElementsByClassName("join");

// Adiciona o ouvinte de evento para os dois botões da página percorrendo a coleção
for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", () => {
        // Redireciona para outra página
        window.location.href = "./login.html";
    });
}