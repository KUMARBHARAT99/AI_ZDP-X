// JavaScript for AI ZERO DRON-X

// Button click event for "Learn More"
document.getElementById("learn-more").addEventListener("click", function() {
    alert("AI ZERO DRON-X helps your business by collecting data and providing intelligent insights to shape your future.");
});

// Contact form submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        contactForm.reset();
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
