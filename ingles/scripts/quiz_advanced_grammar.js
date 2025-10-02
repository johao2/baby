// ... (Arrays de Inversion, Conditional, Clause, y PrecisionVerb ya existentes) ...

// --- NUEVO: Preguntas para Lección 2.1: Colocaciones ---
const collocationQuestions = [
    { id: 'col1', prompt: "The decision will have a **profound** ________ on the company.", answer: "effect", topic: "Adj + Noun" },
    { id: 'col2', prompt: "The leader needs to **make** a ________ decision now.", answer: "crucial", topic: "Adj + Noun / Verb + Adj + Noun" },
    { id: 'col3', prompt: "The data was ________ **analyzed** by the research team.", answer: "thoroughly", topic: "Adv + Verb" },
    { id: 'col4', prompt: "We must **put** ________ an argument for budget cuts.", answer: "forward", topic: "Phrasal Verb (Formal)" },
    { id: 'col5', prompt: "It is ________ **important** that we meet the deadline.", answer: "vitally", topic: "Adv + Adj" },
    { id: 'col6', prompt: "The company must **address** the ________ demand from clients.", answer: "growing", topic: "Verb + Adj + Noun" },
    { id: 'col7', prompt: "He ________ a strong **commitment** to the project.", answer: "made", topic: "Verb + Noun" },
    { id: 'col8', prompt: "They chose to **raise** a ________ about the poor service.", answer: "complaint", topic: "Verb + Noun" },
    { id: 'col9', prompt: "The economy suffered a ________ **blow** after the crisis.", answer: "severe", topic: "Adj + Noun" },
    { id: 'col10', prompt: "I always try to **keep** my ________ when faced with adversity.", answer: "temper", topic: "Verb + Noun (Idiomatic)" },
    { id: 'col11', prompt: "The firm needs to **conduct** a thorough ________.", answer: "survey", topic: "Verb + Noun" },
    { id: 'col12', prompt: "The manager has to **deal** with a ________ issue.", answer: "burning", topic: "Adj + Noun" },
    { id: 'col13', prompt: "The product was ________ **successful** in the European market.", answer: "highly", topic: "Adv + Adj" },
    { id: 'col14', prompt: "The organization decided to ________ its **ambitions** globally.", answer: "pursue", topic: "Verb + Noun" },
    { id: 'col15', prompt: "It is a ________ **misconception** that taxes are low here.", answer: "common", topic: "Adj + Noun" },
    { id: 'col16', prompt: "The team must ________ **reach** a consensus on the strategy.", answer: "ultimately", topic: "Adv + Verb" },
    { id: 'col17', prompt: "The two sides need to **strike** a ________.", answer: "deal", topic: "Verb + Noun" },
    { id: 'col18', prompt: "The plan was ________ **rejected** by the council.", answer: "flatly", topic: "Adv + Verb" },
    { id: 'col19', prompt: "The report offers a ________ **analysis** of the situation.", answer: "detailed", topic: "Adj + Noun" },
    { id: 'col20', prompt: "The findings ________ **light** on the effectiveness of the process.", answer: "shed", topic: "Verb + Noun (Idiomatic)" },
];

// ... (El resto del código JavaScript para setupQuiz permanece igual, pero la lista de DOMContentLoaded debe ser actualizada) ...
// scripts/quiz_advanced_grammar.js

// --- Preguntas para Lección 1.1: Inversión ---
const inversionQuestions = [
    { id: 'inv1', type: 'fill', prompt: "Never ________ (I/see) such a compelling report.", answer: "have I seen", topic: "Inversion con Never" },
    { id: 'inv2', type: 'fill', prompt: "Under no circumstances ________ (the committee/accept) the proposal.", answer: "will the committee accept", topic: "Inversion con Under no circumstances" },
    { id: 'inv3', type: 'fill', prompt: "Had ________ (we/know) the risks, we would have acted differently.", answer: "we known", topic: "Conditional Invertido" },
    { id: 'inv4', type: 'fill', prompt: "Not only ________ (the government/implement) new rules, but it also cut taxes.", answer: "did the government implement", topic: "Inversion con Not only" },
    { id: 'inv5', type: 'fill', prompt: "Only when the evidence was presented ________ (the judge/make) a decision.", answer: "did the judge make", topic: "Inversion con Only when" },
];

// --- Preguntas para Lección 1.2: Condicionales Mixtos/Subjuntivo ---
const conditionalQuestions = [
    { id: 'con1', type: 'fill', prompt: "If I ________ (not/miss) the train, I would be at the office now. (Mixed Conditional)", answer: "hadn't missed", topic: "Condicional Mixto" },
    { id: 'con2', type: 'fill', prompt: "I wish I ________ (study) harder when I was young. (Past Regret)", answer: "had studied", topic: "Wish (Pasado Perfecto)" },
    { id: 'con3', type: 'fill', prompt: "I would suggest that the client ________ (receive) a full refund. (Subjunctive Formal)", answer: "receive", topic: "Subjuntivo Formal" },
    { id: 'con4', type: 'fill', prompt: "If he ________ (be) more disciplined, he would have graduated already. (Mixed Conditional)", answer: "were", topic: "Condicional 2 (Wishful thinking)" },
    { id: 'con5', type: 'fill', prompt: "The law requires that the company ________ (disclose) its financial records.", answer: "disclose", topic: "Subjuntivo Formal" },
];

// --- Preguntas para Lección 1.3: Cláusulas de Participio ---
const clauseQuestions = [
    { id: 'cla1', type: 'fill', prompt: "The report, ________ (publish) last year, highlighted several issues. (Reduce la Cláusula Relativa)", answer: "published", topic: "Cláusula de Participio (Pasado)" },
    { id: 'cla2', type: 'fill', prompt: "The students ________ (work) on their final thesis are excused. (Reduce la Cláusula Relativa)", answer: "working", topic: "Cláusula de Participio (Presente)" },
    { id: 'cla3', type: 'fill', prompt: "The company, ________ (found) in 1990, remains a leader. (Reduce la Cláusula Relativa)", answer: "founded", topic: "Cláusula de Participio (Pasado)" },
    { id: 'cla4', type: 'fill', prompt: "The policies ________ (affect) the workers were criticized. (Reduce la Cláusula Relativa)", answer: "affecting", topic: "Cláusula de Participio (Presente)" },
    { id: 'cla5', type: 'fill', prompt: "The issue, ________ (discuss) at length, remains unresolved. (Reduce la Cláusula Relativa)", answer: "discussed", topic: "Cláusula de Participio (Pasado)" },
];

// --- Preguntas para Lección 3.1: Verbos de Precisión (Irregulares/Regulares) ---
const precisionVerbQuestions = [
    { id: 'vrb1', prompt: "The document was (write) ________ under pressure.", answer: "written", topic: "Voz Pasiva (Participio)" },
    { id: 'vrb2', prompt: "We have (go) ________ through all the data.", answer: "gone", topic: "Presente Perfecto (Participio)" },
    { id: 'vrb3', prompt: "She (break) ________ the record last season. (Past Simple)", answer: "broke", topic: "Pasado Simple (Irregular)" },
    { id: 'vrb4', prompt: "The budget has (grow) ________ significantly.", answer: "grown", topic: "Presente Perfecto (Participio)" },
    { id: 'vrb5', prompt: "He (tell) ________ us the truth yesterday. (Past Simple)", answer: "told", topic: "Pasado Simple (Irregular)" },
    { id: 'vrb6', prompt: "The cost has (rise) ________ dramatically.", answer: "risen", topic: "Presente Perfecto (Participio)" },
    { id: 'vrb7', prompt: "The team (meet) ________ the deadline. (Past Simple)", answer: "met", topic: "Pasado Simple (Irregular)" },
    { id: 'vrb8', prompt: "I (not/see) ________ him since the meeting.", answer: "haven't seen", topic: "Presente Perfecto (Contracción)" },
    { id: 'vrb9', prompt: "The law was (draft) ________ two years ago.", answer: "drafted", topic: "Voz Pasiva (Regular)" },
    { id: 'vrb10', prompt: "They (lead) ________ the project for a decade. (Past Simple)", answer: "led", topic: "Pasado Simple (Irregular)" },
];


// --- Lógica Genérica para configurar y chequear cualquier quiz ---
function setupQuiz(quizName, questions) {
    const form = document.getElementById(quizName + '-form');
    const resultsDiv = document.getElementById(quizName + '-results');
    
    if (!form || !resultsDiv) return;

    // 1. Renderizar preguntas
    questions.forEach((q, index) => {
        const questionBox = document.createElement('div');
        questionBox.className = 'question-box';
        questionBox.innerHTML = `
            <label for="${q.id}">
                ${index + 1}. ${q.prompt} 
                <span style="font-size: 0.85em; color: #555;">[Concepto: ${q.topic}]</span>
            </label>
            <input type="text" id="${q.id}" name="${q.id}" class="answer-input" required>
            <p id="feedback_${q.id}" class="feedback-msg"></p>
        `;
        form.appendChild(questionBox);
    });
    
    // 2. Definir función de chequeo
    window['check' + quizName.charAt(0).toUpperCase() + quizName.slice(1) + 'Quiz'] = function() {
        let score = 0;
        const totalQuestions = questions.length;
        
        questions.forEach(q => {
            const inputElement = document.getElementById(q.id);
            const feedbackElement = document.getElementById(`feedback_${q.id}`);
            
            // Permite 'had not' o 'hadn't'
            let correctAnswer = q.answer.toLowerCase().replace(/\s+/g, ' ');
            const contractedAnswer = correctAnswer.replace(/had not/, "hadn't");
            
            const userAnswer = inputElement.value.trim().toLowerCase().replace(/\s+/g, ' ');

            feedbackElement.className = 'feedback-msg';
            feedbackElement.textContent = '';
            inputElement.style.border = '1px solid #ccc';

            if (userAnswer === correctAnswer || userAnswer === contractedAnswer) {
                score++;
                feedbackElement.classList.add('correct');
                feedbackElement.textContent = '¡Correcto! ✅ Precisión CLB 9.';
                inputElement.style.border = '2px solid green';
            } else {
                feedbackElement.classList.add('incorrect');
                feedbackElement.textContent = `Incorrecto. Respuesta: ${q.answer}`;
                inputElement.style.border = '2px solid red';
            }
        });

        // Calcular nota
        const grade = (score / totalQuestions) * 10;
        const percentage = (score / totalQuestions) * 100;
        const concept = quizName.replace('-', ' ').toUpperCase();

        let message = '';
        if (grade === 10) {
            message = `¡PERFECCIÓN! 💯 Dominio total de ${concept}.`;
            resultsDiv.style.borderColor = '#007acc';
        } else if (grade >= 7) {
            message = '¡Buen trabajo! Estás aplicando los conceptos. Revisa los errores para la precisión total.';
            resultsDiv.style.borderColor = 'orange';
        } else {
            message = `Necesitas repasar las reglas de ${concept} antes de volver a intentarlo.`;
            resultsDiv.style.borderColor = 'red';
        }

        resultsDiv.innerHTML = `
            <h3>RESULTADOS DEL QUIZ</h3>
            <p>Aciertos: ${score} de ${totalQuestions}</p>
            <p>Porcentaje: ${percentage.toFixed(0)}%</p>
            <p><strong>Nota (sobre 10): ${grade.toFixed(1)}</strong></p>
            <p style="margin-top: 15px; font-style: italic;">${message}</p>
        `;
        resultsDiv.style.display = 'block';
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    };
}

// Inicializar todos los quizzes en la página que los contenga
document.addEventListener('DOMContentLoaded', () => {
    // Lecciones de Gramática Avanzada (1.1, 1.2, 1.3)
    setupQuiz('inversion', inversionQuestions);
    setupQuiz('conditional', conditionalQuestions);
    setupQuiz('clause', clauseQuestions);
    
    // Lección de Verbos de Precisión (3.1)
    setupQuiz('precision-verbs', precisionVerbQuestions);
});