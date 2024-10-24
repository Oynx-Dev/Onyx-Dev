async function fetchGames() {
    try {
        const response = await fetch('games.json');
        const games = await response.json();
        games.sort((a, b) => a.name.localeCompare(b.name));
        renderGames(games, document.querySelector('.games-container'));
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
        addToRecentlyPlayed(game);
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

const popularGamesContainer = document.querySelector('#popular-games');
const recentlyPlayedContainer = document.querySelector('#recently-played-games');

// Function to add a game to the "Recently Played" list and localStorage
function addToRecentlyPlayed(game) {
    let recentlyPlayedGames = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
    
    // Check if the game is already in the recently played list
    const isAlreadyPlayed = recentlyPlayedGames.some(playedGame => playedGame.name === game.name);
    
    if (!isAlreadyPlayed) {
        const gameWithTimestamp = { ...game, timestamp: Date.now() };
        recentlyPlayedGames.unshift(gameWithTimestamp); // Add game to the start of the list
        if (recentlyPlayedGames.length > 5) {
            recentlyPlayedGames.pop(); // Keep only 5 recent games
        }
    }

    // Save the updated list to localStorage
    localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayedGames));

    // Re-render the recently played games
    renderRecentlyPlayedGames();
}

// Function to render recently played games
function renderRecentlyPlayedGames() {
    let recentlyPlayedGames = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
    const twoDaysInMillis = 2 * 24 * 60 * 60 * 1000;
    const now = Date.now();

    // Filter out games that are older than 2 days
    recentlyPlayedGames = recentlyPlayedGames.filter(game => now - game.timestamp < twoDaysInMillis);

    // Save the filtered list back to localStorage
    localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayedGames));

    renderGames(recentlyPlayedGames, recentlyPlayedContainer);
}

// Fetch and render popular games
fetch('games.json')
    .then(response => response.json())
    .then(games => {
        renderGames(games, popularGamesContainer);
        renderRecentlyPlayedGames(); // Render recently played games on page load
    });
