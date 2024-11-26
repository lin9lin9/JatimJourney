document.addEventListener("DOMContentLoaded", () => {
    const slideshow = document.querySelector('#slideshow-container .slideshow'); // Hanya target slideshow
    const slides = slideshow.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex); // Tampilkan slide pertama
    setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('#about-slideshow-container .fade-image');
    let currentIndex = 0;

    // Fungsi untuk menampilkan gambar tertentu
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('visible'); // Menghapus kelas visible dari semua gambar
            if (i === index) {
                img.classList.add('visible'); // Menambahkan kelas visible ke gambar yang aktif
            }
        });
    }

    // Fungsi untuk menuju gambar berikutnya
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop kembali ke gambar pertama setelah gambar terakhir
        showImage(currentIndex);
    }

    showImage(currentIndex); // Tampilkan gambar pertama
    setInterval(nextImage, 4000); // Ganti gambar setiap 4 detik
});
