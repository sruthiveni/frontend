document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateAge();
});

function validateAge() {
    const ageInput = document.getElementById('age').value;
    const messageDiv = document.getElementById('message');

    if (ageInput < 18) {
        messageDiv.textContent = 'You are underage.';
        messageDiv.style.color = 'red';
    } else {
        messageDiv.textContent = 'Welcome!';
        messageDiv.style.color = 'green';
    }
}
