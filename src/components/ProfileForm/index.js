import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('profileForm', tpl);



export default ({profileInputs}) => {
  return tpl({profileInputs});
}

