function ejercicio15() {
    const limite = parseInt(prompt("Introduce un número límite:"));

    if (isNaN(limite) || limite < 2) {
        document.getElementById("resultado15").textContent = "Introduce un número válido mayor o igual a 2.";
        return;
    }

    const esPrimo = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const primos = [];
    for (let i = 2; i <= limite; i++) {
        if (esPrimo(i)) primos.push(i);
    }

    document.getElementById("resultado15").textContent = `Números primos entre 1 y ${limite}: ${primos.join(", ")}`;
}
