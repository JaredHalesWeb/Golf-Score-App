const courseId = 11819; // Example for Thanksgiving Point Golf Course
const apiURL = `https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course${courseId}.txt`;

fetch(apiURL)
  .then(response => response.json())
  .then(data => {
      // Process and display the course data
  })
  .catch(error => console.error('Error fetching the golf course data:', error));

  fetch(apiURL)
  .then(response => response.json())
  .then(data => {
      const course = data.course;
      const holes = course.holes;
      const yardageRow = document.createElement('tr');
      const parRow = document.createElement('tr');
      const handicapRow = document.createElement('tr');

      holes.forEach((hole, index) => {
          // Create cells for yardage, par, and handicap
          const yardageCell = document.createElement('td');
          yardageCell.textContent = hole.yardage;
          yardageRow.appendChild(yardageCell);

          const parCell = document.createElement('td');
          parCell.textContent = hole.par;
          parRow.appendChild(parCell);

          const handicapCell = document.createElement('td');
          handicapCell.textContent = hole.handicap;
          handicapRow.appendChild(handicapCell);
      });

      // Add rows to the table
      document.getElementById('scorecard').appendChild(yardageRow);
      document.getElementById('scorecard').appendChild(parRow);
      document.getElementById('scorecard').appendChild(handicapRow);
  })
  .catch(error => console.error('Error fetching the golf course data:', error));
  
  document.querySelectorAll('input.score').forEach(input => {
    input.addEventListener('input', () => {
        // Calculate and update scores
    });
});

 