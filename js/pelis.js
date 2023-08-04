import { buscarElemento } from "../js/busquedas.js";

// JavaScript
const section = document.getElementById('peliculas');
const crear = () => {
    const divGeneral = document.createElement('div');
    divGeneral.id = 'divGeneral';

    const button = document.createElement('button')
    button.id = 'button'

    const div = document.createElement('div');
    div.id = 'div';

    const img = document.createElement('img');
    img.id = 'img2';

    const h1 = document.createElement('h4');
    h1.id = 'h4';

    const descripcion = document.createElement('p');
    descripcion.id = 'description';

    const leermas = document.createElement('button')
    leermas.id = 'leermas';
    leermas.textContent = 'Leer Más';

    const div2 = document.createElement('div')
    div2.id = 'div2'

    div2.appendChild(descripcion);
    div2.appendChild(leermas)

    div.appendChild(h1);
    div.appendChild(div2);

    divGeneral.appendChild(img)
    divGeneral.appendChild(div);

    button.appendChild(divGeneral)

    section.appendChild(button)

    let array = [div, divGeneral, img, h1, descripcion, section, leermas, div2];
    return array
}

const options = { method: 'GET' };
let matriz = [];

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&api_key=ebe8a7dd9de9ff2deeefda7565d16289&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(element => {
            let array = crear();
            array[2].src = 'https://image.tmdb.org/t/p/original' + element.backdrop_path
            array[3].textContent = element.original_title;
            array[4].textContent = element.overview
            matriz.push(array)
        });
        leerMasyMenos()
        buscarElemento();
    })
    .catch(err => console.error(err));


function leerMasyMenos() {
    matriz.forEach(elemento => {
        elemento[6].addEventListener('click', () => {
            if (elemento[6].textContent == 'Leer Más') {
                elemento[7].style = 'flex-direction: column;'
                elemento[4].style = 'overflow: visible; width: 100%; white-space: wrap; '; // Cambia el overflow para que se muestre todo el texto
                elemento[6].textContent = 'Leer Menos'
                elemento[6].style = 'display: block; text-align: start;'; // Oculta el botón "Leer más" después de expandir el texto
            } else {
                elemento[4].style = 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'
                elemento[7].style = 'flex-direction: wrap;'
                elemento[6].textContent = 'Leer Más'
            }
        });
    })
}


