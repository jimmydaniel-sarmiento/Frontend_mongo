const formLogin = document.querySelector('#form-login')
formLogin.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const users = JSON.parse(localStorage.getItem('users')) || []
    const validaUser = users.find(user => user.email === email && user.password === password)

    if(!validaUser){
       return alert('Usuario o Contraseña Incorrectos')
    }

    alert(`Bienvenido ${validaUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validaUser))
    window.location.href = 'index.html'
})