document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('splash').style.transition = 'opacity 1s ease';
    document.getElementById('splash').style.opacity = '0';

    setTimeout(function() {
      document.getElementById('splash').style.display = 'none';
      document.getElementById('main-content').classList.remove('hidden');
      document.body.style.overflow = 'auto';
    }, 1000); 
  }, 7000); // Keeps splash screen visible for 7 seconds
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    window.location.href = "home.html"; // Replace with your target HTML file
  }, 7000); // Adjust the delay to match the animation duration
});