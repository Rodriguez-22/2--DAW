function ejercicio21() {
    const array = Array.from({ length: 15 }, () => Math.floor(Math.random() * 100));
    const valor = parseInt(prompt("Introduce un valor de referencia:"));

    if (isNaN(valor)) {
        document.getElementById("resultado21").textContent = "Valor no válido.";
        return;
    }

    const filtrados = array.filter(n => n > valor);

    document.getElementById("resultado21").innerHTML = `
        Array original: ${array.join(", ")}<br>
        Números mayores que ${valor}: ${filtrados.join(", ")}
    `;
}
