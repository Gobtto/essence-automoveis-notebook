let slideState = {};

function initSlides() {
    let containers = document.getElementsByClassName("slideshow-container");

    for (let i = 0; i < containers.length; i++) {
        slideState[i] = 1;
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