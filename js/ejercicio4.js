let num; //declaramos una variable, con let solo estara disponible dentro del bloque de codigo
n = parseInt(prompt("Ingrese un numero "));
if (n == 0) {
    alert("El numero " +n+" es cero");
}else if(n > 0) {
    alert("El numero " +n+ " es positivo");
}else {
    alert("El numero "+n+" es negativo");
}
console.log(n);

/*
document.getElementById('verificarnum').addEventListener('click', verificarnumero);

function verificarnumero() {
    const numero  = parseFloat(document.getElementById(('numero').value));
    const resultado = document.getElementById('resultado');

    if (numero > 0) {
        resultado.textContent = "El número es positivo.";
    } else if (numero < 0) {
        resultado.textContent = "El número es negativo.";
    } else {
        resultado.textContent = "El número es cero.";
    }
    
}*/
