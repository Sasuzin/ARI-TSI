const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const senha2 = document.getElementById('senha2')
const CPF = document.getElementById('CPF')
const telefone = document.getElementById('telefone')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})
function checkInputs() 

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const senhaValue = senha.value.trim()
    const senha2Value = senha2.value.trim()
    const CPFValue = CPF.value.trim()
    const telefoneValue = telefone.value.trim()

    if(usernameValue === '') {
        // mostrar erro
        // add classe
        errorValidation(username, "Preencha esse campo")
    } else {
        // adicionar a classe de sucesso
       sucessValidation(username)
    }

    if(emailValue === ''){
        errorValidation(email, "preencha esse campo")
    } else {
        sucessValidation(email)
    }

    if(senhaValue === ''){
        errorValidation(password, "preencha esse campo")
    }

    function errorValidation(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small')

        small.innerText = message

        formControl.className = 'form-control error'
    }

    function sucessValidation(input) {
        const formControl = input.parentElement;

        formControl.className = 'form-control sucess'
    }