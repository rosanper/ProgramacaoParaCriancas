// ===== Validação do formulário ao digitar ===== //

// ---------- Variáveis ---------- //
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

// ---------- Funções ---------- //
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

// Valida se segue o formato padrão de email, sem espaços em branco, com arroba e ponto
function validarEmailFormato(email) {
  return /\S+@\S+\.\S+/.test(email);
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
  "O email deve conter '@' e ' . '",
  validarEmailFormato
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

// ========== Funcionalidade dos botões ========== //

// --- Validação do formulário de cadastro ao clicar no botão --- //

function validarLogin() {
  // Limpa mensagens de erro anteriores
  limparMensagensErro();

  // Obtém os valores dos campos do formulário de login
  let usuario = document.getElementById("iemail").value;
  let senha = document.getElementById("isenha").value;

  // Simulação de usuário cadastrado
  const usuarioValido = "aluno@email.com";
  const senhaValida = "senhaAluno";

  // Verifica se o usuário e a senha estão cadastrados
  if (usuario === usuarioValido && senha === senhaValida) {
    return true;
  } else {
    // Se o email ou a senha sejam diferentes do cadastro, mostra o helper
    if (usuario !== usuarioValido) {
      exibirMensagemErro("iemail-helper", "iemail", "E-mail não encontrado");
      return false;
    }
    if (senha !== senhaValida) {
      exibirMensagemErro("isenha-helper", "isenha", "Senha incorreta");
      return false;
    }
  }
}

// Limpa mensagens de erro
function limparMensagensErro() {
  let mensagensErro = document.querySelectorAll(".visible");
  mensagensErro.forEach((mensagem) => mensagem.classList.remove("visible"));
}

// Exibe mensagens de erro
function exibirMensagemErro(helperId, inputId, mensagem) {
  let helper = document.getElementById(helperId);
  let input = document.getElementById(inputId);

  if (helper) {
    helper.innerText = mensagem;
    input.classList.add("error");
    helper.classList.add("visible");
  }
}

// Verifica se o login está válido
document.getElementById("logar").addEventListener("click", function (event) {
  event.preventDefault();
  if (validarLogin()) {
    this.form.submit();
    window.location.href = "./perfil.html";
  }
});

// --- Validação do formulário de cadastro ao clicar no botão --- //

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
  if (nome.length < 3) return false;

  if (!validarEmailFormato(emailCadastro)) return false;

  if (senhaCadastro !== senhaConfirmacao) return false;

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
      this.form.submit();
      alert("Cadastro válido. Enviando formulário...");
      window.location.href = "./perfil.html";
    } else {
      alert(
        "Por favor, preencha todos os campos do formulário de cadastro corretamente."
      );
    }
  });

// --- Reseta CSS e mensagens de ajuda ao clicar no botão limpar --- //

document.getElementById("limpar").addEventListener("click", function () {
  // Remove as classes de estilo dos campos
  usernameInput.classList.remove("error", "correct");
  emailInput.classList.remove("error", "correct");
  passwordInput.classList.remove("error", "correct");
  senhaConfirmacaoInput.classList.remove("error", "correct");

  // Remove as mensagens de ajuda visíveis
  usernameHelper.classList.remove("visible");
  emailHelper.classList.remove("visible");
  passwordHelper.classList.remove("visible");
  senhaConfirmacaoHelper.classList.remove("visible");
});
