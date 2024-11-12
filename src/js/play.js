// Create a popup for CDN selection
const cdnPopup = document.createElement("div");
cdnPopup.innerHTML = `
    <div id="cdnPopup" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 1px solid black; z-index: 1000;">
        <p style="font-size: 18px;">Select a CDN to load the game:</p>
        <button id="primaryCdnBtn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style="font-size: 18px;">Primary CDN</button>
        <button id="fallbackCdnBtn" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" style="font-size: 18px;">Secondary CDN</button>
        <p style="font-size: 18px;">Choose which CDN you want to use! If one is blocked, simply use the other one!</p>
    </div>
`;
document.body.appendChild(cdnPopup);

const primaryCdnBtn = document.getElementById("primaryCdnBtn");
const fallbackCdnBtn = document.getElementById("fallbackCdnBtn");

primaryCdnBtn.addEventListener("click", () => {
    loadGame("https://assets.zyph3r.com/");
    cdnPopup.style.display = "none";
});

fallbackCdnBtn.addEventListener("click", () => {
    loadGame("https://assets.onyxdev.me/");
    cdnPopup.style.display = "none";
});

function loadGame(cdn) {
    let game = localStorage.getItem("game");
    if (game) {
        game = JSON.parse(game);
        const gameUrl = `${cdn}${game.root}/${game.file}`;

        const iframe = document.querySelector("#game");
        iframe.src = gameUrl;
        iframe.onload = () => {
            iframe.style.display = "block";
        };
        iframe.onerror = () => {
            // Fallback to the secondary CDN if the primary fails
            iframe.src = `${cdn === "https://assets.zyph3r.com/" ? "https://assets.onyxdev.me   " : "https://assets.zyph3r.com/"}${game.root}/${game.file}`;
        };
    } else {
        console.error('No game found.');
    }
}

// Fullscreen functionality
const fullscreenBtn = document.getElementById("fullscreenBtn");
const iframe = document.getElementById("game");

fullscreenBtn.addEventListener("click", () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        iframe.requestFullscreen();
    }
});

// Show or hide the fullscreen button based on fullscreen state
document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
        fullscreenBtn.textContent = "Exit Fullscreen"; // Change button text
        fullscreenBtn.classList.remove("hidden"); // Show the button
    } else {
        fullscreenBtn.textContent = "Fullscreen"; // Change button text back
        fullscreenBtn.classList.remove("hidden"); // Show the button
    }
});

// Hide the button initially
fullscreenBtn.classList.remove("hidden");