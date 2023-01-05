import Auth from "./../../components/Auth";

const loginHTML = Auth({
  title: 'Вход',
  inputs:
  [
    { id: "login", label: "Логин", type: "text", placeholder: "Введите логин", autocomplete: "on"},
    { id: "password", label: "Пароль", type: "password", placeholder: "Введите пароль", autocomplete: "current-password" }
  ],
  buttonId: 'loginBtn',
  buttonValue: 'Авторизоваться',
  text: 'Нет аккаунта?',
  redirectId: 'toRegister'
});

export default loginHTML;
