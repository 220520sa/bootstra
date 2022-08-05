console.log("desde promedio");

const btnpromedio = document.getElementById("btn-promedio");
const resultado =document.getElementById("resultado");
let promedio

//evento clik
btnpromedio.addEventListener("click",prome);

//funcion
function prome() {
   let num1 = document.getElementById("num1").value;
   num1 = parseInt(num1);
   let num2 = document.getElementById("num2").value;
   num2 = parseInt(num2);
   let num3 = document.getElementById("num3").value;
   num3 = parseInt(num3);
   let num4 = document.getElementById("num4").value;
   num4 = parseInt(num4);
    //instrucciones
    promedio =( num1 + num2 +num3 +num4)/4;
    console.log("hola")
    if(promedio>=7){
       resultado.classList.remove("bg-danger");
       resultado.classList.add("bg-success");
    }
    else{
       resultado.classList.remove("bg-success");
        resultado.classList.add("bg-danger");
    }
   
    resultado.classList.add("text-light");
    resultado.textContent = `El resultado es ${promedio}`;
}
