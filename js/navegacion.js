const button0 = document.querySelector('.Navegar0');
const button1 = document.querySelector('.Navegar1');
const button2 = document.querySelector('.Navegar2');
const buttonElement = document.querySelectorAll('.menu button')
console.log(buttonElement);
let arrayA = [button0, button1, button2];

for (let i = 0; i < arrayA.length; i++) {
    arrayA[i].addEventListener('click', () => {
        arrayA[i].style.color = '#4384a7';
        condicionButton(i);
        for (let j = 0; j < arrayA.length; j++) {
            if (arrayA[j] !== arrayA[i]) {
                arrayA[j].style.color = '#fff';
            }
        }
    });
}

const h4peliculas = document.getElementById('sectionPelis');
const films = document.getElementById('peliculas');
const h4SeriesM = document.getElementById('sectionSeries');
const seriesC = document.getElementById('series');
function condicionButton(i) {
    if(arrayA[i] == button0){
        h4peliculas.style.display = "block"
        films.style.display = "flex"
        h4SeriesM.style.display = "block"
        seriesC.style.display = "flex"
    }else if(arrayA[i] == button1){
        h4SeriesM.style.display = "none"
        seriesC.style.display = "none"
        h4peliculas.style.display = "flex"
        films.style.display = "flex"
    }else if(arrayA[i] == button2){
        h4SeriesM.style.display = "flex"
        seriesC.style.display = "flex"
        h4peliculas.style.display = "none"
        films.style.display = "none"
    }
}

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