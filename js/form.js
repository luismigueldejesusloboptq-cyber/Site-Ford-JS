
class contato {
    constructor(nome, sobrenome, email, cpf, telefone, formaDeContato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.formaDeContato = formaDeContato;
    }
}

function Post(form) {

    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value
    );

    Enviar(data.nome);

    form.reset();

    return false;
}


function Enviar(nomeDoUsuario) {

    if (nomeDoUsuario && nomeDoUsuario.trim() !== "") {
        alert('Obrigado sr(a) ' + nomeDoUsuario + ' os seus dados foram encaminhados com sucesso');
    } else {
        alert('Por favor, preencha o campo nome.');
    }
}