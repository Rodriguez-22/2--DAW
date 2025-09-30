function ejercicio7() {
    const palabra = document.getElementById("palabra7").value.toLowerCase();
    const vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            contador++;
        }
    }

    document.getElementById("resultado7").textContent = `La palabra "${palabra}" tiene ${contador} vocal(es).`;
}
