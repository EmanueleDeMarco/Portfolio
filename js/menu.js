// menu.js
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.offcanvas a.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const offcanvas = document.querySelector('.offcanvas.show');
        if (offcanvas) {
          bootstrap.Offcanvas.getInstance(offcanvas).hide();
        }
      });
    });
  });
  