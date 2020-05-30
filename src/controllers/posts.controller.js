import views from '../views/posts.html'

//haciendo una petición fetch a la API de pokemon

const getPokemons = async() => {
    const response = await fetch('https://api.pokemontcg.io/v1/cards');
    return await response.json();
};

export default async() => {
    // la vista espera un elemento html
    const divElement = document.createElement("div");
    divElement.innerHTML = views; // cargando todo el contenido

    const pokemonsElement = divElement.querySelector('#pokemons'); // en donde se va a guargar el contenido en el html 
    let totalCards = divElement.querySelector('#totalCards');
    const pokemons = await getPokemons(); // guardando la instancia en una constante 


    console.log(pokemons.cards.length); // imprimiendo los resultados de la petición
    totalCards.innerHTML = pokemons.cards.length;

    pokemons.cards.forEach(pokemon => {
        pokemonsElement.innerHTML += `
        <div class="card bg-dark ">
           <div style="padding: 30px">
           <img class="card-img-bottom bg-dark zoom " src="${pokemon.imageUrlHiRes}" style="width: 100%;" alt="Card image cap">
           </div>
            <div class="card-body">
                <h5 class="card-title bg-dark">${pokemon.name}</h5>
                <p class="card-text"><small class="text-muted"> Serie: ${pokemon.series}</small></p>
            </div>
        </div>
         `;
    });


    return divElement;

};