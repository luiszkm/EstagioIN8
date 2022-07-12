import { Load } from "./load.js"
import { LoadMobile } from "./loadMobile.js"


const load = Load()
const loadMobile = LoadMobile()
export function Register() {

  const loadUser = JSON.parse(localStorage.getItem('@register-list'))
  const users = loadUser || []

  let name = document.querySelector('#name')
  let email = document.querySelector('#email')
  let date = document.querySelector('#birth')
  let phone = document.querySelector('#phone')

  const register = document.querySelector('#button-register')
    .onclick = addUser

  function addUser(event) {
    event.preventDefault()

    const userObject = {
      name: name.value,
      email: email.value,
      date: date.value,
      phone: phone.value,
    }
    users.push(userObject)
    localStorage.setItem('@register-list', JSON.stringify(users))
    clean()
    alert("Usuário cadastrado com sucesso")

    load.loadUsers(users)

    loadMobile.loadUsersMobile(users)
    loadMobile.showUser(0 ,users)
    
    name.focus()
  }

  function clean() {
    name.value = ""
    email.value = ""
    date.value = ""
    phone.value = ""
  }

  return{
    users
  }
}