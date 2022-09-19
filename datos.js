function generarpdfdatos(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cedula = document.getElementById("cedula").value;
    let motivo = document.getElementById("motivo").value;
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

    var doc = new jsPDF();
    doc.text(20, 20, 'Nombre: ' + nombre);
    doc.text(20, 30, 'Apellido: ' + apellido);
    doc.text(20, 40, 'Cedula: ' + cedula);
    doc.text(20, 50, 'Motivo: ' + motivo);
    doc.text(20, 60, 'Fecha Inicio: ' + fechaInicio);
    doc.text(20, 70, 'Fecha Fin: ' + fechaFin);
    doc.save('factura.pdf');
    }

 


