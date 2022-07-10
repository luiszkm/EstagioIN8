import { Register } from "./register.js";
import { Load } from "./load.js";
import { LoadMobile } from "./loadMobile.js";
import { Menu } from "./menu.js";



const load = Load()
const register = Register()
const menu = Menu()


// Precisa fazer a captura do width assim que carrega a pagina

window.onresize =  () => {
  let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (width >= 768) {
    
    let tab = document.querySelector('.tab-content')
      .classList.add('hide')

    let table = document.querySelector('.table')
      .classList.remove('hide')
    
    
  }
  if (width < 768) {

    let tab = document.querySelector('.tab-content')
      .classList.remove('hide')

    let table = document.querySelector('.table')
      .classList.add('hide')

  }

};



