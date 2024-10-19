let game = localStorage.getItem("game");
if (game) {
    game = JSON.parse(game);
    const gamecdn = "https://assets.zyph3r.com/";
    const gameUrl = `${gamecdn}${game.root}/${game.file}`;

    const iframe = document.querySelector("#game");
    iframe.src = gameUrl;
    iframe.onload = () => {
        iframe.style.display = "block";
    };
} else {
    console.error('No game found.');
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