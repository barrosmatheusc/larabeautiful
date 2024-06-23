
function checkbox() {
    const senhaInput = document.getElementById('password');
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
    } else {
        senhaInput.type = 'password';
    }
}



function login() {
    var login = document.getElementById('Login').value;
    var senha = document.getElementById('senha').value;

    if(login == "82998380275" && senha == "matheusb1234") {
        alert('Login efetuado com sucesso!');
    }
    else {
        alert('Login ou Senha errado, insira novamente e efetue o login')
    }
}

