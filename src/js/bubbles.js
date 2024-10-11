const bubbleContainer = document.querySelector('.bubble-container');
const bubbleCount = 18; // Number of bubbles

for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    const size = Math.random() * 20 + 10; // Random size between 10px and 30px
    const leftPosition = Math.random() * 100; // Random position across the width
    const animationDuration = Math.random() * 4 + 3; // Random duration between 3s and 7s
    
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${leftPosition}%`;
    bubble.style.animationDuration = `${animationDuration}s`;
    
    bubbleContainer.appendChild(bubble);
}