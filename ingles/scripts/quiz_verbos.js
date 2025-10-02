// scripts/quiz_verbos.js

const quizQuestions = [
    // Preguntas 1-5: Irregulares Comunes (Participio Pasado)
    { id: 1, type: 'fill', prompt: "The novel was (write) ________ by a Canadian author.", answer: "written", form: "Participio Pasado" },
    { id: 2, type: 'fill', prompt: "They have never (see) ________ such a large house.", answer: "seen", form: "Participio Pasado" },
    { id: 3, type: 'fill', prompt: "We had (go) ________ to the bank before the accident.", answer: "gone", form: "Participio Pasado" },
    { id: 4, type: 'fill', prompt: "The decision was (make) ________ in the last meeting.", answer: "made", form: "Participio Pasado" },
    { id: 5, type: 'fill', prompt: "I haven't (forget) ________ the rule you taught me.", answer: "forgotten", form: "Participio Pasado" },
    
    // Preguntas 6-10: Irregulares Comunes (Pasado Simple)
    { id: 6, type: 'fill', prompt: "She (bring) ________ her passport last Tuesday.", answer: "brought", form: "Pasado Simple" },
    { id: 7, type: 'fill', prompt: "The company (begin) ________ operations in 2005.", answer: "began", form: "Pasado Simple" },
    { id: 8, type: 'fill', prompt: "They (build) ________ a new office complex last year.", answer: "built", form: "Pasado Simple" },
    { id: 9, type: 'fill', prompt: "I (know) ________ the answer, but I didn't say it.", answer: "knew", form: "Pasado Simple" },
    { id: 10, type: 'fill', prompt: "He (tell) ________ me about his trip to Banff.", answer: "told", form: "Pasado Simple" },

    // Preguntas 11-15: Regulares Comunes (Pasado/Participio)
    { id: 11, type: 'fill', prompt: "The government (publish) ________ the report yesterday.", answer: "published", form: "Pasado Simple (Regular)" },
    { id: 12, type: 'fill', prompt: "The results were (analyze) ________ by a senior team.", answer: "analyzed", form: "Participio Pasado (Regular)" },
    { id: 13, type: 'fill', prompt: "We had (study) ________ for hours before the test.", answer: "studied", form: "Participio Pasado (Regular)" },
    { id: 14, type: 'fill', prompt: "The manager (ask) ________ for the data immediately.", answer: "asked", form: "Pasado Simple (Regular)" },
    { id: 15, type: 'fill', prompt: "The committee has (approve) ________ the new budget.", answer: "approved", form: "Participio Pasado (Regular)" },

    // Preguntas 16-20: Irregulares C1/C2 (Pasado/Participio)
    { id: 16, type: 'fill', prompt: "The documents were (keep) ________ in a safe location.", answer: "kept", form: "Participio Pasado" },
    { id: 17, type: 'fill', prompt: "She realized she had (pay) ________ too much for the service.", answer: "paid", form: "Participio Pasado" },
    { id: 18, type: 'fill', prompt: "He (deal) ________ with complex clients on a daily basis (Past Simple).", answer: "dealt", form: "Pasado Simple" },
    { id: 19, type: 'fill', prompt: "The house (cost) ________ nearly half a million dollars (Past Simple).", answer: "cost", form: "Pasado Simple" },
    { id: 20, type: 'fill', prompt: "The meeting was (hold) ________ in the downtown office.", answer: "held", form: "Participio Pasado" },

    // Preguntas 21-25: Enfoque CLB 9 (Confusiones y Ortografía)
    { id: 21, type: 'fill', prompt: "The company (grow) ________ significantly since 2020.", answer: "grown", form: "Participio Pasado" }, // Confusión Pasado Simple (grew) vs Particpio (grown)
    { id: 22, type: 'fill', prompt: "The problem was (solve) ________ quickly.", answer: "solved", form: "Participio Pasado (Regular)" }, // Foco en el -ed
    { id: 23, type: 'fill', prompt: "The presentation has (take) ________ over two hours.", answer: "taken", form: "Participio Pasado" },
    { id: 24, type: 'fill', prompt: "The team (meet) ________ the deadline successfully (Past Simple).", answer: "met", form: "Pasado Simple" },
    { id: 25, type: 'fill', prompt: "They had (swim) ________ across the lake before sunrise.", answer: "swum", form: "Participio Pasado" }, // Foco en el cambio de vocal
];

const quizForm = document.getElementById('verb-quiz-form');
const resultsDiv = document.getElementById('results');

// Función para renderizar el quiz en el HTML
function renderQuiz() {
    quizQuestions.forEach((q, index) => {
        const questionBox = document.createElement('div');
        questionBox.className = 'question-box';
        questionBox.innerHTML = `
            <label for="q${q.id}">
                ${index + 1}. ${q.prompt} 
                <span style="font-size: 0.9em; color: #555;">[Forma requerida: ${q.form}]</span>
            </label>
            <input type="text" id="q${q.id}" name="q${q.id}" class="answer-input" required>
            <p id="feedback${q.id}" class="feedback"></p>
        `;
        quizForm.appendChild(questionBox);
    });
}

// Función para verificar las respuestas y calcular la nota
function checkQuiz() {
    let score = 0;
    const totalQuestions = quizQuestions.length;

    quizQuestions.forEach(q => {
        const inputElement = document.getElementById(`q${q.id}`);
        const feedbackElement = document.getElementById(`feedback${q.id}`);
        
        // Normaliza la respuesta del usuario (quita espacios, convierte a minúsculas)
        const userAnswer = inputElement.value.trim().toLowerCase();
        const correctAnswer = q.answer.toLowerCase();

        // Limpia el feedback anterior
        feedbackElement.className = 'feedback';
        feedbackElement.textContent = '';
        inputElement.style.border = '1px solid #ccc'; // Resetea el borde

        if (userAnswer === correctAnswer) {
            score++;
            feedbackElement.classList.add('correct');
            feedbackElement.textContent = '¡Correcto! ✅';
            inputElement.style.border = '2px solid green';
        } else {
            feedbackElement.classList.add('incorrect');
            feedbackElement.textContent = `Incorrecto. La respuesta correcta es: ${q.answer}`;
            inputElement.style.border = '2px solid red';
        }
    });

    // Calcula la nota (sobre 10)
    const grade = (score / totalQuestions) * 10;
    const percentage = (score / totalQuestions) * 100;

    // Genera el mensaje de retroalimentación
    let message = '';
    if (grade >= 9) {
        message = '¡Impresionante! 🚀 Precisión de CLB 9/C2. ¡Sigue así!';
        resultsDiv.style.borderColor = '#007acc';
    } else if (grade >= 7.5) {
        message = '¡Muy bien! Estás muy cerca del dominio. Revisa los verbos irregulares con errores.';
        resultsDiv.style.borderColor = 'orange';
    } else {
        message = 'Necesitas reforzar la 3ª columna. ¡Vuelve a estudiar la tabla!';
        resultsDiv.style.borderColor = 'red';
    }

    // Muestra los resultados finales
    resultsDiv.innerHTML = `
        <h3>RESULTADOS FINALES</h3>
        <p>Aciertos: ${score} de ${totalQuestions}</p>
        <p>Porcentaje: ${percentage.toFixed(0)}%</p>
        <p><strong>Nota (sobre 10): ${grade.toFixed(1)}</strong></p>
        <p style="margin-top: 15px; font-style: italic;">${message}</p>
    `;
    resultsDiv.style.display = 'block';

    // Desplaza la vista a los resultados
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// Inicializa el quiz cuando la página carga
document.addEventListener('DOMContentLoaded', renderQuiz);