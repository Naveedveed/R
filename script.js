// Smooth Scroll for Navigation Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact Form Submission (Basic Example)
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation (example)
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Display a simple alert or handle form submission with AJAX
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Optionally, you can clear the form fields
    document.getElementById('contactForm').reset();

    // If you want to handle the form submission via AJAX:
    /*
    fetch('/send-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Your message has been sent successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was a problem sending your message.');
    });
    */
});

// Google Maps Integration (Optional)
function initMap() {
    const schoolLocation = { lat: -37.816279, lng: 144.953735 };
    const map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 15,
        center: schoolLocation,
    });
    const marker = new google.maps.Marker({
        position: schoolLocation,
        map: map,
    });
}

// Load the map script dynamically when the location page is loaded
if (document.getElementById('map-container')) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}
