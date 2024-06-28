
function checkbox() {
    const senhaInput = document.getElementById('password');
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
    } else {
        senhaInput.type = 'password';
    }
}



function login() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('password').value;

    if(login == "82998380275" && senha == "matheusb1234") {
        alert('Login efetuado com sucesso!');
        location.href = "../home/index.html";
    }
    else {
        alert('Login ou Senha errado, insira novamente e efetue o login')
    }
}

function formatartelefone(input) {
    let telefone = input.value.replace(/\D/g, ''); // Usar input.value em vez de numero
    
    // Corrigir a expressão regular para formatar o telefone corretamente
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    
    input.value = telefone;
}
