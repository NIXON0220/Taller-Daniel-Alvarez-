// function calcularDias(){
//     let fechaInicio = new Date(document.getElementById("fechaInicio").value);
//     let fechaFin =new Date(document.getElementById("fechaFin").value);

   

//     if (fechaInicio > fechaFin) {
//         alert("La fecha de inicio no puede ser mayor a la fecha de fin");
//         document.getElementById("fechaInicio").value = "";
//         document.getElementById("fechaFin").value = "";
//     } else {
//         let dias = (fechaFin - fechaInicio) / (1000 * 60 * 60 * 24);
//         alert("La cantidad de dias es: " + dias);
//     }
// }  

// function calcularValor(){
//     let valor = 75000;
//     let subtotal = valor * dias;
//     return subtotal;
// }

// function sisben(subtotal){
//     let descuento = subtotal * 0.30;
//     let total = subtotal - descuento;
//     let radiosi = document.getElementById("flexradiosi").checked;
//     if (radiosi == true) {
//         alert("El valor total a pagar es: " + total);
//     } else {
//         alert("El valor total a pagar es: " + subtotal);
//     }
// }
 
function validarDatos() {
 
    let fechainicio = document.getElementById('FechaInicio').value;
    let fechaFin = document.getElementById('FechaSalida').value;
    let radioBtnSi = document.getElementById('SisbenA');
    let radioChecked = "";

    let firstDateMl = new Date(fechainicio);
    let fechaFinMl = new Date(fechaFin);

    if (fechainicio > fechaFin) {
        alert("La fecha de inicio debe ser menor que la fecha de fin");
    } else {
        let resta = fechaFinMl.getTime() - firstDateMl.getTime();
        let dias = 1 + Math.floor(resta / (1000 * 60 * 60 * 24));

        let valorTotal = dias * 75000;
        if (radioBtnSi.checked) {
            valorTotal = valorTotal - (valorTotal * (35 / 100));
            radioChecked = "Si";
        }else{
            radioChecked = "No";
        }
        GenerarPDF(valorTotal, fechainicio, fechaFin, radioChecked);
    }
}

function GenerarPDF(valorTotal, fechainicio, fechaFin, radioChecked) {

    let name = document.getElementById('nombre').value;
    let id = document.getElementById('cedula').value;
    let reason = document.getElementById('motivo').value;
    let hora = document.getElementById("hora").value;
  
    var doc = new jsPDF();
    doc.setFontSize(30);
    doc.setTextColor(3, 3, 3);
    doc.text(20, 15, 'FACTURA DEL PACIENTE');
    doc.setFontType('');
    doc.setFontSize(10);
    doc.text(20,25, "hora de entrada:" + hora)
    doc.text(20, 30, 'Fecha de la factura: ' + new Date());
    doc.setFontSize(15);
    doc.text(20, 40, 'Nombre: ' + name);
    doc.text(20, 50, 'Cedula: ' + id);
    doc.text(20, 60, 'Motivo: ' + reason);
    doc.text(20, 70, 'Fecha de inicio: ' + fechainicio);
    doc.text(20, 80, 'Fecha de fin: ' + fechaFin);
    doc.text(20, 90, '¿Aplica descuento?: ' + radioChecked);
    doc.setFontSize(20);
    doc.text(20, 120, 'Valor de la factura: ' + valorTotal);
    doc.save('factura_paciente-pdf');
}