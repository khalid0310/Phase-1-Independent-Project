document.addEventListener('DOMContentLoaded', function () {
    const pokemonList = document.getElementById('pokemon-info');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
});
    // Function to fetch and display Pokémon details
    async function fetchAndDisplayPokemonDetails(name) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            const imageUrl = data.sprites.front_default;

            const listItem = document.createElement('div');
            listItem.classList.add('pokemon-item');
            const image = document.createElement('img');
            image.src = imageUrl;
            image.alt = name;
            image.classList.add('pokemon-image');

            const nameHeading = document.createElement('h2');
            nameHeading.textContent = name;
