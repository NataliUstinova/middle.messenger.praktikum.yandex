import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('separator', tpl);

export default () => {
  return tpl();
}

