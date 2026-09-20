
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");


// MENU MOBILE
if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
        nav.classList.toggle("active");
        menuButton.classList.toggle("active");
    });

    const links = nav.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
            menuButton.classList.remove("active");
        });
    });
}


// HEADER AO ROLAR
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ANIMAÇÃO DOS ELEMENTOS
const elementos = document.querySelectorAll(
    ".section-title, .about-content, .treatment-card, .team-card, .testimonial, .appointment-content, .contact-content"
);

elementos.forEach(function (elemento, index) {
    elemento.classList.add("reveal");
    elemento.style.transitionDelay = (index % 4) * 0.1 + "s";
});


const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});


elementos.forEach(function (elemento) {
    observer.observe(elemento);
});


// CONTADORES
const counters = document.querySelectorAll(".stat-number");

const counterObserver = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const texto = counter.textContent;
        const target = parseInt(texto.replace(/\D/g, ""));

        if (isNaN(target)) return;

        let numero = 0;

        const intervalo = setInterval(function () {

            numero += Math.ceil(target / 50);

            if (numero >= target) {
                numero = target;
                clearInterval(intervalo);
            }

            counter.textContent = numero + "+";

        }, 30);

        counterObserver.unobserve(counter);
    });

}, {
    threshold: 0.8
});


counters.forEach(function (counter) {
    counterObserver.observe(counter);
});


// BOTÕES
const botoes = document.querySelectorAll(".button");

botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        botao.style.transform = "scale(0.96)";

        setTimeout(function () {
            botao.style.transform = "";
        }, 120);

    });

});


// FORMULÁRIO
const form = document.querySelector(".appointment-form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const botao = form.querySelector("button");

        if (!botao) return;

        const textoOriginal = botao.textContent;

        botao.textContent = "Solicitação enviada ✓";
        botao.disabled = true;

        setTimeout(function () {

            botao.textContent = textoOriginal;
            botao.disabled = false;
            form.reset();

        }, 3000);

    });

}

// SCROLL SUAVE
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const id = link.getAttribute("href");
        const destino = document.querySelector(id);

        if (!destino) return;

        event.preventDefault();

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// EFEITO PARALLAX
const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", function () {

    if (!heroImage) return;

    if (window.scrollY < 700) {
        heroImage.style.transform =
            "translateY(" + window.scrollY * 0.08 + "px)";
    }

});


// PÁGINA CARREGADA
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});

```

`
