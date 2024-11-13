async function fetchGames() {
    try {
        const response = await fetch('games.json');
        const games = await response.json();
        games.sort((a, b) => a.name.localeCompare(b.name));
        localStorage.setItem('games', JSON.stringify(games)); // Store games in localStorage
        renderGames(games, document.querySelector('.games-container'));
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('click', (event) => {
    const iframe = document.querySelector('iframe');
    if (iframe && !iframe.contains(event.target)) {
        iframe.focus();
    }   
});


function createGameLink(game, gamecdn) {
    const link = document.createElement('a');
    link.className = 'g';
    link.href = "play.html";
    link.addEventListener('click', () => {
        localStorage.setItem('game', JSON.stringify(game));
        if (typeof addToRecentlyPlayed === 'function') {
            addToRecentlyPlayed(game);
        }
    });

    const img = document.createElement('img');
    img.src = `${gamecdn}${game.root}/${game.img}`;

    const h3 = document.createElement('h3');
    h3.textContent = game.name;

    link.appendChild(img);
    link.appendChild(h3);

    return link;
}

function renderGames(games, container) {
    container.innerHTML = '';
    const gamecdn = "https://assets.zyph3r.com/";
    const additionalGamecdn = "https://assets.onyxdev.me/";

    games.forEach(game => {
        const gameLink = createGameLink(game, gamecdn);
        container.appendChild(gameLink);
    });
}

fetchGames();

const search = document.getElementById('searchbar');
search.addEventListener("input", () => {
    search.value = search.value.toLowerCase();
    const games = document.getElementsByClassName('g');
    Array.from(games).forEach(game => {
        const gameName = game.querySelector('h3').textContent.toLowerCase();
        game.style.display = gameName.includes(search.value) ? "inline-block" : "none";
    });
});

function renderAllGames() {
    const games = JSON.parse(localStorage.getItem('games')) || [];
    const container = document.querySelector('.games-container');
    renderGames(games, container);
}
