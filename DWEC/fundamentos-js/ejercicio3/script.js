function ejercicio3() {
    const persona = {
        nombre: "Luis",
        edad: 35,
        casado: true,
        hijos: ["Ana", "Pablo"],
        direccion: {
            calle: "Av. Siempre Viva",
            numero: 123,
            ciudad: "Springfield"
        },
        telefono: null,
        dni: undefined
    };

    console.log("Objeto persona:", persona);
    console.table(persona);

    const resultado = document.getElementById("resultado3");
    resultado.innerHTML = "Objeto persona creado. Revisa la consola para más detalles.";
}
