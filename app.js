let numberSecret = 0;
let  intento = 1;
let listaNumberUse = [];
let numeroMaximo =11;


function  asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numberUser = parseInt(document.getElementById('valorUsuario').value);

    if (numberUser === numberSecret){
        asignarTextoElemento('p',`Acertaste el número!! Lo hiciste en ${intento}${intento ==1 ? ' intento.':' intentos.'}`);
         document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (numberUser > numberSecret){
            asignarTextoElemento('p',`El número secreto es menor al que elegiste y llevas ${intento}${intento ==1 ? ' intento.':' intentos.'}`);
        }
        else{
            asignarTextoElemento('p',`El número secreto es mayor al que elegiste y llevas ${ intento}${intento ==1 ? ' intento.':' intentos.'}`);
        }
        intento++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ' ';
}
function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo+1);

    if(listaNumberUse.length ==numeroMaximo){
        asignarTextoElemento('p','Ya se asignaron todos los elementos posibles')
    }else{
        if (listaNumberUse.includes(numeroGenerado)){
            return generarNumeroSecreto();
            }else
            {
                listaNumberUse.push(numeroGenerado );
                return numeroGenerado;
            }
   }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numberSecret = generarNumeroSecreto();
    intento = 1;
}

function newGame(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();