function ejercicio14() {
    const palabra = prompt("Introduce una palabra:").toLowerCase().replace(/[\W_]/g, "");
    const invertida = palabra.split("").reverse().join("");

    const resultado = (palabra === invertida) ? "es un palíndromo" : "no es un palíndromo";
    document.getElementById("resultado14").textContent = `La palabra "${palabra}" ${resultado}.`;
}
