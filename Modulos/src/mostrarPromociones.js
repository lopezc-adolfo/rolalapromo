const mostrarPromociones = (misPromociones) => {
    let tarjetas = document.createElement('div');
    tarjetas.id = 'tarjetaPromociones';
    tarjetas.classList.add('d-flex', 'justify-content-center', 'flex-wrap')
    misPromociones.forEach((promocion, index) => tarjetas.appendChild(crearPromociones(promocion, index)));
    //Agregar tarjetas al elemento principal
    document.getElementById('divPromociones').appendChild(tarjetas);
}

export default mostrarPromociones;