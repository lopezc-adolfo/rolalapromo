import cargarPromociones from "./cargarPromociones";

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

}

export default fetchBusqueda;