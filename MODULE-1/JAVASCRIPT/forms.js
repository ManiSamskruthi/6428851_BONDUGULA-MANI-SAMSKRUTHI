const form = document.querySelector("#registrationForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { name, email, event } = form.elements;

  if (!name.value || !email.value) {
    alert("Please fill in all required fields.");
    return;
  }

  console.log(`User ${name.value} registered for event ${event.value}`);
});
