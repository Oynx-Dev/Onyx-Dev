document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('h1');
    const underline = document.querySelector('.underline');

    let isHighlighted = false;

    function highlightTitle() {
        title.style.color = 'white';
        title.style.backgroundColor = '#4f46e5';
        underline.style.color = '#4f46e5';
        isHighlighted = true;
    }

    function resetTitle() {
        title.style.color = 'transparent';
        title.style.backgroundColor = 'transparent';
        underline.style.color = 'white';
        isHighlighted = false;
    }

    title.addEventListener('mouseover', highlightTitle);
    title.addEventListener('mouseout', resetTitle);
});
