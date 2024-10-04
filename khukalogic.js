document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight)) {
    document.getElementById("results").innerHTML =
      "Please enter a valid number";
    return; // Exit the function if invalid input
  }

  height = height / 100; // Convert height to meters

  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2); // Round BMI to 2 decimal places

  let condition;

  if (bmi < 18.6) {
    condition = "you are underweight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    condition = "you are healthy";
  } else if (bmi > 24.9) {
    condition = "you are obese"; // Correct spelling of "obese"
  }

  // Display the result
  document.getElementById(
    "results"
  ).innerHTML = `Your BMI is ${bmi}, and ${condition}.`;
});
