function ejercicio5() {
    const numero = Number(prompt("Introduce un número:"));

    if (isNaN(numero)) {
        console.error("No se ha introducido un número válido.");
        document.getElementById("resultado5").textContent = "Entrada no válida.";
        return;
    }

    const resultado = (numero % 2 === 0) ? "par" : "impar";
    console.log(`El número ${numero} es ${resultado}.`);
    document.getElementById("resultado5").textContent = `El número ${numero} es ${resultado}.`;
}
