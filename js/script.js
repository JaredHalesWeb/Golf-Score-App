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

let h1P2 = parseFloat (document.getElementById("h1P2").value);
let h2P2 = parseFloat (document.getElementById("h2P2").value);
let h3P2 = parseFloat (document.getElementById("h3P2").value);
let h4P2 = parseFloat (document.getElementById("h4P2").value);
let h5P2 = parseFloat (document.getElementById("h5P2").value);
let h6P2 = parseFloat (document.getElementById("h6P2").value);
let h7P2 = parseFloat (document.getElementById("h7P2").value);
let h8P2 = parseFloat (document.getElementById("h8P2").value);
let h9P2 = parseFloat (document.getElementById("h9P2").value);
let h10P2 = parseFloat (document.getElementById("h10P2").value);
let h11P2 = parseFloat (document.getElementById("h11P2").value);
let h12P2 = parseFloat (document.getElementById("h12P2").value);
let h13P2 = parseFloat (document.getElementById("h13P2").value);
let h14P2 = parseFloat (document.getElementById("h14P2").value);
let h15P2 = parseFloat (document.getElementById("h15P2").value);
let h16P2 = parseFloat (document.getElementById("h16P2").value);
let h17P2 = parseFloat (document.getElementById("h17P2").value);
let h18P2 = parseFloat (document.getElementById("h18P2").value);

let OUTP2 = h1P2 + h2P2 + h3P2 + h4P2 + h5P2 + h6P2 + h7P2 + h8P2 + h9P2;
const outElementP2 = document.getElementById("outScoreP2");
outElementP2.textContent = OUTP2;

let INP2 = h10P2 + h11P2 + h12P2 + h13P2 + h14P2 + h15P2 + h16P2 + h17P2 + h18P2;
const inElementP2 = document.getElementById("inScoreP2");
inElementP2.textContent = INP2;

let TOTALP2 = h1P2 + h2P2 + h3P2 + h4P2 + h5P2 + h6P2 + h7P2 + h8P2 + h9P2 + h10P2 + h11P2 + h12P2 + h13P2 + h14P2 + h15P2 + h16P2 + h17P2 + h18P2;
const totalElementP2 = document.getElementById("totalScoreP2");
totalElementP2.textContent = TOTALP2;

let h1P3 = parseFloat (document.getElementById("h1P3").value);
let h2P3 = parseFloat (document.getElementById("h2P3").value);
let h3P3 = parseFloat (document.getElementById("h3P3").value);
let h4P3 = parseFloat (document.getElementById("h4P3").value);
let h5P3 = parseFloat (document.getElementById("h5P3").value);
let h6P3 = parseFloat (document.getElementById("h6P3").value);
let h7P3 = parseFloat (document.getElementById("h7P3").value);
let h8P3 = parseFloat (document.getElementById("h8P3").value);
let h9P3 = parseFloat (document.getElementById("h9P3").value);
let h10P3 = parseFloat (document.getElementById("h10P3").value);
let h11P3 = parseFloat (document.getElementById("h11P3").value);
let h12P3 = parseFloat (document.getElementById("h12P3").value);
let h13P3 = parseFloat (document.getElementById("h13P3").value);
let h14P3 = parseFloat (document.getElementById("h14P3").value);
let h15P3 = parseFloat (document.getElementById("h15P3").value);
let h16P3 = parseFloat (document.getElementById("h16P3").value);
let h17P3 = parseFloat (document.getElementById("h17P3").value);
let h18P3 = parseFloat (document.getElementById("h18P3").value);

let OUTP3 = h1P3 + h2P3 + h3P3 + h4P3 + h5P3 + h6P3 + h7P3 + h8P3 + h9P3;
const outElementP3 = document.getElementById("outScoreP3");
outElementP3.textContent = OUTP3;

let INP3 = h10P3 + h11P3 + h12P3 + h13P3 + h14P3 + h15P3 + h16P3 + h17P3 + h18P3;
const inElementP3 = document.getElementById("inScoreP3");
inElementP3.textContent = INP3;

let TOTALP3 = h1P3 + h2P3 + h3P3 + h4P3 + h5P3 + h6P3 + h7P3 + h8P3 + h9P3 + h10P3 + h11P3 + h12P3 + h13P3 + h14P3 + h15P3 + h16P3 + h17P3 + h18P3;
const totalElementP3 = document.getElementById("totalScoreP3");
totalElementP3.textContent = TOTALP3;

let h1P4 = parseFloat (document.getElementById("h1P4").value);
let h2P4 = parseFloat (document.getElementById("h2P4").value);
let h3P4 = parseFloat (document.getElementById("h3P4").value);
let h4P4 = parseFloat (document.getElementById("h4P4").value);
let h5P4 = parseFloat (document.getElementById("h5P4").value);
let h6P4 = parseFloat (document.getElementById("h6P4").value);
let h7P4 = parseFloat (document.getElementById("h7P4").value);
let h8P4 = parseFloat (document.getElementById("h8P4").value);
let h9P4 = parseFloat (document.getElementById("h9P4").value);
let h10P4 = parseFloat (document.getElementById("h10P4").value);
let h11P4 = parseFloat (document.getElementById("h11P4").value);
let h12P4 = parseFloat (document.getElementById("h12P4").value);
let h13P4 = parseFloat (document.getElementById("h13P4").value);
let h14P4 = parseFloat (document.getElementById("h14P4").value);
let h15P4 = parseFloat (document.getElementById("h15P4").value);
let h16P4 = parseFloat (document.getElementById("h16P4").value);
let h17P4 = parseFloat (document.getElementById("h17P4").value);
let h18P4 = parseFloat (document.getElementById("h18P4").value);

let OUTP4 = h1P4 + h2P4 + h3P4 + h4P4 + h5P4 + h6P4 + h7P4 + h8P4 + h9P4;
const outElementP4 = document.getElementById("outScoreP4");
outElementP4.textContent = OUTP4;

let INP4 = h10P4 + h11P4 + h12P4 + h13P4 + h14P4 + h15P4 + h16P4 + h17P4 + h18P4;
const inElementP4 = document.getElementById("inScoreP4");
inElementP4.textContent = INP4;

let TOTALP4 = h1P4 + h2P4 + h3P4 + h4P4 + h5P4 + h6P4 + h7P4 + h8P4 + h9P4 + h10P4 + h11P4 + h12P4 + h13P4 + h14P4 + h15P4 + h16P4 + h17P4 + h18P4;
const totalElementP4 = document.getElementById("totalScoreP4");
totalElementP4.textContent = TOTALP4;
});
document.getElementById('courseSelection').addEventListener('change', function() {
    const courseId = this.value;
    const apiURL = `https://exquisite-pastelito-9d4dd1.netlify.app/golfapi/course${courseId}.txt`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            displayCourseData(data);
        })
        .catch(error => console.error('Error fetching the golf course data:', error));
});

function displayCourseData(data) {
    const course = data.course;
    const holes = course.holes;
    const scorecardContainer = document.getElementById('scorecardContainer');

    let scorecardHTML = `
        <table id="scorecard">
            <thead>
                <tr>
                    <th>Hole</th>`;

    for (let i = 1; i <= holes.length; i++) {
        scorecardHTML += `<th>${i}</th>`;
    }

    scorecardHTML += `
                    <th>Out</th>
                    <th>In</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Yardage</td>`;
    
    holes.forEach(hole => {
        scorecardHTML += `<td>${hole.yardage}</td>`;
    });

    scorecardHTML += `<td></td><td></td><td></td></tr>
                <tr>
                    <td>Par</td>`;

    holes.forEach(hole => {
        scorecardHTML += `<td>${hole.par}</td>`;
    });

    scorecardHTML += `<td></td><td></td><td></td></tr>
                <tr>
                    <td>Handicap</td>`;

    holes.forEach(hole => {
        scorecardHTML += `<td>${hole.handicap}</td>`;
    });

    scorecardHTML += `<td></td><td></td><td></td></tr>
                <tr>
                    <td>Player 1</td>`;
    
    for (let i = 1; i <= holes.length; i++) {
        scorecardHTML += `<td><input type="number" class="score" data-hole="${i}"></td>`;
    }

    scorecardHTML += `<td id="outScore1">0</td><td id="inScore1">0</td><td id="totalScore1">0</td></tr>
            </tbody>
        </table>`;

    scorecardContainer.innerHTML = scorecardHTML;

    // Add event listeners for score inputs to update scores
    document.querySelectorAll('input.score').forEach(input => {
        input.addEventListener('input', updateScores);
    });
}

function updateScores() {
    const playerRows = document.querySelectorAll('#scorecard tbody tr');
    playerRows.forEach((row, index) => {
        if (index === 0) return; // Skip Yardage, Par, and Handicap rows

        let outScore = 0;
        let inScore = 0;

        row.querySelectorAll('input.score').forEach((input, i) => {
            const score = parseInt(input.value) || 0;
            if (i < 9) outScore += score;
            else inScore += score;
        });

        const totalScore = outScore + inScore;
        row.querySelector('#outScore1').innerText = outScore;
        row.querySelector('#inScore1').innerText = inScore;
        row.querySelector('#totalScore1').innerText = totalScore;
    });
}

document.getElementById('courseSelection').dispatchEvent(new Event('change')); // Initialize with the first course
