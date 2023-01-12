import tpl from './index.hbs';
import './index.scss';
import { errorPage } from "./pages/error/error.js";
import { pages, chats, user, profileInputs, passwordInputs, elements } from './utils/constants.ts';
import loginHTML from "./pages/login/login";
import registerHTML from "./pages/register/register";
import chatHTML from "./pages/chat/chat";
import profileHTML from "./pages/profile/profile";


const { htmlTpl, root } = elements;


mainPage();

function mainPage() {
  htmlTpl.innerHTML = tpl({pages});
  root.replaceChildren(htmlTpl.content);
  addListeners();
}

function backToMain() {
  const toMain = document.querySelectorAll('.toMain');
  toMain.forEach((link) => {
    link.addEventListener('click', () => {
      mainPage();
    })
  })
}

function loginPage() {
  htmlTpl.innerHTML = loginHTML;
  root.replaceChildren(htmlTpl.content);
  const toRegister = document.getElementById('toRegister');
  toRegister.addEventListener('click', () => {
    registerPage();
  })
  backToMain()
}

function registerPage() {
  htmlTpl.innerHTML = registerHTML;
  root.replaceChildren(htmlTpl.content);
  const toLogin = document.getElementById('toLogin');
  toLogin.addEventListener('click', () => {
    loginPage();
  })
  backToMain()
}

function chatPage() {
  htmlTpl.innerHTML = chatHTML({chats});
  root.replaceChildren(htmlTpl.content);
  const toProfile = document.getElementById('toProfile');
  toProfile.addEventListener('click', () => {
    profilePage();
  });
}

function profilePage() {
  const htmlTpl = document.createElement('template');
  htmlTpl.innerHTML = profileHTML({user, inputs: profileInputs});
  root.replaceChildren(htmlTpl.content);
  document.getElementById('save-profile').style.display = 'none';
  document.getElementById('editProfile').addEventListener('click', (e) => {
    e.preventDefault();
    editProfile();
  })
  document.getElementById('editPassword').addEventListener('click', (e) => {
    e.preventDefault();
    editPassword();
  })
  backToMain()
}

function handleChangeProfile(e) {
  const profileElements = {
    saveProfileBtn: document.getElementById('save-profile'),
    profileForm: '.profile__edit-form',
  }
  e.preventDefault();
  e.target.closest(profileElements.profileForm).checkValidity() ?
    profileElements.saveProfileBtn.removeAttribute("disabled") 
    : profileElements.saveProfileBtn.setAttribute("disabled", "true");
}

function editProfile() {
  const profileElements = {
    profileInputs: document.querySelectorAll('.profile__input'),
    saveProfileBtn: document.getElementById('save-profile'),
    profileBtnsSeparators: document.querySelector('.profile__btn-container').querySelectorAll('.separator'),
    profileTextBtns: document.querySelectorAll('.profile__text-button'),
    profileTitle: document.querySelector('.profile__title'),
  }
  profileElements.profileInputs.forEach((input) => {
    input.removeAttribute("disabled");
    input.onchange = (e) => handleChangeProfile(e)
  });
  document.getElementById('save-profile').style.display = 'block';
  profileElements.profileBtnsSeparators.forEach((item) => {
    item.style.display = 'none';
  });
  document.querySelectorAll('.profile__text-button').forEach((button) => {
    button.style.display = 'none';
  });
  document.querySelector('.profile__title').style.display = 'none';
}

function editPassword() {
  htmlTpl.innerHTML = profileHTML({user, inputs: passwordInputs});
  root.replaceChildren(htmlTpl.content);
  editProfile()
  backToMain()
}

function addListeners() {
  const links = {
    toRegister: document.getElementById('toRegister'),
    toLogin: document.getElementById('toLogin'),
    toProfile: document.getElementById('toProfile'),
    toMain: document.getElementById('toMain'),
    toChat: document.getElementById('toChat'),
    toError404: document.getElementById('error404'),
    toError500: document.getElementById('error500'),
  }

  links.toError404.addEventListener('click', () => {
    htmlTpl.innerHTML = errorPage(0)
    root.replaceChildren(htmlTpl.content);
    backToMain()
  })

  links.toError500.addEventListener('click', () => {
    htmlTpl.innerHTML = errorPage(1);
    root.replaceChildren(htmlTpl.content);
    backToMain()
  })

  links.toLogin.addEventListener('click', () => {
    loginPage();
    
  })

  links.toRegister.addEventListener('click', () => {
    registerPage();
  })

  links.toChat.addEventListener('click', () => {
    chatPage();
  })
  links.toProfile.addEventListener('click', () => {
    profilePage();
  })
}





