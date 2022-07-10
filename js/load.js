import { Register } from "./register.js"


const register = Register()

export function Load() {
  
  const tbody = document.querySelector('.table tbody')
  const tabContent = document.querySelector('.tab-content')

  const tab = document.querySelector('.tab')

  let number = 0

   function loadUsers() {
    removeTr()
    register.users.forEach(user => {
        number++;
        const row = createRow(number, user.name, user.email, user.date, user.phone)
        tbody.append(row)

      })
  }

 loadUsers()

  function createRow(number, name, email, date, phone) {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td>${number}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${date}</td>
    <td>3${phone}</td>`
    return tr

  }

  function removeTr(){
    tbody.querySelectorAll('tr')
    .forEach(tr => {
      tr.remove()
    })
  }


  return {
    loadUsers
  }
}