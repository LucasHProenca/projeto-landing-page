const enviar = () => {

    let nome = document.getElementById("nome")
    let email = document.getElementById("email")
    let sugestao = document.getElementById("areaDeTexto")

    if (nome.value == "") {
        alert('Não identificamos o seu nome, pode verificar?')
    } else if (email.value == "") {
        alert('Não identificamos seu e-mail, pode verificar?')
    } else if (sugestao.value == "") {
        alert('Não identificamos sua sugestão, pode verificar?')
    } else {
        alert('Olá Sr(a) ' + nome.value.toUpperCase() + '.\nObrigado por entrar em contato conosco, as suas ideias foram encaminhadas com sucesso para a nossa equipe de Devs.')
        nome.value = ""
        email.value = ""
        sugestao.value = ""
    }
}

const pedirCartao = () => {

    let nome = document.getElementById("nome-pessoa");
    let email = document.getElementById("email-pessoa")
    let cpf = document.getElementById("cpf")

    if (nome.value == "") {
        alert('Não identificamos o seu nome, pode verificar?')
    } else if (email.value == "") {
        alert('Não identificamos seu e-mail, pode verificar?')
    } else if (cpf.value == "") {
        alert('Não identificamos seu cpf, pode verificar?')
    } else {
        alert('Olá Sr(a) ' + nome.value.toUpperCase() + '.\nVamos verificar suas informações e entraremos em contato pelo email ' + email.value.toLowerCase() + ' em breve.')
        nome.value = ""
        email.value = ""
        cpf.value = ""
    }

}