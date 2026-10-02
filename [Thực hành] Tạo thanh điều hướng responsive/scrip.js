document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    const setMenu = (open) => {
        navLinks.classList.toggle("active", open);
        menuIcon.setAttribute("aria-expanded", open);
        menuIcon.textContent = open ? "✕" : "☰";
    };

    menuIcon.addEventListener("click", () => {
        setMenu(!navLinks.classList.contains("active"));
    });

    // Đóng menu khi bấm vào liên kết
    navLinks.querySelectorAll("a").forEach((link) =>
        link.addEventListener("click", () => setMenu(false))
    );
});