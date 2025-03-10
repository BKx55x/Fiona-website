document.addEventListener('DOMContentLoaded', function() {
    console.log('Simple carousel script loaded');
    
    // Get all carousel items
    const projects = document.querySelectorAll('.carousel-item');
    
    projects.forEach(function(project) {
        // Find elements for this project
        const images = project.querySelectorAll('.project-images img');
        const prevBtn = project.querySelector('.prev-image');
        const nextBtn = project.querySelector('.next-image');
        const dots = project.querySelectorAll('.image-indicators span');
        
        console.log('Project elements:', {
            images: images.length,
            hasPrevBtn: !!prevBtn,
            hasNextBtn: !!nextBtn,
            dots: dots.length
        });
        
        // Set initial state - make first image visible
        if (images.length > 0) {
            // First, hide all images
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = 'none';
            }
            
            // Show the first image
            images[0].style.display = 'block';
            
            // Set first dot as active
            if (dots.length > 0) {
                dots[0].classList.add('active');
            }
            
            let currentIndex = 0;
            
            // Function to show a specific image
            function showImage(index) {
                // Hide all images
                for (let i = 0; i < images.length; i++) {
                    images[i].style.display = 'none';
                    if (dots.length > i) {
                        dots[i].classList.remove('active');
                    }
                }
                
                // Show selected image and activate dot
                images[index].style.display = 'block';
                if (dots.length > index) {
                    dots[index].classList.add('active');
                }
                
                currentIndex = index;
            }
            
            // Previous button
            if (prevBtn) {
                prevBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    let newIndex = currentIndex - 1;
                    if (newIndex < 0) newIndex = images.length - 1;
                    showImage(newIndex);
                    console.log('Prev clicked, showing image', newIndex);
                });
            }
            
            // Next button
            if (nextBtn) {
                nextBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    let newIndex = currentIndex + 1;
                    if (newIndex >= images.length) newIndex = 0;
                    showImage(newIndex);
                    console.log('Next clicked, showing image', newIndex);
                });
            }
            
            // Indicator dots
            for (let i = 0; i < dots.length; i++) {
                dots[i].addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    showImage(i);
                    console.log('Dot clicked, showing image', i);
                });
            }
            
            // Auto rotation
            setInterval(function() {
                let newIndex = currentIndex + 1;
                if (newIndex >= images.length) newIndex = 0;
                showImage(newIndex);
            }, 5000);
        }
    });
});
