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
document.getElementById("btn").addEventListener("click", function() {


let h1 = parseFloat (document.getElementById("h1").value);
let h2 = parseFloat (document.getElementById("h2").value);
let h3 = parseFloat (document.getElementById("h3").value);
let h4 = parseFloat (document.getElementById("h4").value);
let h5 = parseFloat (document.getElementById("h5").value);
let h6 = parseFloat (document.getElementById("h6").value);
let h7 = parseFloat (document.getElementById("h7").value);
let h8 = parseFloat (document.getElementById("h8").value);
let h9 = parseFloat (document.getElementById("h9").value);
let h10 = parseFloat (document.getElementById("h10").value);
let h11 = parseFloat (document.getElementById("h11").value);
let h12 = parseFloat (document.getElementById("h12").value);
let h13 = parseFloat (document.getElementById("h13").value);
let h14 = parseFloat (document.getElementById("h14").value);
let h15 = parseFloat (document.getElementById("h15").value);
let h16 = parseFloat (document.getElementById("h16").value);
let h17 = parseFloat (document.getElementById("h17").value);
let h18 = parseFloat (document.getElementById("h18").value);

let OUT = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
const outElement = document.getElementById("outScore");
outElement.textContent = OUT;

let IN = h10 + h11 + h12 + h13 + h14 + h15 + h16 + h17 + h18;
const inElement = document.getElementById("inScore");
inElement.textContent = IN;

let TOTAL = h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9 + h10 + h11 + h12 + h13 + h14 + h15 + h16 + h17 + h18;
const totalElement = document.getElementById("totalScore");
totalElement.textContent = TOTAL;
});
 