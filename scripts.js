document.addEventListener("DOMContentLoaded", () => {

  emailjs.init("_f7rpr-47rPC5g5nn");

  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
      e.preventDefault();

      emailjs.sendForm("service_cigdv4h", "template_udfe2du", this, "_f7rpr-47rPC5g5nn")
        .then(() => {
          alert("Booking sent! Sharon will contact you soon.");
          this.reset();
        }, (error) => {
          alert("Something went wrong. Please try again.");
          console.error("EmailJS Error:", error);
         
    document.querySelectorAll(".collapsible").forEach(btn => {
      btn.addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        content.style.display = (content.style.display === "block") ? "none" : "block";
      });
    });

    // Smooth scroll for menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
        });
    });
  }

});
