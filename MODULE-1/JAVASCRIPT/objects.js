function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

const workshop = new Event("Workshop on Baking", "2025-06-01", 25);

console.log(workshop.checkAvailability()); 

console.log(Object.entries(workshop)); 
