

export function Menu() {

  let buttonOpenMenu = document.querySelector('#openMenu')
    .onclick = openMenu

  let buttonCloseMenu = document.querySelector('#closeMenu')
    .onclick = closeMenu

  const menuBar = document.querySelector('.menuBar')
  
  let backToTopButton = document.querySelector('#backToTopButton')
  document.addEventListener('scroll', onscroll)

  function openMenu() {
    document.querySelector('#openMenu').classList.add('hide')
    document.querySelector('#closeMenu').classList.remove('hide')
    menuBar.classList.remove('hide')
  }

  function closeMenu() {
    document.querySelector('#openMenu').classList.remove('hide')
    document.querySelector('#closeMenu').classList.add('hide')
    menuBar.classList.add('hide')

  }

  function onscroll() {

    if (scrollY < 400) {
      backToTopButton.classList.add('hide')
    }
    else {
      backToTopButton.classList.remove('hide')
    }
  }

  return {

  }
}