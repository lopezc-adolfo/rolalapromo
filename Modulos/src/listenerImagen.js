const contenedorPromociones = document.getElementById('divPromociones');

contenedorPromociones.addEventListener('click', (e) => {
    e.preventDefault();
    const imagen = e.target.closest('img');

    if (imagen) {
        const enlace = imagen.getAttribute('data-enlace');
        window.open(enlace, '_blank');
    }
});

