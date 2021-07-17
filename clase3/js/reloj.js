var txt = document.getElementById('txt');

//declaración de función/es de control
function reloj()
{
    //creamos un objeto de fecha
    var fecha = new Date();

    //obtenemos las horas
    var horas = fecha.getHours();
    //obtenemos los minutos
    var minutos = fecha.getMinutes();
    //obtenemos los segundos
    var segundos = fecha.getSeconds();
    //imprimimos
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}

//invocamos la función reloj()
reloj();
//actualizamos ejecución de la función
setInterval( reloj, 1000 )