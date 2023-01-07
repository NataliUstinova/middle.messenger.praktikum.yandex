import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('Messages', tpl);

export default () => {
  return tpl();
}

