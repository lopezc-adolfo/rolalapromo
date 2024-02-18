'use strict';

const promocionesPopulares = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbwecoY9VoIClz5dOpRqRPttc6dLdOhz7xUCte0zdSILlxkD1KThA-I_-Oba-SJ3Zae5xQ/exec';

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos; //Verificar
    } catch(e) {
        console.log(e);
    }
    
    
};

const mostrarPromociones = (misPromociones) => {
    let tarjetas = document.createElement('div');
    tarjetas.id = 'tarjetaPromociones';
    tarjetas.classList.add('d-flex', 'justify-content-center', 'flex-wrap');
    misPromociones.forEach((promocion, index) => tarjetas.appendChild(crearPromociones(promocion, index)));
    //Agregar tarjetas al elemento principal
    document.getElementById('divPromociones').appendChild(tarjetas);
};

function crearPromociones(promocion, index) {
    let plantilla = document.getElementById('plantillaPromocion');
    let copia = document.importNode(plantilla.content, true);
    let precio = promocion.Precio;
    let precioFormateado = precio.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });

    copia.getElementById('plantillaNumero').id = 'promocion' + index;
    copia.getElementById('plantillaProducto').textContent = promocion.Producto;
    copia.getElementById('plantillaVigencia').textContent = `Vigencia: ${promocion['Vigencia inicio']} - ${promocion['Vigencia fin']}`;
    copia.getElementById('plantillaUbicacion').textContent = promocion['Ubicación'];
    copia.getElementById('plantillaImagen').src = promocion.Imagen;
    copia.getElementById('plantillaPrecio').textContent = precioFormateado;

    return copia;
}

const cargarPromociones = async () => {
    const promociones = await promocionesPopulares();
    mostrarPromociones(promociones);
    console.log(promociones);
};


cargarPromociones();
