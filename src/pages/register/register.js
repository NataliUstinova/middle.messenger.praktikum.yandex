import Auth from "./../../components/Auth";

const registerHTML = Auth({
  title: 'Регистрация',
  inputs:
    [
      { id: "email", label: "Почта", type: "email", placeholder: "Введите email", autocomplete: "on"},
      { id: "login", label: "Логин", type: "text", placeholder: "Введите логин", autocomplete: "on"},
      { id: "name", label: "Имя", type: "text", placeholder: "Введите имя", autocomplete: "given-name"},
      { id: "surname", label: "Фамилия", type: "text", placeholder: "Введите фамилию", autocomplete: "family-name"},
      { id: "phone", label: "Телефон", type: "tel", placeholder: "Введите телефон", autocomplete: "tel"},
      { id: "password1", label: "Пароль", type: "password", placeholder: "Введите пароль", autocomplete: "new-password" },
      { id: "password2", label: "Пароль (еще раз)", type: "password", placeholder: "Введите пароль еще раз", autocomplete: "new-password" }
    ],
  buttonId: 'registerBtn',
  buttonValue: 'Зарегистрироваться',
  text: 'Войти',
  redirectId: 'toLogin'
});

export default registerHTML;
