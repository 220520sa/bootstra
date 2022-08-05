console.log("hola");

const btnmedir = document.getElementById("btn-medir");
const milimetro = document.getElementById("milimetros");
const centimetro = document.getElementById("centimetros");
const decimetro = document.getElementById("decimetros");
const decametros = document.getElementById("decametros");
const hectometros = document.getElementById("hectometros");
const kilometros = document.getElementById("kilometros");

btnmedir.addEventListener("click", medidas);


function medidas() {
    console.log("desde la funcion");

    let metros = document.getElementById("metros").value;
    metros = parseInt(metros)

    milimetro.textContent = metros * 1000
    centimetro.textContent = metros * 100
    decimetro.textContent = metros * 10
    decametros.textContent = metros/10
    hectometros.textContent = metros/100
    kilometros.textContent = metros/1000


    milimetro.textContent = `El resultado es ${metros * 1000} milímetros`;
    centimetro.textContent =`El resultado es ${metros * 100} centimetros`;
    decimetro.textContent =  `El resultado es ${metros * 10} decimetros`;
    decametros.textContent =  `El resultado es ${metros / 10} decametros`;
    hectometros.textContent =  `El resultado es ${metros / 100} hectometros`;
    kilometros.textContent =  `El resultado es ${metros / 1000} kilometros`;

   
}


