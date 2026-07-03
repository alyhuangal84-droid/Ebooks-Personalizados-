/*====================================================
            MENÚ HAMBURGUESA
====================================================*/

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/*====================================================
            FAQ
====================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.querySelector(".question").addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

/*====================================================
        ANIMACIONES AL HACER SCROLL
====================================================*/

const hiddenElements = document.querySelectorAll(
    ".card, .step, .item, .testimonial, .faq-item"
);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .20

});

hiddenElements.forEach(el => {

    observer.observe(el);

});

/*====================================================
            FORMULARIO WHATSAPP
====================================================*/

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const mensaje = document.getElementById("mensaje").value;

    const texto =

`¡Hola!

Quisiera solicitar información sobre un eBook personalizado.

Esta es mi historia:

${mensaje}

Muchas gracias.`;

    const url =
`https://wa.me/51901134980?text=${encodeURIComponent(texto)}`;

    window.open(url,"_blank");

});

/*====================================================
        EFECTO LIBRO AUTOMÁTICO
====================================================*/

const cover = document.querySelector(".cover");

setInterval(()=>{

    cover.style.transform="rotateY(-145deg)";

    setTimeout(()=>{

        cover.style.transform="rotateY(0deg)";

    },1800);

},6000);

/*====================================================
        EFECTO TÍTULO HERO
====================================================*/

const heroTitle = document.querySelector(".hero-content h1");

let scale = 1;

setInterval(()=>{

    scale = scale === 1 ? 1.03 : 1;

    heroTitle.style.transform = `scale(${scale})`;

},1800);

/*====================================================
        EFECTO TARJETAS
====================================================*/

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background=
`radial-gradient(circle at ${x}px ${y}px,#ffffff,#edf6ff)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#ffffff";

    });

});

/*====================================================
            EFECTO GALERÍA
====================================================*/

const images = document.querySelectorAll(".gallery img");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        const overlay = document.createElement("div");

        overlay.style.position="fixed";
        overlay.style.left="0";
        overlay.style.top="0";
        overlay.style.width="100%";
        overlay.style.height="100%";
        overlay.style.background="rgba(0,0,0,.85)";
        overlay.style.display="flex";
        overlay.style.justifyContent="center";
        overlay.style.alignItems="center";
        overlay.style.zIndex="5000";

        const picture=document.createElement("img");

        picture.src=img.src;

        picture.style.maxWidth="85%";
        picture.style.maxHeight="85%";
        picture.style.borderRadius="20px";
        picture.style.boxShadow="0 20px 40px rgba(0,0,0,.5)";

        overlay.appendChild(picture);

        document.body.appendChild(overlay);

        overlay.addEventListener("click",()=>{

            overlay.remove();

        });

    });

});

/*====================================================
            APARICIÓN HEADER
====================================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        document.querySelector("header").style.padding="12px 8%";

    }else{

        document.querySelector("header").style.padding="18px 8%";

    }

});

/*====================================================
            SCROLL SUAVE
====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});

/*====================================================
        MENSAJE DE BIENVENIDA
====================================================*/

window.onload=()=>{

    setTimeout(()=>{

        console.log("Bienvenido a Ebooks Personalizados");

    },800);

};
