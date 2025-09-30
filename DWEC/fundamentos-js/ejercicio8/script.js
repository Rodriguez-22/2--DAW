function ejercicio8() {
    const min = Number(document.getElementById("min8").value);
    const max = Number(document.getElementById("max8").value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        document.getElementById("resultado8").textContent = "Rango inválido.";
        return;
    }

    const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("resultado8").textContent = `Número aleatorio entre ${min} y ${max}: ${aleatorio}`;
}
