//alert("robotics js is working"


// Fetch data from API endpoint
fetch('http://localhost:3000/robotics-club')
  .then(response => response.json())
  .then(data => {
    // Assuming 'data' is your API response array
    const eventsData = data.map(event => ({
      name: event.name_of_events,
      date: new Date(event.Date_of_event_start).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
      venue: event.Venue,
      objective: event.Objective
    }));

    // Populate table rows
    const tableBody = document.getElementById('events-data');
    eventsData.forEach(event => {
      const row = document.createElement('tr');
      const imageUrl = `../../../../backend/club_images/${event.name}_club.jpeg`; // Adjust the URL structure as per your backend setup

      row.innerHTML = `
        <td><h1>${event.name}</h1></td>
        <td>${event.date}</td>
        <td>${event.venue}</td>
        <td>
          <p>${event.objective}</p>
          <img  class="dynamic_image" src="${imageUrl}" alt="${event.name} Image">
        </td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
