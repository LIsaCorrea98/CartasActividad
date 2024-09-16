// Manejador de eventos para el botón de registro de cartas
document.querySelector('#registrar').addEventListener('click', function() { 
    guardarCarta();
    pintarTabla();
});

// Manejador de eventos para los botones de cartas usando jQuery
$(".btncarta").click(function() {
    var datos = localStorage.getItem('datos');

    // Si no hay datos en el localStorage, inicializa un arreglo vacío
    if (!datos) {
        datos = [];
    } else {
        datos = JSON.parse(datos);
    }

    // Verifica si el número de carta coincide y aumenta la cantidad
    for (let item of datos) {
        if (item.numero == this.dataset.carta) {
            item.cantidad++;
        }
    }

    // Guarda los datos actualizados en el localStorage
    localStorage.setItem('datos', JSON.stringify(datos));
    pintarTabla();
});

// Función para guardar una nueva carta en el localStorage
function guardarCarta() {
    var numero = document.querySelector('#numero').value;
    var carta = document.querySelector('#carta').value;
    var datos = localStorage.getItem('datos');

    // Si no hay datos en el localStorage, inicializa un arreglo vacío
    if (!datos) {
        datos = [];
    } else {
        datos = JSON.parse(datos);
    }

    // Crea un nuevo objeto de carta y lo agrega al arreglo de datos
    var dato = {numero: numero, carta: carta, cantidad: '0'};
    datos.push(dato);

    // Guarda los datos actualizados en el localStorage
    localStorage.setItem('datos', JSON.stringify(datos));
}

// Función para cargar datos iniciales en el localStorage (si es necesario)
function cargarJSON() {
    var miObjeto = [
        { 'numero': '1', 'carta': 'as', 'cantidad': '2' },
        { 'numero': '2', 'carta': '2 de diamantes', 'cantidad': '3' }
    ];
    localStorage.setItem('datos', JSON.stringify(miObjeto));
}

// Función para pintar la tabla con los datos del localStorage
function pintarTabla() {
    var datos = localStorage.getItem('datos');

    // Si no hay datos en el localStorage, inicializa un arreglo vacío
    if (!datos) {
        datos = [];
    } else {
        datos = JSON.parse(datos);
    }

    let res = document.querySelector('#listado');
    res.innerHTML = '';

    // Llena la tabla con los datos
    for (let item of datos) {
        res.innerHTML += `<tr>
            <td>${item.numero}</td>
            <td>${item.carta}</td>
            <td>${item.cantidad}</td>
        </tr>`;
    }
}

// Cargar datos iniciales y pintar la tabla al cargar la página
cargarJSON();
pintarTabla();
