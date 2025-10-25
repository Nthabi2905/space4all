// script.js

async function loadEvents() {
  try {
    const response = await fetch("./data/events.json");
    const events = await response.json();

    const container = document.getElementById("events-container");
    container.innerHTML = "";

    events.forEach((event) => {
      const card = document.createElement("div");
      card.classList.add("event-card");
      card.innerHTML = `
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p>${event.description}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    document.getElementById("events-container").innerHTML =
      "⚠️ Failed to load events. Please try again later.";
    console.error("Error loading events:", error);
  }
}

loadEvents();
