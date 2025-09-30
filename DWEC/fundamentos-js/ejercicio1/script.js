document.getElementById('ejecutar').addEventListener('click', () => {
    // Declaración de variables de varios tipos
    let nombre = "Ana";
    let edad = 30;
    let estaActivo = true;
    let indefinido;
    let nulo = null;
    let simbolo = Symbol('sim');
    let objeto = { clave: "valor" };

    // Mostrar en consola con diferentes métodos
    console.log("Nombre:", nombre, "- Tipo:", typeof nombre);
    console.info("Edad:", edad, "- Tipo:", typeof edad);
    console.debug("Está activo:", estaActivo, "- Tipo:", typeof estaActivo);
    console.error("Indefinido:", indefinido, "- Tipo:", typeof indefinido);
    console.log("Nulo:", nulo, "- Tipo:", typeof nulo);
    console.log("Símbolo:", simbolo.toString(), "- Tipo:", typeof simbolo);
    console.log("Objeto:", objeto, "- Tipo:", typeof objeto);

    // Mostrar algo en el DOM
    const resultado = document.getElementById("resultado-ej1");
    resultado.textContent = "Consulta la consola del navegador para ver los tipos de datos y sus valores.";
});
