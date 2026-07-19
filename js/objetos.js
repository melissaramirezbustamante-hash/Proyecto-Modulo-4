function ejecutarObjetos() {
    console.log("Ejercicio de objetos");

    // Se permite que el prompt sea decidido por el usuario
    let nombrePersona = prompt("Ingresa Cliente:");

    const persona = {
        nombre: nombrePersona,
        mostrar: function () {
            return "Cliente: " + this.nombre;
        }
    };

    console.log(persona.mostrar());

    // Arreglo vacío para poner número de productos libremente
    const productos = [];
    let cantidad = prompt("¿Cuántos productos quieres agregar?");
    cantidad = parseInt(cantidad);

    if (!isNaN(cantidad) && cantidad > 0) {
        for (let i = 0; i < cantidad; i++) {
            let nombreProd = prompt("Nombre del producto " + (i + 1) + ":");
            let precioProd = prompt("Precio del producto " + (i + 1) + ":");

            if (isNaN(precioProd) || precioProd.trim() === "") {
                alert("Error: El precio debe ser un número válido."); // Muestra error en caso de ser un valor no numérico
                i--; // repetir este ciclo
                continue;
            }

            productos.push({
                nombre: nombreProd,
                precio: parseFloat(precioProd)
            });
        }
    }

    // Recorre con forEach
    console.log("Lista de productos:");
    productos.forEach(producto => {
        console.log("- " + producto.nombre + " cuesta $" + producto.precio);
    });

    // Usar map para crear un nuevo arreglo con solo nombres
    let nombres = productos.map(producto => producto.nombre);
    console.log("Nombres de productos:", nombres);

    // Se calcula el total usando reduce
    let total = productos.reduce((suma, producto) => suma + producto.precio, 0);
    console.log("Precio total de todos los productos: $" + total);

    let salida = persona.mostrar() + "\n\nProductos:\n";
    productos.forEach(p => salida += "- " + p.nombre + " ($" + p.precio + ")\n");
    salida += "\nTotal: $" + total;
    salida += "\nCantidad de productos: " + productos.length;

    alert(salida);
}