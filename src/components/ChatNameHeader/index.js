import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('chatNameHeader', tpl);

export default () => {
  return tpl();
}

