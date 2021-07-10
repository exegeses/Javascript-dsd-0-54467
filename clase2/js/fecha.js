//mostrar la fecha formato 10/07/2021
//Ubicamos elemento/s dentor del DOM

var txt = document.getElementById('txt')

//creamos objeto de fecha
var fecha = new Date();

//obtenemos dia del mes
var diaMes  = fecha.getDate();
//obtenemops el mes actual
var mes     = fecha.getMonth()+1;
if ( mes < 10 ){
    mes = '0'+ mes;
}
//obtenemos el año
var anio    = fecha.getFullYear();

//imprimimos en el span
txt.innerText = diaMes +'/'+ mes +'/'+ anio;

