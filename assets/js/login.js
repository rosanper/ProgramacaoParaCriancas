// ---------- Variáveis ----------//
// Nome
let usernameInput = document.getElementById("nome");
let usernameLabel = document.querySelector('label[for="nome"]');
let usernameHelper = document.getElementById("username-helper");

// Email
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// Senha
let passwordInput = document.getElementById("senha");
let passwordLabel = document.querySelector('label[for="senha"]');
let passwordHelper = document.getElementById("password-helper");

// Confirmação de Senha
let senhaConfirmacaoInput = document.getElementById("senhaConfirmacao");
let senhaCadastroHelper = document.getElementById("senhaConfirmacao-helper");

// ---------- Funções ----------//
// Mostra campo obrigatório
function mostrarPopup (input, label) {
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
 
    });
 
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    })
}
mostrarPopup (usernameInput, usernameLabel);
mostrarPopup(emailInput, emailLabel);
mostrarPopup(passwordInput, passwordLabel);

// Valida campos obrigatórios
function validarCampo(input, helper, mensagem, validacao) {
    input.addEventListener("change", (e) => {
        let valor = e.target.value;

        if (validacao(valor)) {
            input.classList.remove("error");
            helper.classList.remove("visible");
            input.classList.add("correct");
        } else {
            input.classList.add("error");
            input.classList.remove("correct");
            helper.classList.add("visible");
            helper.innerText = mensagem;
        }
    });
}

// Valida se as senhas coincidem
function validarSenhasIguais(senha, confirmacaoSenha) {
    return senha === confirmacaoSenha;
}

validarCampo(
    usernameInput,
    usernameHelper,
    "O campo nome deve ter pelo menos 3 caracteres.",
    (valor) => valor.length >= 3
);

validarCampo(
    emailInput,
    emailHelper,
    "O email deve conter '@' e '.com'",
    (valor) => valor.includes("@") && valor.includes(".com")
);

validarCampo(
    passwordInput,
    passwordHelper,
    "O campo senha deve ter pelo menos 6 caracteres.",
    (valor) => valor.length >= 6
);

validarCampo(
    senhaConfirmacaoInput,
    senhaCadastroHelper,
    "As senhas não coincidem.",
    (valor) => validarSenhasIguais(valor, passwordInput.value)
);

// ------ Funcionalidade dos botões ------//
document.getElementById("logar").addEventListener("click", function(event) {
    // TODO Adicionar validação do formulário de login ao clicar no botão
    alert("Logando...");
})

document.getElementById("cadastrar").addEventListener("click", function(event) {
    // TODO Adicionar validação do formulário de cadastro ao clicar no botão
    alert("Cadastro feito com sucesso");
})