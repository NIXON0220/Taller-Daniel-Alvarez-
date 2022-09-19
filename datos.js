function generarpdfdatos(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let cedula = document.getElementById("cedula").value;
    let motivo = document.getElementById("motivo").value;
    let fechaInicio = document.getElementById("fechaInicio").value;
    let fechaFin = document.getElementById("fechaFin").value;

    let checkradio1 = document.getElementById('si').value;

    if (checkradio1.checked) {
        checkradio1 = "Si";
    } else {
        checkradio1 = "No";
    }



    var doc = new jsPDF();
    doc.setDrawColor(255, 0, 0);
    doc.text(20, 20, "Nombre: " + nombre);
    doc.text(20, 30, "Apellido: " + apellido);
    doc.text(20, 40, "Cedula: " + cedula);
    doc.text(20, 50, "Motivo: " + motivo);
    doc.text(20, 60, "Fecha Inicio: " + fechaInicio);
    doc.text(20, 70, "Fecha Fin: " + fechaFin);
    doc.text(20, 80, "Sisben" + checkradio1);
    doc.save("datos.pdf");
}

