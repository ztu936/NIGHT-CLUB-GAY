document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const pages = document.querySelectorAll(".page");

    function showPage(target) {
        pages.forEach(page => {
            if (page.id === target) {
                page.classList.add("active");
            } else {
                page.classList.remove("active");
            }
        });
    }

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = link.getAttribute("data-target");
            showPage(target);
        });
    });

    // Показываем главную страницу по умолчанию
    showPage("home");
});