import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';
import button from '../../components/button';

Handlebars.registerPartial('profileForm', tpl);



export default ({profileInputs, buttonId, buttonValue,}) => {
  return tpl({profileInputs, buttonId, buttonValue,});
}

