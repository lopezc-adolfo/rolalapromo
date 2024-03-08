const contenedor = document.getElementById('divPromociones');

const cargarPromociones = (resultados, filtro = 'Supermercados', subtipo) => {
    try {
        contenedor.innerHTML = '';
        let tiposFiltrados = resultados.filter(objeto => objeto['Tipo'] === filtro && objeto['Status'] === 'Activo');
        if (subtipo) {
            tiposFiltrados = tiposFiltrados.filter(objeto => objeto['Subtipo'] === subtipo);
        }
        tiposFiltrados.forEach((promocion, index) => {
            let precio = promocion.Precio;
            let precioFormateado = precio.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
            let vigencia, tipoOp;
            if (promocion['Vigencia inicio'] && promocion['Vigencia fin']) {
                vigencia = `Vigencia: ${promocion['Vigencia inicio']} - ${promocion['Vigencia fin']}`;
            } else if (promocion['Vigencia inicio']) {
                vigencia = promocion['Vigencia inicio'];
            } else if (promocion['Vigencia fin']) {
                vigencia = promocion['Vigencia fin']
            } else {
                vigencia = ''
            }
            if (promocion['Tipo OP'] === 'Oferta') {
                tipoOp = 'oferta';
            } else if (promocion['Tipo OP'] === 'Precio especial') {
                tipoOp = 'precioEspecial'
            } else if (promocion['Tipo OP'] === 'Promoción') {
                tipoOp = 'promocion'
            }
            const plantilla = `
            <div id="${'promocion' + index}" class="tarjeta">
                <div class="caja-promocion">
                <img id="plantillaImagen" alt="Imagen de la promoción" src="${promocion.Imagen}" data-enlace=${promocion['Link oferta']}>
                <div class="datos-promocion">
                    <h3><span class="${tipoOp}">${precioFormateado}</span> ${promocion['Promoción'] ? `<span class="promocion">${promocion['Promoción']}</span>` : ''}</h3>    
                    <p id="ahorro">Ahorro RLP: ${promocion['Ahorro']}</p>
                    <p class="descripcion">${promocion.Producto}</p>   
                    <p id="plantillaSubtipo">${promocion['Subtipo']}</p>                 
                    <p id="plantillaUbicacion">${promocion['Ubicación']}</p>
                    <p id="plantillaVigencia">${vigencia}</p>
                </div>
                </div>
            </div>`;
            contenedor.insertAdjacentHTML('beforeend', plantilla);
        });
    }
    catch (e) {
        console.log(e);
    }

}

export default cargarPromociones;