console.log("me lees?")
let edad=17;
//defino o declaro constante
const mensaje = document.getElementById("mensaje");
//selleciono el boton
const boton = document.getElementById("boton");

//escuchar un elemento
boton.addEventListener("click",mostrarfondo);
//crear la funcion mostrar fondo
function mostrarfondo() {
    console.log("click");
    mensaje.classList.add("bg-primary");
}


//seleccionamos mensaje y le agragamos o cambiamos el contenido
mensaje.textContent = "desde javascript";
//eliminar clase
mensaje.classList.remove("bg-primary");
//agregar una clase de css
//mensaje.classList.add("text-center","bg-warning");


function mostrarTexto(e) {
    console.log(e);
}

mostrarTexto(edad);
