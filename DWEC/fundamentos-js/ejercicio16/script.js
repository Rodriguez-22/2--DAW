function ejercicio16() {
    const celsius = parseFloat(prompt("Introduce la temperatura en °C:"));

    if (isNaN(celsius)) {
        document.getElementById("resultado16").textContent = "Introduce un valor numérico.";
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("resultado16").textContent = `${celsius}°C son ${fahrenheit.toFixed(2)}°F`;
}
