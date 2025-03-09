document.addEventListener('DOMContentLoaded', function() {
    console.log('Carousel script loaded'); // Debug line to verify script is running
    
    // Get all carousels on the page
    const carousels = document.querySelectorAll('.project-showcase');
    console.log('Found carousels:', carousels.length); // Debug line
    
    carousels.forEach((carousel, carouselIndex) => {
        console.log('Setting up carousel:', carouselIndex); // Debug line
        
        const images = carousel.querySelectorAll('.project-images img');
        const indicators = carousel.querySelectorAll('.image-indicators span');
        const prevButton = carousel.querySelector('.prev-image');
        const nextButton = carousel.querySelector('.next-image');
        
        console.log('Images found:', images.length); // Debug line
        console.log('Indicators found:', indicators.length); // Debug line
        console.log('Prev button:', prevButton); // Debug line
        console.log('Next button:', nextButton); // Debug line
        
        let currentIndex = 0;
        let intervalId;
        
        // Function to show a specific image
        function showImage(index) {
            console.log('Showing image:', index); // Debug line
            
            // Hide all images
            images.forEach(img => img.classList.remove('active'));
            
            // Show selected image
            images[index].classList.add('active');
            
            // Update indicators
            indicators.forEach(indicator => indicator.classList.remove('active'));
            if (indicators[index]) {
                indicators[index].classList.add('active');
            }
            
            currentIndex = index;
        }
        
        // Next image function
        function nextImage() {
            console.log('Next image called'); // Debug line
            let newIndex = currentIndex + 1;
            if (newIndex >= images.length) {
                newIndex = 0;
            }
            showImage(newIndex);
        }
        
        // Previous image function
        function prevImage() {
            console.log('Previous image called'); // Debug line
            let newIndex = currentIndex - 1;
            if (newIndex < 0) {
                newIndex = images.length - 1;
            }
            showImage(newIndex);
        }
        
        // Set up click handlers for navigation buttons
        if (prevButton) {
            prevButton.addEventListener('click', function(e) {
                console.log('Previous button clicked'); // Debug line
                e.preventDefault(); // Prevent any default behavior
                e.stopPropagation(); // Stop event bubbling
                prevImage();
                resetInterval();
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', function(e) {
                console.log('Next button clicked'); // Debug line
                e.preventDefault(); // Prevent any default behavior
                e.stopPropagation(); // Stop event bubbling
                nextImage();
                resetInterval();
            });
        }
        
        // Set up click handlers for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function(e) {
                console.log('Indicator clicked:', index); // Debug line
                e.preventDefault(); // Prevent any default behavior
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
        
        // Make sure at least one image is active
        if (images.length > 0 && !carousel.querySelector('.project-images img.active')) {
            images[0].classList.add('active');
            if (indicators.length > 0) {
                indicators[0].classList.add('active');
            }
        }
        
        // Start the carousel
        startInterval();
        
        // Add keyboard navigation for accessibility
        carousel.tabIndex = 0;
        carousel.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                prevImage();
                resetInterval();
            } else if (e.key === 'ArrowRight') {
                nextImage();
                resetInterval();
            }
        });
    });
    
    // Remove debug lines after verifying everything works
});
