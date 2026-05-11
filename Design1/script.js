window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 5px 25px rgba(0,0,0,0.08)";

    }

    else{

        navbar.style.boxShadow =
        "0 2px 20px rgba(0,0,0,0.05)";
    }
});

// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons = document.querySelectorAll(
    ".primary-btn,.nav-btn"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
        "translateY(-4px) scale(1.02)";
    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
        "translateY(0px) scale(1)";
    });

}); 
const openModal =
document.getElementById("openModal");

const closeModal =
document.getElementById("closeModal");

const modal =
document.getElementById("dollModal");

openModal.onclick = () => {

    modal.classList.add("active");
};

closeModal.onclick = () => {

    modal.classList.remove("active");
};

window.onclick = (e) => {

    if(e.target == modal){

        modal.classList.remove("active");
    }
}; 
