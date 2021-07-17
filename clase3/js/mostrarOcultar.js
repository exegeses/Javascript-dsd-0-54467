//ubicamos elemento dentro del DOM
var caja = document.getElementById('caja');

//declaramos funciones
function ocultar()
{
    caja.style.display = 'none';// que no se vea 
}

function mostrar()
{
    caja.style.display = 'block';// que se vea
}

function mostrarOcultar()
{
    if( caja.style.display == 'none' ){
        //caja.style.display = 'block';
        mostrar();
    }
    else{
        //caja.style.display = 'none';
        ocultar();
    }
}