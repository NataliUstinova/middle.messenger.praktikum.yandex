import { IPage, IError, IChats, ImockUser, IChatRootObject, IInput } from './constants.d';

const elements: {
  root: HTMLElement | null,
  htmlTpl: HTMLTemplateElement,
} = {
  root: document.getElementById('root'),
  htmlTpl: document.createElement('template'),
}

const pages: IPage[] = [
  {
    "id": "error404",
    "title": "Страница ошибки 404",
  },
  {
    "id": "error500",
    "title": "Страница ошибки 500",
  },
  {
    "id": "toLogin",
    "title": "Страница авторизации",
  },
  {
    "id": "toRegister",
    "title": "Страница регистрации",
  },
  {
    "id": "toProfile",
    "title": "Страница настроек",
  },
  {
    "id": "toChat",
    "title": "Страница чата",
  }
]

const errors: IError[] = [
  {
    title: '404',
    message: 'Страница не найдена',
  },
  {
    title: '500',
    message: 'Ошибка сервера',
  }
]

const chats: IChats[] = [
  {
    title: 'Андрей',
    text: 'Изображение',
    time: '14:00',
    count: 2,
  },
  {
    title: 'Киноклуб',
    text: 'стикер',
    time: '13:23',
  },
  {
    title: 'Илья',
    text: 'Друзья, у меня для вас особенный выпуск новостей! Они',
    time: '13:20',
    count: 4,
  },
  {
    title: 'Вадим',
    text: 'Круто, что ты придумал такое название',
    time: '10:12',
  },
  {
    title: 'тет-а-теты',
    text: 'И Human Interface Guidelines и Material Design рекомендуют...',
    time: 'Пт',
  },
  {
    title: '1, 2, 3',
    text: 'Миллионы россиян ежедневно проводят десятки часов своего времени в социальных сетях',
    time: 'Ср',
  },
  {
    title: 'Design Destroyer',
    text: 'В 2008 году художник Jon Rafman  начал собирать в интернете фотографии...',
    time: 'Пн',
  },
  {
    title: 'Day X',
    text: 'Так увлёкся работой по курсу, что совсем забыл его анонсировать',
    time: 'Вс',
  },
  {
    title: 'Стас Рогозин',
    text: 'Можно или сегодня или завтра вечером. Во вторник не получится',
    time: 'Сб',
  },
  {
    title: 'Петр Иванович',
    text: 'Я на работе. Может в пятницу вечером?',
    time: 'Сб',
  },
  {
    title: 'Tilda для проекта Андрея Петровича',
    text: 'Да, я тоже думал об этом',
    time: 'Сб',
  },
  {
    title: '1, 2, 3',
    text: 'Миллионы россиян ежедневно проводят десятки часов своего времени в социальных сетях',
    time: 'Ср',
  },
  {
    title: 'Design Destroyer',
    text: 'В 2008 году художник Jon Rafman  начал собирать в интернете фотографии...',
    time: 'Пн',
  },
  {
    title: 'Day X',
    text: 'Так увлёкся работой по курсу, что совсем забыл его анонсировать',
    time: 'Вс',
  },
  {
    title: 'Стас Рогозин',
    text: 'Можно или сегодня или завтра вечером. Во вторник не получится',
    time: 'Сб',
  }
]

const user: ImockUser = {
  first_name: 'Наталья',
  second_name: 'Устинова',
  login: 'na7au',
  display_name: 'Наташа',
  avatar: 'https://movies.nata.u.nomoredomains.club/static/media/about-me-pic.d6c3338c423d9e475c31.png',
  email: 'na7a.u@yandex.ru',
  password: '123456',
  phone: '+7 999 999 99 99',
}

const chat: IChatRootObject = {
    "id": 123,
    "title": "my-chat",
    "avatar": "/123/avatar1.jpg",
    "unread_count": 15,
    "last_message": {
    "user": {
      "first_name": "Petya",
        "second_name": "Pupkin",
        "avatar": "/path/to/avatar.jpg",
        "email": "my@email.com",
        "login": "userLogin",
        "phone": "8(911)-222-33-22"
    },
    "time": "2020-01-02T14:22:22.000Z",
      "content": "this is message content"
  }
} 

const profileInputs: IInput[] = [
  { id: "email", label: "Почта", type: "email", placeholder: "Введите email", initialValue: user.email},
  { id: "login", label: "Логин", type: "text", placeholder: "Введите логин", initialValue: user.login},
  { id: "first_name", label: "Имя", type: "text", placeholder: "Введите имя", initialValue: user.first_name},
  { id: "second_name", label: "Фамилия", type: "text", placeholder: "Введите фамилию", initialValue: user.second_name},
  { id: "display_name", label: "Имя в чате", type: "text", placeholder: "Введите имя в чате", initialValue: user.display_name},
  { id: "phone", label: "Телефон", type: "tel", placeholder: "Введите телефон", initialValue: user.phone},
  { id: "password", label: "Пароль", type: "password", placeholder: "Введите пароль", initialValue: user.password},
]

const passwordInputs: IInput[] = [
  { id: "oldPassword", label: "Старый пароль", type: "password", placeholder: "Введите старый пароль", autoComplete: "current-password", initialValue: user.password},
  { id: "newPassword", label: "Новый пароль", type: "password", placeholder: "Введите новый пароль", autoComplete: "new-password"},
  { id: "newPasswordAgain", label: "Повторите новый пароль", type: "password", placeholder: "Введите новый пароль еще раз", autoComplete: "new-password"},
]

export { pages, errors, chats, user, profileInputs, passwordInputs, elements, chat };
