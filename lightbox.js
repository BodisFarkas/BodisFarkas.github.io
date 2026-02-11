document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox'); //main lightbox class
    const lightboxImg = document.getElementById('lightboxImg'); //image in lightbox class
    const closeLightbox = document.getElementById('closeLightbox'); //to close lightbox

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
    //press x key to close lightbox
    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    });
    //close lightbox when blank is clicked
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });
    //exit lightbox when esc is pressed
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
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

function goToProductPage(icon) {
    // find the closest image in the container as the icon
    const container = icon.closest('.lightbox');
    const img = container.querySelector('img[data-product-img]');
    if (img) {
        const imgSrc = encodeURIComponent(img.src);
        window.location.href = `product.html?img=${imgSrc}`;
    }
}

const params = new URLSearchParams(window.location.search);
    const imgSrc = params.get('img');
    if (imgSrc) {
      document.getElementById('productImage').src = decodeURIComponent(imgSrc);
    }