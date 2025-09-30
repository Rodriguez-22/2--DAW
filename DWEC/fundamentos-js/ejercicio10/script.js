function ejercicio10() {
    const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    const mayor = Math.max(...array);

    console.log("Array generado:", array);
    console.log("Número más grande:", mayor);

    document.getElementById("resultado10").innerHTML = `
        Array generado: ${array.join(", ")}<br>
        <strong>Número más grande:</strong> ${mayor}
    `;
}
