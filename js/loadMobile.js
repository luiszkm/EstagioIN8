import { Register } from './register.js';


const register = Register()

export function LoadMobile() {

  const tabContent = document.querySelector('.tab-content')

  const tabHed = document.querySelector('.tab')

  const tabBody = document.querySelector('.tabody')

  let value = 1


  function createButton(number) {
    const buttonNav = document.createElement('button')
    buttonNav.classList.add('tablinks')
    buttonNav.textContent = number
    buttonNav.addEventListener('click', () => {
      console.log(number);
    })


    return buttonNav
  }
  const loadTabHead = (users = register.users) => {
    cleanButton()

    for (let user in users) {

      const button = createButton(Number(user) + 1)
      tabHed.append(button)
    }

  }

  const loadUsersMobile = (users = register.users) => {
    loadTabHead(users)
    buttonContains()
    users.forEach(user => {
      createTab(
        user.name,
        user.email,
        user.date,
        user.phone
      )

    })
  }

  loadUsersMobile()


  function load(value = 0 , users = register.users) {
    console.log(value);
    
    
    register.users.forEach(user => {

      const tab = createTab(
        users[value].name,
        users[value].email,
        users[value].date,
        users[value].phone
      )
      tabContent.append(tab)
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


  function buttonContains() {

    const buttonsValue = tabHed.querySelectorAll('.tablinks').forEach(button =>
      button.addEventListener('click', e => {
        const buttonValue = e.target;
        value = buttonValue.innerHTML

      //  cleanContent()
        load(Number(value)-1)
        active(value)

      }))


  }

  const active = (value) => {

    tabBody.classList.add('active');
    tabBody.querySelectorAll('.tabcontent').forEach(tab => {
      tab.classList.add('active');
    })
    tabHed.querySelectorAll('.tablinks').forEach(button => {

      button.classList.remove('active');

      tabHed.querySelectorAll('.tablinks')[value - 1].classList.add('active')

    })
  }

  return {

    loadUsersMobile


  }
}