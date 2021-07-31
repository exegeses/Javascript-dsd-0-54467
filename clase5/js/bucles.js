var txt = document.getElementById('txt');
var txt2 = document.getElementById('txt2');
var celulares = [
                    'Huawei', 'Nokia', 'Motorola', 'Samsung',
                    'iPhone', 'Xiaomi', 'Blackberry'
                ];
var cantidad = celulares.length;

var n = 1;
var contenido = '';
while( n < 10 ){
    contenido = contenido + n + '<br>';
    n++; // n = n + 1;
}

txt.innerHTML = contenido;

/* listado de celulares  */
n = 0;
contenido = '';
while( n < cantidad ){
    contenido = contenido + '<li>' + celulares[n] + '</li>';
    n++;
}
txt2.innerHTML = contenido;