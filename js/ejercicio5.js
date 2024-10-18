//let n; //declaramos una variable, con let solo estara disponible dentro del bloque de codigo
num1 = parseInt(prompt("Ingrese el primer numero: "));

num2 = parseInt(prompt("Ingrese el segundo numero: "))

if (num1 == num2) {
    alert("El numero " +num1+" es igual al " + num2);

}else if(num1 > num2) {
    alert("El numero " +num1+ " es mayor a " + num2);

}else {
    alert("El numero "+num2+" es mayor a " + num1);

}

//usar input