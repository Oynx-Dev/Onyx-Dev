const titles = ["Onyx Dev.", "Freedom."];
let currentTitle = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenWords = 1000;

function type() {
    const titleElement = document.getElementById('main-title');
    const baseText = "Welcome to ";
    const currentWord = titles[currentTitle];

    if (!isDeleting) {
        titleElement.innerHTML = baseText + currentWord.substring(0, charIndex + 1) + '<span class="cursor"></span>';
        charIndex++;
    } else {
        titleElement.innerHTML = baseText + currentWord.substring(0, charIndex) + '<span class="cursor"></span>';
        charIndex--;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentTitle = (currentTitle + 1) % titles.length;
        setTimeout(type, typingSpeed);
        return;
    }

    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, typingSpeed);
});
