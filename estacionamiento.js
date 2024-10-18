//no ingresar letras o num negativos

try {

    let continuar = true;

    while (continuar) {

        let numH, numM;

        while (true) {
            numH = parseFloat(prompt("¿Cuántas horas estuvo estacionado? ")); 
            //prompt es para que nos muestre un cuadro de dialogo.

            // Para que no ingresen numeros invalidos o negativos
            if (isNaN(numH) || numH < 0) {
                alert("No ingrese números negativos o valores no válidos.");
            } else {
                break; // Salimos del bucle
            }
        }

        while (true) {
            numM = parseFloat(prompt("¿Cuántos minutos estuvo estacionado? "));

            //  Para que no ingresen numeros invalidos o negativos
            if (isNaN(numH) || numH < 0) {
                alert("No ingrese números negativos o valores no válidos.");
            } else {
                break; // Salimos del bucle
            }
        }


        let horasTotal = numH + (numM / 60); //el numero ingresado en minutos se dividira entre 60 para que sean minutos
        let cobra;

        if (horasTotal < 0.5) {
            alert("No se le cobrara nada.");
        } else if (horasTotal >= 0.5 && horasTotal < 2) { //para que la posible respuesta solo entre dos numeros posibles
            cobra = horasTotal * 10;
            alert("Su monto a pagar es de: " + cobra + " pesos.");
        } else if (horasTotal >= 2 && horasTotal < 3) {
            cobra = horasTotal * 25;
            alert("Su monto a pagar es de: " + cobra + " pesos.");
        } else {
            cobra = horasTotal * 30;
            alert("El monto a pagar es de: " + cobra + " pesos.");
        }
        console.log("Monto a pagar", cobra);

        //preguntamos si queremos agregar otro dato o cerrar el programa
        let respuesta = prompt("¿Desea agregar otro dato? (Escriba 'si' para continuar o 'salir' para cerrar.)").toLowerCase();
        //toLowerCase se usa para convertir una cadena de texto a minusculas, asi no importa si escriben en mayuscula.

        if (respuesta === 'salir') {
            continuar = false; //para finalizar con el bucle
        }
    }
}

catch (e) { //para ver el error 
    console.log("Tu error es: ", e)
}