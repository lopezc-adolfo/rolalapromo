import promocionesPopulares from "./promocionesPopulares";
import mostrarPromociones from "./mostrarPromociones";
import cargarPromociones from "./crearPromociones"

const cargarPromociones = async () => {
    const promociones = await promocionesPopulares();
    mostrarPromociones(promociones);
    console.log(promociones);
};


cargarPromociones();
