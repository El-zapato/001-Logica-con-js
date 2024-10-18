//Pide al usuario que ingrese un número y verifica si es realmente un número. Si no lo es, muestra un mensaje de error.

let input = prompt("Ingresa un número:");

if (isNaN(input)) {
  console.log("Error: No has ingresado un número válido.");
} else {
  console.log("Has ingresado el número:", input);
}