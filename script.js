function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

// Para mag-change ang color ng header pag nag-scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.9)';
        header.style.backdropFilter = 'blur(10px)';
        document.querySelector('.brand-name').style.color = '#1b2559';
        document.querySelectorAll('.line').forEach(line => line.style.background = '#1b2559');
    } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'none';
        document.querySelector('.brand-name').style.color = 'white';
        document.querySelectorAll('.line').forEach(line => line.style.background = 'white');
    }
});