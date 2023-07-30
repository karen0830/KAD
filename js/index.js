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
    // 'https://image.tmdb.org/t/p/original' + backdropPath;

    const h1 = document.createElement('h4');
    h1.id = 'h4';

    const descripcion = document.createElement('p');
    descripcion.id = 'description';

    div.appendChild(h1);
    div.appendChild(descripcion);

    divGeneral.appendChild(img)
    divGeneral.appendChild(div);

    button.appendChild(divGeneral)

    section.appendChild(button)

    let array = [div, divGeneral, img, h1, descripcion, section];
    return array
}

const options = { method: 'GET' };

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&api_key=ebe8a7dd9de9ff2deeefda7565d16289&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(element => {
            let array = crear();
            array[2].src = 'https://image.tmdb.org/t/p/original' + element.backdrop_path
            array[3].textContent = element.original_title;
            array[4].textContent = element.overview
        });
        console.log(response);
    })
    .catch(err => console.error(err));




