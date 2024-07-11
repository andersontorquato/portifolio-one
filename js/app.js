document.addEventListener('DOMContentLoaded', function() {
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const assuntoInput = document.getElementById('assunto');
    const mensagemInput = document.getElementById('mensagem');
    const enviarBtn = document.getElementById('enviarBtn');

    const nomeErro = document.getElementById('nomeErro');
    const emailErro = document.getElementById('emailErro');
    const assuntoErro = document.getElementById('assuntoErro');
    const mensagemErro = document.getElementById('mensagemErro');
    const mensagemEnviada = document.getElementById('mensagemEnviada');

    let nomeValido = false;
    let emailValido = false;
    let assuntoValido = false;
    let mensagemValida = false;

    function validarNome() {
        const nomeValor = nomeInput.value.trim();
        if (nomeValor === '' || nomeValor.length > 50) {
            nomeErro.textContent = nomeValor === '' ? 'Campo obrigatório.' : 'Nome deve ter no máximo 50 caracteres.';
            nomeValido = false;
        } else {
            nomeErro.textContent = '';
            nomeValido = true;
        }
        habilitarBotao();
        nomeErro.style.display = nomeValido ? 'none' : 'block';
    }

    function validarEmail() {
        const emailValor = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValor === '' || !emailRegex.test(emailValor)) {
            emailErro.textContent = emailValor === '' ? 'Campo obrigatório.' : 'Email inválido.';
            emailValido = false;
        } else {
            emailErro.textContent = '';
            emailValido = true;
        }
        habilitarBotao();
        emailErro.style.display = emailValido ? 'none' : 'block';
    }

    function validarAssunto() {
        const assuntoValor = assuntoInput.value.trim();
        if (assuntoValor === '' || assuntoValor.length > 50) {
            assuntoErro.textContent = assuntoValor === '' ? 'Campo obrigatório.' : 'Assunto deve ter no máximo 50 caracteres.';
            assuntoValido = false;
        } else {
            assuntoErro.textContent = '';
            assuntoValido = true;
        }
        habilitarBotao();
        assuntoErro.style.display = assuntoValido ? 'none' : 'block';
    }

    function validarMensagem() {
        const mensagemValor = mensagemInput.value.trim();
        if (mensagemValor === '' || mensagemValor.length > 300) {
            mensagemErro.textContent = mensagemValor === '' ? 'Campo obrigatório.' : 'Mensagem deve ter no máximo 300 caracteres.';
            mensagemValida = false;
        } else {
            mensagemErro.textContent = '';
            mensagemValida = true;
        }
        habilitarBotao();
        mensagemErro.style.display = mensagemValida ? 'none' : 'block';
    }

    function habilitarBotao() {
        enviarBtn.disabled = !(nomeValido && emailValido && assuntoValido && mensagemValida);
    }

    nomeInput.addEventListener('input', validarNome);

    emailInput.addEventListener('input', validarEmail);

    assuntoInput.addEventListener('input', validarAssunto);

    mensagemInput.addEventListener('input', validarMensagem);

    enviarBtn.addEventListener('click', function(event) {
        event.preventDefault(); 

        if (nomeValido && emailValido && assuntoValido && mensagemValida) {
            mensagemEnviada.style.display = 'block';

            nomeInput.value = '';
            emailInput.value = '';
            assuntoInput.value = '';
            mensagemInput.value = '';

            nomeValido = false;
            emailValido = false;
            assuntoValido = false;
            mensagemValida = false;
            habilitarBotao();
        } else {
            mensagemEnviada.style.display = 'none';
        }
    });
});
