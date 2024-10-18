//Escribe un programa que pida un número al usuario y diga si es par o impar.

var num=prompt("Escriba un numero, por favor");

if (num % 2 === 0){
    alert("su numero es par");
}else{
    alert("Su numero es impar");
}

console.log("Este es su numero: " + num);