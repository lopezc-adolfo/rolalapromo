const contenedorUbicaciones = document.getElementById('filtro-ubicaciones');
const subtipo = document.getElementById('subtipo');

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
}

export default cargarUbicaciones;