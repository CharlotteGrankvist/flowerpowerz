// Simpel validering av kontaktformulär
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Vänligen fyll i alla fält!");
    } else {
        alert("Tack för ditt meddelande, " + name + "! Vi kommer att kontakta dig snart.");
        // Här kan du lägga till AJAX eller annan funktion för att skicka data till servern
        this.reset(); // Återställ formuläret efter inlämning
    }
});
