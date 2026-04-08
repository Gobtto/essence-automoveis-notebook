document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo-btn");
    const navbar = document.getElementById("navbar");

    logo.addEventListener("mouseenter", function() {
        // O comando "toggle" adiciona a classe se ela não existir, e remove se existir
        navbar.classList.toggle("links-hidden");
    });
});
let slideState = {};
function initSlides() {
    let containers = document.getElementsByClassName("slideshow-container");

    for (let i = 0; i < containers.length; i++) {
        slideState[i] = 2;
        showSlides(1, i);
    }
}

function plusSlides(n, no) {
    showSlides(slideState[no] += n, no);
}

function showSlides(n, no) {
    let containers = document.getElementsByClassName("slideshow-container");
    if (!containers[no]) return;

    let slides = containers[no].getElementsByClassName("mySlides");
    let counter = containers[no].querySelector(".numbertext"); // Busca o contador deste bloco

    if (n > slides.length) { slideState[no] = 1; }
    if (n < 1) { slideState[no] = slides.length; }

    // Esconde todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Mostra o slide atual
    slides[slideState[no] - 1].style.display = "block";

    // ATUALIZA O CONTADOR (Ex: 1 / 2)
    if (counter) {
        counter.innerHTML = slideState[no] + " / " + slides.length;
    }
}

window.onload = initSlides;
// Aguarda o documento carregar
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", e => {
            // Verifica se o link é para uma página interna (não é um link externo ou #)
            const href = link.getAttribute("href");
            if (href && href.includes(".html")) {
                e.preventDefault(); // Impede a troca imediata de página

                document.body.classList.add("fade-out"); // Adiciona o efeito de sumir

                // Espera 500ms (tempo da transição CSS) e muda de página
                setTimeout(() => {
                    window.location.href = href;
                }, 350);
            }
        });
    });
});

// VARIÁVEIS EXCLUSIVAS PARA O SLIDE DA HOME
let homeSlideIndex = 0;

function showHomeSlides() {
    let i;
    let slides = document.getElementsByClassName("SlideInicial");
    
    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    homeSlideIndex++;
    
    // Se chegar no fim, volta para o primeiro
    if (homeSlideIndex > slides.length) {homeSlideIndex = 1}    
    
    slides[homeSlideIndex-1].style.display = "block";  
    
    // Muda de imagem a cada 5 segundos automaticamente
    setTimeout(showHomeSlides, 5000); 
}

// Função para os botões PRÓXIMO e ANTERIOR
function plusSlideHome(n) {
    let slides = document.getElementsByClassName("SlideInicial");
    
    // Esconde o slide atual
    slides[homeSlideIndex-1].style.display = "none";
    
    homeSlideIndex += n;
    
    if (homeSlideIndex > slides.length) {homeSlideIndex = 1}
    if (homeSlideIndex < 1) {homeSlideIndex = slides.length}
    
    // Mostra o novo slide
    slides[homeSlideIndex-1].style.display = "block";
}

// Inicia o slide assim que a página carregar
document.addEventListener("DOMContentLoaded", function() {
    if(document.getElementsByClassName("SlideInicial").length > 0) {
        showHomeSlides();
    }
});