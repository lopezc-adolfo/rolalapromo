import promocionesPopulares from "./promocionesPopulares";
import mostrarPromociones from "./mostrarPromociones";

const cargarPromociones = async () => {
    const promociones = await promocionesPopulares();
    mostrarPromociones(promociones);
    console.log(promociones);
};


cargarPromociones();
