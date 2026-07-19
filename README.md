# Proyecto-Modulo-4
Repositorio proyecto final del módulo 4.

Este proyecto implementa diferentes módulos de JavaScript usando botones (`btn`) para conectar el `index.html` principal con los archivos `.js`, asegurando el correcto funcionamiento mediante eventos `onclick`.

## Estructura
- `index.html`
- Carpeta `js/` con:
  - `variables.js`
  - `funciones.js`
  - `arreglos.js`
  - `objetos.js`

## Funcionalidad
Al ejecutar el código en el navegador aparecen los siguientes botones:

### Ejemplo de variables simple
Al presionar este botón se muestra una alerta que solicita un nombre. Ese nombre se usa para desplegar el mensaje:  
**"Hola prompt denominado nombre."**

### Problemas matemáticos
Este botón permite resolver operaciones de suma, resta, multiplicación y división. Genera un error si se intenta dividir por cero.

### Arreglar colores del arcoiris
Este botón ejecuta un código que pide al usuario ingresar colores separados por comas. Rechaza caracteres numéricos y luego muestra la lista de colores del arcoiris junto con los ingresados por el usuario.

### Ejercicio de objetos
Este botón solicita un nombre de cliente y lo guarda en un objeto con propiedad y método. Luego pide la cantidad de productos y sus precios, validando que sean números. Los productos se almacenan en un arreglo de objetos. Se muestran con `forEach`, se extraen nombres con `map` y se calcula el total con `reduce`. Finalmente, se despliega una alerta con el cliente, la lista de productos, el total y la cantidad de productos.
