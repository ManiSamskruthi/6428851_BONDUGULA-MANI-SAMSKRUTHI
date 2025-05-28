const container = document.querySelector("#events-container");

function createEventCard(event) {
  const card = document.createElement("div");
  card.className = "event-card";
  card.textContent = `${event.name} - ${event.date} (${event.seats} seats left)`;
  return card;
}

eventList.forEach(event => {
  const card = createEventCard(event);
  container.appendChild(card);
});
