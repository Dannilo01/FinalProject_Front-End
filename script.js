// Navbar transparente ao rolar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.style.background = window.scrollY > 50 ? "black" : "transparent";
});

// Alerta no formulário de contato
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    alert(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
});
