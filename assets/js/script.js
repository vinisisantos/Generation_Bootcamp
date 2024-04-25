let nome = document.getElementsByClassName("campo_nome")[0]; 
let email = document.querySelector("input[type='text'].campo_email"); 
let assunto = document.querySelector("#assunto");

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome valido"
        txtNome.style.color = "green"
    }
    
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexof("@") = -1 || email.value.indexof(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 2) {
        txtAssunto.innerHTML =  "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
    }
}

