//ubicar elemento dentro del DOM
var dado = document.getElementById('dado');

//decaramos función de control
function tirarDado()
{
    var numeroAleatorio = Math.random(); // 0  1
    var numeroMultiplicado = (numeroAleatorio * 5) + 1;
    var numero = Math.round( numeroMultiplicado ); 
    console.log(numeroAleatorio);
    console.log(numeroMultiplicado);
    console.log(numero);
    dado.innerHTML = '<img src="dados/dado'+ numero +'.png">';
}

//invocamos función
tirarDado();