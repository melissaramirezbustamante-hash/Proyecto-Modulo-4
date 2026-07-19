function ejecutarColores() {
    // Lista fija usando los colores del arcoíris
    const arcoiris = ["Rojo", "Naranja", "Amarillo", "Verde", "Azul", "Celeste", "Morado"];

    let entrada = prompt("Ingresa tus colores separados por comas:"); //esta parte pide que se ingresen colores

    // Validar si no ingresó nada
    if (!entrada || entrada.trim() === "") {
        alert(" Error: No ingresaste ningún color.");
        return;
    }

    // Convertir a arreglo
    let coloresUsuario = entrada.split(",").map(c => c.trim()).filter(c => c !== "");

    // Validar si hay números
    let errores = [];
    for (let color of coloresUsuario) {
        if (!isNaN(color)) {
            errores.push(color);
        }
    }

    if (errores.length > 0) {
        alert("Error: Ingresaste valores no válidos (números):\n- " + errores.join("\n- ")); //error si se ingresan caracteres numéricos en lugar alfabéticos
        return;
    }

    let salida = "Colores del arcoíris:\n";
    for (let color of arcoiris) {
        salida += "- " + color + "\n";
    }

    salida += "\nColores ingresados:\n";
    for (let color of coloresUsuario) {
        salida += "- " + color + "\n";
    }

    alert(salida);
}
