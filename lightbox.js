document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox'); //main class
    const lightboxImg = document.getElementById('lightboxImg'); //image in class
    const closeLightboxButton = document.getElementById('closeLightbox'); //closing lb

    document.querySelectorAll('.left-column img, .right-column img').forEach(img => {
        img.addEventListener('click', () => {
            const highRes = img.getAttribute('data-high-res');
            if (highRes) {
                lightboxImg.src = highRes;
                lightbox.style.display = 'flex';
            } else {
                console.warn('High-resolution image missing for:', img);
            }
        });
    });

    function closeLightbox() {
        lightbox.style.display = 'none';
        setTimeout(() => {
            lightboxImg.src = '';
        }, 100);
    }

    //x to close lightbox
    closeLightboxButton.addEventListener('click', () => {
        closeLightbox();
    });
    //close by clicking on blank
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    //exit on esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});

function showHero() {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
        const heroImage = heroElement.getAttribute('data-high-res');
        if (heroImage) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightboxImg');
            
            lightboxImg.src = heroImage;
            lightbox.style.display = "flex";
        } else {
            console.warn('data-high-res attribute is missing or empty on #hero');
        }
    } else {
        console.warn('Element with id="hero" not found');
    }
}
