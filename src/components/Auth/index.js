import tpl from './tpl.hbs';
import './style.scss';
import button from '../../components/Button';


const Auth =  ({title, inputs, buttonId, buttonValue, text, redirectId}) => {
  return tpl({title, inputs, buttonId, buttonValue, text, redirectId});
}

export default Auth;
