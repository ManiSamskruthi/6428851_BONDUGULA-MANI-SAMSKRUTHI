function greetEvent({ name = "Unnamed", date = "TBD" } = {}) {
  console.log(`Event: ${name} on ${date}`);
}

const originalEvents = [...eventList];
const filteredEvents = [...originalEvents].filter(({ name }) => name.includes("Music"));

greetEvent(filteredEvents[0]);
