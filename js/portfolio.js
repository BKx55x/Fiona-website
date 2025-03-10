// Portfolio lightbox functionality
let currentGallery = '';
let currentImageIndex = 0;

// Define all gallery images with their info
const galleries = {
    'vivid-simplicit': [
        {
            src: 'images/vivid-simplicit/Enscape_Main.png',
            caption: 'Vivid Simplicit Main View'
        },
        {
            src: 'images/vivid-simplicit/Enscape_Cubicles.png',
            caption: 'Vivid Simplicit Cubicles Area'
        },
        {
            src: 'images/vivid-simplicit/Enscape_Coffe_bar_1.png',
            caption: 'Vivid Simplicit Coffee Bar'
        },
        {
            src: 'images/vivid-simplicit/Enscape_Offset_Main.png',
            caption: 'Vivid Simplicit Offset Main View'
        },
        {
            src: 'images/vivid-simplicit/Enscape_Coffee_Bar_Front.png',
            caption: 'Vivid Simplicit Coffee Bar Front'
        },
        {
            src: 'images/vivid-simplicit/Enscape_Coffee_Bar_Side.png',
            caption: 'Vivid Simplicit Coffee Bar Side View'
        }
    ],
    'refined-sanctuary': [
        {
            src: 'images/refined-sanctuary/Front_Full.png',
            caption: 'Refined Sanctuary Front View'
        },
        {
            src: 'images/refined-sanctuary/Front_Bold.png',
            caption: 'Refined Sanctuary Bold Front View'
        },
        {
            src: 'images/refined-sanctuary/Lower_Front_Approach.png',
            caption: 'Refined Sanctuary Front Approach'
        },
        {
            src: 'images/refined-sanctuary/Offset_Left.png',
            caption: 'Refined Sanctuary Offset Left View'
        },
        {
            src: 'images/refined-sanctuary/Side_Patio.png',
            caption: 'Refined Sanctuary Side Patio'
        },
        {
            src: 'images/refined-sanctuary/Side_Balcony_Patio.png',
            caption: 'Refined Sanctuary Balcony Patio'
        }
    ],
    'tatli-tea-room': [
        {
            src: 'images/tatli-tea-room/Tatli_Sitting_Room.png',
            caption: 'Tatli Tea Room Sitting Area'
        },
        {
            src: 'images/tatli-tea-room/Tatli_Banquets.png',
            caption: 'Tatli Tea Room Banquet Seating'
        },
        {
            src: 'images/tatli-tea-room/Tatli_Dessert_Bar.png',
            caption: 'Tatli Tea Room Dessert Bar'
        },
        {
            src: 'images/tatli-tea-room/Tatli_Enclave.png',
            caption: 'Tatli Tea Room Private Enclave'
        }
    ]
};

// Function to open the lightbox
function openLightbox(gallery, index) {
    currentGallery = gallery;
    currentImageIndex = index;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    // Set image and caption
    lightboxImage.src = galleries[gallery][index].src;
    lightboxCaption.textContent = galleries[gallery][index].caption;
    
    // Display lightbox
    lightbox.style.display = 'flex';
    
    // Add keyboard event listeners
    document.addEventListener('keydown', handleLightboxKeydown);
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    
    // Remove keyboard event listeners
    document.removeEventListener('keydown', handleLightboxKeydown);
}

// Function to change the displayed image
function changeLightboxImage(direction) {
    const gallery = galleries[currentGallery];
    currentImageIndex = (currentImageIndex + direction + gallery.length) % gallery.length;
    
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    // Update image and caption
    lightboxImage.src = gallery[currentImageIndex].src;
    lightboxCaption.textContent = gallery[currentImageIndex].caption;
}

// Handle keyboard navigation
function handleLightboxKeydown(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    } else if (event.key === 'ArrowLeft') {
        changeLightboxImage(-1);
    } else if (event.key === 'ArrowRight') {
        changeLightboxImage(1);
    }
}

// Close lightbox when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
});
