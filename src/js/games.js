async function fetchGames() {
    try {
        const response = await fetch('games.json');
        const games = await response.json();
        games.sort((a, b) => a.name.localeCompare(b.name));
        renderGames(games);
    } catch (error) {
        console.error('Error:', error);
    }
}

function createGameLink(game, gamecdn) {
    const link = document.createElement('a');
    link.className = 'g';
    link.href = "play.html";
    link.addEventListener('click', () => {
        localStorage.setItem('game', JSON.stringify(game));
    });

    const img = document.createElement('img');
    img.src = `${gamecdn}${game.root}/${game.img}`;

    const h3 = document.createElement('h3');
    h3.textContent = game.name;

    link.appendChild(img);
    link.appendChild(h3);

    return link;
}

function renderGames(games) {
    const container = document.querySelector('.games-container');
    container.innerHTML = '';
    const gamecdn = "https://assets.zyph3r.com/";

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