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
        slideState[i] = 1;
        showGaleria(1, i);
    }
}

function plusGaleria(n, no) {
    showGaleria(slideState[no] += n, no);
}

function showGaleria(n, no) {
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
                }, 500);
            }
        });
    });
});

let slideIndex = 0;
let autoTimer;

function showSlides() {
    let slides = document.getElementsByClassName("menubox");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add("active");
    
    // Reinicia o tempo para o próximo
    autoTimer = setTimeout(showSlides, 5000); 
}

function plusSlides(n) {
    clearTimeout(autoTimer); // Cancela o timer atual para não pular dois seguidos
    let slides = document.getElementsByClassName("menubox");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    
    slides[slideIndex - 1].classList.add("active");
    autoTimer = setTimeout(showSlides, 5000); // Reinicia o automático após o clique
}

