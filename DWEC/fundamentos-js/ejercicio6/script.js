function ejercicio6() {
    const numero = Number(document.getElementById("numero6").value);

    if (isNaN(numero)) {
        document.getElementById("resultado6").textContent = "Introduce un número válido.";
        return;
    }

    const resultado = (numero % 2 === 0) ? "par" : "impar";
    document.getElementById("resultado6").textContent = `El número ${numero} es ${resultado}.`;
}
