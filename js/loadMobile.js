import { Register } from './register.js';


const register = Register()

export function LoadMobile() {


  const tabContent = document.querySelector('.tab-content')

  const tabHed = document.querySelector('.tab')

  const tabBody = document.querySelector('.tabody')

  let number = 0

  function createButton(number) {
    const buttonNav = document.createElement('button')
    buttonNav.classList.add('tablinks')
    buttonNav.textContent = number
    buttonNav.onclick = active
    return buttonNav
  }

  function loadTabHead() {
    for (let i = 0; i < register.users.length; i++) {
      const button = createButton(i + 1)
      tabHed.append(button)
    }
  }
 
  function loadUsersTab(value) {
    cleanButton()
    loadTabHead()

    for (let i = 0; i < register.users.length; i++) {
      let index = value - 1
      const tab = createTab(
        register.users[index].name,
        register.users[index].email,
        register.users[index].date,
        register.users[index].phone)

      tabContent.append(tab)
    }
  }
  load()

  function load() {
    register.users.forEach(user => {
      let index = number
      const tab = createTab(
        register.users[index].name,
        register.users[index].email,
        register.users[index].date,
        register.users[index].phone
      )
      tabContent.append(tab)

    })
    loadTabHead()

  }

  function openCard() {

    cleanContent()
    document.addEventListener('click', event => {
      const buttonValue = event.target;
      loadUsersTab(buttonValue.innerText)
    })
  }

  function createTab(name, email, date, phone) {

    tabBody.innerHTML = `
    <div class="tabcontent">
      <h3>Nome</h3>
      <p>${name}</p>
    </div>
    <div class="tabcontent">
      <h3>E-mail</h3>
      <p>${email}</p>
    </div>
    <div  class="tabcontent">
      <h3>Nasc</h3>
      <p>${date}</p>
    </div>

    <div class="tabcontent">
      <h3>TEL</h3>
      <p>${phone}</p>
    </div>
  `
    return tabBody
  }

  function cleanContent() {
    tabBody.querySelectorAll('div')
      .forEach(div => {
        div.remove()
      })
  }
  function cleanButton() {
    tabHed.querySelectorAll('button')
      .forEach(button => {
        button.remove()
      })
  }

  function active() {
    
    tabHed.querySelectorAll('.tablinks').forEach(button => {
     
      button.addEventListener('click', e => {
        cleanContent()
        button.classList.remove('active');
        
        const buttonValue = e.target;
        
        loadUsersTab(buttonValue.innerText)
        
      })
      this.classList.add('active');
    })
    
    tabBody.classList.add('active');
    
    tabBody.querySelectorAll('.tabcontent').forEach(tab => {
      tab.classList.add('active');
    })
   

    
    
  }

  return {
    loadUsersTab,
    load

  }
}