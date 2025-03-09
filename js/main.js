document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For now, just show a success message
            
            const formFields = this.querySelectorAll('input, textarea');
            let isValid = true;
            
            formFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
