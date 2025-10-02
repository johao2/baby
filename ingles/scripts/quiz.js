function checkAnswer() {
  let answer = document.getElementById("answer").value.trim().toLowerCase();
  let feedback = document.getElementById("feedback");

  if (answer === "had studied") {
    feedback.innerHTML = "✅ Correcto. La forma correcta es: If I <b>had studied</b> harder, I would have passed the exam.";
    feedback.style.color = "green";
  } else {
    feedback.innerHTML = "❌ Incorrecto. Intenta otra vez.";
    feedback.style.color = "red";
  }
}
