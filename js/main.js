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

    // Project Carousel Functionality
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevProjectBtn = document.querySelector('.prev-project');
    const nextProjectBtn = document.querySelector('.next-project');
    const projectIndicators = document.querySelectorAll('.project-indicators span');
    
    let currentProjectIndex = 0;
    let projectInterval;
    
    // Initialize project carousel
    if (carouselTrack) {
        const projectCount = carouselItems.length;
        
        // Set up project carousel
        function goToProject(index) {
            // Update current index
            currentProjectIndex = index;
            
            // Move carousel track
            carouselTrack.style.transform = `translateX(-${currentProjectIndex * 100}%)`;
            
            // Update project indicators
            projectIndicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === currentProjectIndex);
            });
        }
        
        // Next project function
        function nextProject() {
            goToProject((currentProjectIndex + 1) % projectCount);
        }
        
        // Previous project function
        function prevProject() {
            goToProject((currentProjectIndex - 1 + projectCount) % projectCount);
        }
        
        // Event listeners for project navigation
        if (nextProjectBtn) {
            nextProjectBtn.addEventListener('click', function() {
                nextProject();
                resetProjectInterval();
            });
        }
        
        if (prevProjectBtn) {
            prevProjectBtn.addEventListener('click', function() {
                prevProject();
                resetProjectInterval();
            });
        }
        
        // Project indicator clicks
        projectIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                goToProject(index);
                resetProjectInterval();
            });
        });
        
        // Auto-advance projects
        function startProjectInterval() {
            projectInterval = setInterval(nextProject, 6000); // Change project every 6 seconds
        }
        
        function resetProjectInterval() {
            clearInterval(projectInterval);
            startProjectInterval();
        }
        
        // Start auto-advance
        startProjectInterval();
        
        // Individual project image navigation
        carouselItems.forEach(item => {
            const images = item.querySelectorAll('.project-images img');
            const prevImageBtn = item.querySelector('.prev-image');
            const nextImageBtn = item.querySelector('.next-image');
            const imageIndicators = item.querySelectorAll('.image-indicators span');
            
            let currentImageIndex = 0;
            const imageCount = images.length;
            
            // Go to specific image
            function goToImage(index) {
                // Update current index
                currentImageIndex = index;
                
                // Show current image
                images.forEach((img, i) => {
                    img.classList.toggle('active', i === currentImageIndex);
                });
                
                // Update image indicators
                imageIndicators.forEach((indicator, i) => {
                    indicator.classList.toggle('active', i === currentImageIndex);
                });
            }
            
            // Next image function
            function nextImage() {
                goToImage((currentImageIndex + 1) % imageCount);
            }
            
            // Previous image function
            function prevImage() {
                goToImage((currentImageIndex - 1 + imageCount) % imageCount);
            }
            
            // Event listeners for image navigation
            if (nextImageBtn) {
                nextImageBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    nextImage();
                });
            }
            
            if (prevImageBtn) {
                prevImageBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    prevImage();
                });
            }
            
            // Image indicator clicks
            imageIndicators.forEach((indicator, index) => {
                indicator.addEventListener('click', function(e) {
                    e.stopPropagation();
                    goToImage(index);
                });
            });
        });
    }
});
