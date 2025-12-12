const botaoMenu = document.getElementById("menu_botao");
const menu = document.getElementById("menu");
const iconeBarras = document.getElementById("icone-barras");
const iconeX = document.getElementById("icone-x");


iconeBarras.style.display = "block";
iconeX.style.display = "none";


botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");

    if (menu.classList.contains("ativo")) {
        iconeBarras.style.display = "none";
        iconeX.style.display = "block";
    } else {
        iconeBarras.style.display = "block";
        iconeX.style.display = "none";
    }
});
