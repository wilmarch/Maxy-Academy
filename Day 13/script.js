function calculateStatus() {
  const name = document.getElementById("nameInput").value;
  const age = parseInt(document.getElementById("ageInput").value);
  const gradesInput = document.getElementById("gradesInput").value;

  // untuk verifikasi input
  if (!name || !age || !gradesInput) {
      alert("Silakan lengkapi semua input!");
      return; 
  }


  const grades = gradesInput.split(",").map(grade => parseInt(grade));

  // Menghitung rata-rata nilai
  const averageGrade = calculateAverage(grades);
  const status = getStatus(averageGrade);
  displayResult(name, age, averageGrade, status);
}

const calculateAverage = (grades) => {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return sum / grades.length;
};

//switch case hasil rata2 nilai
const getStatus = (averageGrade) => {
  let status;
  switch(true) {
      case (averageGrade >= 90):
          status = "Lulus dengan Pujian";
          break;
      case (averageGrade >= 70):
          status = "Lulus";
          break;
      default:
          status = "Tidak Lulus";
  }
  return status;
};

function displayResult(name, age, averageGrade, status) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
      <div class="card mt-3 card-result">
          <div class="card-body">
              <h5 class="card-title">Hasil Status</h5>
              <p class="card-text"><strong>Nama:</strong> ${name}</p>
              <p class="card-text"><strong>Usia:</strong> ${age}</p>
              <p class="card-text"><strong>Rata-rata Nilai:</strong> ${averageGrade.toFixed(2)}</p>
              <p class="card-text"><strong>Status:</strong> ${status}</p>
          </div>
      </div>
  `;
  resultDiv.style.display = "block"; 
}