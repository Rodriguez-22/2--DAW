function ejercicio2() {
    const numeros = [];

    // Generar 100 números aleatorios entre 1 y 100
    for (let i = 0; i < 100; i++) {
        numeros.push(Math.floor(Math.random() * 100) + 1);
    }

    // Mostrar el array en forma de tabla
    console.table(numeros);

    // Filtrar los números entre 20 y 50
    const filtrados = numeros.filter(n => n >= 20 && n <= 50);
    console.log("Números entre 20 y 50:", filtrados);

    // Mostrar resultado en el DOM
    const resultado = document.getElementById("resultado2");
    resultado.innerHTML = `Se generaron 100 números aleatorios. Revisa la consola para ver la tabla.<br>
    <strong>Filtrados (20-50):</strong> ${filtrados.join(", ")}`;
}