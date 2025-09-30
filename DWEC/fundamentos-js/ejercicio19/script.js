function ejercicio19() {
    const numeros = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    const suma = numeros.reduce((acc, val) => acc + val, 0);
    const promedio = suma / numeros.length;

    document.getElementById("resultado19").innerHTML = `
        Array: ${numeros.join(", ")}<br>
        Promedio: ${promedio.toFixed(2)}
    `;
}
