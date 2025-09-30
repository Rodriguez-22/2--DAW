function ejercicio11() {
    const numeros = Array.from({ length: 100 }, () => Math.floor(Math.random() * 20) + 1);
    const conteo = {};

    numeros.forEach(num => {
        conteo[num] = (conteo[num] || 0) + 1;
    });

    console.log("Conteo de ocurrencias:", conteo);

    const resultadoDiv = document.getElementById("resultado11");
    resultadoDiv.innerHTML = "<strong>Revisa la consola para el conteo de números del 1 al 20.</strong>";
}
