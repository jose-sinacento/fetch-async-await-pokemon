const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.getElementById('resetBtn');
const divApp = document.getElementById('app');
// let limitShow = 10;
let numPagina = 0;

// // Buscar pokemons 
// searchBtn.addEventListener('click', () => {
//     const pokemonNombre = searchInput.value;
//     console.log(pokemonNombre);
//     if (searchInput.value) {
//         fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNombre}`)
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error('El pokemon solicitado no ha sido encontrado');
//                 }
//                 return reponse.json();
//                 // console.log(pokemonNombre)  
//             })
//         };

        // Botón para resetear CHECK 
        resetBtn.addEventListener('click', () => {
            location.reload();
        });

        //botón para avanzar
        document.getElementById('nextBtn').addEventListener('click', () => {   
            if (numPagina >= 0) {
                numPagina += 10;
            }

            traerPokemons(numPagina);
        });

        //botón para retroceder 
        document.getElementById('prevBtn').addEventListener('click', () => {
            if (numPagina > 0) {
                numPagina -= 10;
            }

            traerPokemons(numPagina);
        });

        //función para conseguir los pokemons CHECK
        const traerPokemons = async (numPagina) => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${numPagina}`)
                if (!response.ok) {
                    throw new Error(' Pokemon no encontrado')
                }
                const data = await response.json();
                console.log(data);
                console.log(data.results);
                pintarPokemons(data);

            } catch (error) {
                console.error(error)
            }
        };

        traerPokemons(numPagina);

        //funcion para pintar los Pokemons 
        const pintarPokemons = (data) => {
            const dataResults = data.results;
            // StoragePokemon = [];
            
            divApp.innerHTML = "<ul>";
            dataResults.forEach(async (element) => {
                // StoragePokemon.push(element.url);

                const res = await fetch(element.url);
                if (!res.ok) {
                    throw new Error("No se ha podido mostrar los Pokemons");
                }
                const showPokemons = await res.json();

                PokemonNombre = showPokemons.name;
                pokemonImg = showPokemons.sprites.other.dream_world.front_default;
                
                divApp.innerHTML += `<li>
                <p>Nombre: ${PokemonNombre}
                </p>
                <img src="${pokemonImg}" alt="${PokemonNombre}"> 
                </li>`
            });
            divApp.innerHTML += "</ul>";
        };