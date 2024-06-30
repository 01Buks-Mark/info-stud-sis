function initMap() {
    var location = { lat: -25.344, lng: 131.036 }; // Replace with your desired location coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({ position: location, map: map });
}

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Save to Firebase database (example)
    database.ref('messages').push({
        name: name,
        email: email,
        message: message
    })
    .then(() => {
        alert("Message sent successfully. We will contact you shortly.");
        // Optionally, clear form fields after submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    })
    .catch(error => {
        console.error("Error sending message:", error);
        alert("Oops! Something went wrong. Please try again later.");
    });
});