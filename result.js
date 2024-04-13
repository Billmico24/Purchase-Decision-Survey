document.addEventListener('DOMContentLoaded', function() {
  // Retrieve decision from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const decision = urlParams.get('decision');

  // Display the decision on the page
  document.getElementById('decision').textContent = decision;

  // Add background images based on the decision
  const body = document.querySelector('body');
  if (decision === "Buy it nana, You deserve it <3") {
    body.style.backgroundImage = "url('cong.png')";
  } else if (decision === "Tsk, Tsk, tsk, save sa nana") {
    body.style.backgroundImage = "url('saddog.png')";
  } else if (decision === "Do the survey again or Consult it with your handsome boyfriend") {
    body.style.backgroundImage = "url('Mina.jpeg')";
  }
});