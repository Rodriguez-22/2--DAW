function ejercicio13() {
    const frase = prompt("Introduce una frase:");
    if (!frase) {
        document.getElementById("resultado13").textContent = "No se ingresó ninguna frase.";
        return;
    }

    const palabras = frase.trim().split(/\s+/);
    const cantidad = palabras.length;

    document.getElementById("resultado13").textContent = `La frase tiene ${cantidad} palabra(s).`;
}
