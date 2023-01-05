import tpl from './index.hbs';
import './index.scss';
import { pages } from './constants.js';
import { errorPage } from "./pages/Error/error.js";
import loginHTML from "./pages/Login/login";

const root = document.getElementById('root');

function mainPage() {
  const htmlTpl = document.createElement('template');
  htmlTpl.innerHTML = tpl({pages});
  root.replaceChildren(htmlTpl.content);
  addListeners();
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
    const htmlTpl = document.createElement('template');
    htmlTpl.innerHTML = loginHTML;
    console.log(loginHTML)
    root.replaceChildren(htmlTpl.content);
    backToMain()
  })
}





