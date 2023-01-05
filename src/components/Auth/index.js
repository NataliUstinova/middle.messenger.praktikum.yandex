import tpl from './tpl.hbs';
import './style.scss';
import button from '../../components/button';


const Auth =  ({title, inputs, buttonId, buttonValue, text}) => {
  return tpl({title, inputs, buttonId, buttonValue, text});
}

export default Auth;
