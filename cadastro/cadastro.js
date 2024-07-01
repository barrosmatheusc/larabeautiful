
function checkbox() {
    const senhaInput = document.getElementById('password');
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
    } else {
        senhaInput.type = 'password';
    }
}


function formatartelefone(input) {
    let telefone = input.value.replace(/\D/g, ''); // Usar input.value em vez de numero
    
    // Corrigir a expressão regular para formatar o telefone corretamente
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    
    input.value = telefone;
}
