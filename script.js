const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBTNicon = document.querySelector("i");

// This is for adding open class && cross icon onClick onm menu-btn
menuBtn.addEventListener("click", (e) => {
    
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBTNicon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-2-fill");

});

// This is for closing navLinks with removing class open && adding menu-icon
navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBTNicon.setAttribute("class", "ri-menu-2-fill");
});


// For sliding Effect for testimonial
document.addEventListener('DOMContentLoaded', function() {
    
    const slides = document.querySelectorAll('.client_slide');
    const bullets = document.querySelectorAll('.client_bullet');

    let currentSlide = 0;

    function showSlide(index) {
        const slidesContainer = document.querySelector('.client_slides');
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;

        bullets.forEach(bullet => bullet.classList.remove('active'));
        bullets[index].classList.add('active');
    } 

    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    showSlide(currentSlide);

});













