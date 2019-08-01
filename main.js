jogadoresPorTime = document.getElementById('jogadores-por-time')
numeroDeJogadores = document.getElementById('numero-de-jogadores')
botaoAdicionar = document.getElementById('adicionar')
divAdicionar = document.getElementById('adicionar-jogador')
botaoSortear = document.getElementById('sortear')
sorteadosElement = document.getElementById('sorteados')

var jogadores = []

botaoAdicionar.onclick = function () {
    divAdicionar.innerHTML = ''
    for (var i = 0; i < numeroDeJogadores.value; i++) {
        var item = document.createElement('input')
        var atributo = document.createAttribute('class')
        atributo.value = 'jogador'
        item.setAttributeNode(atributo)
        divAdicionar.appendChild(item)
    }
}

botaoSortear.onclick = function () {
    sorteadosElement.innerHTML = ''
    jogadores = []
    elementoJogadores = document.getElementsByClassName('jogador')
    var novosJogadores = Array.from(elementoJogadores)
    novosJogadores.forEach(element => {
        jogadores.push(element.value)
    });
    jogadores = shuffle(jogadores)
    var contador = -1
    jogadores.forEach(element => {
        contador++
        if (contador % jogadoresPorTime.value == 0 || contador == 0) {
            var texto = document.createTextNode("Time")
            var time = document.createElement('h4')
            sorteadosElement.appendChild(time)
            time.appendChild(texto)
        }
        var texto = document.createTextNode(element)
        var jogador = document.createElement('li')
        sorteadosElement.appendChild(jogador)
        jogador.appendChild(texto)
    });
}

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}