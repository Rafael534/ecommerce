function registro(){
    const inputnome = document.getElementById("nome")
    const inputemail = document.getElementById("email")
    const nome = inputnome.value
    const email = inputemail.value

    localStorage.setItem('nome', nome)
    localStorage.setItem('email', email)

    alert("Cadastro realizado com sucesso!")
    
}