// JS Setup
console.log("Welcome to the Community Portal");
window.onload = () => alert("Page loaded!");

// Sample event data
const events = [
  { title: "Music Fest", date: "2025-08-20", type: "Music", seats: 25 },
  { title: "Tech Meetup", date: "2025-08-10", type: "Tech", seats: 0 },
  { title: "Art Workshop", date: "2025-09-15", type: "Workshop", seats: 12 }
];

// Render events
const eventCards = document.getElementById("eventCards");
events.forEach(event => {
  if (new Date(event.date) >= new Date() && event.seats > 0) {
    const card = document.createElement("div");
    card.className = "col-md-4 eventCard";
    card.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${event.title}</h5>
          <p>Date: ${event.date}</p>
          <p>Type: ${event.type}</p>
          <p>Available Seats: ${event.seats}</p>
          <button class="btn btn-primary" onclick="register('${event.title}')">Register</button>
        </div>
      </div>
    `;
    eventCards.appendChild(card);
  }
});

// Handle registration
function register(title) {
  alert(`You registered for ${title}`);
}

// Form submission
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  document.getElementById("formOutput").textContent = `Thank you, ${name}! Confirmation sent to ${email}.`;
});
