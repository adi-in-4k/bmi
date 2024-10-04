document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents form from submitting and refreshing the page

  // Get height and weight values
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight)) {
    document.getElementById("results").innerHTML =
      "<p>Please enter valid numbers for height and weight.</p>";
    return;
  }

  // Convert height from cm to meters
  height = height / 100;

  // Calculate BMI
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2); // Round BMI to 2 decimal places

  // Display the result
  let resultText = `Your BMI is ${bmi}. `;

  if (bmi < 18.6) {
    resultText += "You are underweight.";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    resultText += "You are in the normal range.";
  } else {
    resultText += "You are overweight.";
  }

  document.getElementById("results").innerHTML = `<p>${resultText}</p>`;
});
