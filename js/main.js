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
    
    // Form submission handling with Formspree
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        // We'll add a success message display
        contactForm.addEventListener('submit', function(e) {
            // No need to prevent default since we want the form to submit to Formspree
            
            // Optional: You can add loading state or other visual feedback here
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
            }
            
            // Form will be handled by Formspree automatically
            // This function just handles UI feedback
            
            // Note: This setTimeout is just to simulate processing time
            // You can remove it in production as Formspree will handle the redirect
            setTimeout(() => {
                if (submitButton) {
                    submitButton.textContent = 'Send';
                    submitButton.disabled = false;
                }
            }, 2000);
        });
    }
});
