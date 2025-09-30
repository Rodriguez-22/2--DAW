function ejercicio17() {
    const numeros = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    const ordenados = [...numeros].sort((a, b) => a - b);

    document.getElementById("resultado17").innerHTML = `
        Array original: ${numeros.join(", ")}<br>
        Ordenado: ${ordenados.join(", ")}
    `;
}
