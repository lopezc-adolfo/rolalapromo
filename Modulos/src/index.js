import fetchPopulares from "./fetchPopulares";
import cargarPromociones from "./cargarPromociones";
import cargarUbicaciones from "./cargarUbicaciones";
import agregarEventos from "./listenerFiltroTipo";
import fetchBusqueda from "./listenerFiltroSubtipo";
import './listenerImagen';

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

