function calcularDias(){
    let fechaInicio = new Date(document.getElementById("fechaInicio").value);
    let fechaFin =new Date(document.getElementById("fechaFin").value);
    
    if (fechaInicio > fechaFin) {
        alert("La fecha de inicio no puede ser mayor a la fecha de fin");
        document.getElementById("fechaInicio").value = "";
        document.getElementById("fechaFin").value = "";
    } else {
        let dias = (fechaFin - fechaInicio) / (1000 * 60 * 60 * 24);
        alert("La cantidad de dias es: " + dias);
    }
}