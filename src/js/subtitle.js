document.addEventListener("DOMContentLoaded", function() {
  const subtitles = [
    "idk what to put here",
    "Zammy is pretty cool",
    "did u know we have a discord server?",
    "Skipipipi",
    "Blahaj go spinny",
    "Deku from MHA is zesty",
    "Name=Yug is pro :)",
    "the owner  has kids in basement",
    "@NikoPikoPoo is not a pro piko poo",
    "Gen alpha sucks",
    "Rena: Subtitile I spelt this shi hella wrong anyways",
    "these subtitles are so random",
    "im running out of ideas",
    "vscode suggested these xd",
    "these are so random",
    "nice face",
    "smile your camera is being recorded",
    "Valorant is ying yang game and Fortnite is a good mæn’s game - another subtitle"
  ];
  
  // Select a random subtitle
  const randomIndex = Math.floor(Math.random() * subtitles.length);
  const subtitleElement = document.getElementById("subtitle");
  
  // Set the initial subtitle to a random one
  subtitleElement.textContent = subtitles[randomIndex];
});
