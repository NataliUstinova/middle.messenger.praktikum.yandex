import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';
import button from '../../components/Button';

Handlebars.registerPartial('profileForm', tpl);



export default ({inputs, buttonId, buttonValue,}) => {
  return tpl({inputs, buttonId, buttonValue,});
}

