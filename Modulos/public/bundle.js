'use strict';

const fetchPopulares = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbwecoY9VoIClz5dOpRqRPttc6dLdOhz7xUCte0zdSILlxkD1KThA-I_-Oba-SJ3Zae5xQ/exec';

    try {
        const respuesta = await fetch(url);
        const resultados = await respuesta.json();;
        if (resultados) {
            return resultados;
        }
    } catch (e) {
        console.log('Error: ' + e);
    }

};

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
                vigencia = promocion['Vigencia fin'];
            } else {
                vigencia = '';
            }
            if (promocion['Tipo OP'] === 'Oferta') {
                tipoOp = 'oferta';
            } else if (promocion['Tipo OP'] === 'Precio especial') {
                tipoOp = 'precioEspecial';
            } else if (promocion['Tipo OP'] === 'Promoción') {
                tipoOp = 'promocion';
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

};

const contenedorUbicaciones = document.getElementById('filtro-ubicaciones');
document.getElementById('subtipo');

const cargarUbicaciones = async (resultados, filtro = 'Supermercados') => {
	contenedorUbicaciones.innerHTML = '';
	//subtipo.innerText = 'Rola La Promo';
	const tiposFiltrados = resultados.filter(objeto => objeto['Tipo'] === filtro);
	const ubicaciones = tiposFiltrados.map(objeto => objeto['Subtipo'])
		.filter((valor, indice, self) => self.indexOf(valor) === indice);
	//subtipo.innerText = filtro;
	ubicaciones.forEach((ubicacion) => {
		const btn = document.createElement('button');
		btn.classList.add('btn');
		btn.innerText = ubicacion;
		contenedorUbicaciones.appendChild(btn);
	});
};

const filtroSupermercados = document.getElementById('supermercados');
const filtroNegociosLocales = document.getElementById('negociosLocales');
const filtroExclusivosOnline = document.getElementById('exclusivosOnline');
const filtroCanastaBasica = document.getElementById('canastaBasica');
const filtroCupones = document.getElementById('cupones');

const agregarEventos = (datosIniciales) => {
	filtroSupermercados.addEventListener('click', async (e) => {
		filtroSupermercados.classList.add('btn--active');
		filtroNegociosLocales.classList.remove('btn--active');
		filtroExclusivosOnline.classList.remove('btn--active');
		filtroCanastaBasica.classList.remove('btn--active');
		filtroCupones.classList.remove('btn--active');
		e.preventDefault();
		cargarUbicaciones(datosIniciales, 'Supermercados');
		cargarPromociones(datosIniciales, 'Supermercados');
		document.getElementById("menu-toggle").checked = false;
	});
	
	filtroNegociosLocales.addEventListener('click', async (e) => {
		filtroSupermercados.classList.remove('btn--active');
		filtroNegociosLocales.classList.add('btn--active');
		filtroExclusivosOnline.classList.remove('btn--active');
		filtroCanastaBasica.classList.remove('btn--active');
		filtroCupones.classList.remove('btn--active');
		e.preventDefault();
		cargarUbicaciones(datosIniciales, 'Negocios locales');
		cargarPromociones(datosIniciales, 'Negocios locales');
		document.getElementById("menu-toggle").checked = false;
	});
	
	filtroExclusivosOnline.addEventListener('click', async (e) => {
		filtroSupermercados.classList.remove('btn--active');
		filtroNegociosLocales.classList.remove('btn--active');
		filtroExclusivosOnline.classList.add('btn--active');
		filtroCanastaBasica.classList.remove('btn--active');
		filtroCupones.classList.remove('btn--active');
		e.preventDefault();
		cargarUbicaciones(datosIniciales, 'Exclusivos online');
		cargarPromociones(datosIniciales, 'Exclusivos online');
		document.getElementById("menu-toggle").checked = false;
	});
	
	filtroCanastaBasica.addEventListener('click', async (e) => {
		filtroSupermercados.classList.remove('btn--active');
		filtroNegociosLocales.classList.remove('btn--active');
		filtroExclusivosOnline.classList.remove('btn--active');
		filtroCanastaBasica.classList.add('btn--active');
		filtroCupones.classList.remove('btn--active');
		e.preventDefault();
		cargarUbicaciones(datosIniciales, 'Canasta básica');
		cargarPromociones(datosIniciales, 'Canasta básica');
		document.getElementById("menu-toggle").checked = false;
	});
	
	filtroCupones.addEventListener('click', async (e) => {
		filtroSupermercados.classList.remove('btn--active');
		filtroNegociosLocales.classList.remove('btn--active');
		filtroExclusivosOnline.classList.remove('btn--active');
		filtroCanastaBasica.classList.remove('btn--active');
		filtroCupones.classList.add('btn--active');
		e.preventDefault();
		cargarUbicaciones(datosIniciales, 'Cupones');
		cargarPromociones(datosIniciales, 'Cupones');
		document.getElementById("menu-toggle").checked = false;
	});
};

const fetchBusqueda = (datosIniciales) => {
    const contenedor = document.getElementById('filtro-ubicaciones');
    contenedor.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.closest('button')) {
            contenedor.querySelector('.btn--active')?.classList.remove('btn--active');
            e.target.classList.add('btn--active');
            const tipo = document.querySelector('.items .btn--active')?.textContent;
            const subtipo = document.querySelector('#filtro-ubicaciones .btn--active')?.textContent;
            console.log(tipo, subtipo);

            cargarPromociones(datosIniciales, tipo, subtipo);
            if (subtipo === 'Todos') {
                cargarPromociones(datosIniciales, tipo);
                const botonTodos = document.getElementById('todos');
                botonTodos.remove();
            } else {
                if (!contenedor.querySelector('#todos')) {
                    const btn = document.createElement('button');
                    btn.classList.add('btn');
                    btn.id = 'todos';
                    btn.innerText = 'Todos';
                    contenedor.appendChild(btn);
                }
            }
        }
    });

};

const contenedorPromociones = document.getElementById('divPromociones');

contenedorPromociones.addEventListener('click', (e) => {
    e.preventDefault();
    const imagen = e.target.closest('img');

    if (imagen) {
        const enlace = imagen.getAttribute('data-enlace');
        window.open(enlace, '_blank');
    }
});

let datosIniciales = null;

const cargarDatosIniciales = async () => {
    datosIniciales = await fetchPopulares();
    if (datosIniciales) {
        cargarPromociones(datosIniciales, 'Supermercados');
        cargarUbicaciones(datosIniciales, 'Supermercados');
        agregarEventos(datosIniciales);
        fetchBusqueda(datosIniciales);
    }
};

const cargar = async () => {
    if (!datosIniciales) {
        await cargarDatosIniciales();
    }
    // Los datos ya están cargados, puedes utilizarlos directamente
    cargarPromociones(datosIniciales, 'Supermercados');
    cargarUbicaciones(datosIniciales, 'Supermercados');
};

cargar();
