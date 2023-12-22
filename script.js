document.addEventListener('DOMContentLoaded', function () {
    const utsaGallery = document.getElementById('utsa-gallery');
    const conferenceGallery = document.getElementById('conference-gallery');
    const cuTeachingGallery = document.getElementById('cu-teaching-gallery');
    const HustChinaGallery = document.getElementById('hust-china-gallery');
    const PuriIndiaGallery = document.getElementById('puri-india-gallery');
    const DBBLGallery = document.getElementById('dbbl-gallery');
    const CUStudentGallery = document.getElementById('cu-student-gallery');

    // Call autoScroll for each gallery
    autoScroll(utsaGallery);
    autoScroll(conferenceGallery);
    autoScroll(cuTeachingGallery);
    autoScroll(HustChinaGallery);
    autoScroll(PuriIndiaGallery);
    autoScroll(DBBLGallery);
    autoScroll(CUStudentGallery );

    function autoScroll(gallery) {
        const galleryItems = gallery.querySelectorAll('.gallery-item');
        const scrollSpeed = 3000; // 3 seconds
        let currentIndex = 0;

        function nextImage() {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function resetGallery() {
            currentIndex = 0;
            gallery.style.transition = 'none';
            gallery.style.transform = 'translateX(0)';
            gallery.offsetWidth; // Force reflow to apply changes immediately
            gallery.style.transition = 'transform 0.8s ease-in-out';
        }

        // Start auto-scrolling for each gallery
        setInterval(() => {
            gallery.style.transition = 'transform 0.8s ease-in-out';
            nextImage();

            // Reset the gallery after reaching the last image
            if (currentIndex === 0) {
                setTimeout(resetGallery, 800); // Adjust the duration to match the transition duration
            }
        }, scrollSpeed);
    }
});
