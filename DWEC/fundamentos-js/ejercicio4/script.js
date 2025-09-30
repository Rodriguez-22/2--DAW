function ejercicio4() {
    const num1 = Number(prompt("Introduce el primer número:"));
    const num2 = Number(prompt("Introduce el segundo número:"));
    const suma = num1 + num2;

    console.log(`La suma de ${num1} y ${num2} es ${suma}`);

    document.getElementById("resultado4").textContent = `Resultado mostrado en consola: ${suma}`;
}
