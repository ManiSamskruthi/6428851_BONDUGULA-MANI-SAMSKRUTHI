const userData = { name: "Alice", email: "alice@example.com", event: "Jazz Night" };

function sendRegistration(data) {
  fetch("https://mockapi.io/registrations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(response => {
      alert("Registration successful");
    })
    .catch(() => {
      alert("Registration failed");
    });
}
setTimeout(() => sendRegistration(userData), 2000);
