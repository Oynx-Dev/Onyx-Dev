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

// Function to show CDN selection popup
function showCdnPopup() {
    // Create the popup element
    const popup = document.createElement('div');
    popup.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    popup.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
            <p class="text-lg font-semibold">Select an image source:</p>
            <button id="cdn1-btn" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                CDN 1 
            </button>
            <button id="cdn2-btn" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                CDN 2 
            </button>
            <p>If one is blocked then the images wont show, if they dont show then simply pick the other cdn.</p>
        </div>
    `;

    // Append the popup to the body
    document.body.appendChild(popup);

    // Add event listeners for buttons
    document.getElementById('cdn1-btn').addEventListener('click', () => {
        sessionStorage.setItem('selectedCdn', 'https://assets.zyph3r.com/');
        popup.remove();
        renderAllGames();
    });

    document.getElementById('cdn2-btn').addEventListener('click', () => {
        sessionStorage.setItem('selectedCdn', 'https://assets.onyxdev.me/');
        popup.remove();
        renderAllGames();
    });
}

// Modified renderGames function to use the selected CDN
function renderGames(games, container) {
    container.innerHTML = '';
    const selectedCdn = sessionStorage.getItem('selectedCdn') || 'https://assets.zyph3r.com/';
    
    games.forEach(game => {
        const gameLink = createGameLink(game, selectedCdn);
        container.appendChild(gameLink);
    });
}

// Call showCdnPopup when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showCdnPopup();
});

// Fetch and render games
async function fetchGames() {
    try {
        const response = await fetch('games.json');
        const games = await response.json();
        games.sort((a, b) => a.name.localeCompare(b.name));
        localStorage.setItem('games', JSON.stringify(games));
        renderGames(games, document.querySelector('.games-container'));
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchGames();


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
