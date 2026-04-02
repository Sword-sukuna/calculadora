let display = document.getElementById("display");

function adicionar(valor) {
    if (valor === "+/-") {
        display.value = display.value * -1;
    } else if (valor === "%") {
        display.value = display.value / 100;
    } else {
        display.value += valor;
    }
}

function limpar() {
    display.value = "";
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";
    }
}