import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('messageInput', tpl);

export default () => {
  return tpl();
}

