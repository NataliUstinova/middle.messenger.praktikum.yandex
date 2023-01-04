import tpl from './index.hbs';
import './index.scss';
import { pages } from './constants.js';
import { errorPage } from "./pages/Error/error.js";

const root = document.getElementById('root');

function mainPage() {
  const htmlTpl = document.createElement('template');
  htmlTpl.innerHTML = tpl({pages});
  root.replaceChildren(htmlTpl.content);
  addListeners();
}

mainPage();

function backToChat() {
  document.getElementById('back-to-chat').addEventListener('click', () => {
    mainPage();
  })
}

function addListeners() {
  document.getElementById('404').addEventListener('click', () => {
    const htmlTpl = document.createElement('template');
    htmlTpl.innerHTML = errorPage(0)
    root.replaceChildren(htmlTpl.content);
    backToChat()
  })

  document.getElementById('500').addEventListener('click', () => {
    const htmlTpl = document.createElement('template');
    htmlTpl.innerHTML = errorPage(1);
    root.replaceChildren(htmlTpl.content);
    backToChat()
  })
}




