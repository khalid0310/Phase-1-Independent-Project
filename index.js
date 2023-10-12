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
        }}
        const detailsElement = document.createElement('div');
        detailsElement.classList.add('pokemon-details');
        detailsElement.style.display = 'none'; // Initially hidden
        detailsElement.innerHTML = `
            <p>Type: ${data.types[0].type.name}</p>
            <p>Height: ${data.height / 10} m</p>
            <p>Weight: ${data.weight / 10} kg</p>
        `;

        image.addEventListener('click', function () {
            if (detailsElement.style.display === 'block') {
                detailsElement.style.display = 'none';
            } else {
                detailsElement.style.display = 'block';
            }
        });
        