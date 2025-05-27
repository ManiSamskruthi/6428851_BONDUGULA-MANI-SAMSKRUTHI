const eventName = "Tech Meetup";
const eventDate = "2025-06-15";
let seatsAvailable = 50;

console.log(`Event: ${eventName} on ${eventDate}, Seats left: ${seatsAvailable}`);

function registerSeat() {
  if (seatsAvailable > 0) {
    seatsAvailable--;
    console.log(`Registration successful. Seats left: ${seatsAvailable}`);
  } else {
    console.log("No seats available");
  }
}

registerSeat();
