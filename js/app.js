function pesosAeuros(pesos, euros) {
    return pesos / euros;
}

function eurosApesos(euros, pesos) {
    return euros * pesos;
}

function pesosAdolares(pesos, dolares) {
    return pesos / dolares;
}

function dolaresApesos(dolares, pesos) {
    return dolares * pesos;
}

function formatearDecimal(numero) {
    return numero.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function convertir() {
    let dolares = 1430.00;
    let euros = 982.9281;

    let opcion = prompt('¿Quieres convertir 1) Pesos a Euros o Dolares o 2) Euros o Dolares a Pesos? \nIngrese 1 o 2 para avanzar.');

    if (opcion === '1') {
        let pesos = parseFloat(prompt('Ingrese la cantidad de pesos a convertir en USD o EUR'));
        if (isNaN(pesos) || pesos <= 0) {
            alert('Por favor ingrese un valor válido');
        } else {
            let eurosConvertidos = pesosAeuros(pesos, euros);
            let dolaresConvertidos = pesosAdolares(pesos, dolares);
            alert(`El equivalente en euros de $${formatearDecimal(pesos)} pesos es ${formatearDecimal(eurosConvertidos)} EUR`);
            alert(`El equivalente en dólares de $${formatearDecimal(pesos)} pesos es ${formatearDecimal(dolaresConvertidos)} USD`);
        }
    } else if (opcion === '2') {
        let cantidad = parseFloat(prompt('Ingrese la cantidad de Euros o Dolares a convertir a Pesos'));
        if (isNaN(cantidad) || cantidad <= 0) {
            alert('Por favor ingrese un valor válido');
        } else {
            let pesosDesdeEuros = eurosApesos(cantidad, euros);
            let pesosDesdeDolares = dolaresApesos(cantidad, dolares);

            alert(`El equivalente en pesos desde ${formatearDecimal(cantidad)} EUR es $${formatearDecimal(pesosDesdeEuros)}`);
            alert(`El equivalente en pesos desde ${formatearDecimal(cantidad)} USD es $${formatearDecimal(pesosDesdeDolares)}`);
        }
    } else {
        alert('Opción no válida. Por favor, ingrese 1 o 2 para avanzar.');
    }
}

convertir();

