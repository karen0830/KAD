const section2 = document.getElementById('series');
const crearSeries = () => {
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
    leermas.id = 'leermas2';
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

    section2.appendChild(button)

    let array = [div, divGeneral, img, h1, descripcion, section, leermas, div2];
    return array
}



const requireOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmU4YTdkZDlkZTlmZjJkZWVlZmRhNzU2NWQxNjI4OSIsInN1YiI6IjY0YzNiMWM2MDI4ZjE0MDBlZTlkN2I1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z9fXvxMy_bnwoHZg-fCDQrcYq3vkYgavLw4suPglYgg'
    }
  };
  
  let matriz2 = [];

  fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', requireOptions)
    .then(response => response.json())
    .then(response => {
        console.log(response.results);
        response.results.forEach(element => {
            let array = crearSeries();
            array[2].src = 'https://image.tmdb.org/t/p/original' + element.backdrop_path
            array[3].textContent = element.name;
            array[4].textContent = element.overview
            matriz2
    .push(array)
        });
        leerMasyMenos2()
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
                } else if(elemento[6].textContent == "Leer Menos"){
                    elemento[4].style = 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'
                    elemento[7].style = 'flex-direction: wrap;'
                    elemento[6].textContent = 'Leer Más'
                }
            });
        })
    }