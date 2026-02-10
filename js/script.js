// Navigasi Tab
function showSection(sectionId) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Tampilkan section yang dipilih
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Update state sidebar
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Cek sederhana berdasarkan onclick attribute (bisa diperbaiki dengan data-target)
        if(link.getAttribute('onclick').includes(sectionId)) {
            link.classList.add('active');
        }
    });

    // Scroll ke atas
    document.querySelector('.content').scrollTop = 0;
}

// Fungsi Copy Code
function copyCode(button) {
    const pre = button.parentElement.nextElementSibling;
    const code = pre.innerText;

    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.innerText;
        button.innerText = 'Copied!';
        button.style.borderColor = '#4f46e5';
        button.style.color = '#4f46e5';
        
        setTimeout(() => {
            button.innerText = originalText;
            button.style.borderColor = '#555';
            button.style.color = '#ccc';
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}

// Inisialisasi awal (opsional, jika ingin animasi atau load state)
document.addEventListener('DOMContentLoaded', () => {
    console.log('Documentation Loaded');
});
