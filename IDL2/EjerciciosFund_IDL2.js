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
    divEjercicio.innerHTML += `<p>${msg}</p> <br>`;
}

function ejercicio1() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 1";
}

function ejercicio2() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 2";
}

function ejercicio3() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 3";
}

function ejercicio4() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 4";
}


function ejercicio5() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 5";
}

function ejercicio6() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 6";
}

function ejercicio7() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 7";
}

function ejercicio8() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 8";

    //Titulo
    escribir("Verificando la existencia de un triángulo")

    //Declaramos las variables
    let lado1, lado2, lado3;

    //Pedimos los datos, los guardamos e imprimimos
    lado1 = parseFloat(prompt("Ingresa el primer lado"));
    escribir("El primer lado es: " + lado1);
    lado2 = parseFloat(prompt("Ingresa el segundo lado"));
    escribir("El segundo lado es: " + lado2);
    lado3 = parseFloat(prompt("Ingresa el tercer lado"));
    escribir("El tercer lado es: " + lado3);

    //Verificamos si es un triángulo
    if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
        if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
            escribir("Un triangulo con los lados ingresados SI puede existir");
        } else {
            escribir("Un triangulo con los lados ingresados NO puede existir");
        }
    } else {
        escribir("Los lados ingresados no son validos");
    }
}

function ejercicio9() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 9";

    //Titulo
    escribir("Programa para que adivine el numero secreto de 1 a 10")

    //Declaramos las variables
    let num, numSecreto;

    //Definimos el numero secreto
    numSecreto = Math.floor(Math.random() * 10) + 1;

    //Realizamos la condicion
    num = parseInt(prompt("Adivina el numero secreto del 1 al 10"));
    if (numSecreto == num) {
        escribir("Adivinaste, felicitaciones!!");
    } else {
        escribir("No adivinaste, el numero secreto era: " + numSecreto);
    }
}

function ejercicio10() {
    divEjercicio.innerHTML = "";
    spanEjercicio.innerHTML = " 10";

    //Titulo
    escribir("Validar contraseña")

    //Declaramos las variables
    let contrasena;

    //Pedimos los datos, los guardamos e imprimimos
    contrasena = prompt("Ingresa la contraseña");
    escribir("La contraseña es: " + contrasena);

    //Verificamos si la contraseña es correcta
    if (contrasena.length >= 8) {
        escribir("La longitud es correcta")
        escribir("La contraseña es correcta")
    } else {
        escribir("La longitud es incorrecta faltan más caracteres")
    }
}