
const cargarPromociones = async () => {
    try {
        //const respuesta = await fetch('https://script.google.com/macros/s/AKfycbwCCHa7daLgcL3rzoJatqfPMuF5icF3T4ca-7QpkCKUE2EO27YQq113rCFKk2pGWWIIlQ/exec');
        const respuesta = await fetch('https://script.google.com/macros/s/AKfycbwecoY9VoIClz5dOpRqRPttc6dLdOhz7xUCte0zdSILlxkD1KThA-I_-Oba-SJ3Zae5xQ/exec');
        if (respuesta.status === 200) {
            const datos = await respuesta.json();

            let tarjetas = document.createElement('div');
            tarjetas.id = 'tarjetaPromociones';
            tarjetas.classList.add('d-flex', 'justify-content-center', 'flex-wrap')

            datos.forEach((promocion, index) => tarjetas.appendChild(crearPromocionPlantilla(promocion, index)));

            //Agregar tarjetas al elemento principal
            document.getElementById('divPromociones').appendChild(tarjetas);


        } else {
            console.log(`Error en la respuesta: ${respuesta.status}`);
        }
    } catch (error) {
        console.log(error);
    }

}

function crearPromocionPlantilla(promocion, index) {
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


cargarPromociones();
