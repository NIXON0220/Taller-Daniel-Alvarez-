function calcularDias(){
    let fechaInicio = new Date(document.getElementById("fechaInicio").value);
    let fechaFin =new Date(document.getElementById("fechaFin").value);
    
    if (fechaInicio > fechaFin) {
        alert("La fecha de inicio no puede ser mayor a la fecha de fin");
    } else {
        let dias = (fechaFin - fechaInicio) / (1000 * 60 * 60 * 24);
        alert("La cantidad de dias es: " + dias);
    }
    
    let resta = fechaFin.getTime() - fechaInicio.getTime();
    alert(resta)    
    alert(fechaInicio);
    alert(fechaFin);
}