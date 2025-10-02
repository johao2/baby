// scripts/leccion_1_script.js

function checkAnswer() {
    // La respuesta correcta, aunque con el código completo se haría una verificación más compleja
    const correctAnswerStart = "Not only did the company face";
    const feedbackDiv = document.getElementById('feedback');
    const userText = document.getElementById('writing-practice').value.trim();

    if (userText === '') {
        feedbackDiv.textContent = "¡Escribe tu respuesta primero! Necesitamos ver esa inversión.";
        feedbackDiv.style.color = 'red';
        return;
    }

    // Usaremos un sistema de pistas simple, ya que la corrección real será manual.
    // Esto es para que ella sepa que está yendo en la dirección correcta.
    feedbackDiv.textContent = '🧠 PISTA CLAVE: Tu frase debe empezar con una estructura invertida. En este caso, la inversión sería: "Not only did the company face severe criticism, but..."';
    feedbackDiv.style.color = '#007acc';
}