let nome = window.document.getElementById('nome')

let email = document.querySelector('#email')

let assunto = document.querySelector('#assunto')

let nomeOK = false
let emailOK = false
let assuntoOK = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3 ) {
        txtNome.innerHTML = 'Nome é Invalido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome é Válido'
        txtNome.style.color = 'green'
        nomeOK= true
    }

}
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.')  == -1){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOK= true
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
if(assunto.value.length >= 100) {
    txtAssunto.innerHTML = 'Texto é muito grande, digite no maximo 100 caracteres'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'

}else{
    txtAssunto.style.display = 'none'
    assuntoOK = true
  }
}
function enviar(){
    if(nomeOK== true && emailOK==true && assuntoOK== true)
    alert('formulario foi enviado com suceso')
    else{
        alert('preencha o contacto correctamente')
    }
}
function mapaZoom(){
    mapa.style.width= '800px'
    mapa.style.height= '600px'
    mapa.style.transition= '1s'
}

function mapaNormal(){
    mapa.style.width= '600px'
    mapa.style.height = '450px'
    
}