const allEvents = [];

function addEvent(name, date, category) {
  allEvents.push({ name, date, category, seats: 50 });
}

function registerUser(event) {
  if (event.seats > 0) {
    event.seats--;
    console.log(`User registered for ${event.name}. Seats left: ${event.seats}`);
  } else {
    console.log(`${event.name} is full.`);
  }
}

function filterEventsByCategory(events, category, callback) {
  return callback(events.filter(event => event.category === category));
}

function registrationTracker(category) {
  let total = 0;
  return function() {
    total++;
    console.log(`Total registrations for ${category}: ${total}`);
  };
}

const trackMusic = registrationTracker("Music");

addEvent("Jazz Night", "2025-09-10", "Music");
addEvent("Coding Bootcamp", "2025-09-15", "Tech");

const musicEvents = filterEventsByCategory(allEvents, "Music", filtered => filtered);

console.log(musicEvents);

trackMusic(); 
trackMusic(); 
