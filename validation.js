// Define a more comprehensive and optimized regular expression for email validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Use modern DOM manipulation to access the email input field
const emailInput = document.getElementById('Email');

// Attach an event listener to the form submit button for email validation
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the email value from the input field
  const email = emailInput.value.trim();

  // Check if the email matches the regex pattern
  if (emailRegex.test(email)) {
    alert('Valid email address');
  } else {
    alert('Invalid email address');
  }
});
