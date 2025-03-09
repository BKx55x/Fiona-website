document.addEventListener('DOMContentLoaded', function() {
    // Get all carousels on the page
    const carousels = document.querySelectorAll('.project-showcase');
    
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.project-images img');
        const indicators = carousel.querySelectorAll('.image-indicators span');
        const prevButton = carousel.querySelector('.prev-image');
        const nextButton = carousel.querySelector('.next-image');
        let currentIndex = 0;
        let intervalId;
        
        // Function to show a specific image
        function showImage(index) {
            // Hide all images
            images.forEach(img => img.classList.remove('active'));
            // Show selected image
            images[index].classList.add('active');
            
            // Update indicators
            indicators.forEach(indicator => indicator.classList.remove('active'));
            indicators[index].classList.add('active');
            
            currentIndex = index;
        }
        
        // Next image function
        function nextImage() {
            let newIndex = currentIndex + 1;
            if (newIndex >= images.length) {
                newIndex = 0;
            }
            showImage(newIndex);
        }
        
        // Previous image function
        function prevImage() {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) {
                newIndex = images.length - 1;
            }
            showImage(newIndex);
        }
        
        // Set up click handlers for navigation buttons
        if (nextButton) {
            nextButton.addEventListener('click', function() {
                nextImage();
                resetInterval();
            });
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                prevImage();
                resetInterval();
            });
        }
        
        // Set up click handlers for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                showImage(index);
                resetInterval();
            });
        });
        
        // Auto-advance carousel
        function startInterval() {
            intervalId = setInterval(nextImage, 5000); // Change image every 5 seconds
        }
        
        function resetInterval() {
            clearInterval(intervalId);
            startInterval();
        }
        
        // Start the carousel
        startInterval();
    });
});
