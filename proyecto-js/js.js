const cuerpo = document.getElementById("cuerpo");
const texto = document.getElementById("texto");



console.log(cuerpo);


const boton1=document.getElementById("boton1");
const boton2=document.getElementById("boton2");
const boton3=document.getElementById("boton3");


boton1.addEventListener("click",mostrarfondo1);

function mostrarfondo1() {
    console.log("click");
    cuerpo.classList.add("bg-dark","text-light");
    cuerpo.classList.remove("bg-secondary");
    cuerpo.classList.remove("bg-warning");
}


boton2.addEventListener("click",mostrarfondo2);

function mostrarfondo2() {
    console.log("click");
    cuerpo.classList.add("bg-primary","text-warning");
    cuerpo.classList.remove("bg-secondary");
    cuerpo.classList.remove("bg-warning");
    cuerpo.classList.remove("bg-dark");
}


boton3.addEventListener("click",mostrarfondo3);

function mostrarfondo3() {
    console.log("click");
    cuerpo.classList.add("bg-warning","text-danger");
    cuerpo.classList.remove("bg-secondary");
    cuerpo.classList.remove("bg-primary");
    cuerpo.classList.remove("bg-dark");
    cuerpo.classList.remove("bg-light");
   
}
