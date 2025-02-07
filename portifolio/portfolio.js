document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Handle form submission logic here
        alert('Message sent!');
        
        // Reset form fields
        form.reset();
    });
});


