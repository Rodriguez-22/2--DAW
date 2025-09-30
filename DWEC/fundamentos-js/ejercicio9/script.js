function ejercicio9() {
    const cadena = document.getElementById("cadena9").value;
    const invertida = cadena.split("").reverse().join("");

    document.getElementById("resultado9").textContent = `Cadena invertida: ${invertida}`;
}
