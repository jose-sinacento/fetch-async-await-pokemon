const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.getElementById('resetBtn');
const divApp = document.getElementById('app');
let page = 0

// Buscar pokemons 
searchBtn.addEventListener('click', () => {
    const pokemonNombre = searchBtn.value;
    if (searchInput) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNombre}`)
    }
    console.log(pokemonNombre)  
})

// Botón para resetear 
resetBtn.addEventListener('click', () => {
divApp.innerHTML = " ";
}); 

//botón para avanzar
document.getElementById ('nextBtn').addEventListener('click', () => {
    traerPokemons();
    if (page > 0) {
    }
    page ++ 
});

//botón para retroceder 
document.getElementById ('prevBtn').addEventListener('click', () => {
    if (page > 0) {
        page --  
        traerPokemons();
    } else {
        page = 0;
    }
});


//función para conseguir los pokemons 
const traerPokemons = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
        if (!response.ok) {
            throw new Error(' Pokemon no encontrado')
        }
        const data = await response.json(); 
        console.log(data.results);
        pintarPokemons(data);

 }  catch (error) {
    console.error(error)
        }
    };
    
    traerPokemons();

//botón para pintar los Pokemons 
const pintarPokemons = (data) => {
    const dataResults = data.results;
    dataResults.forEach(element => {

        PokemonNombre = element.name;
        divApp.innerHTML += `<li>
           <p>Nombre: ${PokemonNombre}
           </p>
        </li>`
        
    });
};

