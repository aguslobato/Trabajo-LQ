function toggleDropdown(e) {
    e.preventDefault();
    const menu = e.target.closest('.dropdown').querySelector('.dropdown-menu');
    menu.classList.toggle('show');
  }

  // Cierra si se hace clic fuera
  document.addEventListener('click', function (e) {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(menu => {
      if (!menu.contains(e.target) && !menu.previousElementSibling.contains(e.target)) {
        menu.classList.remove('show');
      }
    });
  });

    const openPanel = document.getElementById("openPanel");
    const closePanel = document.getElementById("closePanel");
    const sidePanel = document.getElementById("sidePanel");
    const overlay = document.getElementById("overlay");

    openPanel.addEventListener("click", () => {
      sidePanel.classList.add("open");
      overlay.classList.add("active");
    });

    closePanel.addEventListener("click", () => {
      sidePanel.classList.remove("open");
      overlay.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
      sidePanel.classList.remove("open");
      overlay.classList.remove("active");
    });
    function toggleMenu() {
      const menu = document.getElementById("miMenu");
      menu.classList.toggle("activo");
    }


    function abrirModal() {
      document.getElementById("miModal").style.display = "block";
    }

    function cerrarModal() {
      document.getElementById("miModal").style.display = "none";
    }