function openLightbox(clickedElement) {
    var imgSrc = clickedElement.getAttribute("data-src");
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightboxImg");

    lightboxImg.src = imgSrc;
    lightbox.style.display = "block";
}


document.addEventListener("DOMContentLoaded", function() {
    var triggers = document.getElementsByClassName("trigger");

    for (var i = 0; i < triggers.length; i++) {
        triggers[i].addEventListener("click", function() {
            openLightbox(this);
        });
    }
});

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}