const events = [
  { name: "Hackathon", date: "2025-07-10", seats: 0 },
  { name: "Music Fest", date: "2025-08-20", seats: 100 },
  { name: "Art Workshop", date: "2024-12-01", seats: 10 }
];

const today = new Date();

events.forEach(event => {
  const eventDate = new Date(event.date);
  if (eventDate < today) {
    console.log(`Skipping past event: ${event.name}`);
  } else if (event.seats <= 0) {
    console.log(`Skipping full event: ${event.name}`);
  } else {
    console.log(`Upcoming Event: ${event.name} with ${event.seats} seats`);
  }
});

function register(event) {
  try {
    if (event.seats <= 0) throw new Error("Event full");
    event.seats--;
    console.log(`Registered for ${event.name}, seats left: ${event.seats}`);
  } catch (err) {
    console.error(`Registration failed: ${err.message}`);
  }
}

register(events[1]); 
register(events[0]); 
