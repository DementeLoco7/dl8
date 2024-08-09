document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = "/guiones";
});

document.getElementById('refineButton').addEventListener('click', function() {
    const idea = document.getElementById('idea').value;
    if (idea.length > 20) {
        document.querySelector('.IdeaStrength_progressBar__g7LLL').style.width = '100%';
        document.getElementById('ideaStrength').textContent = 'Muy Buena';
    } else {
        document.querySelector('.IdeaStrength_progressBar__g7LLL').style.width = '30%';
        document.getElementById('ideaStrength').textContent = 'Débil';
    }
});
