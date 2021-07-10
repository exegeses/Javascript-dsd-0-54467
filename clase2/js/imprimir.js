//Ubicamos elemento dentro del DOM
var txt = document.getElementById('txt');
var logo = document.getElementById('logo');

//escribimos dentor del elemento span que se llama txt
txt.innerText = 'texto generado con javascript';
//document.write('texto primero desde js')


//mostramos imagen dentro del figure
logo.innerHTML = '<img src="https://pluspng.com/img-png/logo-javascript-png-alternate-image-for-javascript-480.png">'
