var playerName = localStorage.getItem('player');

var userScore = localStorage.getItem('userVar');
var aiScore = localStorage.getItem('aiVar');
var empateScore = localStorage.getItem('empateVar');

function imprime() {
    document.getElementById('player-name').innerHTML = playerName;

    document.getElementById('user').innerHTML = userScore;
    document.getElementById('AI').innerHTML = aiScore;
    document.getElementById('empate').innerHTML = empateScore;

}

function voltar() {
    history.back();
}

function reset() {

    localStorage.setItem("empateVar", 0);
    localStorage.setItem("aiVar", 0);
    localStorage.setItem("userVar", 0);

    userScore = 0;
    aiScore = 0;
    empateScore = 0;

    document.getElementById('user').innerHTML = 0;
    document.getElementById('AI').innerHTML = 0;
    document.getElementById('empate').innerHTML = 0;

    document.getElementById('userChoice').innerHTML = '<div id="nada"></div>';
    document.getElementById('AIChoice').innerHTML = '<div id="nada"></div>';

}

function escolhaOpcao(x) {

    const opt = ["pedra", "papel", "tesoura"];

    ai = Math.floor(Math.random() * opt.length);

    escolha = opt[x];
    escolhaAI = opt[ai];

    document.getElementById('userChoice').innerHTML = '<div id="' + escolha + 'Img"> &nbsp </div>';
    document.getElementById('AIChoice').innerHTML = '<div id="' + escolhaAI + 'Img"> &nbsp </div>';


    if (
        (escolha == "pedra" && ai == 2) ||
        (escolha == "papel" && ai == 0) ||
        (escolha == "tesoura" && ai == 1)
    ) {
        userScore++;
        document.getElementById('user').innerHTML = userScore;

        localStorage.setItem("userVar", userScore);
    } else if (
        (escolha == "pedra" && ai == 1) ||
        (escolha == "papel" && ai == 2) ||
        (escolha == "tesoura" && ai == 0)
    ) {
        aiScore++;
        document.getElementById('AI').innerHTML = aiScore;

        localStorage.setItem("aiVar", aiScore);
    } else {
        empateScore++;
        document.getElementById('empate').innerHTML = empateScore;
        localStorage.setItem("empateVar", empateScore);
    }
}
