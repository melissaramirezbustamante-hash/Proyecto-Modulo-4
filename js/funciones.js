function calcular() {
    // prompt pide la operación al usuario
    let entrada = prompt("Ingresa la operación (ejemplo: 5+3 o 5 + 3):");

    let numero1, numero2, operacion, resultado;

    // Detectar operador con if lo que permite reconecer el tipo de operación
    if (entrada.includes("+")) {
        operacion = "+";
        let partes = entrada.split("+");
        numero1 = Number(partes[0]);
        numero2 = Number(partes[1]);
        resultado = numero1 + numero2;

    } else if (entrada.includes("-")) {
        operacion = "-";
        let partes = entrada.split("-");
        numero1 = Number(partes[0]);
        numero2 = Number(partes[1]);
        resultado = numero1 - numero2;

    } else if (entrada.includes("*")) {
        operacion = "*";
        let partes = entrada.split("*");
        numero1 = Number(partes[0]);
        numero2 = Number(partes[1]);
        resultado = numero1 * numero2;

    } else if (entrada.includes("/")) {
        operacion = "/";
        let partes = entrada.split("/");
        numero1 = Number(partes[0]);
        numero2 = Number(partes[1]);
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            resultado = "Error: no se puede dividir entre cero";
        }

    } else {
        alert("Error: Solo se aceptan los operadores +, -, *, /");
        return;
    }

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Error: Debes ingresar números válidos.");
        return;
    }

    // resultado de la operación
    alert(
        "Resultado:\n\n" +
        numero1 + " " + operacion + " " + numero2 +
        " = " + resultado
    );

    console.log("Resultado:", resultado);
}
