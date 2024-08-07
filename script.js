let nombreUsuario, edad, gastosNec, gastosOpc, gastosAI;
let clave = "AbCd1424";
let ingresoTotal;
const N = 0.5;
const O = 0.3;
const AI = 0.2;

nombreUsuario = prompt("Ingrese el nombre de usuario:");

clave = prompt(`Bienvenido ${nombreUsuario}. Indique su clave:`);
validadorC(clave);

edad = Number(prompt("Indique su edad. Recuerde que debe ser mayor de 18 años:"));
validadorEdad(edad);

ingresoTotal = edad = Number(prompt("Indique su ingreso total. Debe ser mayor a $50.000 para poder acceder al modelo de presupuesto:"));

modeloPres(ingresoTotal);

window.confirm(`Confirme para acceder al modelo de presupuesto. Se realizará el cálculo correspondiente.`);
window.confirm(`Gastos necesarios: $${gastosNec}\n Gastos opcionales: $${gastosOpc}\n Gastos de ahorro e inversión $${gastosAI}`);

function validadorC(clave) {
    while (clave != "AbCd1424") {
        window.confirm("Clave incorrecta. Acepte para reintentarlo.")
        clave = prompt("Indique la clave nuevamente:");
    }
}

function validadorEdad(edad) {
    while (edad < 18) {
        window.confirm("Es menor de 18 años. Acepte para reintentarlo.")
        edad = Number(prompt("Indique su edad:"));
    }
}

function validadorIngreso(ingresoTotal) {
    while (ingresoTotal < 50000 || ingresoTotal == null) {
        window.confirm("El ingreso es menor a $50.000. Acepte para reintentarlo.")
        ingresoTotal = Number(prompt("Indique su ingreso total:"));
    }
}

function modeloPres(ingresoTotal) {
    gastosNec = ingresoTotal * N;
    gastosOpc = ingresoTotal * O;
    gastosAI = ingresoTotal * AI;
}