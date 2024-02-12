let numberA = document.getElementById("numberA")
let numberB = document.getElementById("numberB")
let resultadoSuma
let resultadoResta
let resultadoMulti
let resultadoDivi
let spanresultadoOperacion = document.getElementById("resultadoOperacion")

let botonSuma = document.getElementById("boton-suma")
let botonResta = document.getElementById("boton-resta")
let botonMultiplicacion = document.getElementById("boton-multi")
let botonDivision = document.getElementById("boton-divi")
let botonClear = document.getElementById("boton-clear")

botonSuma.addEventListener("click", suma)
botonResta.addEventListener("click", resta)
botonMultiplicacion.addEventListener("click", multiplicacion)
botonDivision.addEventListener("click", division)


function suma(){
    
    resultadoSuma = (parseFloat(numberA.value) + parseFloat(numberB.value));
    spanresultadoOperacion.innerHTML = resultadoSuma
}

function resta(){

    resultadoResta = (numberA.value - numberB.value);
    spanresultadoOperacion.innerHTML = resultadoResta
}

function multiplicacion(){

    resultadoMulti = (numberA.value * numberB.value);
    spanresultadoOperacion.innerHTML = resultadoMulti
}

function division(){

    resultadoDivi = (numberA.value / numberB.value);
    spanresultadoOperacion.innerHTML = resultadoDivi
}

botonClear.addEventListener("click", botonC)

function botonC(){
    location.reload()
}