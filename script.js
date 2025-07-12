// JavaScript for AI ZERO DRON-X

// Button click event for "Learn More"
<script>
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="Z6k-W9R9m_QEBDByJm9bs";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
</script>
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
