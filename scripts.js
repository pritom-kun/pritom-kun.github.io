window.addEventListener('DOMContentLoaded', event => {

    // Bootstrap ScrollSpy on the top nav
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 80,
        });
    }

    // Collapse responsive navbar when a nav link is clicked (mobile)
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const navLinks = [].slice.call(document.querySelectorAll('#navbarNav .nav-link'));
    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Abstract toggle chevron icon flip
    document.querySelectorAll('.abstract-toggle').forEach(function (btn) {
        const targetId = btn.getAttribute('data-bs-target');
        const collapseEl = document.querySelector(targetId);
        if (collapseEl) {
            collapseEl.addEventListener('show.bs.collapse', function () {
                const icon = btn.querySelector('i');
                if (icon) { icon.classList.replace('fa-chevron-down', 'fa-chevron-up'); }
            });
            collapseEl.addEventListener('hide.bs.collapse', function () {
                const icon = btn.querySelector('i');
                if (icon) { icon.classList.replace('fa-chevron-up', 'fa-chevron-down'); }
            });
        }
    });

});
