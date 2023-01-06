import tpl from './index.hbs';
import './index.scss';
import { pages, chats, user, profileInputs } from './utils/constants.js';
import { errorPage } from "./pages/error/error.js";
import loginHTML from "./pages/login/login";
import registerHTML from "./pages/register/register";
import chatHTML from "./pages/chat/chat";
import profileHTML from "./pages/profile/profile"; 

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
  backToMain()
}

function registerPage() {
  const htmlTpl = document.createElement('template');
  htmlTpl.innerHTML = registerHTML;
  root.replaceChildren(htmlTpl.content);
  document.getElementById('toLogin').addEventListener('click', () => {
    loginPage();
  })
  backToMain()
}

function chatPage() {
  const htmlTpl = document.createElement('template');
  htmlTpl.innerHTML = chatHTML({chats});
  root.replaceChildren(htmlTpl.content);
  document.getElementById('toProfile').addEventListener('click', () => {
    profilePage();
  });
  backToMain()
}

function profilePage() {
  const htmlTpl = document.createElement('template');
  htmlTpl.innerHTML = profileHTML({user, profileInputs});
  root.replaceChildren(htmlTpl.content);
  document.getElementById('save-profile').style.display = 'none';
  document.getElementById('editProfile').addEventListener('click', (e) => {
    e.preventDefault();
    editProfile();
  })
  backToMain()
}

function handleChangeProfile(e) {
  e.preventDefault();
  e.target.closest('.profile__edit-form').checkValidity() ? document.getElementById('save-profile').removeAttribute("disabled") : document.getElementById('save-profile').setAttribute("disabled", "true");
}

function editProfile() {
  const profileBtns = document.querySelector('.profile__btn-container');
  document.querySelectorAll('.profile__input').forEach((input) => {
    input.removeAttribute("disabled");
    input.onchange = (e) => handleChangeProfile(e)
  });
  document.getElementById('save-profile').style.display = 'block';
  profileBtns.querySelectorAll('.separator').forEach((item) => {
    item.style.display = 'none';
  });
  document.querySelectorAll('.profile__text-button').forEach((button) => {
    button.style.display = 'none';
  });
  document.querySelector('.profile__title').style.display = 'none';
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
  
  document.getElementById('chat').addEventListener('click', () => {
    chatPage();
  })
  document.getElementById('settings').addEventListener('click', () => {
    profilePage();
  })
}





