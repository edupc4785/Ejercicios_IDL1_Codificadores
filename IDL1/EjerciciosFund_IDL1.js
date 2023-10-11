const activo = document.getElementsByClassName(".actived");
const spanEjercicio = document.getElementById("ejercicio");
const divEjercicio = document.getElementById("divEjercicio");

function ejecutar() {
    const value = document.getElementById("ejercicios").value;
    switch (value) {
        case "ejercicio1":
            ejercicio1();
            break;
        case "ejercicio2":
            ejercicio2();
            break;
        case "ejercicio3":
            ejercicio3();
            break;
        case "ejercicio4":
            ejercicio4();
            break;
        case "ejercicio5":
            ejercicio5();
            break;
        case "ejercicio6":
            ejercicio6();
            break;
        case "ejercicio7":
            ejercicio7();
            break;
        case "ejercicio8":
            ejercicio8();
            break;
        case "ejercicio9":
            ejercicio9();
            break;
        case "ejercicio10":
            ejercicio10();
            break;
        }
}


function escribir(msg) {
    divEjercicio.innerHTML += `<p>${msg}</p>`;
}

function ejercicio1() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 1";

    //Titulo
    escribir("Mensaje de nombre y DNI");

    //Escribiremos un mensaje que muestre el nombre y el DNI

    //Declaramos las variables
    let nombre, apellidos, dni;

    //Pedimos los datos, los guardamos e imprimimos

    nombre = prompt("Ingresa tu nombre");
    escribir("Tu nombre es: " + nombre);
    apellidos = prompt("Ingresa tus apellidos");
    escribir("Tus apellidos son: " + apellidos);
    dni = prompt("Ingresa tu dni");
    escribir("Tu dni es: " + dni);

    //Mostramos el resultado
    escribir("Hola " + nombre + " " + apellidos + ", tu DNI es el: " + dni);

}

function ejercicio2() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 2";

    //Titulo
    escribir("¿Mayor, Menos o Igual?");

    //declaramos las variables
    let num1, num2, operacion, resultado;

    //Pedimos los datos, los guardamos e imprimimos
    num1 = parseInt(prompt("Ingresa el primer numero"));
    num2 = parseInt(prompt("Ingresa el segundo numero"));
    if (num1 == num2) {
        operacion = "igual a ";
    } else if (num1 > num2) {
        operacion = "mayor que ";
    } else if (num1 < num2) {
        operacion = "menor que ";
    }

    //Mostramos el resultado
    escribir("La comparacion dio que " + num1 + " es " + operacion + num2);
}

function ejercicio3() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 3";

    //Titulo
    escribir("Potencia y Raiz");

    //declaramos las variables
    let num1, num2, operacion, resultado;

    //Pedimos los datos, los guardamos e imprimimos
    operacion = prompt("Ingresa la operacion (potencia, raiz)");
    if (operacion == "potencia") {
        num1 = parseInt(prompt("Ingresa el numero"));
        escribir("El numero es: " + num1);
        num2 = parseInt(prompt("Ingresa el potenciador"));
        escribir("El potenciador es: " + num2);
        resultado = Math.pow(num1 ,num2);
    } else if (operacion == "raiz") {
        num1 = parseInt(prompt("Ingresa el numero"));
        escribir("El numero es: " + num1);
        resultado = Math.sqrt(num1, 2);

        //Limitamos los decimales
        resultado = resultado.toFixed(3);
    } else {
        alert("Operacion no valida");
        ejercicio3();
    }


    //Mostramos el resultado
    escribir("El resultado de esta " + operacion + " es: " + resultado);
}

function ejercicio4() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 4";

    //Titulo
    escribir("Calculo del area de un triangulo");

    //declaramos las variables
    let base, altura, resultado;

    //Pedimos los datos, los guardamos e imprimimos
    base = parseInt(prompt("Ingresa la base"));
    escribir("La base es: " + base);
    altura = parseInt(prompt("Ingresa la altura"));
    escribir("La altura es: " + altura);

    //Calculamos el area
    resultado = (base * altura) / 2;

    //Mostramos el resultado
    escribir("El area del triangulo es: " + resultado);
}


function ejercicio5() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 5";

    //Titulo
    escribir("Una ama de casa va al mercado y compra arroz, leche y sal ¿Cuanto fue el gasto que realizó?");

    //Declaramos las variables
    let arroz, leche, sal, gasto;

    //Pedimos los datos, los guardamos e imprimimos
    arroz = parseInt(prompt("Ingresa el precio del arroz"));
    escribir("El arroz costo: " + arroz);
    leche = parseInt(prompt("Ingresa el precio de la leche"));
    escribir("La leche costo: " + leche);
    sal = parseInt(prompt("Ingresa el precio del sal"));
    escribir("El sal costo: " + sal);

    //Calculamos el gasto
    gasto = (arroz + leche + sal);

    //Mostramos el resultado
    escribir("El resultado por la compra de arroz, leche y sal es: " + gasto);
}

function ejercicio6() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 6";

    //Titulo
    escribir("Jose resolvió un examen de matematicas");

    //Declaramos las variables
    let preguntasCorrectas, preguntasIncorrectas, resultado;

    //Pedimos los datos, los guardamos e imprimimos
    preguntasCorrectas = parseInt(prompt("Ingresa el numero de preguntas correctas"));
    escribir("Las preguntas correctas son: " + preguntasCorrectas);
    preguntasIncorrectas = parseInt(prompt("Ingresa el numero de preguntas incorrectas"));
    escribir("Las preguntas incorrectas son: " + preguntasIncorrectas);

    //Calculamos el resultado
    resultado = preguntasCorrectas - preguntasIncorrectas;

    //Mostramos el resultado
    escribir("El resultado del examen es: " + resultado);
}

function ejercicio7() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 7";

    //Titulo
    escribir("Se necesita obtener el promedio simple de un estudiante a partir de sus tres notas parciales");

    //Declaramos las variables
    let parcial1, parcial2, parcial3, promedio;

    //Pedimos los datos, los guardamos e imprimimos
    parcial1 = parseInt(prompt("Ingresa la nota del parcial 1"));
    escribir("La nota del parcial 1 es: " + parcial1);
    parcial2 = parseInt(prompt("Ingresa la nota del parcial 2"));
    escribir("La nota del parcial 2 es: " + parcial2);
    parcial3 = parseInt(prompt("Ingresa la nota del parcial 3"));
    escribir("La nota del parcial 3 es: " + parcial3);

    //Calculamos el promedio
    promedio = (parcial1 + parcial2 + parcial3) / 3;
    promedio = promedio.toFixed(2);

    //Mostramos el resultado
    escribir("El promedio es: " + promedio);
}

function ejercicio8() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 8";

    //Titulo
    escribir("En una empresa se cobra el 18% de IGV si el sueldo es mayor a 1500 soles de los contrario el IGV baja al 10%.");

    //Declaramos las variables
    let igv, sueldo, resultado;

    //Pedimos los datos, los guardamos e imprimimos
    sueldo = parseInt(prompt("Ingresa el sueldo"));
    escribir("El sueldo es: " + sueldo);
    if (sueldo > 1500) {
        igv = 0.18;
        resultado = sueldo * igv;
    } else {
        igv = 0.1;
        resultado = sueldo * igv;
    }

    //Mostramos el resultado
    escribir("El IGV es: " + igv*100+ "%" + " y el resultado es: " + resultado);

}

function ejercicio9() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 9";

    //Titulo 
    escribir("Encuentra el área de un rectángulo")

    //Declaramos las variables
    let base, altura, area;

    //Pedimos los datos, los guardamos e imprimimos
    base = parseInt(prompt("Ingresa la base"));
    escribir("La base es: " + base);
    altura = parseInt(prompt("Ingresa la altura"));
    escribir("La altura es: " + altura);

    //Calculamos el area
    area = base * altura;

    //Mostramos el resultado
    escribir("El area del rectangulo es: " + area);
}

function ejercicio10() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 10";

    //Titulo
    escribir("Calculo del Volumen de una esfera");

    //Declaramos las variables
    let radio, volumen;

    //Pedimos los datos, los guardamos e imprimimos
    radio = parseInt(prompt("Ingresa el radio de la esfera"));
    escribir("El radio de la esfera es: " + radio);

    //Calculamos el volumen
    volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

    //Mostramos el resultado
    escribir("El volumen de la esfera es: " + volumen);
}