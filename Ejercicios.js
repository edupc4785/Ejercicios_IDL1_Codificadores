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
    precio = parseInt(prompt("Ingresa el precio del producto"));
    escribir("El precio del producto es: " + precio);
    cantidad = parseInt(prompt("Ingresa la cantidad"));
    escribir("La cantidad es: " + cantidad);

    //Calculamos el IGV
    resultado = (precio * cantidad) * IGV;
    escribir("El IGV de: " + cantidad + " productos que cuestan " + precio + " es de: " + resultado);
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
    escribir("El pago por trabajar"+ diasLaborados + " dias y " + horasLaboradas + " horas laboradas es: " + pago);
}

function ejercicio8() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 8";

    //Titulo
    escribir("Calculo de la hipotenusa");

    //Declaramos las variables
    let cateto1, cateto2, hipotenusa;

    //Pedimos los datos, los guardamos e imprimimos
    cateto1 = parseInt(prompt("Ingresa el valor del cateto 1"));
    escribir("El valor del cateto 1 es: " + cateto1);
    cateto2 = parseInt(prompt("Ingresa el valor del cateto 2"));
    escribir("El valor del cateto 2 es: " + cateto2);

    //Calculamos la hipotenusa
    hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
    hipotenusa = hipotenusa.toFixed(3);

    //Mostramos el resultado
    escribir("La hipotenusa de un triangulo rectangulo con los catetos " + cateto1 + " y " + cateto2 + " es: " + hipotenusa);
}

function ejercicio9() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 9";

    //Titulo 
    escribir("Calculo del IMC")

    //Declaramos las variables
    let peso, estatura, imc, estado;

    //Pedimos los datos, los guardamos e imprimimos
    peso = parseInt(prompt("Ingresa tu peso"));
    escribir("Tu peso es: " + peso);
    estatura = parseInt(prompt("Ingresa tu estatura"));
    escribir("Tu estatura es: " + estatura);

    //Calculamos el IMC
    imc = peso / (math.pow(estatura, 2));

    //Calculamos el estado
    if (imc < 18.5) {
        estado = "Peso bajo";
    } else if (imc >= 18.5 && imc <= 24.9) {
        estado = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        estado = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        estado = "Obesidad grado 1";
    } else if (imc >= 35 && imc <= 39.9) {
        estado = "Obesidad grado 2";
    } else if (imc >= 40) {
        estado = "Obesidad grado 3";
    }

    //Mostramos el resultado
    escribir("Tu IMC es: " + imc + " y segun la OMS tienes:" + estado);
}

function ejercicio10() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 10";

    //Titulo
    escribir("Calculo del area de un circulo");

    //Declaramos las variables
    let radio, area;
    const PI = 3.1416;

    //Pedimos los datos, los guardamos e imprimimos
    radio = parseInt(prompt("Ingresa el radio del circulo"));
    escribir("El radio del circulo es: " + radio);

    //Calculamos el area
    area = PI * Math.pow(radio, 2);

    //Mostramos el resultado
    escribir("El area de un circulo con radio " + radio + "es: " + area);
}


