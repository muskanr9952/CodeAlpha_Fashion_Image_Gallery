// ================= IMAGE LIGHTBOX =================

const galleryImages = document.querySelectorAll(".card img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// Open Lightbox
galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.style.display = "flex";

    });

});

// Show Current Image
function showImage(){

    lightboxImg.src = galleryImages[currentIndex].src;

}

// Close
closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// Next
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= galleryImages.length){

        currentIndex = 0;

    }

    showImage();

});

// Previous
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = galleryImages.length - 1;

    }

    showImage();

});

// Keyboard Controls
document.addEventListener("keydown", (e)=>{

    if(lightbox.style.display === "flex"){

        if(e.key === "ArrowRight"){

            nextBtn.click();

        }

        if(e.key === "ArrowLeft"){

            prevBtn.click();

        }

        if(e.key === "Escape"){

            lightbox.style.display = "none";

        }

    }

});

// Click Outside Image
lightbox.addEventListener("click",(e)=>{

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

});


// ================= NAVBAR SCROLL EFFECT =================

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        nav.style.background = "rgba(255,255,255,.95)";
        nav.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";

    }

    else{

        nav.style.background = "rgba(255,255,255,.15)";
        nav.style.boxShadow = "none";

    }

});


// ================= FADE-IN ANIMATION =================

const sections = document.querySelectorAll(".fashion-section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    observer.observe(section);

});