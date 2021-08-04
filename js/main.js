document.addEventListener('DOMContentLoaded', function () {
    eventListeners();
    calcularMontos();
});
window.addEventListener("resize", parametrosIniciales);
function eventListeners(){
    const mobileMenu = document.querySelector('.menu-movil');
    mobileMenu.addEventListener('click', navegacionResponsive);
}
function navegacionResponsive() {
    const mostrarNavegacion = document.querySelector('.navegacion-principal');
    
    mostrarNavegacion.classList.toggle('mostrar');
}
function parametrosIniciales() {
    const mostrarNavegacion = document.querySelector('.navegacion-principal');
    mostrarNavegacion.classList.remove('mostrar');
}
// Campos Datos usuario
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
// Campos pases
const pase_dia = document.querySelector('#pase_dia');
const pase_dosdias = document.querySelector('#pase_dosdias');
const pase_completo = document.querySelector('#pase_completo');
// Botones y divs
const calcular = document.querySelector('#calcular');
const errorDiv = document.querySelector('#error');
const botonRegistro = document.querySelector('#btnRegistro');
const resultado = document.querySelector('#lista-productos');
function calcularMontos() { 
    calcular.addEventListener('click', function(e){
        e.preventDefault();
        const regalo = document.querySelector('#regalo');
        if (regalo.value === '') {
            alert("Debes elegir un regalo");
            regalo.focus();
        }
        else {
            let totalPagar = pase_dia.value*30 + pase_dosdias.value*50 + pase_completo.value*45;
            console.log(totalPagar);
        }
    });
}