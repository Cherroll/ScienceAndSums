document.addEventListener("DOMContentLoaded", () => {

  // Initialize EmailJS
  emailjs.init("_f7rpr-47rPC5g5nn");

  // Booking form logic
  document.getElementById("booking-form").addEventListener("submit", function(e) {
    e.preventDefault();

   emailjs.sendForm("service_cigdv4h", "template_udfe2du", this, "_f7rpr-47rPC5g5nn")
      .then(() => {
        alert("Booking sent! Sharon will contact you soon.");
        this.reset();
      }, (error) => {
        alert("Something went wrong. Please try again.");
        console.error("EmailJS Error:", error);
      });
  });

  // Smooth scroll (optional navigation logic)
  document.querySelectorAll('.menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
