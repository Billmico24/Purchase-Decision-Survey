document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form data
    const formData = new FormData(event.target);
  
    // Initialize counters for each option
    let noCount = 0;
    let yesCount = 0;
  
    // Loop through each question and count selected options
    formData.forEach((value, key) => {
      if (value === 'No') {
        noCount++;
      } else if (value === 'Yes') {
        yesCount++;
      }
    });
  
    // Determine the decision based on the counts
    let decision;
    if (yesCount >= 8 && yesCount > noCount) {
      decision = "Buy it nana, You deserve it <3";
    } else if (noCount >= 8 && noCount > yesCount) {
      decision = "Tsk, Tsk, tsk, save sa nana";
    } else {
      decision = "Do the survey again or Consult it with your handsome boyfriend";
    }
  
    // Get the survey questions
    const questions = Array.from(formData.keys());
  
    // Redirect to the result page with the decision and questions as parameters
    window.location.href = `result.html?decision=${encodeURIComponent(decision)}&questions=${encodeURIComponent(JSON.stringify(questions))}`;
});
