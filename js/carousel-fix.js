document.addEventListener('DOMContentLoaded', function() {
    console.log('Enhanced carousel script loaded');
    
    // Get all carousel items
    const projects = document.querySelectorAll('.carousel-item');
    console.log('Found projects:', projects.length);
    
    // Process each project
    projects.forEach(function(project, projectIndex) {
        const projectImages = project.querySelectorAll('.project-images img');
        console.log(`Project ${projectIndex + 1} has ${projectImages.length} images`);
        
        // Only set up navigation if there are multiple images
        if (projectImages.length <= 1) {
            console.log(`Project ${projectIndex + 1} has only one image, skipping navigation`);
            return;
        }
        
        // Find or create navigation elements
        let projectNav = project.querySelector('.project-navigation');
        let prevBtn, nextBtn, indicators;
        
        // If navigation doesn't exist, create it
        if (!projectNav) {
            console.log(`Creating navigation for project ${projectIndex + 1}`);
            projectNav = document.createElement('div');
            projectNav.className = 'project-navigation';
            
            // Create prev button
            prevBtn = document.createElement('button');
            prevBtn.className = 'prev-image';
            prevBtn.innerHTML = '&lt;';
            projectNav.appendChild(prevBtn);
            
            // Create indicators
            const indicatorsDiv = document.createElement('div');
            indicatorsDiv.className = 'image-indicators';
            for (let i = 0; i < projectImages.length; i++) {
                const span = document.createElement('span');
                if (i === 0) span.className = 'active';
                indicatorsDiv.appendChild(span);
            }
            projectNav.appendChild(indicatorsDiv);
            
            // Create next button
            nextBtn = document.createElement('button');
            nextBtn.className = 'next-image';
            nextBtn.innerHTML = '&gt;';
            projectNav.appendChild(nextBtn);
            
            // Add navigation to project
            const projectShowcase = project.querySelector('.project-showcase');
            if (projectShowcase) {
                projectShowcase.appendChild(projectNav);
            } else {
                project.appendChild(projectNav);
            }
        }
        
        // Get navigation elements
        prevBtn = projectNav.querySelector('.prev-image');
        nextBtn = projectNav.querySelector('.next-image');
        indicators = projectNav.querySelectorAll('.image-indicators span');
        
        // Set up image carousel
        let currentIndex = 0;
        
        // Function to show specific image
        function showImage(index) {
            console.log(`Project ${projectIndex + 1}: Showing image ${index + 1}`);
            
            // Hide all images
            projectImages.forEach(img => {
                img.style.display = 'none';
            });
            
            // Show selected image
            projectImages[index].style.display = 'block';
            
            // Update indicators
            indicators.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentIndex = index;
        }
        
        // Initialize - show first image
        showImage(0);
        
        // Set up navigation buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                let newIndex = currentIndex - 1;
                if (newIndex < 0) newIndex = projectImages.length - 1;
                showImage(newIndex);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                let newIndex = currentIndex + 1;
                if (newIndex >= projectImages.length) newIndex = 0;
                showImage(newIndex);
            });
        }
        
        // Set up indicators
        indicators.forEach((dot, index) => {
            dot.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                showImage(index);
            });
        });
        
        // Auto-advance images
        setInterval(function() {
            let newIndex = currentIndex + 1;
            if (newIndex >= projectImages.length) newIndex = 0;
            showImage(newIndex);
        }, 5000);
    });
});
