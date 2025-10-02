// scripts/quiz_basic_verbs.js

const basicQuizQuestions = [
    // Simple Present (Focus: 's' for 3rd person singular and 'do/does')
    { id: 1, prompt: "The committee usually (meet) ________ on Tuesdays.", answer: "meets", time: "Simple Present" },
    { id: 2, prompt: "The statistics (not/lie) ________; the data is clear.", answer: "do not lie", time: "Simple Present (Negative)" },
    { id: 3, prompt: "He always (avoid) ________ confrontation in the workplace.", answer: "avoids", time: "Simple Present" },
    { id: 4, prompt: "I (be) ________ confident in the team's ability.", answer: "am", time: "Simple Present (Verb To Be)" },
    
    // Simple Past (Focus: Irregular and Regular forms)
    { id: 5, prompt: "We (submit) ________ the final proposal last week.", answer: "submitted", time: "Simple Past (Regular)" },
    { id: 6, prompt: "They (take) ________ the necessary precautions before the test.", answer: "took", time: "Simple Past (Irregular)" },
    { id: 7, prompt: "I (not/think) ________ about the consequences until later.", answer: "did not think", time: "Simple Past (Negative)" },
    { id: 8, prompt: "She (spend) ________ all morning reviewing the document.", answer: "spent", time: "Simple Past (Irregular)" },
    
    // Present Continuous (Focus: am/is/are + -ing)
    { id: 9, prompt: "The local economy (grow) ________ faster than predicted this year.", answer: "is growing", time: "Present Continuous" },
    { id: 10, prompt: "I (expect) ________ a call from the head office shortly.", answer: "am expecting", time: "Present Continuous" },
    { id: 11, prompt: "They (not/use) ________ the old system anymore.", answer: "are not using", time: "Present Continuous (Negative)" },
    { id: 12, prompt: "We (plan) ________ to travel next summer.", answer: "are planning", time: "Present Continuous (Future Plan)" },

    // Present Perfect (Focus: have/has + Past Participle)
    { id: 13, prompt: "She (publish) ________ two research papers on this subject.", answer: "has published", time: "Present Perfect" },
    { id: 14, prompt: "The team (not/find) ________ a solution yet.", answer: "has not found", time: "Present Perfect (Irregular/Negative)" },
    { id: 15, prompt: "I (work) ________ here since the firm was established.", answer: "have worked", time: "Present Perfect" },
    { id: 16, prompt: "The system (be) ________ operational for six months.", answer: "has been", time: "Present Perfect (Verb To Be)" },

    // Past Continuous (Focus: was/were + -ing)
    { id: 17, prompt: "We (analyze) ________ the budget when the power failed.", answer: "were analyzing", time: "Past Continuous" },
    { id: 18, prompt: "He (not/sleep) ________ well before the critical meeting.", answer: "was not sleeping", time: "Past Continuous (Negative)" },
    { id: 19, prompt: "While the management (debate) ________, the market shifted.", answer: "was debating", time: "Past Continuous" },

    // Mixed/High-Value Check
    { id: 20, prompt: "The decision was (take) ________ to postpone the deadline. (Voz Pasiva, Participio)", answer: "taken", time: "Past Participle (Passive)" },
];

const basicQuizForm = document.getElementById('basic-verb-quiz-form');
const quizResultsDiv = document.getElementById('quiz-results');

// Función para renderizar el quiz
function renderBasicQuiz() {
    if (!basicQuizForm) return; // Salir si no estamos en la página correcta
    basicQuizQuestions.forEach((q, index) => {
        const questionBox = document.createElement('div');
        questionBox.className = 'question-box';
        questionBox.innerHTML = `
            <label for="bq${q.id}">
                ${index + 1}. ${q.prompt} 
                <span style="font-size: 0.85em; color: #555;">[Tiempo: ${q.time}]</span>
            </label>
            <input type="text" id="bq${q.id}" name="bq${q.id}" class="answer-input" required>
            <p id="feedback_bq${q.id}" class="feedback-msg"></p>
        `;
        basicQuizForm.appendChild(questionBox);
    });
}

// Función para verificar las respuestas y calcular la nota
function checkBasicQuiz() {
    let score = 0;
    const totalQuestions = basicQuizQuestions.length;

    basicQuizQuestions.forEach(q => {
        const inputElement = document.getElementById(`bq${q.id}`);
        const feedbackElement = document.getElementById(`feedback_bq${q.id}`);
        
        // Normaliza la respuesta (minúsculas, quita espacios extra)
        const userAnswer = inputElement.value.trim().toLowerCase().replace(/\s+/g, ' ');
        const correctAnswer = q.answer.toLowerCase().replace(/\s+/g, ' ');

        // Limpia el feedback anterior
        feedbackElement.className = 'feedback-msg';
        feedbackElement.textContent = '';
        inputElement.style.border = '1px solid #ccc';

        // Permite respuestas con y sin contracciones
        const contractedAnswer = correctAnswer.replace(/do not/, "don't").replace(/does not/, "doesn't").replace(/did not/, "didn't").replace(/are not/, "aren't").replace(/was not/, "wasn't").replace(/were not/, "weren't").replace(/have not/, "haven't").replace(/has not/, "hasn't");
        
        if (userAnswer === correctAnswer || userAnswer === contractedAnswer) {
            score++;
            feedbackElement.classList.add('correct');
            feedbackElement.textContent = '¡Correcto! ✅';
            inputElement.style.border = '2px solid green';
        } else {
            feedbackElement.classList.add('incorrect');
            feedbackElement.textContent = `Incorrecto. Respuesta: ${q.answer} (o contracción si aplica)`;
            inputElement.style.border = '2px solid red';
        }
    });

    // Calcula la nota (sobre 10)
    const grade = (score / totalQuestions) * 10;
    const percentage = (score / totalQuestions) * 100;

    // Genera el mensaje de retroalimentación
    let message = '';
    if (grade >= 9.5) {
        message = '¡Precisión impecable! Tiempos básicos dominados. Pasa a Gramática Avanzada.';
        quizResultsDiv.style.borderColor = '#007acc';
    } else if (grade >= 8) {
        message = '¡Muy bien! Estás cerca de la perfección. Revisa los tiempos en los que fallaste (el Participio Pasado suele ser el error).';
        quizResultsDiv.style.borderColor = 'orange';
    } else {
        message = 'Necesitas reforzar los Tiempos Perfectos y el Pasado Simple. ¡La precisión es clave!';
        quizResultsDiv.style.borderColor = 'red';
    }

    // Muestra los resultados finales
    quizResultsDiv.innerHTML = `
        <h3>RESULTADOS DE TIEMPOS BÁSICOS</h3>
        <p>Aciertos: ${score} de ${totalQuestions}</p>
        <p>Porcentaje: ${percentage.toFixed(0)}%</p>
        <p><strong>Nota (sobre 10): ${grade.toFixed(1)}</strong></p>
        <p style="margin-top: 15px; font-style: italic;">${message}</p>
    `;
    quizResultsDiv.style.display = 'block';

    // Desplaza la vista a los resultados
    quizResultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// Inicializa el quiz cuando la página carga
document.addEventListener('DOMContentLoaded', renderBasicQuiz);