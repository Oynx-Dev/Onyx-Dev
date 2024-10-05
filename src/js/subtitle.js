document.addEventListener("DOMContentLoaded", function() {
  const subtitles = [
    "Do you think in memes?",
    "404: Joke not found.",
    "I am Groot.",
    "To infinity and beyond!",
    "Did someone say pizza?",
    "Turn it off and on again.",
    "Ctrl + Alt + Del your problems!",
    "Press F to pay respects.",
    "Does pineapple belong on pizza?",
    "Uninstalling the internet... please wait.",
    "Are we there yet?",
    "You cant handle the truth!",
    "Yeet or be yeeted!",
    "I'm in your walls...",
    "Go touch grass!",
    "Wanna build a snowman?",
    "Got any cheese?",
    "Did you bring a towel?",
    "Luke, I am your father.",
    "In case of fire, panic!",
    "Don't trust atoms, they make up everything.",
    "No, you cant Ctrl+Z life.",
    "You just lost the game!",
    "Pikachu, I choose you!",
    "Im feeling lucky!",
    "Youre breathtaking!",
    "Insert epic sax music.",
    "Im fluent in emoji.",
    "Expecto Patronum!",
    "If the shoe fits, get another one!",
    "Game over, man!",
    "One does not simply scroll past.",
    "Resistance is futile!",
    "Dont feed the trolls!",
    "You've met with a terrible fate, haven't you?",
    "Is mayonnaise an instrument?",
    "This is fine.",
    "Are you winning, son?",
    "Keep calm and press start.",
    "Spaghetti code for life!",
    "404 brain cells not found.",
    "Stay hydrated!",
    "Error: Reality not found.",
    "Who you gonna call? Ghostbusters!",
    "Talk to the hand.",
    "May the Force be with you.",
    "I'm Batman.",
    "Houston, we have a problem.",
    "Time to take out the trash...literally!",
    "Don't forget to save your game!"
  ];
  
  // Select a random subtitle
  const randomIndex = Math.floor(Math.random() * subtitles.length);
  const subtitleElement = document.getElementById("subtitle");
  
  // Set the initial subtitle to a random one
  subtitleElement.textContent = subtitles[randomIndex];
});
