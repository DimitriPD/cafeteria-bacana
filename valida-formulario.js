const senha_login = document.querySelector('#senha-login') 
const senha_cadastro = document.querySelector('#senha-cadastro') 

const btn_senha_login = document.querySelector('#mostra-senha-login')
const btn_senha_cadastro= document.querySelector('#mostra-senha-cadastro')

function checkEmail(email) {
    // const mails = ["gmail.com", "hotmail.com", "yahoo.com"]
    // const sufixo = email.slice(email.indexOf("@") + 1)

    // if (!mails.includes(sufixo) || !email.includes("@")) {
    //     return false
    // }

    // return true
    const rgx = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i
    return rgx.test(email)
} 

function enviaLogin() {
    const senha = document.querySelector("#senha-login").value
    const usuario = document.querySelector("#usuario-login").value

    if (senha.trim() === '' || usuario.trim() === '') {
        alert("Campo do Login não pode ser vazio")
        return 
    }

    alert("Login Efetuado")
}

function enviaCadastro() {
    const senha = document.querySelector("#senha-cadastro").value
    const usuario = document.querySelector("#usuario-cadastro").value
    const email = document.querySelector("#email-cadastro").value

    if (senha.trim() === '' || usuario.trim() === '' || email.trim() === '') {
        alert("Campo do Cadastro não pode ser vazio")
        return 
    }

    if (!checkEmail(email)) {
        alert("E-mail inválido")
        return
    }        

    alert("Cadastro Efetuado")
}

function mostrarSenha(botao, input) {
    if ( input.type === 'password' ) {
        input.setAttribute("type", 'text') 
        botao.innerHTML = 'Esconder Senha'
    } else {
        input.setAttribute("type", 'password')
        botao.innerHTML = 'Mostrar Senha'
    }
}

btn_senha_login.addEventListener('click', () => mostrarSenha(btn_senha_login, senha_login)) 
btn_senha_login.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.target.click()
    }
})

btn_senha_cadastro.addEventListener('click', () => mostrarSenha(btn_senha_cadastro, senha_cadastro)) 
btn_senha_cadastro.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.target.click()
    }
})