document.addEventListener('DOMContentLoaded', function () {
    
    // 1. Toggle Sidebar pada Mobile
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const sidebarCollapse = document.getElementById('sidebarCollapse');

    sidebarCollapse.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // 2. Menambahkan Tombol Copy ke setiap blok kode
    const preTags = document.querySelectorAll('pre');

    preTags.forEach(pre => {
        // Buat container wrapper agar posisi tombol relatif terhadap pre
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);

        // Buat Tombol Copy
        const copyBtn = document.createElement('button');
        copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy';
        copyBtn.className = 'copy-btn';
        
        // Styling tombol via JS (atau bisa dipindah ke CSS)
        Object.assign(copyBtn.style, {
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '4px',
            padding: '5px 10px',
            cursor: 'pointer',
            fontSize: '0.8rem',
            transition: 'background 0.2s'
        });

        copyBtn.addEventListener('mouseover', () => {
            copyBtn.style.background = 'rgba(255, 255, 255, 0.2)';
        });

        copyBtn.addEventListener('mouseout', () => {
            copyBtn.style.background = 'rgba(255, 255, 255, 0.1)';
        });

        // Fungsi Copy
        copyBtn.addEventListener('click', () => {
            const code = pre.querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(() => {
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy';
                }, 2000);
            });
        });

        wrapper.appendChild(copyBtn);
    });

    // 3. Smooth Scroll & Active State pada Sidebar
    const links = document.querySelectorAll('#sidebar ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Hapus class active dari semua link
            links.forEach(l => l.classList.remove('active'));
            // Tambah ke yang diklik
            this.classList.add('active');
            
            // Tutup sidebar di mobile setelah klik
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });
});
