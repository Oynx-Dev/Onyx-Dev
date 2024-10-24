document.getElementById('aboutBlankButton').addEventListener('click', function() {
    const newWindow = window.open('about:blank', '_blank');
    newWindow.document.write(document.documentElement.outerHTML);
    window.location.href = 'about:blank';
});