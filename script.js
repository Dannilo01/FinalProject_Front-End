// Navbar transparente ao rolar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.style.background = window.scrollY > 50 ? "black" : "transparent";
});

// Alerta no formulário de contato
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.querySelector("input[type='date']").value;
    const time = document.querySelector("input[type='time']").value;
    
    alert(`Você está agendado!\nNome: ${name}\nE-mail: ${email}\nDia: ${date}\nHorário: ${time}`);
});
