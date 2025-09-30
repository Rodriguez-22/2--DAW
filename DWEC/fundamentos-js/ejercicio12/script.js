function ejercicio12() {
    const array = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    const pares = array.filter(num => num % 2 === 0);

    console.log("Array original:", array);
    console.log("Números pares:", pares);

    document.getElementById("resultado12").innerHTML = `
        Array original: ${array.join(", ")}<br>
        <strong>Números pares:</strong> ${pares.join(", ")}
    `;
}
