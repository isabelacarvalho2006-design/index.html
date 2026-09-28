// ========================================
// ONG ESPERANÇA - SCRIPT.JS
// ========================================

// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // MENU MOBILE
    // ========================================

    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector("nav ul");

    if (menuButton && menu) {
        menuButton.addEventListener("click", function () {
            menu.classList.toggle("menu-aberto");
        });
    }


    // ========================================
    // MÁSCARA DE CPF
    // ========================================

    const cpf = document.querySelector("#cpf");

    if (cpf) {
        cpf.addEventListener("input", function () {
            let valor = cpf.value.replace(/\D/g, "");

            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

            cpf.value = valor;
        });
    }


    // ========================================
    // MÁSCARA DE TELEFONE
    // ========================================

    const telefone = document.querySelector("#telefone");

    if (telefone) {
        telefone.addEventListener("input", function () {
            let valor = telefone.value.replace(/\D/g, "");

            if (valor.length <= 10) {
                valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
                valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
            } else {
                valor = valor.replace(/(\d{2})(\d)/, "($1) $2");
                valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
            }

            telefone.value = valor;
        });
    }


    // ========================================
    // MÁSCARA DE CEP
    // ========================================

    const cep = document.querySelector("#cep");

    if (cep) {
        cep.addEventListener("input", function () {
            let valor = cep.value.replace(/\D/g, "");

            valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

            cep.value = valor;
        });
    }


    // ========================================
    // FORMULÁRIO DE CADASTRO
    // ========================================

    const formulario = document.querySelector("#formCadastro");

    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            const nome = document.querySelector("#nome");
            const email = document.querySelector("#email");

            if (nome.value.trim() === "") {
                alert("Por favor, informe seu nome.");
                nome.focus();
                return;
            }

            if (email.value.trim() === "") {
                alert("Por favor, informe seu e-mail.");
                email.focus();
                return;
            }

            alert(
                "Cadastro realizado com sucesso! " +
                "Obrigado por fazer parte da ONG Esperança."
            );

            formulario.reset();
        });
    }


    // ========================================
    // BOTÕES DE VOLUNTARIADO
    // ========================================

    const botoes = document.querySelectorAll(".btn-voluntario");

    botoes.forEach(function (botao) {

        botao.addEventListener("click", function () {

            alert(
                "Obrigado pelo interesse em ser voluntário! " +
                "Preencha nosso formulário para participar."
            );

        });

    });

});

