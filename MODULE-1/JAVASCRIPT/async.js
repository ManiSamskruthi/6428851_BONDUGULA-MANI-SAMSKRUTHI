function fetchEvents() {
  return fetch("https://mockapi.io/events")
    .then(res => res.json())
    .then(data => {
      console.log("Fetched events", data);
    })
    .catch(err => console.error(err));
}

async function loadEvents() {
  try {
    document.querySelector("#spinner").style.display = "block";
    const res = await fetch("https://mockapi.io/events");
    const events = await res.json();
    console.log(events);
  } catch (e) {
    console.error(e);
  } finally {
    document.querySelector("#spinner").style.display = "none";
  }
}
