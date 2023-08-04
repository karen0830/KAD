const searchInput = document.getElementById('searchInput');
const tituloList = document.getElementById('general');
const resultadosDiv = document.getElementById('resultados');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const items = Array.from(tituloList.querySelectorAll('#button'));

    const resultados = items.filter(item => {
        const titulo = item.querySelector('h4').textContent.toLowerCase();
        return titulo.includes(searchTerm);
    });

    mostrarResultados(resultados);

    mostrarResultados(resultados);
    h4SeriesM.style.display = "none"
    seriesC.style.display = "none"
    h4peliculas.style.display = "none"
    films.style.display = "none"
});

function mostrarResultados(resultados) {
    resultadosDiv.innerHTML = '';

    if (resultados.length === 0) {
        resultadosDiv.textContent = 'No se encontraron resultados.';
        return;
    }

    resultados.forEach(result => {
        const copiaItem = result.cloneNode(true); // Clonar el elemento .item completo
        resultadosDiv.appendChild(copiaItem); // Agregar la copia al contenedor de resultados
        leerMasyMenos2();
    });
}