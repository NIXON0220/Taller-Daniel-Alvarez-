function generarpdfdatos(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cedula = document.getElementById("cedula").value;
    let motivo = document.getElementById("motivo").value;
    let hora = document.getElementById("hora").value;
   
     
    var doc = new jsPDF();
    doc.text(20, 20, 'Nombre: ' + nombre);
    doc.text(20, 30, 'Apellido: ' + apellido);
    doc.text(20, 40, 'Cedula: ' + cedula);
    doc.text(20, 50, 'Motivo: ' + motivo);
    doc.text(20, 60, 'Hora de entrada: ' + hora);
    doc.text(20, 70, 'Fecha Inicio: '+"\n" + fechaInicio);
    doc.text(20, 90, 'Fecha Fin: ' + "\n" + fechaFin); 
    doc.save('factura.pdf');
    }

  

        



   