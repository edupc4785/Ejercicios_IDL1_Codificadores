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
    escribir("Mensaje de nombre y fecha de nacimiento");

    //Escribiremos un mensaje que muestre el nombre y fecha de nacimiento

    //Declaramos las variables
    let nombre, apellidos, fecha;

    //Pedimos los datos, los guardamos e imprimimos

    nombre = prompt("Ingresa tu nombre");
    escribir("Tu nombre es: " + nombre);
    apellidos = prompt("Ingresa tus apellidos");
    escribir("Tus apellidos son: " + apellidos);
    fecha = prompt("Ingresa tu fecha de nacimiento (dd/mm/aaaa)");
    escribir("Tu fecha de nacimiento es: " + fecha);

    //Mostramos el resultado
    escribir("Hola " + nombre + " " + apellidos + ", tu fecha de nacimiento es: " + fecha);

}

function ejercicio2() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 2";

    //Titulo
    escribir("Suma o resta de dos números");

    //declaramos las variables
    let num1, num2, operacion, resultado;

    //Pedimos los datos, los guardamos e imprimimos
    operacion = prompt("Ingresa la operacion (+, -)");
    if (operacion == "+") {
        num1 = parseInt(prompt("Ingresa el primer numero"));
        num2 = parseInt(prompt("Ingresa el segundo numero"));
        resultado = num1 + num2;
    } else if (operacion == "-") {
        num1 = parseInt(prompt("Ingresa el primer numero"));
        num2 = parseInt(prompt("Ingresa el segundo numero"));
        resultado = num1 - num2;
    } else {
        escribir("Operacion no valida");
        ejercicio2();
    }

    //Mostramos el resultado
    escribir("El resultado de " + num1 + " " + operacion + " " + num2 + " es: " + resultado);
}

function ejercicio3() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 3";

    //Titulo
    escribir("Multiplicacion o division de dos números");

    //declaramos las variables
    let num1, num2, operacion, resultado;

    //Pedimos los datos, los guardamos e imprimimos
    operacion = prompt("Ingresa la operacion (*, /)");
    if (operacion == "*") {
        num1 = parseInt(prompt("Ingresa el primer numero"));
        num2 = parseInt(prompt("Ingresa el segundo numero"));
        resultado = num1 * num2;
    } else if (operacion == "/") {
        num1 = parseInt(prompt("Ingresa el primer numero"));
        num2 = parseInt(prompt("Ingresa el segundo numero"));
        resultado = num1 / num2;
    } else {
        escribir("Operacion no valida");
        ejercicio3();
    }

    //Mostramos el resultado
    escribir("El resultado de " + num1 + " " + operacion + " " + num2 + " es: " + resultado);
}

function ejercicio4() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 4";

    //Titulo
    escribir("Calculo del IGV");

    //declaramos las variables
    const IGV = 0.18;
    let precio, cantidad, resultado;

    //Pedimos los datos, los guardamos e imprimimos
    precio = parseFloat(prompt("Ingresa el precio del producto"));
    escribir("El precio del producto es: " + precio);
    cantidad = parseInt(prompt("Ingresa la cantidad"));
    escribir("La cantidad es: " + cantidad);

    //Calculamos el IGV
    resultado = (precio * cantidad) * IGV;
    escribir("El IGV de " + cantidad + " productos que cuestan " + precio + " es de: " + resultado);
}


function ejercicio5() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 5";

    //Titulo
    escribir("Promedio de Edades");

    //Hallaremos el promedio de edades de 3 jovenes

    //Declaramos las variables
    let joven1, joven2, joven3, promedio;

    //Pedimos los datos, los guardamos e imprimimos
    joven1 = parseInt(prompt("Ingresa la edad del joven 1"));
    escribir("El joven 1 tiene: " + joven1 + " años");
    joven2 = parseInt(prompt("Ingresa la edad del joven 2"));
    escribir("El joven 2 tiene: " + joven2 + " años");
    joven3 = parseInt(prompt("Ingresa la edad del joven 3"));
    escribir("El joven 3 tiene: " + joven3 + " años");

    //Calculamos el promedio limitando las decimales
    promedio = (joven1 + joven2 + joven3) / 3;
    promedio = promedio.toFixed(2);

    //Mostramos el resultado
    escribir("El promedio de edades es: " + promedio);
}

function ejercicio6() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 6";

    //Titulo
    escribir("Calculo del gasto por la compra de Articulos");

    //Declaramos las variables
    let articulo1, articulo2, articulo3, gasto;

    //Pedimos los datos, los guardamos e imprimimos

    articulo1 = parseInt(prompt("Ingresa el valor del articulo 1"));
    escribir("El valor del articulo 1 es: " + articulo1);
    articulo2 = parseInt(prompt("Ingresa el valor del articulo 2"));
    escribir("El valor del articulo 2 es: " + articulo2);
    articulo3 = parseInt(prompt("Ingresa el valor del articulo 3"));
    escribir("El valor del articulo 3 es: " + articulo3);

    //Calculamos el gasto
    gasto = articulo1 + articulo2 + articulo3;

    //Mostramos el resultado
    escribir("El gasto total de los articulos es: " + gasto);
}

function ejercicio7() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 7";

    //Titulo
    escribir("Calculo de paga por horas trabajadas");

    //Declaramos las variables
    let horasLaboradas, diasLaborados, valorHora, pago;

    //Pedimos los datos, los guardamos e imprimimos
    horasLaboradas = parseInt(prompt("Ingresa las horas trabajadas en un dia"));
    escribir("Las horas laboradas son: " + horasLaboradas);
    diasLaborados = parseInt(prompt("Ingresa los dias laborados"));
    escribir("Los dias laborados son: " + diasLaborados);
    valorHora = parseInt(prompt("Ingresa el valor por hora"));
    escribir("El valor por hora es: " + valorHora);

    //Calculamos el pago
    pago = (horasLaboradas * valorHora) * diasLaborados;

    //Mostramos el resultado
    escribir("El pago por trabajar "+ diasLaborados + " dias y " + horasLaboradas + " horas laboradas es: " + pago);
}

function ejercicio8() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 8";
    /* Ejercicio avanzado de múltiples condiciones: Escribe un programa que determine si un año es bisiesto o no. Un año es bisiesto si es divisible por 4, excepto aquellos divisibles por 100 pero no por 400. */

    //Titulo
    escribir("Validar si es año bisiesto")

    //Declaramos las variables
    let añoIngresado;

    //Pedimos los datos, los guardamos e imprimimos
    añoIngresado = parseInt(prompt("Ingrese el año en consulta"))
    escribir("El año ingresado es: " + añoIngresado)

    //Validamos si es bisiesto segun reglas (divisible por 4 pero no por 100, excepto si es divisible por 400)
    if (añoIngresado % 400 == 0 || añoIngresado % 4 == 0 && añoIngresado % 100 != 0) {
        escribir("El año ingresado SI es bisiesto")
    } else {
        escribir("El año " + añoIngresado + " no es bisiesto")
    }
}

function ejercicio9() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 9";

    //Titulo
    escribir("Factorial de números positivos");

    //Declaramos las variables
    let num, factorial;

    //Pedimos los datos, los guardamos e imprimimos
    num = parseInt(prompt("Ingresa un numero"));
    escribir("El numero es: " + num);

    //Calculamos el si es positivo
    if (num > 0) {
        factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        escribir("El factorial de " + num + " es: " + factorial);
    } else {
        factorial = 0;
        escribir("El número no es positivo");
    }
}

function ejercicio10() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 10";

    //Titulo
    escribir("FizzBuzz");

    //Declaramos las variables
    let num;
    let mensaje = "-> ";

    //Pedimos los datos, los guardamos e imprimimos
    num = parseInt(prompt("Ingresa un numero"));
    escribir("El numero es: " + num);

    //Mostramos el resultado
    if (num % 3 == 0) {
        mensaje += "Fizz"
    }
    if (num % 5 == 0) {
        mensaje += "Buzz"
    }

    //Mensaje por defecto
    if (mensaje == "-> ") {
        mensaje = "No es divisible ni por 3 ni por 5"
    }

    //Mostramos el resultado
    escribir(mensaje);
}