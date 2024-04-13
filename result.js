document.addEventListener('DOMContentLoaded', function() {
  // Retrieve decision from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const decision = urlParams.get('decision');

  // Display the decision on the page
  document.getElementById('decision').textContent = decision;

  // Add background images based on the decision
  const body = document.querySelector('body');
  if (decision === "Go Ahead And Buy IT Responsibly") {
    body.style.backgroundImage = "url('cong.png')";
  } else if (decision === "Do NOT BUY IT") {
    body.style.backgroundImage = "url('sad-kitten-background.jpg')";
  } else if (decision === "Consult it with your handsome boyfriend") {
    body.style.backgroundImage = "url('boyfriend-background.jpg')";
  }
});