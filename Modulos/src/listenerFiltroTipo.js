import cargarPromociones from './cargarPromociones';
import cargarUbicaciones from './cargarUbicaciones';

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
}

export default agregarEventos;