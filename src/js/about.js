document.getElementById('aboutBlankButton').addEventListener('click', function() {
    const newWindow = window.open('about:blank', '_blank');
    newWindow.document.write(`
        <iframe src="${window.location.href}" style="width:100%; height:100%; border: 1px solid black;"></iframe>
    `);
    window.close();
});