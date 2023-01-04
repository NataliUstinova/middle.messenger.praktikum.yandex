import tpl from './index.hbs';
import './index.scss';
import errors from './pages/ErrorPage/error.js';
import errorPageTpl from './pages/ErrorPage/error.hbs';

const pages = [
  { 
    "title": "404",
  },
  {
    "title": "500",
  },
  {
    "title": "login",
  },
]

const htmlTpl = document.createElement('template');
  htmlTpl.innerHTML = tpl({pages});
  document.getElementById('root').appendChild(htmlTpl.content);


document.getElementById('404').addEventListener('click', (e) => {
  e.preventDefault();
  const htmlTpl = document.createElement('template');
  htmlTpl.innerHTML = errorPageTpl(errors[0]);
  document.getElementById('root').replaceChild(htmlTpl.content, document.getElementById('root').firstChild);
})

document.getElementById('500').addEventListener('click', (e) => {
  e.preventDefault();
  const htmlTpl = document.createElement('template');
  htmlTpl.innerHTML = errorPageTpl(errors[1]);
  document.getElementById('root').replaceChild(htmlTpl.content, document.getElementById('root').firstChild);
})
