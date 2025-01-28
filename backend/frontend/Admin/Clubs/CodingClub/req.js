document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('eventRegistrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // You can perform form validation or submission handling here
        // For demonstration, let's log the form data to the console
        const formData = new FormData(form);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Clear the form after submission (optional)
        form.reset();
    });
});
