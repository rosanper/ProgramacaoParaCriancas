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
let senhaConfirmacaoHelper = document.getElementById("senhaConfirmacao-helper");

// ---------- Funções ----------//
// Mostra campo obrigatório
function mostrarPopup(input, label) {
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}
mostrarPopup(usernameInput, usernameLabel);
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
  senhaConfirmacaoHelper,
  "As senhas não coincidem.",
  (valor) => validarSenhasIguais(valor, passwordInput.value)
);

// ------ Funcionalidade dos botões ------//
document.getElementById("logar").addEventListener("click", function (event) {
  // TODO Adicionar validação do formulário de login ao clicar no botão
  alert("Logando...");
});

// Função para validar o formulário de cadastro

function validarCadastro() {
  // Obtém os valores dos campos obrigatórios do formulário de cadastro
  let nome = document.getElementById("nome").value;
  let emailCadastro = document.getElementById("email").value;
  let senhaCadastro = document.getElementById("senha").value;
  let senhaConfirmacao = document.getElementById("senhaConfirmacao").value;

  // Verifica se os campos obrigatórios estão preenchidos
  if (!nome || !emailCadastro || !senhaCadastro || !senhaConfirmacao) {
    // alert('Preencha todos os campos obrigatórios do formulário de cadastro');
    return false;
  }

  // Verifica se os campos estão preenchidos corretamente
  // Verifica se o campo "Nome" tem pelo menos 3 caracteres
  if (nome.length < 3) return false;

  // Verifica se o campo "E-mail" contém "@" e ".com"
  if (!emailCadastro.includes("@") || !emailCadastro.includes(".com"))
    return false;

  // Verifica se as senhas digitadas coincidem
  if (senhaCadastro !== senhaConfirmacao) return false;

  // Verifica se a senha tem pelo menos 6 caracteres
  if (senhaCadastro.length < 6) return false;

  // Se todas as verificações passarem, o formulário é considerado válido
  return true;
}

// Ao clicar no botão cadastrar, verifica se o cadastro está válido ou não
document
  .getElementById("cadastrar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (validarCadastro()) {
      // Se a validação passar, você pode prosseguir com o envio ou outras ações
      alert("Cadastro válido. Enviando formulário...");
      // Aqui você pode adicionar lógica para enviar os dados ao servidor ou realizar outras ações necessárias.
    } else {
      // Se a validação falhar, você pode exibir mensagens de erro ou realizar outras ações necessárias.
      alert(
        "Por favor, preencha todos os campos do formulário de cadastro corretamente."
      );
    }
  });
