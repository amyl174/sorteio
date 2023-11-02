var numeroSorteado;

function loadDefault() {
    const bttGerar = document.getElementById("bttInicio");
    bttGerar.addEventListener("click", iniciarJogo);

    const bttLimpar = document.getElementById("bttLimpar");
    bttLimpar.addEventListener("click", limparCampos);
}

function iniciarJogo() {
    const qtdBlocos = parseInt(document.getElementById("iptQtd").value);
    numeroSorteado = Math.floor(Math.random() * qtdBlocos);

    const container = document.getElementById("container");
    container.innerHTML = ''; 

    for (let k = 0; k < qtdBlocos; k++) {
        var bloco = document.createElement("div");
        bloco.setAttribute("class", "box");
        bloco.textContent = k; 
        bloco.setAttribute("data-numero", k); 
        bloco.addEventListener("click", verificarNumero); 
        container.appendChild(bloco);
    }

    document.getElementById("resultado").textContent = ''; 
}

function verificarNumero(event) {
    const numeroClicado = parseInt(event.target.getAttribute("data-numero"));
    const resultado = document.createElement("div");
    resultado.textContent = `Número clicado: ${numeroClicado}`;

    if (numeroClicado === numeroSorteado) {
        resultado.textContent += " - Você acertou!";
    } else {
        resultado.textContent += " - Você errou!";
    }

    document.getElementById("resultado").appendChild(resultado);
}

function limparCampos() {
    document.getElementById("container").innerHTML = '';
    document.getElementById("iptQtd").value = '';
    document.getElementById("resultado").textContent = '';
}

document.addEventListener("DOMContentLoaded", loadDefault);