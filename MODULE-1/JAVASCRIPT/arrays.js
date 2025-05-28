const eventList = [];

eventList.push(new Event("Music Festival", "2025-07-20", 100));
eventList.push(new Event("Cooking Class", "2025-08-10", 30));

const musicEvents = eventList.filter(e => e.name.toLowerCase().includes("music"));

const displayCards = eventList.map(e => `Event: ${e.name} on ${e.date}`);

console.log(musicEvents);
console.log(displayCards);
