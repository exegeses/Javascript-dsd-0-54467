var txt = document.getElementById('txt');
var txtDia = document.getElementById('txtDia')

//declaramos array
var nombres = ['Lucas','Mateo','Juan','Marcos'];
console.log(nombres);
txt.innerText = nombres[2];

//array con días de la semana
var semana = [ 
                'Domingo', 'Lunes', 'Martes', 
                'Miércoles', 'Jueves', 'Viernes',
                'Sábado'
             ]

//creamos objeto de fecha
var fecha = new Date()
var nDiaSemana = fecha.getDay();

txtDia.innerText = semana[nDiaSemana];

console.log(nDiaSemana);
/*
if( nDiaSemana == 0 ){
    txtDia.innerText = 'Domingo';
}
else if( nDiaSemana == 1 ){
    txtDia.innerText = 'Lunes';
}
else if( nDiaSemana == 2 ){
    txtDia.innerText = 'Martes';
}
else if( nDiaSemana == 3 ){
    txtDia.innerText = 'Miércoles';
}
else if( nDiaSemana == 4 ){
    txtDia.innerText = 'Jueves';
}
else if( nDiaSemana == 5 ){
    txtDia.innerText = 'Viernes';
}
else{
    txtDia.innerText = 'Sábado';
}
*/

