// ==============================
// BOTÃO TEMA CLARO / ESCURO
// ==============================

const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        botaoTema.innerHTML = "☀️";
    }else{
        botaoTema.innerHTML = "🌙";
    }

});

// ==============================
// VALIDAÇÃO DO FORMULÁRIO
// ==============================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if(nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos.");
        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regexEmail.test(email)){
        alert("Digite um e-mail válido.");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    formulario.reset();

});