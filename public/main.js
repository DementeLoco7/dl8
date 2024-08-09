document.addEventListener("DOMContentLoaded", function() {
    const ideaTextarea = document.getElementById("idea");
    const magicButton = document.getElementById("magic-button");
    const progressBarInner = document.querySelector(".progress-bar-inner");
    const strengthLabel = document.getElementById("strength-label");

    ideaTextarea.addEventListener("input", function() {
        const textLength = ideaTextarea.value.length;
        const progress = Math.min(100, (textLength / 100) * 100);
        progressBarInner.style.width = `${progress}%`;

        if (progress < 30) {
            strengthLabel.textContent = "Fuerza de la idea: Débil";
            progressBarInner.style.backgroundColor = "red";
        } else if (progress < 70) {
            strengthLabel.textContent = "Fuerza de la idea: Media";
            progressBarInner.style.backgroundColor = "orange";
        } else {
            strengthLabel.textContent = "Fuerza de la idea: Muy Buena";
            progressBarInner.style.backgroundColor = "green";
        }
    });

    magicButton.addEventListener("click", function() {
        alert("Función de varita mágica no implementada");
    });
});
