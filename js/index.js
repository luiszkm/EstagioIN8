import { Register } from "./register.js";
import { Load } from "./load.js";
import { LoadMobile } from "./loadMobile.js";
import { Menu } from "./menu.js";


const load = Load()
const register = Register()
const menu = Menu()

let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

teste(width)

function teste(width) {

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

}

window.onresize = () => {
  width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  teste(width)
}


