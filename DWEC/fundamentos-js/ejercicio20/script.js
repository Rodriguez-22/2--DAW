function ejercicio20() {
    const texto = prompt("Introduce un texto:");

    if (!texto) {
        document.getElementById("resultado20").textContent = "Texto vacío.";
        return;
    }

    const mayus = texto.toUpperCase();
    const minus = texto.toLowerCase();

    document.getElementById("resultado20").innerHTML = `
        Mayúsculas: ${mayus}<br>
        Minúsculas: ${minus}
    `;
}
