import { buscarElemento } from "../js/busquedas.js";

const series = document.getElementById('series');

const baseURL = 'https://image.tmdb.org/t/p/w500'; // Base URL de las imágenes de la API


let arraySeries = [
    'QoCZB5304P0', //El abogado del Lincoln
    'hatjI-dygQE', //The First Responders
    '3Mz_aAbtm6E', //ZOOM 100
    '_2un1aU7mT0', //Nobody | The Bus Fight
    'U8W4VSBo4JU', //TWISTED METAL
    'JhNIEExNAYE', //Seducción Fatal
    'KcBStos46EM', //Loki 
    'SGPmATwOMzs', //Star Trek: Strange New Worlds
    'HLyXCOgXJns', //ONE PIECE 
    'CKUf6eeNieM', //YHWACH : Hijo mío, NACIDO EN LA OSCURIDAD
    '4i5BAEyhpEg', //HIJACK
    'aPBUUJbrAWo', //nn
    'AZ5LA42rbHo', //Futurama
    '2sJTSw2qWnQ', //Operativo: Lioness
    'DiJ71etOG8M', //Invasión Secreta
    'FnYQWX5Bo_k', //The Witcher
    '1dqOSD2iDdI', //Fundación
    'XL2uitZ0TvY', //Heartstopper
    'QIdFe_UF6EM', //Las Flores Perdidas de Alice Hart
    'q8HTURegJnc', //Good Omens
  ]

const crearSeries = (serieData) => {
    const divGeneral = document.createElement('div');
    divGeneral.id = 'divGeneral';

    const button = document.createElement('button');
    button.id = 'button';

    const buttonLook = document.createElement('button')
    buttonLook.id = 'buttonLook'
    const h4Look = document.createElement('h4');
    h4Look.id = 'h4Look';
    h4Look.textContent = "Ver trailer"
    buttonLook.appendChild(h4Look)

    const div = document.createElement('div');
    div.id = 'div';

    const img = document.createElement('img');
    img.id = 'img2';
    img.src = baseURL + serieData.poster_path; // Concatenar el 'poster_path' con la base URL de las imágenes

    const h1 = document.createElement('h4');
    h1.id = 'h4';
    h1.textContent = serieData.name; // Asigna el nombre de la serie desde los datos obtenidos de la API

    const descripcion = document.createElement('p');
    descripcion.id = 'description';
    descripcion.textContent = serieData.overview; // Asigna la descripción de la serie desde los datos obtenidos de la API

    const leermas = document.createElement('button');
    leermas.id = 'leermas';
    leermas.textContent = 'Leer Más';

    const div2 = document.createElement('div');
    div2.id = 'div2';

    div2.appendChild(descripcion);
    div2.appendChild(leermas);

    div.appendChild(h1);
    div.appendChild(div2);

    divGeneral.appendChild(img);
    divGeneral.appendChild(div);
    divGeneral.appendChild(buttonLook)

    button.appendChild(divGeneral);

    series.appendChild(button);
    let key = 0;
    let array = [div, divGeneral, img, h1, descripcion, series, leermas, div2, buttonLook, key];
    return array
};

const requireOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmU4YTdkZDlkZTlmZjJkZWVlZmRhNzU2NWQxNjI4OSIsInN1YiI6IjY0YzNiMWM2MDI4ZjE0MDBlZTlkN2I1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z9fXvxMy_bnwoHZg-fCDQrcYq3vkYgavLw4suPglYgg'
    }
};

let matriz2 = [];
let i = 0;

fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', requireOptions)
    .then(response => response.json())
    .then(data => {
        const seriesTrending = data.results;
        for (const serie of seriesTrending) {
            let crearS = crearSeries(serie);
            crearS[9] = arraySeries[i]
            matriz2.push(crearS)
            i++;
        }
        leerMasyMenos2()
        buscarElemento();
        btnLookT();
    })
    .catch(err => console.error(err));

console.log(matriz2);
function leerMasyMenos2() {
    matriz2
        .forEach(elemento => {
            elemento[6].addEventListener('click', () => {
                console.log(elemento[6].textContent);
                if (elemento[6].textContent == 'Leer Más') {
                    elemento[7].style = 'flex-direction: column;'
                    elemento[4].style = 'overflow: visible; width: 100%; white-space: wrap; '; // Cambia el overflow para que se muestre todo el texto
                    elemento[6].textContent = 'Leer Menos'
                    elemento[6].style = 'display: block; text-align: start;'; // Oculta el botón "Leer más" después de expandir el texto
                } else if (elemento[6].textContent == "Leer Menos") {
                    elemento[4].style = 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'
                    elemento[7].style = 'flex-direction: wrap;'
                    elemento[6].textContent = 'Leer Más'
                }
            });
        })
}

// button look
export function btnLookT() {
    matriz2.forEach(elemento => {
        elemento[8].addEventListener('click', () => {
            openModal(elemento[9]);
        });
    });
}

function openModal(videoId) {
    const modal = createModal(videoId);
    document.body.appendChild(modal);
}

function createModal(videoId) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', closeModal);

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.setAttribute('allowfullscreen', true);
    iframe.setAttribute('frameborder', 0);

    modalContent.appendChild(closeButton);
    modalContent.appendChild(iframe);
    modal.appendChild(modalContent);

    return modal;
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// trailer
const cardTrailer = () => {
    const divGeneral = document.createElement('div');
    divGeneral.id = 'divGeneralTrailer';

    const div = document.createElement('div');
    div.id = 'divDescriptionTrailerPeli';

    const button = document.createElement('button')
    button.id = 'buttonTrailer'
    button.textContent = "X"

    const iframe = document.createElement('iframe');
    iframe.id = "iframeP";
    iframe.src = `https://www.youtube.com/embed/iFl1cFggFb8`

    const div2 = document.createElement('div');
    div2.id = 'divTrailer';

    const descripcion = document.createElement('p');
    descripcion.id = 'description';

    div.appendChild(button)
    div.appendChild(iframe)

    div2.appendChild(descripcion);

    divGeneral.appendChild(div)
    divGeneral.appendChild(div2);
    const main = document.querySelector('main')
    main.appendChild(divGeneral);
    return divGeneral;
}
// Trailer
cardTrailer();