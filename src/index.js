import tpl from './index.hbs';
import './index.scss';
import { pages } from './utils/constants.js';
import { errorPage } from "./pages/error/error.js";
import loginHTML from "./pages/login/login";
import registerHTML from "./pages/register/register";

const root = document.getElementById('root');

function mainPage() {
  const htmlTpl = document.createElement('template');
  htmlTpl.innerHTML = tpl({pages});
  root.replaceChildren(htmlTpl.content);
  addListeners();
}

function loginPage() {
  const htmlTpl = document.createElement('template');
  htmlTpl.innerHTML = loginHTML;
  root.replaceChildren(htmlTpl.content);
  document.getElementById('toRegister').addEventListener('click', () => {
    registerPage();
  })
}

function registerPage() {
  const htmlTpl = document.createElement('template');
  htmlTpl.innerHTML = registerHTML;
  root.replaceChildren(htmlTpl.content);
  document.getElementById('toLogin').addEventListener('click', () => {
    loginPage();
  })
}

mainPage();

function backToMain() {
  document.getElementById('back-to-main').addEventListener('click', () => {
    mainPage();
  })
}

function addListeners() {
  document.getElementById('404').addEventListener('click', () => {
    const htmlTpl = document.createElement('template');
    htmlTpl.innerHTML = errorPage(0)
    root.replaceChildren(htmlTpl.content);
    backToMain()
  })

  document.getElementById('500').addEventListener('click', () => {
    const htmlTpl = document.createElement('template');
    htmlTpl.innerHTML = errorPage(1);
    root.replaceChildren(htmlTpl.content);
    backToMain()
  })

  document.getElementById('login').addEventListener('click', () => {
    loginPage();
  })

  document.getElementById('register').addEventListener('click', () => {
    registerPage();
  })
}





