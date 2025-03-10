document.addEventListener('DOMContentLoaded', function() {
    console.log('New carousel script loaded');
    
    // Simple test to verify script is running
    const testDiv = document.createElement('div');
    testDiv.style.position = 'fixed';
    testDiv.style.bottom = '10px';
    testDiv.style.right = '10px';
    testDiv.style.background = 'red';
    testDiv.style.color = 'white';
    testDiv.style.padding = '5px';
    testDiv.style.zIndex = '9999';
    testDiv.innerHTML = 'JS Running';
    document.body.appendChild(testDiv);
    
    // Basic carousel functionality
    function setupCarousels() {
        const carousels = document.querySelectorAll('.project-showcase');
        console.log('Found carousels:', carousels.length);
        
        if (carousels.length === 0) {
            console.log('No carousels found on page');
            return;
        }
        
        carousels.forEach(function(carousel) {
            const images = carousel.querySelectorAll('.project-images img');
            const prevBtn = carousel.querySelector('.prev-image');
            const nextBtn = carousel.querySelector('.next-image');
            const dots = carousel.querySelectorAll('.image-indicators span');
            
            console.log('Carousel elements:', {
                images: images.length,
                prevBtn: prevBtn !== null,
                nextBtn: nextBtn !== null,
                dots: dots.length
            });
            
            // Set initial state
            if (images.length > 0) {
                // Hide all images first
                images.forEach(img => img.style.display = 'none');
                // Show first image
                images[0].style.display = 'block';
                
                // Update dots
                if (dots.length > 0) {
                    dots.forEach(dot => dot.classList.remove('active'));
                    dots[0].classList.add('active');
                }
                
                let currentIndex = 0;
                
                // Add click handlers
                if (prevBtn) {
                    prevBtn.addEventListener('click', function() {
                        console.log('Prev clicked');
                        currentIndex--;
                        if (currentIndex < 0) currentIndex = images.length - 1;
                        updateCarousel();
                    });
                }
                
                if (nextBtn) {
                    nextBtn.addEventListener('click', function() {
                        console.log('Next clicked');
                        currentIndex++;
                        if (currentIndex >= images.length) currentIndex = 0;
                        updateCarousel();
                    });
                }
                
                // Add dot handlers
                dots.forEach(function(dot, i) {
                    dot.addEventListener('click', function() {
                        currentIndex = i;
                        updateCarousel();
                    });
                });
                
                // Function to update display
                function updateCarousel() {
                    // Hide all images
                    images.forEach(img => img.style.display = 'none');
                    // Show current image
                    images[currentIndex].style.display = 'block';
                    
                    // Update dots
                    if (dots.length > 0) {
                        dots.forEach(dot => dot.classList.remove('active'));
                        dots[currentIndex].classList.add('active');
                    }
                }
                
                // Auto advance
                setInterval(function() {
                    currentIndex++;
                    if (currentIndex >= images.length) currentIndex = 0;
                    updateCarousel();
                }, 5000);
            }
        });
    }
    
    // Run setup
    setupCarousels();
});
