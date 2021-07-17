var caja = document.getElementById('caja');
var grados = 0;

function rotar()
{
    grados = grados + 2;
    caja.style.transform = 'rotate( '+grados+'deg )';
}

rotar();
setInterval( rotar, 100 )