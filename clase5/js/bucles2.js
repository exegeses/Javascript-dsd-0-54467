var portfolio = document.getElementById('portfolio');

var fotos = [ 
                'arq1', 'arq2', 'arq3', 
                'dancer1', 'dancer2', 'dancer3',
                'moda1', 'moda2', 'moda3'
             ];
            
var n = 0;
var cantidad = fotos.length;

var contenido = '';
while( n < cantidad ){
    contenido = contenido + '<article>\n' +
        '            <img src="imagenes/'+fotos[n]+'.jpg">\n' +
        '            <h2>Nombre</h2>\n' +
        '        </article>';
    n++;
}

portfolio.innerHTML = contenido;
