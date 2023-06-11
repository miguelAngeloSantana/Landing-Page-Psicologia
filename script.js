let menuHamburguer = window.document.getElementById("hamburguer");

menuHamburguer.addEventListener("click", () => {
    let menuNav = window.document.querySelector(".menu-main");

    menuHamburguer.classList.toggle("show");
    menuNav.classList.toggle("show");
});