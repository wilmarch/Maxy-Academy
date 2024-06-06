document.getElementById('hitungBtn').addEventListener('click', function() {
    hitungLuas();
  });
  
  function hitungLuas() {
    // Mendapatkan nilai jari-jari dari input
    var radius = document.getElementById('radiusInput').value;
  
    // Menghitung luas lingkaran
    var luas = Math.PI * Math.pow(radius, 2);

    document.getElementById('result').innerHTML = '<p>Luas lingkaran dengan jari-jari ' + radius + ' adalah ' + luas.toFixed(2) + '</p>';
  }
  