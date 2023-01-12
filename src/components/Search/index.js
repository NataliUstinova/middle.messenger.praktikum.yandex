import Handlebars from 'handlebars';
import tpl from './tpl.hbs';

Handlebars.registerPartial('search', tpl);

export default () => {
  return tpl();
}

