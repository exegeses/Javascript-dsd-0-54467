//ubicamos elementos en el DOM
var txtDias = document.getElementById('dias');
var txtHoras = document.getElementById('horas');
var txtMinutos = document.getElementById('minutos');
var txtSegundos = document.getElementById('segundos');

//declaramos función de control
function countdown()
{
    var ahora = new Date();
    var final = new Date( 2021, 8, 21 );
    var actual = ahora.getTime();
    var evento = final.getTime();

    var restante = evento - actual; // tiempo restante en milisegundos

    var segundos    = Math.floor( restante/1000 );
    var minutos     = Math.floor( segundos/60 );
    var horas       = Math.floor( minutos/60 );
    var dias        = Math.floor( horas/24 );

    console.log(segundos);

    //sobrantes de horas, minutos y segundos
    horas       = horas%24;
    if( horas < 10 ){
        horas = '0' + horas;
    }

    minutos     = minutos%60;
    if( minutos < 10 ){
        minutos = '0' + minutos;
    }

    segundos    = segundos%60;
    if( segundos < 10 ){
        segundos = '0' + segundos;
    }

    console.log(segundos);

    txtDias.innerText       = dias;
    txtHoras.innerText      = horas;
    txtMinutos.innerText    = minutos;
    txtSegundos.innerText   = segundos;
}

//invocamos función
countdown();
//actualizamos 
setInterval( countdown, 1000 )