document.addEventListener("DOMContentLoaded", function() {
  const subtitles = [
    "idk what to put here",
    "Zammy is pretty cool",
    "did u know we have a discord server?",
  ];
  
  // Select a random subtitle
  const randomIndex = Math.floor(Math.random() * subtitles.length);
  const subtitleElement = document.getElementById("subtitle");
  
  // Set the initial subtitle to a random one
  subtitleElement.textContent = subtitles[randomIndex];
});
