function aumentarTamanio (){
    document.body.style.fontSize = "20px";
}
function disminuirTamanio (){
    document.body.style.fontSize = "15px";
}

function mostrarOpciones (){
    document.getElementById("opciones").hidden=false;
    document.getElementById("activar").hidden=true;
}

function ocultar(){
    document.getElementById("opciones").hidden=true;
    document.getElementById("activar").hidden=false;
}

function cambiarColor(){
    var select_color = document.getElementById("select_color").value;
    document.body.style.backgroundColor = select_color;
}

function cambiarLetra(){
    var cambiaFuente = document.getElementById("cambiaFuente").value;
    document.body.style.fontFamily = cambiaFuente;
}

function cambiarColorLetra(){
    var cambiar_color_letra = document.getElementById("cambiar_color_letra").value;
    document.body.style.color = cambiar_color_letra;
}

function restablecer(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.body.style.fontFamily = "Arial";
    document.body.style.fontSize = "15px";
}