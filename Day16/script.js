//Toast button ke2
document.getElementById("liveToastBtn").addEventListener("click", function() {
  var liveToast = new bootstrap.Toast(document.getElementById('liveToast'));
  liveToast.show();
});

// variabel buat nyimpen gambar
var imageGallery = [];

// Button Notifikasi
document.getElementById("notificationBtn").addEventListener("click", function() {
  alert("Ini notifikasi satu");
});

// Stop Camera button
document.getElementById("stopCameraBtn").addEventListener("click", function() {
  var video = document.getElementById("cameraFeed");
  if (video.srcObject) {
    var tracks = video.srcObject.getTracks(); 
    tracks.forEach(function(track) {
      track.stop(); 
    });
    video.srcObject = null; 
    video.style.display = "none"; 
    document.getElementById("captureBtn").style.display = "none"; 
    document.getElementById("stopCameraBtn").style.display = "none"; 
  }
});

// Start kamera button
document.getElementById("startCameraBtn").addEventListener("click", function() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
      var video = document.getElementById("cameraFeed");
      video.srcObject = stream;
      video.style.display = "block";
      document.getElementById("captureBtn").style.display = "block";
      document.getElementById("stopCameraBtn").style.display = "block"; 
    })
    .catch(function(err) {
      console.error("Error accessing the camera: " + err);
      alert("Error accessing the camera: " + err);
    });
});

// Capture button
document.getElementById("captureBtn").addEventListener("click", function() {
  var video = document.getElementById("cameraFeed");
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  var imageData = canvas.toDataURL(); 
  displayImage(imageData); 
});

// Function untuk menampilkan gambar dalam galeri
function displayImage(imageData) {
  var gallery = document.getElementById("gallery");
  var imageElement = document.createElement("img");
  imageElement.src = imageData;
  imageElement.classList.add("col-3", "mb-3", "capture-image"); 
  gallery.appendChild(imageElement);
}

  // Get Location 
  document.getElementById("getLocationBtn").addEventListener("click", function() {
    var loadingLocation = document.getElementById("loadingLocation");
    loadingLocation.style.display = "block";
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        document.getElementById("locationDisplay").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
        loadingLocation.style.display = "none";
      });
    } else {
      loadingLocation.style.display = "none";
      alert("Geolocation is not supported by this browser.");
    }
  });