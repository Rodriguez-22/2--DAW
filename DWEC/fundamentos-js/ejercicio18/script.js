function ejercicio18() {
    const frase = prompt("Introduce una frase:");

    if (!frase) {
        document.getElementById("resultado18").textContent = "No se ingresó una frase.";
        return;
    }

    const palabras = frase.trim().split(/\s+/);
    let palabraLarga = "";

    for (let palabra of palabras) {
        if (palabra.length > palabraLarga.length) {
            palabraLarga = palabra;
        }
    }

    document.getElementById("resultado18").textContent = `La palabra más larga es: "${palabraLarga}"`;
}
