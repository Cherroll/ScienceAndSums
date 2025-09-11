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
     
      });
    });
        });
    });
  }

});
