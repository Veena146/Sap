function handleSubmit(event) {
  event.preventDefault(); // stops page from reloading

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    alert("Name must contain only letters and spaces.");
    return false;
  }

  const emailField = document.getElementById("email");
  if (!emailField.checkValidity()) {
    alert("Please enter a valid email address.");
    return false;
  }

  document.getElementById("contactForm").style.display = "none";
  document.getElementById("thankYouMessage").style.display = "block";
  return false; // critical: prevents redirect
}
